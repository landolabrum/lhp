import { Modal } from 'react-materialize';

export default function Default_Modal(props) {
    return <Modal
    id={props.modalId}
    className="bottom-sheet"
     header={props.header} trigger={props.trigger}>
    {props.data}
  </Modal>;
  }