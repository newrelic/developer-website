import { navigate } from 'gatsby';
import { assign, Machine } from 'xstate';
import { asEffect, useMachine } from '@xstate/react';
import useScript from './useScript';

const machine = Machine({
  id: 'marketo',
  initial: 'loading',
  context: {
    form: null,
    error: null,
  },
  states: {
    loading: {
      initial: 'script',
      states: {
        script: {
          on: { LOADED: 'form' },
        },
        form: { entry: ['loadForm'], type: 'final' },
      },
      on: {
        READY: {
          target: 'ready',
          actions: assign({ form: (_context, event) => event.form }),
        },
        LOAD_ERROR: 'error',
        BLOCKED: 'blocked',
      },
    },
    ready: {
      type: 'final',
      entry: ['defineFormActions'],
    },
    blocked: {
      type: 'final',
      entry: assign({
        error:
          'Unable to load the script. Perhaps this was due to an ad blocker.',
      }),
    },
    error: {
      type: 'final',
      entry: assign({ error: 'Unable to load the script.' }),
    },
  },
});

const useMarketoForm = ({ munchkinId, id, publishableKey, redirectLink }) => {
  const [state, send] = useMachine(machine, {
    actions: {
      loadForm: asEffect(() => {
        window.MktoForms2.loadForm(
          '//app-abj.marketo.com',
          munchkinId,
          id,
          (form) => send({ type: 'READY', form })
        );
      }),
      defineFormActions: asEffect(({ form }) => {
        form.onSuccess(() => {
          navigate(redirectLink);

          // prevent the default behavior of redirecting via marketo to another
          // page. We want to control the navigation ourselves.
          // https://developers.marketo.com/javascript-api/forms/api-reference/
          return false;
        });
      }),
    },
  });

  useScript('https://marketo.clearbit.com/assets/v1/marketo/forms.js', {
    attributes: { 'data-clearbit-publishable-key': publishableKey },
    onError: () => send('LOAD_ERROR'),
    onLoad: () => {
      if (window.MktoForms2) {
        send('LOADED');
      } else {
        // Some ad blockers block the marketo script from loading. In this case,
        // we won't have the MktoForms2 variable available on window. We need
        // to prevent the rest of the script from running to avoid triggering
        // errors on the page that would cause the page to go blank.
        send('BLOCKED');
      }
    },
  });

  return [state.context.form, { state, error: state.context.error }];
};

export default useMarketoForm;
