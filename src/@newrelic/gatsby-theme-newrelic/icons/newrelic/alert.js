import React from 'react';
import NewRelicSVG from '../../../../components/NewRelicSVG';

const AlertIcon = (props) => (
  <NewRelicSVG viewBox="0 0 16 16" {...props}>
    <g>
      <path
        d="M12,7V4.5C12,2,10,0,7.5,0S3,2,3,4.5V7L1,9v3h13V9L12,7z M13,11H2V9.4l2-2V4.5C4,2.6,5.6,1,7.5,1S11,2.6,11,4.5v2.9l2,2V11
		z"
      />
      <path d="M7.5,14c-0.7,0-1.2-0.4-1.4-1H5c0.2,1.1,1.3,2,2.5,2s2.3-0.9,2.5-2H8.9C8.7,13.6,8.2,14,7.5,14z" />
    </g>
  </NewRelicSVG>
);

export default AlertIcon;
