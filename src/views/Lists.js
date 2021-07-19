import { Table, Row } from "react-materialize"
import ListItem, { TableHeaders, TableItem, RowItem } from "./Items"


function TableView(props) {
  return <div>
    <h1
      className={props.items.title.class}
    >{props.items.title.txt}: Table View</h1>
    <Table>
      <tr>
        {props.items.data.map((i) =>
          <TableHeaders key={i}
            data={i}
          />
        )}
      </tr>
      <tr>
        {props.items.data.map((i) =>
          <TableItem key={i}
            data={i}
          />
        )}
      </tr>

    </Table>
  </div>
}

function GridView(props) {
  return <Row>
        <h1
      className={props.items.title.class}
    >{props.items.title.txt} Row View</h1>
        {props.items.data.map((i) =>
          <RowItem key={i}
            data = {i}
          />
        )}
  </Row>
}

export default function List(props) {
  const items = props.items;
  if (props.items.type === "table") {
    return <TableView items={items} />
  }
  else if (props.items.type === "grid") {
    return <GridView items={items} />
  }
  return (
    <ul>
      {items.map((i) =>
        <ListItem key={i.toString()}
          value={i} />
      )}
    </ul>
  );
}