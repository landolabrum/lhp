import React from "react";
import { Table, Row, Col, Card } from 'react-materialize';
import { stockData } from "../json/price";

function Is(title, data_row){
   if(data_row != null){
      return(
         <tr>
            <td>
               {title}
            </td>
            <td>
               ${data_row.cost}
            </td>
            <td>
               {data_row.avg[0]} - {data_row.avg[1]}
            </td>
            <td>
               ${data_row.avg[0]*data_row.cost} - ${data_row.avg[1]*data_row.cost}
            </td>
         </tr>
      )
   }
}
const Stocks = () => {
   return (
      
         <Row>
           <Col s={12} m={8} l={6} offset="m2 l3">
           <Card title="Pricing">
            {stockData.map((data, key) => {
               return (
                  <>
                     <header className="red white-text">{data.title}</header>
                     <Table key={key} className='striped white'>
                        <thead>
                           <tr>
                              <th data-field="id">Finishes</th>
                              <th data-field="Cost">Cost<sm>Sqft</sm></th>
                              <th data-field="Sqft">Avg Slab<sm>Sqft</sm></th>
                              <th data-field="Cost">Total Cost</th></tr>
                        </thead>
                        <tbody>
                              {Is("hone", data.hone)}
                              {Is("polish", data.polish)}
                              {Is("leather", data.leather)}
                              {Is("lux", data.lux)}
                              {Is("ice", data.ice)}
                              {Is("Orange Peal", data.orange_peal)}
                           
                        </tbody>
                     </Table>
                     </>
               );
            })}

      </Card>
      </Col>
         </Row>
   );
};
export default function Prices() {
   return <Stocks />
}