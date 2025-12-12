import {Container, Row, Col} from "react-bootstrap";

const Top = () => {
    return(
        <>
<div className="header-wrap bg-white p-1">
<Container fluid>
    <Row>
        <Col md={12}>
<a href="">자금 현황표</a>
<a href="" className="mx-3">지급어음조회</a>
<a href="">견적서입력</a>
<a href="" className="mx-3">구매조회</a>
<a href="">손익계산서</a>
<a href="" className="mx-3">판매입력2</a>
<a href="">재고변동표</a>
<a href=""className="mx-3">판매입력</a>
<a href="">재고현황</a>
<a href=""className="mx-3">일반전표</a>
<a href="">판매조회</a>
<a href=""className="mx-3">거래처리스트</a>
        </Col>
    </Row>
</Container>
</div>
        </>
    )
}
export default Top;