import React from 'react';
import './Jumbotron.scss';

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <h3>Interact with your observability data on your own terms</h3>
      <div className="jumbotron-ctaCircle">
        <p>Create your free account</p>
        <form>
          <input placeholder="me@observability.com" />
          <button type="submit">Sign up</button>
        </form>
      </div>
      <div className="jumbotron-ctaCircle">
        <p>Get your API key</p>
        <select id="api-keys" name="api-keys">
          <option value="" disabled selected hidden>
            Select or create a key...
          </option>
          <option value="key">key</option>
          <option value="otherkey">otherkey</option>
        </select>
      </div>
      <div className="jumbotron-ctaCircle">
        <p>Install the newrelic CLI</p>
        <button type="button">Download for macOS</button>
      </div>
    </div>
  );
};

export default Jumbotron;
