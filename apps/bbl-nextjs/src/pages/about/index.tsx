import React from 'react';
import styled from 'styled-components';

import { Layout } from '@bbl-nx/ui-components';
import { Activity, Education, Experience, Skill } from '@bbl-nx/organizations';

const Root = styled.div`
  padding-top: 20px;
`;

const AboutPage = () => {
  return (
    <Layout>
      <Root>
        <Experience />
        <Activity />
        <Skill />
        <Education />
      </Root>
    </Layout>
  );
};

export default AboutPage;
