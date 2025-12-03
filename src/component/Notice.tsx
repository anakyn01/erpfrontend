import {Table} from "react-bootstrap";

const Notice = () => {
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
<th>제목</th><th>작성일</th><th>작성자</th><th>조회</th><th>첨부</th>
    </tr>
</thead>
<tbody>
    <tr>
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
export default Notice;