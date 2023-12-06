export default {
  name: 'navigation',
  description: '',
  usage: "import { navigation } from 'nr1'",
  constants: [],
  examples: [],
  typeDefs: [
    {
      name: 'Nerdlet',
      properties: [
        {
          name: 'id',
          type: 'string',
          description:
            'Id of the nerdlet. You can specify the full nerdlet id: <nerdpack-id>.<nerdlet-id> (i.e. "8ba28fe4-5362-4f7f-8f9a-4b8c6c39d8a6.my-nerdlet") or simply <nerdlet-id> (i.e. "my-nerdlet"). In the latter case, the nerdlet will be treated as if it belongs to the current nerdpack, meaning that the nerdpack id is automatically added by the platform.',
        },
        {
          name: 'urlState',
          type: 'Object',
          description: 'State of the nerdlet which is persisted in the url.',
        },
      ],
    },
    {
      name: 'UrlStateOptions',
      properties: [
        {
          name: 'replaceHistory',
          type: 'boolean',
          description:
            'If `true`, the current entry in the browser history will be replaced with the new one.',
        },
      ],
    },
    {
      name: 'Overlay',
      properties: [
        {
          name: 'id',
          type: 'string',
          description:
            'Id of the overlay to be opened, for example `nr1-core.search`.',
        },
        {
          name: 'urlState',
          type: 'Object',
          description: 'State of the overlay which is persisted in the url.',
        },
      ],
    },
    {
      name: 'Launcher',
      properties: [
        {
          name: 'id',
          type: 'string',
          description: 'Id of the launcher, for example `nr1-core.explorer`.',
        },
        {
          name: 'nerdlet',
          type: 'Nerdlet',
          description:
            'Nerdlet to be opened in the launcher. If not provided, the root nerdlet of the launcher will be opened.',
        },
        {
          name: 'stackedNerdlets',
          type: 'Nerdlet[]',
          description: 'Nerdlet to be opened as stacked nerdlets.',
        },
      ],
    },
    {
      name: 'Location',
      properties: [
        {
          name: 'pathname',
          type: 'string',
          description: 'String representing the path to link to.',
        },
        {
          name: 'search',
          type: 'string',
          description: 'String representing query parameters.',
        },
        {
          name: 'hash',
          type: 'string',
          description: 'String to put in the URL as hash, e.g. #entities.',
        },
      ],
    },
  ],
  methods: [
    {
      name: 'navigation.getOpenEntityLocation',
      description: `
Returns a location object that can be used to redirect to an entity in its corresponding launcher (default: Explorer launcher).

Location objects can be passed into \`<Link to={location}>\` component to navigate inside the platform.
      `.trim(),
      returnValue: { type: 'Location' },
      arguments: [
        {
          name: 'entityGuid',
          type: 'string',
          description: 'GUID of the entity to open.',
        },
      ],
      examples: [
        {
          label: 'Example',
          sourceCode: `
const entityGuid = 'Mxka102Ak';

const location = navigation.getOpenEntityLocation(entityGuid);
        `.trim(),
          live: false,
          preview: false,
        },
      ],
    },
    {
      name: 'navigation.getOpenLauncherLocation',
      description: `
Returns a location object that can be used to redirect to a given launcher.

You can also specify nerdlet and stacked nerdlets with given states to be opened in this launcher.

If nerdlet is not specified, the root nerdlet of the given launcher will be opened.

Location objects can be passed into \`<Link to={location}>\` component to navigate inside the platform.
      `.trim(),
      returnValue: { type: 'Location' },
      arguments: [
        {
          name: 'launcher',
          type: 'Launcher',
          description: 'Launcher to open.',
        },
      ],
      examples: [
        {
          label: 'Example 1',
          sourceCode: `
const launcher = {
  id: 'nr1-core.explorer',
};

const location = navigation.getOpenLauncherLocation(launcher);
          `.trim(),
          live: false,
          preview: false,
        },
        {
          label: 'Example 2',
          sourceCode: `
// You can also specify a nerdlet and stacked nerdlets to be opened.
// You can combine Nerdpack items from different nerdpacks.
const launcher = {
  id: '074e8260-fa9c-4d71-f7a0-51835417a423.my-launcher-id',
  nerdlet: {
    id: 'nr1-core.listing',
  },
  stackedNerdlets: [
    {
      id: 'dashboards.list',
    },
  ],
};

const location = navigation.getOpenLauncherLocation(launcher);
          `.trim(),
          live: false,
          preview: false,
        },
      ],
    },
    {
      name: 'navigation.getOpenNerdletLocation',
      description: `
Returns a location object that can be used to open a given nerdlet with a given state.

Location objects can be passed into \`<Link to={location}>\` component to navigate inside the platform.
      `.trim(),
      returnValue: { type: 'Location' },
      arguments: [
        {
          name: 'nerdlet',
          type: 'Nerdlet',
          description: 'Nerdlet to replace current nerdlet with.',
        },
      ],
      examples: [
        {
          label: 'Example 1',
          sourceCode: `
const nerdlet = {
  id: 'dashboards.list',
};

const location = navigation.getOpenNerdletLocation(nerdlet);
          `.trim(),
          live: false,
          preview: false,
        },
        {
          label: 'Example 2',
          sourceCode: `
// You can also specify nerdlet's state.
const nerdlet = {
  id: 'dashboards.list',
  urlState: {
    foo: 'bar',
  },
};

const location = navigation.getOpenNerdletLocation(nerdlet);
          `.trim(),
          live: false,
          preview: false,
        },
      ],
    },
    {
      name: 'navigation.getOpenOverlayLocation',
      description: `
Returns a location object that can be used to trigger opening overlay.

Location objects can be passed into \`<Link to={location}>\` component to navigate inside the platform.
      `.trim(),
      returnValue: { type: 'Location' },
      arguments: [
        {
          name: 'overlay',
          type: 'Overlay',
          description: 'Overlay you want to open.',
        },
      ],
      examples: [
        {
          label: 'Example',
          sourceCode: `
const overlay = {
  id: 'nr1-core.search',
};

const location = navigation.getOpenOverlayLocation(overlay);
          `.trim(),
          live: false,
          preview: false,
        },
      ],
    },
    {
      name: 'navigation.getOpenStackedEntityLocation',
      description: `
Returns a location object that can be used to trigger opening entity in a stacked nerdlet.

Location objects can be passed into \`<Link to={location}>\` component to navigate inside the platform.
      `.trim(),
      returnValue: { type: 'Location' },
      arguments: [
        {
          name: 'entityGuid',
          type: 'string',
          description: 'GUID of the entity to open.',
        },
      ],
      examples: [
        {
          label: 'Example',
          sourceCode: `
const entityGuid = 'Mxka102Ak';

const location = navigation.getOpenStackedEntityLocation(entityGuid);
          `.trim(),
          live: false,
          preview: false,
        },
      ],
    },
    {
      name: 'navigation.getOpenStackedNerdletLocation',
      description: `
Returns a location object that can be used to trigger opening stacked nerdlet with a given state.

Location objects can be passed into \`<Link to={location}>\` component to navigate inside the platform.
      `.trim(),
      returnValue: { type: 'Location' },
      arguments: [
        {
          name: 'nerdlet',
          type: 'Nerdlet',
          description: 'Nerdlet to open as stacked nerdlet.',
        },
      ],
      examples: [
        {
          label: 'Example 1',
          sourceCode: `
const nerdlet = {
  id: 'dashboards.list',
};

const location = navigation.getOpenStackedNerdletLocation(nerdlet);
          `.trim(),
          live: false,
          preview: false,
        },
        {
          label: 'Example 2',
          sourceCode: `
// You can also specify nerdlet's state.
const nerdletWithState = {
  id: 'dashboards.list',
  urlState: {
    foo: 'bar',
  },
};

const location = navigation.getOpenStackedNerdletLocation(nerdletWithState);
          `.trim(),
          live: false,
          preview: false,
        },
        {
          label: 'Example 3',
          sourceCode: `
// If you want to open nerdlet from the current nerdpack then you can omit its nerdpackId.
const nerdletWithState = {
  id: 'my-nerdlet-id',
  urlState: {
    foo: 'bar',
  },
};

const location = navigation.getOpenStackedNerdletLocation(nerdletWithState);
          `.trim(),
          live: false,
          preview: false,
        },
      ],
    },
    {
      name: 'navigation.getReplaceNerdletLocation',
      description: `
Returns a location object that can be used to replace current nerdlet.

Location objects can be passed into \`<Link to={location}>\` component to navigate inside the platform.
      `.trim(),
      returnValue: { type: 'Location' },
      arguments: [
        {
          name: 'nerdlet',
          type: 'Nerdlet',
          description: 'Nerdlet to replace current nerdlet with.',
        },
      ],
      examples: [
        {
          label: 'Example 1',
          sourceCode: `
const nerdlet = {
  id: 'dashboards.list',
};

const location = navigation.getReplaceNerdletLocation(nerdlet);
          `.trim(),
          live: false,
          preview: false,
        },
        {
          label: 'Example 2',
          sourceCode: `
// If the nerdlet you want to replace with is in the current nerdpack then you can omit its nerdpackId.
const nerdlet = {
  id: 'my-nerdlet-id',
};

const location = navigation.getReplaceNerdletLocation(nerdlet);
          `.trim(),
          live: false,
          preview: false,
        },
        {
          label: 'Example 3',
          sourceCode: `
// You can also specify nerdlet's state.
const nerdlet = {
  id: 'my-nerdlet-id',
  urlState: {
    foo: 'bar',
  },
};

const location = navigation.getReplaceNerdletLocation(nerdlet);
          `.trim(),
          live: false,
          preview: false,
        },
      ],
    },
    {
      name: 'navigation.openEntity',
      description: `
Opens an entity in its corresponding launcher (default: Explorer launcher).

To navigate without adding an entry to the browser history, set \`urlStateOptions.replaceHistory\` to \`true\`.
      `.trim(),
      returnValue: { type: 'undefined' },
      arguments: [
        {
          name: 'entityGuid',
          type: 'string',
          description: 'GUID of the entity to open.',
        },
        {
          name: 'urlStateOptions',
          type: 'UrlStateOptions',
          description: 'Options for the URL state.',
        },
      ],
      examples: [
        {
          label: 'Example',
          sourceCode: `
const entityGuid = 'Mxka102Ak';

navigation.openEntity(entityGuid);
          `.trim(),
          live: false,
          preview: false,
        },
      ],
    },
    {
      name: 'navigation.openLauncher',
      description: `
Opens launcher inside the platform.

You can also specify nerdlet and stacked nerdlets with given states to be opened in this launcher.

If nerdlet is not specified, the root nerdlet of the given launcher will be opened.

If you wish to navigate without adding an entry to the browser history, set \`urlStateOptions.replaceHistory\` to \`true\`.
      `.trim(),
      returnValue: { type: 'void' },
      arguments: [
        {
          name: 'launcher',
          type: 'Launcher',
          description: 'Launcher to open.',
        },
        {
          name: 'urlStateOptions',
          type: 'UrlStateOptions',
          description: 'Options for the URL state.',
        },
      ],
      examples: [
        {
          label: 'Example 1',
          sourceCode: `
const launcher = {
  id: 'nr1-core.explorer',
};

navigation.openLauncher(launcher);
          `.trim(),
          live: false,
          preview: false,
        },
        {
          label: 'Example 2',
          sourceCode: `
// You can also specify a nerdlet and stacked nerdlets to be opened.
// You can combine Nerdpack items from different nerdpacks.
const launcher = {
  id: '074e8260-fa9c-4d71-f7a0-51835417a423.my-launcher-id',
  nerdlet: {
    id: 'nr1-core.listing',
  },
  stackedNerdlets: [
    {
      id: 'dashboards.list',
    },
  ],
};

navigation.openLauncher(launcher);
          `.trim(),
          live: false,
          preview: false,
        },
      ],
    },
    {
      name: 'navigation.openNerdlet',
      description: `
Opens a nerdlet in the current launcher.

If \`nerdlet.urlState\` is provided, it will be shallow-merged with the initial state of the nerdlet.

If you wish to navigate without adding an entry to the browser history, set \`urlStateOptions.replaceHistory\` to \`true\`.
      `.trim(),
      returnValue: { type: 'void' },
      arguments: [
        {
          name: 'nerdlet',
          type: 'Nerdlet',
          description: 'Nerdlet to open.',
        },
        {
          name: 'urlStateOptions',
          type: 'UrlStateOptions',
          description: 'Options for the URL state.',
        },
      ],
      examples: [
        {
          label: 'Example 1',
          sourceCode: `
const nerdlet = {
  id: 'dashboards.list',
};

navigation.openNerdlet(nerdlet);
          `.trim(),
          live: false,
          preview: false,
        },
        {
          label: 'Example 2',
          sourceCode: `
// You can also specify nerdlet's state.
const nerdletWithState = {
  id: 'dashboards.list',
  urlState: {
    foo: 'bar',
  }
};

const location = navigation.getOpenNerdletLocation(nerdletWithState);
          `.trim(),
          live: false,
          preview: false,
        },
      ],
    },
    {
      name: 'navigation.openOverlay',
      description: `
Opens an overlay on top of the current launcher.

If \`overlay.urlState\` is provided, it will be shallow-merged with the initial state of the overlay.

If you wish to navigate without adding an entry to the browser history, set \`urlStateOptions.replaceHistory\` to \`true\`.
      `.trim(),
      returnValue: { type: 'void' },
      arguments: [
        {
          name: 'overlay',
          type: 'Overlay',
          description: 'Overlay you want to open.',
        },
        {
          name: 'urlStateOptions',
          type: 'UrlStateOptions',
          description: 'Options for the URL state.',
        },
      ],
      examples: [
        {
          label: 'Example',
          sourceCode: `
const overlay = {
  id: 'nr1-core.search',
};

navigation.openOverlay(overlay);
          `.trim(),
          live: false,
          preview: false,
        },
      ],
    },
    {
      name: 'navigation.openStackedEntity',
      description: `
Opens a stacked nerdlet with entity open in it. If triggered from a stacked nerdlet that is not the last one on the stack, the stacked nerdlet aboves it will be replaced.

To navigate without adding an entry to the browser history, set \`urlStateOptions.replaceHistory\` to \`true\`.
      `.trim(),
      returnValue: { type: 'undefined' },
      arguments: [
        {
          name: 'entityGuid',
          type: 'string',
          description: 'GUID of the entity to open.',
        },
        {
          name: 'urlStateOptions',
          type: 'UrlStateOptions',
          description: 'Options for the URL state.',
        },
      ],
      examples: [
        {
          label: 'Example',
          sourceCode: `
// Opens stacked entity.
const entityGuid = 'Mxka102Ak';

navigation.openStackedEntity(entityGuid);
          `.trim(),
          live: false,
          preview: false,
        },
      ],
    },
    {
      name: 'navigation.openStackedNerdlet',
      description: `
Opens a stacked nerdlet with given state above current one.

If triggered from a stacked nerdlet that is not the last one on the stack, the stacked nerdlets above it will be replaced.

If you wish to navigate without adding an entry to the browser history, set \`urlStateOptions.replaceHistory\` to \`true\`.
      `.trim(),
      returnValue: { type: 'void' },
      arguments: [
        {
          name: 'nerdlet',
          type: 'Nerdlet',
          description: 'Nerdlet to open as stacked nerdlet.',
        },
        {
          name: 'urlStateOptions',
          type: 'UrlStateOptions',
          description: 'Options for the URL state.',
        },
      ],
      examples: [
        {
          label: 'Example 1',
          sourceCode: `
const nerdlet = {
  id: 'dashboards.list',
};

navigation.openStackedNerdlet(nerdlet);
          `.trim(),
          live: false,
          preview: false,
        },
        {
          label: 'Example 2',
          sourceCode: `
// You can also specify nerdlet's state.
const nerdletWithState = {
  id: '074e8260-fa9c-4d71-f7a0-51835417a423.my-nerdlet-id',
  urlState: {
    foo: 'bar',
  }
};

navigation.openStackedNerdlet(nerdlet);
          `.trim(),
          live: false,
          preview: false,
        },
        {
          label: 'Example 3',
          sourceCode: `
// If you want to open nerdlet from the current nerdpack then you can omit its nerdpackId.
const nerdletWithState = {
  id: 'my-nerdlet-id',
  urlState: {
    foo: 'bar',
  }
};

navigation.openStackedNerdlet(nerdlet);
          `.trim(),
          live: false,
          preview: false,
        },
      ],
    },
    {
      name: 'navigation.replaceNerdlet',
      description: `
Replaces the nerdlet that is calling this API method.

If you wish to navigate without adding an entry to the browser history, set \`urlStateOptions.replaceHistory\` to \`true\`.
      `.trim(),
      returnValue: { type: 'void' },
      arguments: [
        {
          name: 'nerdlet',
          type: 'Nerdlet',
          description: 'GUID of the entity to open.',
        },
        {
          name: 'urlStateOptions',
          type: 'UrlStateOptions',
          description: 'Options for the URL state.',
        },
      ],
      examples: [
        {
          label: 'Example 1',
          sourceCode: `
const nerdlet = {
  id: 'dashboards.list',
};

navigation.replaceNerdlet(nerdlet);
          `.trim(),
          live: false,
          preview: false,
        },
        {
          label: 'Example 2',
          sourceCode: `
// If the nerdlet you want to replace with is in the current nerdpack then you can omit its nerdpackId.
const nerdlet = {
  id: 'my-nerdlet-id',
};

navigation.replaceNerdlet(nerdlet);
          `.trim(),
          live: false,
          preview: false,
        },
        {
          label: 'Example 3',
          sourceCode: `
// You can also specify nerdlet's state.
const nerdlet = {
  id: 'my-nerdlet-id',
  urlState: {
    foo: 'bar',
  },
};

navigation.replaceNerdlet(nerdlet);
          `.trim(),
          live: false,
          preview: false,
        },
      ],
    },
  ],
};
