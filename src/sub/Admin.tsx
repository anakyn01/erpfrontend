
import {Container, Row, Col, Button, Card,Table} from "react-bootstrap"
import Callendar from "../component/Callenadar";
import Pay from "../component/Pay";
import Notice from "../component/Notice";


const Admin= () => {

    return(
        <>
<Container>
    <Row>
        <Col md={6}>
            <Callendar/>
        </Col>
        
        <Col md={6}>
            <Pay/>
            <Notice/>
        </Col>
    </Row>
</Container>
        </>
    )
}
export default Admin;