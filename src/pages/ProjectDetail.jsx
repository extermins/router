import { useParams, useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "투두 앱",
    desc: "React로 만든 할일 관리 앱",
    stack: "React, LocalStorage",
    github: "https://github.com",
  },
  {
    id: 2,
    title: "날씨 앱",
    desc: "OpenWeather API를 활용한 날씨 앱",
    stack: "React, API",
    github: "https://github.com",
  },
  {
    id: 3,
    title: "포트폴리오 사이트",
    desc: "React Router로 만든 이 사이트",
    stack: "React, React Router",
    github: "https://github.com",
  },
];

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div>
        <h1>존재하지 않는 프로젝트입니다.</h1>
        <button onClick={() => navigate("/projects")}>목록으로 돌아가기</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>← 뒤로 가기</button>
      <h1>{project.title}</h1>
      <p>{project.desc}</p>
      <p>기술 스택: {project.stack}</p>
      <a href={project.github} target="_blank" rel="noreferrer">
        GitHub 보러가기
      </a>
    </div>
  );
}

export default ProjectDetail;
