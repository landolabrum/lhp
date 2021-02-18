import React from 'react';
import { Row, Col, Table, Card } from 'react-materialize';
import granite from './media/img/granite.gif'
import LazyHero from 'react-lazy-hero';

class Home extends React.Component {

  render() {
    var lp = 8
    var hp = 5
    var pp = 5

    var qhp = 8
    var qpp = 8

    var lux = 15
    var min = 45
    var max = 70
    var crd = <Card>
      <Table className=' striped'>
        <thead>
          <tr>
            <th data-field="id">Finishes</th>
            <th data-field="Cost">Cost<sm>Sqft</sm></th>
            <th data-field="Sqft">Avg Slab<sm>Sqft</sm></th>
            <th data-field="Cost">Total Cost</th></tr>
        </thead>
        <tbody>
          <tr> <td><fc>Hone</fc></td>
            <td>${hp}</td>
            <td>{min} - {max} </td>
            <td>${hp * min} - ${hp * max}</td>
          </tr>
          <tr>
            <td><fc> Polish</fc></td>
            <td>${pp}</td>
            <td>{min} - {max} </td>
            <td>${pp * min} - ${pp * max}</td>
          </tr>
          <tr>
            <td> <fc>Leather</fc></td>
            <td>${lp}</td>
            <td>{min} - {max} </td>
            <td>${lp * min} - ${lp * max}</td>
          </tr>
          <tr>
            <td><fc>Ice</fc></td>
            <td>${lux}</td>
            <td>{min} - {max} </td>
            <td>${lux * min} - ${lux * max}</td>
          </tr>
          <tr>
            <td><fc>Orange Peel</fc></td>
            <td>${lux}</td>
            <td>{min} - {max} </td>
            <td>${lux * min} - ${lux * max}</td>
          </tr>
          <tr>
            <td><fc>Lux</fc></td>
            <td>${lux}</td>
            <td>{min} - {max} </td>
            <td>${lux * min} - ${lux * max}</td>
          </tr>
        </tbody>
      </Table>
    </Card>
    var qrtz = <Card>
      <Table className=' striped'>
        <thead>
          <tr>
            <th data-field="id">Finishes</th>
            <th data-field="Cost">Cost<sm>Sqft</sm></th>
            <th data-field="Sqft">Avg Slab<sm>Sqft</sm></th>
            <th data-field="Cost">Total Cost</th></tr>
        </thead>
        <tbody>
          <tr> <td><fc>Hone</fc></td>
            <td>${qhp}</td>
            <td>{min} - {max} </td>
            <td>${qhp * min} - ${qhp * max}</td>
          </tr>
          <tr>
            <td><fc> Polish</fc></td>
            <td>${qpp}</td>
            <td>{min} - {max} </td>
            <td>${qpp * min} - ${qpp * max}</td>
          </tr>
          <tr>
            <td> <fc>Leather</fc></td>
            <td>${lp}</td>
            <td>{min} - {max} </td>
            <td>${lp * min} - ${lp * max}</td>
          </tr>
          <tr>
            <td><fc>Ice</fc></td>
            <td>${lux}</td>
            <td>{min} - {max} </td>
            <td>${lux * min} - ${lux * max}</td>
          </tr>
          <tr>
            <td><fc>Orange Peel</fc></td>
            <td>${lux}</td>
            <td>{min} - {max} </td>
            <td>${lux * min} - ${lux * max}</td>
          </tr>
          <tr>
            <td><fc>Lux</fc></td>
            <td>${lux}</td>
            <td>{min} - {max} </td>
            <td>${lux * min} - ${lux * max}</td>
          </tr>
        </tbody>
      </Table>
    </Card>


    var ecrd = <Card>
      <Table className=' striped'>
        <thead>
          <tr>
            <th data-field="id">Finishes</th>
            <th data-field="Cost">Cost <sm>Sqft</sm></th>
            <th data-field="Sqft">Avg Slab <sm>Sqft</sm></th>
            <th data-field="Cost">Total Cost</th></tr>
        </thead>
        <tbody>

          <tr> <td><fc>Hone</fc></td>
            <td>${lux}</td>
            <td>{min} - {max} </td>
            <td>${lux * min} - ${lux * max}</td>
          </tr>
          <tr>
            <td><fc> Polish</fc></td>
            <td>${lux}</td>
            <td>{min} - {max} </td>
            <td>${lux * min} - ${lux * max}</td>
          </tr>
          <tr>
            <td> <fc>Leather</fc></td>
            <td>${lux}</td>
            <td>{min} - {max} </td>
            <td>${lux * min} - ${lux * max}</td>
          </tr>
          <tr>
            <td><fc>Ice</fc></td>
            <td>${lux}</td>
            <td>{min} - {max} </td>
            <td>${lux * min} - ${lux * max}</td>
          </tr>
          <tr>
            <td><fc>Orange Peel</fc></td>
            <td>${lux}</td>
            <td>{min} - {max} </td>
            <td>${lux * min} - ${lux * max}</td>
          </tr>
          <tr>
            <td><fc>Lux</fc></td>
            <td>${lux}</td>
            <td>{min} - {max} </td>
            <td>${lux * min} - ${lux * max}</td>
          </tr>
        </tbody>
      </Table>
    </Card>

    return (
      <span>
        <LazyHero
          imageSrc={granite}
          opacity='0'
        >
          <Row><Col s={12}>
            <h4 className='white-text  hvy'>LHP | Utah</h4>
            <h5 className="light grey-text text-lighten-3 ">Leather, Hone, Polish</h5>
          </Col>
          </Row>
        </LazyHero>
        <div className="container">
        </div><div className="container">
          <Row>
            <Col offset='l2' l={8} s={12}>
              <h4 className='left-align hvy'>PRICING</h4>
              <div className='phead'>Quartz / Engineered Stone / Man-Made Stone</div>
              {qrtz}
              <div className='phead'>
                Granite / Quartzite
              </div>
              {crd}


              <div className='phead'>Marble / Travertine / Limestone</div>
              {crd}
              <div className='phead'>Exotic Stone / Semi-Precious Stones</div>
              {ecrd}
              <span className='footer-copyright'>* $250 minimum is required for any of the services listed above.</span>
            </Col>
          </Row>

        </div>
      </span>
    );
  }
}

export default Home;