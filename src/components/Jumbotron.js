import React from 'react';
import { Link } from 'gatsby';
import CallToAction from './CallToAction';
import './Jumbotron.scss';

const Jumbotron = () => (
  <div className="Jumbotron">
    <h1 className="indexPage-h1">Create a free account to get started</h1>
    <div className="Jumbotron-callToAction-container">
      <CallToAction step="1" text="Create your free account">
        <form>
          <input placeholder="me@observability.com" />
          <button className="CallToAction-button--signUp" type="submit">
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
        <button className="CallToAction-button--download" type="button">
          Download for macOS
        </button>
        <Link to="/">Download for other platforms</Link>
      </CallToAction>
    </div>
  </div>
);

export default Jumbotron;
