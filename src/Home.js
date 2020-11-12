import React from 'react';
import { Row, Col, Table, Card, MediaBox } from 'react-materialize';
import Granite from './media/img/granite.gif'
class Home extends React.Component {
  render() {

    return (
      <span>



        <div className="slider">
          <ul className="slides">
            <li>
              <img src={Granite} />
              <div className="caption center-align">
                <h3 className='flow-text hvy'>LHP | Utah</h3>
                <h5 className="light grey-text text-lighten-3">Helping Utah Countertop Specialists make more money, without cutting more kitchens. POLISH. HONE. LEATHER. ICE.</h5>
              </div>
            </li>
          </ul>
        </div>



        <div className="container">


        </div><div className="container">
          <Row>

            <Col offset='l4' l={8} s={12}>
              <h4 className='left-align hvy'>PRICING</h4>
              <div className='phead'>
                Granite & Quartzite
          </div> <Card>
                <Table className=' striped'>
                  <thead>
                    <tr>
                      <th data-field="id">Finishes</th>
                      <th data-field="Cost">Cost per Sqft</th>
                      <th data-field="Sqft">Avg Slab Sqft</th>
                      <th data-field="Cost">Total Cost</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> <fc>Leather</fc></td>
                      <td>$6</td>
                      <td>40-70 </td>
                      <td>$240 - $420</td>
                    </tr>
                    <tr> <td><fc>Hone</fc></td>
                      <td>$6</td>
                      <td>
                        40-70</td>
                      <td>$240 - $420</td>
                    </tr>
                    <tr>
                      <td><fc> Polish</fc></td>
                      <td>$10 </td>
                      <td>40-70</td>
                      <td>$400 - $700</td>
                    </tr>
                  </tbody>
                </Table></Card>
              <div className='phead'>
                Marble
          </div><Card>
                <Table className='striped'>
                  <thead>
                    <tr>
                      <th data-field="id">Finishes</th>
                      <th data-field="Cost">Cost per Sqft</th>
                      <th data-field="Sqft">Avg Slab Sqft </th>
                      <th data-field="Cost">Total Cost</th>
                    </tr>

                  </thead>
                  <tbody>
                    <tr>
                      <td><fc>Leather </fc></td>
                      <td>$6</td>
                      <td>40-70</td>
                      <td>$240 - $420</td>
                    </tr>
                    <tr>
                      <td><fc>Hone</fc></td>
                      <td>$6</td>
                      <td>40-70</td>
                      <td>$240 - $420</td>
                    </tr>
                    <tr>
                      <td> <fc> Polish</fc></td>
                      <td>$10 </td>
                      <td>40-70</td>
                      <td>$400 - $700</td>
                    </tr>
                  </tbody>
                </Table></Card>
              <div className='phead'>Quartz </div>
              <Card>
                <Table className='striped'>
                  <thead>
                    <tr>
                      <th data-field="id">Finishes</th>
                      <th data-field="Cost">Cost per Sqft</th>
                      <th data-field="Sqft">Avg Slab Sqft</th>
                      <th data-field="Cost">Total Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <fc>Hone</fc>
                      </td>
                      <td>$6</td>
                      <td>40-70</td>
                      <td>$240 - $420</td>
                    </tr>
                    <tr>
                      <td><fc>Polish</fc></td>
                      <td>$10</td>
                      <td>40-70</td>
                      <td>$400 - $700</td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </Col>

          </Row>

        </div>
      </span>
    );
  }
}

export default Home;