import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { useTessen, Link } from '@newrelic/gatsby-theme-newrelic';
import {
  SUPPORT_LINK,
  COMMUNITY_LINK,
  QUICKSTART_SUPPORT_LEVELS,
} from '../../data/constants';

const SupportSection = ({ supportLevel }) => {
  const tessen = useTessen();
  const whatsIncluded = <strong>What's included</strong>;
  const supportLink = (
    <Link
      to={SUPPORT_LINK}
      key={QUICKSTART_SUPPORT_LEVELS.NEWRELIC}
      onClick={() =>
        tessen.track('instantObservability', 'QuickstartDetailsSupportClick')
      }
    >
      Visit our Support Center
    </Link>
  );

  const communityLink = (
    <Link
      to={COMMUNITY_LINK}
      key={QUICKSTART_SUPPORT_LEVELS.NEWRELIC}
      onClick={() =>
        tessen.track('instantObservability', 'QuickstartDetailsCommunityClick')
      }
    >
      the Explorers Hub
    </Link>
  );

  const QUICKSTART_SUPPORT_CONTENT = {
    [QUICKSTART_SUPPORT_LEVELS.NEWRELIC]: {
      title: 'Built by New Relic',
      content: [
        'Need help? ',
        supportLink,
        ' or check out our community forum, ',
        communityLink,
        '.',
      ],
    },
    [QUICKSTART_SUPPORT_LEVELS.VERIFIED]: {
      title: 'Verified by New Relic',
      content: [
        "Need help? Find the author's support resources under ",
        whatsIncluded,
        '. Or check out our community forum, ',
        communityLink,
        '.',
      ],
    },
    [QUICKSTART_SUPPORT_LEVELS.COMMUNITY]: {
      title: 'Built by the community',
      content: [
        'Need help? Visit our community forum, ',
        communityLink,
        ' to find an answer or post a question.',
      ],
    },
  };

  return (
    <>
      <h5
        css={css`
          text-transform: uppercase;
        `}
      >
        {QUICKSTART_SUPPORT_CONTENT[`${supportLevel}`].title}
      </h5>
      <p>{QUICKSTART_SUPPORT_CONTENT[`${supportLevel}`].content}</p>
    </>
  );
};

SupportSection.propTypes = {
  supportLevel: PropTypes.string.isRequired,
};

export default SupportSection;
