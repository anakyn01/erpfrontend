import {Table} from "react-bootstrap";

const OrderState = () => {
    return(
        <>
<div className="order-wrap">
<h5 className="my-2 fs-14-400-gray">오더관리진행단계</h5>
<div className="table-wrap">
<Table responsive className="order">
<colgroup>
<col style={{width:"10%"}}/>
<col style={{width:"15%"}}/>
<col style={{width:"70%"}}/>
<col style={{width:"5%"}}/>
</colgroup>
<thead>
    <tr>
        <th>오더관리번호</th>
        <th>오더관리명</th>
        <th>진행단계</th>
        <th>상세</th>
    </tr>
</thead>
<tbody></tbody>
<tfoot></tfoot>
</Table>
</div>
</div>
        </>
    )
}
export default OrderState;