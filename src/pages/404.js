import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Erro 404</h1>
    <p>Ops, nada foi encontrado nesse link.</p>
  </Layout>
);

export default NotFoundPage;
