import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props{
    children:ReactNode;
}

const ProtectedRoute = ({children}:Props) => {
    const token = localStorage.getItem("token");
    //브라우저의 localStorage에서 token값을 가져옵니다

    if(!token){//토큰이 널지 null undefine 빈 값이라면
        alert("로그인이 필요합니다.");
        //로그인이 필요하다는 메세지 출력
        return <Navigate to ="/login" replace/>;
        //로그인 페이지로 리다이렉트
    }

    return <>{children}</>;//토큰이 존재하면 원래 접근하려던 커포넌트를 그대로 렌더링
};

export default ProtectedRoute;
//다른 파일에서 사용할수 있도록 내보냄