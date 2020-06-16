import React from 'react';
import { Link } from 'gatsby';
import CallToAction from './CallToAction';
import styles from './Jumbotron.module.scss';

const Jumbotron = () => (
  <div className={styles.jumbotron}>
    <h1 className={styles.h1}>Create a free account to get started</h1>
    <div className={styles.callToActionContainer}>
      <CallToAction step="1" text="Create your free account">
        <form>
          <input placeholder="me@observability.com" />
          <button className={styles.signUpButton} type="submit">
            Sign up
          </button>
        </form>
        <Link to="/">Sign in to New Relic One</Link>
      </CallToAction>
      <CallToAction step="2" text="Get your API key">
        <select id="api-keys" name="api-keys">
          <option value="" disabled selected hidden>
            Select or create a key...
          </option>
          <option value="key">key</option>
          <option value="otherkey">otherkey</option>
        </select>
        <Link to="/">Create a new API key</Link>
      </CallToAction>
      <CallToAction step="3" text="Install the newrelic CLI">
        <button className={styles.downloadButton} type="button">
          Download for macOS
        </button>
        <Link to="/">Download for other platforms</Link>
      </CallToAction>
    </div>
  </div>
);

export default Jumbotron;
