import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import DashboardDefaultSection1 from '../../example-components/DashboardDefault/DashboardDefaultSection1';
import DashboardDefaultSection2 from '../../example-components/DashboardDefault/DashboardDefaultSection2';
import DashboardDefaultSection3 from '../../example-components/DashboardDefault/DashboardDefaultSection3';
import DashboardDefaultSection4 from '../../example-components/DashboardDefault/DashboardDefaultSection4';
export default function DashboardDefault() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="My Leads"
        // titleDescription="This is the list of leads you purchased."
      />
      {/* <DashboardDefaultSection2 /> */}
      {/* <DashboardDefaultSection1 /> */}
      {/* <DashboardDefaultSection3 /> */}
      <DashboardDefaultSection4 />
    </Fragment>
  );
}
