import React from 'react';
import NewRelicSVG from '../../../../components/NewRelicSVG';

const BookIcon = (props) => (
  <NewRelicSVG {...props}>
    <path d="M16.5 2.5c0 0-1.893 0-2 0 -2 0-3 1.5-3 3.5 0-2-1-3.5-3-3.5 -.5 0-8 0-8 0v16c0 0 6.5 0 8 0 2 0 3 1 3 3 0-2 1-3 3-3 1.5 0 8 0 8 0v-16h-2" />
    <line x1="11.5" x2="11.5" y1="6" y2="21" />
    <polygon
      stroke="var(--accent-color)"
      points="20.5,10 18.5,8 16.5,10 16.5,1.5 20.5,1.5"
    />
  </NewRelicSVG>
);

export default BookIcon;
