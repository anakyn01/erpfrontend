
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
        <Col md={6}>
        <div className="">
            <Callendar/>
        </div>
        </Col>
        
        <Col md={6}>
        <div className="">
            <Pay/>
            <Notice/>
        </div>
        </Col>
    </Row>

    <Row>
        <Col md={12}>
<OrderState/>
        </Col>
    </Row>
</Container>
        </>
    )
}
export default Admin;