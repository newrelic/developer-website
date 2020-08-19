import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import cx from 'classnames';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import PageTitle from '../components/PageTitle';
import nerdDays from '../images/nerd-days/nerd-days.png';
import styles from './nerd-days.module.scss';
import '../components/marketo.scss';

const NerdDaysPage = () => {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    MktoForms2.loadForm('//app-abj.marketo.com', '412-MZS-894', 3525);

    const pollForDefinition = function (scope, varname, callback) {
      if (typeof scope[varname] !== 'undefined') {
        return callback();
      }
      const interval = setInterval(function () {
        if (typeof scope[varname] !== 'undefined') {
          clearInterval(interval);
          callback();
        }
      }, 250);
    };
    const script = document.createElement('script');
    script.src = 'https://marketo.clearbit.com/assets/v1/marketo/forms.js';
    script.async = true;
    script.setAttribute(
      'data-clearbit-publishable-key',
      'pk_4d10daa544de6f993a9a9ce002ccd1c6'
    );
    script.onerror = function (e) {
      // eslint-disable-next-line no-console
      console.log('Clearbit Form JS unable to load');
      pollForDefinition(window, 'MktoForms2', function () {
        // eslint-disable-next-line no-undef
        MktoForms2.whenReady(function (form) {
          form.setValues({
            clearbitFormStatus: 'Clearbit Form JS unable to load',
          });
        });
      });
    };
    document.body.append(script);
  }, []);

  return (
    <Layout>
      <SEO />
      <PageTitle>New Relic Nerd Days</PageTitle>
      <section className={cx(styles.section, styles.twoColumnAlt)}>
        <div>
          <img className={styles.img} src={nerdDays} alt="nerd days header" />
          <p>
            Nerd Days is a FREE engineering conference that kicks off October 13{' '}
            <em>(Dates vary by region)</em>. Focused on building more perfect
            software, our goal is to spend less time looking at slides that tell
            you what software can do and more time on getting your hands on the
            software to solve problems efficiently.
          </p>
          <p>
            You’ll hear from fellow engineers who built New Relic solutions and
            New Relic users from various industries. Whether you’re new or a
            data nerd, there’s an interactive session for you.
          </p>
          <p>We look forward to building with you during Nerd Days! </p>
          <h2 className={styles.h2}>CALL FOR PROPOSALS</h2>
          <p>
            Got an interesting topic you want to share with your fellow
            engineers?{' '}
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSe8LOilCrD_TCUPyHFHG_QzVW2UdUR0UKZ8H8WNylz0flB7OQ/viewform">
              Submit your proposals
            </Link>{' '}
            by September 1, 2021 at 11:59 PM PT. For more details, check out the
            one-pager. proposals will contacted by September 30, 2021 at the
            latest.
          </p>
        </div>
        <div className={styles.formholder}>
          <div className={styles.form}>
            <p className={styles.formhead}>REGISTER FOR THIS NERD DAYS</p>
            <form id="mktoForm_3525" />
          </div>
        </div>
      </section>
      <section />
    </Layout>
  );
};

export default NerdDaysPage;
