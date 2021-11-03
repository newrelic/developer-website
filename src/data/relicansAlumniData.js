import React from 'react';
import chrisAvatar from '../images/relicans/alumni/chris-dabatos.jpg';
import danielAvatar from '../images/relicans/daniel-kim.jpg';
import rachaelAvatar from '../images/relicans/alumni/rachael-wright-munn.jpg';

export const teamMembers = [
  {
    name: 'Chris Dabatos',
    pronouns: 'he/him',
    avatar: chrisAvatar,
    bio: (
      <p>
        Chris is a developer relations engineer for New Relic. He's been a
        front-end engineer since 2016. He has been documenting his journey as a
        self-taught developer on YouTube in hopes of inspiring aspiring
        developers around the world.
      </p>
    ),
    socials: [
      {
        name: 'twitter',
        url: 'https://www.twitter.com/realchrissean/',
      },
      {
        name: 'twitch',
        url: 'https://www.twitch.tv/chrissean/',
      },
      {
        name: 'instagram',
        url: 'https://www.instagram.com/realchrissean/',
      },
    ],
  },
  {
    name: 'Daniel Kim',
    pronouns: 'he/him',
    avatar: danielAvatar,
    bio: (
      <p>
        Daniel Kim (He/Him) is a Senior Developer Relations Engineer at New
        Relic and the founder of Bit Project, a 501(c)(3) nonprofit dedicated
        make tech accessible to underserved communities. He wants to inspire
        generations of students in tech to be the best they can be through
        inclusive, accessible developer education. He is passionate about
        diversity & inclusion in tech, good food, and dad jokes.
      </p>
    ),
    socials: [
      {
        name: 'twitter',
        url: 'https://twitter.com/journeyer_',
      },
      {
        name: 'twitch',
        url: 'https://twitch.tv/teachdaniel',
      },
      {
        name: 'instagram',
        url: 'https://instagram.com/journeyer',
      },
      {
        name: 'linkedin',
        url: 'https://linkedin.com/in/journeyer',
      },
    ],
  },
  {
    name: 'Rachael Wright-Munn',
    pronouns: 'she/her',
    avatar: rachaelAvatar,
    bio: (
      <p>
        Rachael's been building software and web apps since 2012. Now she builds
        her open-source vue/rails app live on Twitch. Enough people thought that
        was cool, so she's been invited here.
      </p>
    ),
    socials: [
      {
        name: 'twitter',
        url: 'https://twitter.com/ChaelCodes',
      },
      {
        name: 'twitch',
        url: 'https://twitch.tv/ChaelCodes',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/rachael-wright-chaelcodes/',
      },
    ],
  },
];
