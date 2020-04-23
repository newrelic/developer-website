import React from 'react';
import CallToAction from './CallToAction';
import './Jumbotron.scss';

const Jumbotron = () => (
  <div className="jumbotron">
    <h2 className="indexPage-h2">
      Build custom applications on top of your observability data
    </h2>
    <CallToAction text="Create your free account">
      <form>
        <input placeholder="me@observability.com" />
        <button type="submit">Sign up</button>
      </form>
    </CallToAction>
    <CallToAction text="Get your API key">
      <select id="api-keys" name="api-keys">
        <option value="" disabled selected hidden>
          Select or create a key...
        </option>
        <option value="key">key</option>
        <option value="otherkey">otherkey</option>
      </select>
    </CallToAction>
    <CallToAction text="Install the newrelic CLI">
      <button type="button">Download for macOS</button>
    </CallToAction>
  </div>
);

export default Jumbotron;
