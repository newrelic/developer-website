import React from 'react';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';

// TODO: move this js file to same directory and update import
import '../templates/Reference.scss';

// TODO: pull this in from Gatsby
const pages = [];

const Reference = () => (
  <Layout>
    <div className="ReferenceTemplate">
      <Sidebar pages={pages} />
      <main className="ReferenceTemplate-content">
        The main page content goes here
      </main>
    </div>
  </Layout>
);

export default Reference;
