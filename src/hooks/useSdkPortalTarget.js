import { useEffect } from 'react';
import { CSS_BUNDLE } from '../utils/sdk';

/**
 * The SDK looks for this ID. If found it treats it as the target for
 * portal components.
 */
const hostId = 'nr1-sdk-docs-portal-target';

/**
 * Ensures existense of the portal target that the sdk looks for when calling
 * React.createPortal(). The sdk portal target is a shadow DOM element for the
 * purpose of isolating SDK styles.
 */
const useSdkPortalTarget = () => {
  useEffect(() => {
    document.querySelector(`#${hostId}`) || createShadowDomHost();
  }, []);
};

function createShadowDomHost() {
  // Create host div on body
  const host = document.createElement('div');
  host.id = hostId;
  document.querySelector('body').appendChild(host);

  // Make it a shadow dom host
  host.attachShadow({ mode: 'open' });

  // Add sdk styles to the shadow dom
  const sdkStyles = document.createElement('link');
  sdkStyles.rel = 'stylesheet';
  sdkStyles.href = CSS_BUNDLE;
  host.shadowRoot.appendChild(sdkStyles);

  return host;
}

export default useSdkPortalTarget;
