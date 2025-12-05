
import {Container, Row, Col, Button, Card,Table} from "react-bootstrap"
import Callendar from "../component/Callenadar";
import Pay from "../component/Pay";
import Notice from "../component/Notice";
import OrderState from "../component/OrderState";


const Admin= () => {

    return(
        <>
<Container fluid>
    <Row>
        <Col md={1}></Col>
        <Col md={5}>
        <div className="">
            <Callendar/>
        </div>
        </Col>
        
        <Col md={5}>
        <div className="">
            <Pay/>
            <Notice/>
        </div>
        </Col>
        <Col md={1}></Col>
    </Row>

    <Row>
        <Col md={1}></Col>
        <Col md={10}>
            <OrderState/>
        </Col>
        <Col md={1}></Col>
    </Row>
</Container>
        </>
    )
}
export default Admin;