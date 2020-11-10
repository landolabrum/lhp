import React, { Component } from 'react';
import { Row, Col, Table, Divider } from 'react-materialize';

class About extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <div className="container bod">
        <h4 className='left-align hvy'>PRICING</h4>
        {/* <div className="section">
          <div className="row">
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center light-blue-text"><i className="material-icons">flash_on</i></h2>
                <h5 className="center">Leather</h5>

                <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center light-blue-text"><i className="material-icons">group</i></h2>
                <h5 className="center">Hone</h5>

                <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center light-blue-text"><i className="material-icons">settings</i></h2>
                <h5 className="center">Polish</h5>

                <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
              </div>
            </div>
          </div>

        </div>
        <br></br> */}
        <Row className='phead'>
          <Col s={12}>
            Granite & Quartzite
</Col>
        </Row>
        <Table className='striped'>
          <thead>
            <tr>
              <th data-field="id">
                Finishes
      </th>
              <th data-field="Cost">
                Cost per Sqft
      </th>
              <th data-field="Sqft">
                Avg Slab Sqft
      </th>
              <th data-field="Cost">
                Total Cost
      </th>
            </tr>

          </thead>
          <tbody>
            <tr>
              <td>
                <fc>
                  Leather
                </fc>
              </td>
              <td>
                $6
      </td>
              <td>
                40-70
      </td>
              <td>$240 - $420
              </td>
            </tr>
            <tr>
              <td>
                <fc>
                  Hone
                </fc>
              </td>
              <td>
                $6
      </td>
              <td>
                40-70
      </td>
              <td>$240 - $420
              </td>
            </tr>
            <tr>
              <td>
                <fc>
                  Polish</fc>
              </td>
              <td>
                $10
      </td>
              <td>
                40-70
      </td>
              <td>$400 - $700
              </td>
            </tr>
          </tbody>
        </Table>
        <Row className='phead'>
          <Col s={12}>
            Marble
</Col>
        </Row>
        <Table className='striped'>
          <thead>
            <tr>
              <th data-field="id">
                Finishes
      </th>
              <th data-field="Cost">
                Cost per Sqft
      </th>
              <th data-field="Sqft">
                Avg Slab Sqft
      </th>
              <th data-field="Cost">
                Total Cost
      </th>
            </tr>

          </thead>
          <tbody>
            <tr>
              <td>
                <fc>
                  Leather
                </fc>
              </td>
              <td>
                $6
      </td>
              <td>
                40-70
      </td>
              <td>$240 - $420
              </td>
            </tr>
            <tr>
              <td>
                <fc>
                  Hone
                </fc>
              </td>
              <td>
                $6
      </td>
              <td>
                40-70
      </td>
              <td>$240 - $420
              </td>
            </tr>
            <tr>
              <td>
                <fc>
                  Polish</fc>
              </td>
              <td>
                $10
      </td>
              <td>
                40-70
      </td>
              <td>$400 - $700
              </td>
            </tr>
          </tbody>
        </Table>
        <Row className='phead'>
          <Col s={12}>
            Quartz
</Col>
        </Row>
        <Table className='striped'>
          <thead>
            <tr>
              <th data-field="id">
                Finishes
      </th>
              <th data-field="Cost">
                Cost per Sqft
      </th>
              <th data-field="Sqft">
                Avg Slab Sqft
      </th>
              <th data-field="Cost">
                Total Cost
      </th>
            </tr>

          </thead>
          <tbody>
            <tr>
              <td>
                <fc>
                  Hone
                </fc>
              </td>
              <td>
                $6
      </td>
              <td>
                40-70
      </td>
              <td>$240 - $420
              </td>
            </tr>
            <tr>
              <td>
                <fc>
                  Polish</fc>
              </td>
              <td>
                $10
      </td>
              <td>
                40-70
      </td>
              <td>$400 - $700
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      
    );
  }
}

export default About;