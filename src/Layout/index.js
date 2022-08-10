import { Fragment } from "react";
import Header from "./Header";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Layout = (props) => {
    return (
        <Fragment>
            <Header />
            
            <Container>
                <Row>
                    <main>{props.children}</main>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Layout;