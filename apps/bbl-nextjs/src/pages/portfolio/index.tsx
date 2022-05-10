import React from 'react';
import styled from 'styled-components';

import { Layout } from '@bbl-nx/ui-components';
import { companyPortfolios, teamPortfolios } from '@bbl-nx/constants';
import { Portfolio } from '@bbl-nx/organizations';

const Root = styled.div`
  padding-top: 20px;
`;

const PortfolioPage = () => {
  return (
    <Layout>
      <Root>
        <Portfolio
          key={'company'}
          title="Company"
          portfolios={companyPortfolios}
        />
        <Portfolio
          key={'project'}
          title={`Project`}
          portfolios={teamPortfolios}
        />
      </Root>
    </Layout>
  );
};

export default PortfolioPage;
