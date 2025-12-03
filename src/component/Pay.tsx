import {Table} from "react-bootstrap";

const Pay = () => {
    return(
        <>
<div className="d-flex justify-content-between align-items-center">
<h4>전자결재</h4>
<div className=""></div>
</div>
<h5 className="mt-5 mb-2">내 기안문서</h5>
<Table variant="striped">
<thead>
    <tr>
        <th>기안일자</th><th>제목</th><th>기안자</th><th>결재자</th><th>진행상태</th><th>결재</th><th>기안서복사</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
    </tr>
</tbody>
</Table>
        </>
    )
}
export default Pay;