import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Table,
  CardBody,
  Card,
  Badge,
  UncontrolledTooltip,
  Button,
  Progress
} from 'reactstrap';

import { Link } from 'react-router-dom';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Card className="card-box mb-5">
        <div className="card-header pr-2">
          <div className="card-header--title">Purchase credits</div>
          <div className="card-header--actions">
            <Button
              tag="a"
              href="#/"
              onClick={e => e.preventDefault()}
              size="sm"
              color="link"
              className="text-primary"
              id="RefreshTooltip1">
              <FontAwesomeIcon icon={['fas', 'cog']} spin />
            </Button>
            <UncontrolledTooltip target="RefreshTooltip1">
              Refresh
            </UncontrolledTooltip>
          </div>
        </div>
        <CardBody>
          <div className="table-responsive-md">
            <Table hover borderless className="text-nowrap mb-0">
              <thead>
                <tr>
                  <th className="text-left">Credits</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    20
                  </td>
                  <td className="text-center">
                    $ 20
                  </td>
                  <td className="text-center">
                  <Link
                      to="/checkout?c=20"
                    >
                      <Button
                        size="sm"
                        color="neutral-dark"
                        id="ViewDetailsTooltip6">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </Button>
                      <UncontrolledTooltip target="ViewDetailsTooltip6">
                        Purchase
                      </UncontrolledTooltip>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    100
                  </td>
                  <td className="text-center">
                    $ 100
                  </td>
                  <td className="text-center">
                    <Link
                      to="/checkout?c=100"
                    >
                      <Button
                        size="sm"
                        color="neutral-dark"
                        id="ViewDetailsTooltip6">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </Button>
                      <UncontrolledTooltip target="ViewDetailsTooltip6">
                        Purchase
                      </UncontrolledTooltip>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    200
                  </td>
                  <td className="text-center">
                    $ 180
                  </td>
                  <td className="text-center">
                    <Link
                      to="/checkout?c=180"
                    >
                      <Button
                        size="sm"
                        color="neutral-dark"
                        id="ViewDetailsTooltip6">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </Button>
                      <UncontrolledTooltip target="ViewDetailsTooltip6">
                        Purchase
                      </UncontrolledTooltip>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    500
                  </td>
                  <td className="text-center">
                    $ 375
                  </td>
                  <td className="text-center">
                    <Link
                      to="/checkout?c=375"
                    >
                      <Button
                        size="sm"
                        color="neutral-dark"
                        id="ViewDetailsTooltip6">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </Button>
                      <UncontrolledTooltip target="ViewDetailsTooltip6">
                        Purchase
                      </UncontrolledTooltip>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Fragment>
  );
}
