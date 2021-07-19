import { useLocation, Link } from 'react-router-dom';
import { Container, Row, Col, Icon, Section } from "react-materialize"
import Nav from '../elements/Nav'

export default function NoMatch() {
    let location = useLocation();
    return (
        [<Nav/>,
        <Container className="grey-text">
            <h5><Icon>error_outline</Icon> The page, <i className="black-text">{location.pathname.replace("/", "")}</i> doesn't exist. </h5>
            <Link className="right" to="/">Return Home</Link>
        </Container>]
    );
}