import React from 'react';
import daynaAvatar from '../images/nerdlog/dayna-lord.jpg';
import nicaAvatar from '../images/nerdlog/nica-fee.jpg';

export const teamMembers = [
  {
    name: 'Dayna Lord',
    pronouns: 'she/her',
    avatar: daynaAvatar,
    bio: (
      <p>
        Dayna Lord is a product marketing manager at New Relic focused on
        customer adoption.
      </p>
    ),
  },
  {
    name: 'Nočnica Fee',
    pronouns: 'she/her',
    avatar: nicaAvatar,
    bio: (
      <p>
        Nočnica Fee is a dev advocate at New Relic specializing in cloud
        applications, serverless, and containerization. She writes regularly for
        The New Stack and has been published in Information Age and Forbes.
      </p>
    ),
  },
];
