import React, { useEffect, useState, Fragment } from 'react';

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


function temporaryHide(str) {
  const arr = str.split('')
  const arr1 = arr.slice(0,3)
  const arr2 = arr.slice(3, arr.length).map(x => '*')
  return arr1.concat(arr2).join('')
}

export default function LivePreviewExample() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://leads-strapi.herokuapp.com/leads', {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOTUzZTQxM2UzMzNlMmYwYzQ5NTcyNiIsImlhdCI6MTYwMzgyMTc2NiwiZXhwIjoxNjA2NDEzNzY2fQ.Dt4uU7D7bHeA-794Ad9RfAiRpgPwUPP7FZLJRmuktBM `,
      }})
    .then(function(response) {
      return response.json()
    }).then(function(json = []) {
      setData(json)
      console.log('parsed json', json)
    }).catch(function(ex) {
      setData([])
      console.log('parsing failed', ex)
    })
  }, [])
  return (
    <Fragment>
      <Card className="card-box mb-5">
        <CardBody>
          <div className="table-responsive-md">
            <Table hover borderless className="text-nowrap mb-0">
              <thead>
                <tr>
                  <th>#</th>
                  <th className="text-left">Name</th>
                  <th className="text-center">Category</th>
                  <th className="text-center">Credits</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
              {data.map((lead, idx) => {
                return (
                  <tr key={lead.id}>
                    <td>{idx}</td>
                    <td>
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="..."
                        >
                          {lead.first_name} {lead.last_name}
                        </a>
                        <span className="text-black-50 d-block">
                          {lead.description}
                        </span>
                      </div>
                    </td>
                    <td className="text-center">
                      {lead.categories.map(category => (
                        <Badge 
                          className="text-warning px-4"
                        >
                          {category}
                        </Badge>
                      ))}
                    </td>
                    <td className="text-center">
                      {lead.price}
                    </td>
                    <td className="text-center">
                      <Button
                        size="sm"
                        color="neutral-dark"
                        id="ViewDetailsTooltip6">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </Button>
                      <UncontrolledTooltip target="ViewDetailsTooltip6">
                      Action
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                  )
                })}
                
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Fragment>
  );
}
