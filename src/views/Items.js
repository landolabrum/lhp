import { Col } from "react-materialize"

export function TableHeaders(i) {
    i = i.data
    return <th className={i.hdr.class}>{i.hdr.txt}</th>;
}
export function TableItem(i) {
    i = i.data
    return <td className={i.value.class}>{i.value.txt}</td>;
}

export function RowItem(i) {
    i = i.data
    return <Col
        s={i.s}
        m={i.m}
        l={i.l}
        offset={i.offset}
        push={i.push}
        pull={i.pull}
        className={i.class}
    >
        <p className={i.hdr.class}>{i.hdr.txt}</p >
        <span className={i.value.class}>{i.value.txt}</span>
    </Col>
}

export default function ListItem(i) {
    return <li>{i.value}</li>;
}