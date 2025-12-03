
import {Container, Row, Col, Button, Card,Table} from "react-bootstrap"
import Callendar from "../component/Callenadar";


const Admin= () => {

    return(
        <>
<Container>
    <Row>
        <Col md={6}>
<Callendar/>
        </Col>
        <Col md={6}>

        </Col>
    </Row>
</Container>
        </>
    )
}
export default Admin;