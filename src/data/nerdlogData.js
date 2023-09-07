import React from 'react';
import danielAvatar from '../images/devrel/daniel-kim.jpg';
import annaAvatar from '../images/changelog/anna-alfano.jpg';
import leonAvatar from '../images/devrel/leon-adato.jpg';
import michelleAvatar from '../images/changelog/michelle-scharlock.png';
import andreaAvatar from '../images/changelog/andrea-sy.png';
import rachelAvatar from '../images/changelog/rachel-foster.jpeg';

export const teamMembers = [
  {
    name: 'Leon Adato',
    pronouns: 'he/him',
    avatar: leonAvatar,
    bio: (
      <>
        <p>
          Leon Adato is a Developer Relations Advocate at New Relic, and has
          held multiple industry certifications over his 33 years in IT
          including Cisco, Microsoft, A+, and more. His experience spans
          financial, healthcare, food and beverage, and other industries.
        </p>
        <p>
          Before coming to New Relic, he was a speaker and blogger in the
          monitoring and observability space for almost a decade. His expertise
          in IT began in 1989 and has led him through roles in classroom
          training, desktop support, server support, and software distribution.
        </p>
      </>
    ),
    socials: [
      {
        name: 'twitter',
        url: 'https://twitter.com/leonadato',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/leonadato/',
      },
      {
        name: 'github',
        url: 'https://github.com/LeonAdato',
      },
    ],
  },
  {
    name: 'Rachel Foster',
    pronouns: 'she/her',
    avatar: rachelAvatar,
    bio: (
      <>
        <p>
          Rachel is a Senior Developer Relations Engineer at New Relic, and a
          former software developer with more than 25 years experience working
          with global companies. Immediately prior to joining New Relic she
          taught Software Engineering at Kennesaw State University in Georgia.
          She enjoys breaking down technological concepts to make them relatable
          to all.
        </p>
        <p>
          Rachel began her career at New Relic as a Solutions Consultant,
          assisting customers through the adoption, optimization, and
          integration of New Relic’s product suite. Now she enjoys helping
          customers learn and apply new skills to improve self-sufficiency,
          proficiency, and success with the New Relic platform.
        </p>
      </>
    ),
    socials: [
      {
        name: 'twitter',
        url: 'https://twitter.com/devreldragon',
      },
      {
        name: 'linkedin',
        url: 'http://www.linkedin.com/in/rlfoster',
      },
      {
        name: 'github',
        url: 'https://github.com/devreldragon',
      },
    ],
  },
  {
    name: 'Anna Alfano',
    pronouns: 'she/her',
    avatar: annaAvatar,
    bio: (
      <p>
        Anna Alfano is an Associate Product Marketing Manager at New Relic. She
        brings experience from market research, sales marketing, and fintech to
        her role on the Product Marketing team at New Relic. A consumer
        psychologist at heart, she is passionate about creating messaging that
        demonstrates customer empathy and product experiences that streamline
        decision making
      </p>
    ),
    socials: [{}],
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
    name: 'Michelle Scharlock',
    pronouns: 'she/her',
    avatar: michelleAvatar,
    bio: (
      <p>
        Michelle Scharlock is a Senior Technical Content Marketing Manager at
        New Relic. She brings a lifelong love of writing and technology to the
        role and is a graduate of the Code Fellows bootcamp in Seattle. Previous
        to New Relic, she worked as a Developer Writer at Microsoft.
      </p>
    ),
    socials: [{}],
  },
  {
    name: 'Andrea Sy',
    pronouns: 'she/her',
    avatar: andreaAvatar,
    bio: (
      <p>
        Andrea Sy is a Senior Product Marketing Manager at New Relic. She is a
        passionate product marketer who wants to deliver data-driven delight to
        her customers. She’s been in the technology space for almost a decade,
        and has held various roles ranging from product management to product
        marketing across multiple industries. When she’s in her creator mode,
        you can find her painting landscapes at home while her dogs watch.
      </p>
    ),
    socials: [{}],
  },
];
