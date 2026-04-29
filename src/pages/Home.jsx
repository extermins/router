import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>안녕하세요 👋</h1>
      <p>프론트엔드 개발자 홍길동입니다.</p>
      <p>React와 JavaScript를 좋아합니다.</p>
      <button onClick={() => navigate("/projects")}>프로젝트 보러가기 →</button>
    </div>
  );
}

export default Home;
