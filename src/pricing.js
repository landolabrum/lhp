import React from 'react';
import { Row, Col, Table, Card, Container } from 'react-materialize';
import granite from './media/img/granite.gif'
import LazyHero from 'react-lazy-hero';
import bg from './media/img/hero_center.svg'
import slabs from './media/img/slabs.png'
class Pricing extends React.Component {
  render() {
    var lp = 8
    var hp = 6
    var pp = 6

    var qhp = 8
    var qpp = 8

    var lux = 15
    var min = 45
    var max = 75
    var crd = <span>

      <Table className='striped'>
        <h1>TEST</h1>
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
    </span>
    var qrtz = <span>
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
    </span>


    var ecrd = <span>
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
    </span>

    return (
      <span>
        <Row>

          <Col offset='l1 m1' l={6} m={10} s={12}>
          <h3 className='white-text hdr'>PRICING</h3>

            <Card>
              <h3 className="flow-text tit tbody">Quartz / Engineered Stone / Man-Made Stone</h3>
              {qrtz}
              <h3 className="flow-text tit">
                Granite / Quartzite
              </h3>
              {crd}


              <h3 className="flow-text tit">Marble / Travertine / Limestone</h3>
              {crd}
              <h3 className="flow-text tit">Exotic Stone / Semi-Precious Stones</h3>
              {ecrd}

            </Card>
            <span className='footer-copyright'>* $250 minimum is required for any of the services listed above.</span>

          </Col>
   
        </Row>

      </span>
    );
  }
}
export class Full extends React.Component {
  render() {
    return (<span>
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
     
      <img className='bgimg' src={bg}></img>
      <br />

      <Pricing />
    </span>
    )
  }
}

export default Full;