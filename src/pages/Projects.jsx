import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "투두 앱",
    desc: "React로 만든 할일 관리 앱",
    stack: "React, LocalStorage",
  },
  {
    id: 2,
    title: "날씨 앱",
    desc: "OpenWeather API를 활용한 날씨 앱",
    stack: "React, API",
  },
  {
    id: 3,
    title: "포트폴리오 사이트",
    desc: "React Router로 만든 이 사이트",
    stack: "React, React Router",
  },
];

function Projects() {
  return (
    <div>
      <h1>프로젝트</h1>
      {projects.map((project) => (
        <div
          key={project.id}
          style={{
            border: "1px solid #ddd",
            padding: "1rem",
            marginBottom: "1rem",
            borderRadius: "8px",
          }}
        >
          <h2>{project.title}</h2>
          <p>{project.desc}</p>
          <p>기술 스택: {project.stack}</p>
          <Link to={`/projects/${project.id}`}>자세히 보기 →</Link>
        </div>
      ))}
    </div>
  );
}

export default Projects;
