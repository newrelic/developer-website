import React, { useState } from 'react';

import Container from '../components/Container';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';

// TODO: move this js file to same directory and update import
import '../templates/Reference.scss';

// TODO: pull this in from Gatsby
const pages = [
  { displayName: 'Overview', url: '' },
  {
    displayName: 'CLI',
    url: '',
    children: [
      { displayName: 'newrelic', url: '' },
      { displayName: 'nr1', url: '' },
    ],
  },
  { displayName: 'GraphQL', url: '' },
  {
    displayName: 'Applications',
    url: '',
    children: [
      { displayName: 'Component Library', url: '', active: true },
      { displayName: 'File structure', url: '' },
    ],
  },
  {
    displayName: 'Data Collectors',
    url: '',
    children: [
      { displayName: 'Custom Attributes', url: '' },
      { displayName: 'Custom Events', url: '' },
      { displayName: 'Open Telemetry', url: '' },
      { displayName: 'Telemetry SDK', url: '' },
    ],
  },
  {
    displayName: 'Automation',
    url: '',
    children: [
      { displayName: 'Cloud Formation Provider', url: '' },
      { displayName: 'Terraform Provider', url: '' },
      {
        displayName: 'Agent Deploy',
        url: '',
        children: [
          { displayName: 'Ansible', url: '' },
          { displayName: 'Chef', url: '' },
          { displayName: 'Puppet', url: '' },
        ],
      },
    ],
  },
];

const Reference = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout>
      <Container className="ReferenceTemplate">
        <Sidebar
          pages={pages}
          isOpen={isOpen}
          toggle={() => setIsOpen(!isOpen)}
        />
        <main className="ReferenceTemplate-content">
          The main page content goes here
        </main>
      </Container>
    </Layout>
  );
};

export default Reference;
