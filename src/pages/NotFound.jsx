import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1 style={{ fontSize: "80px", margin: 0 }}>404</h1>
      <h2>페이지를 찾을 수 없습니다</h2>
      <p>주소가 잘못되었거나 삭제된 페이지입니다.</p>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          marginTop: "1rem",
        }}
      >
        <button onClick={() => navigate(-1)}>← 이전 페이지</button>
        <Link to="/">홈으로 가기</Link>
      </div>
    </div>
  );
}

export default NotFound;
