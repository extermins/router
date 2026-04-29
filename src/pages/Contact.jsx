import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("메시지가 전송되었습니다!");
    navigate("/");
  };

  return (
    <div>
      <h1>연락처</h1>
      <p>이메일: hongildong@email.com</p>
      <p>GitHub: github.com/hongildong</p>

      <h2>메시지 보내기</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>이름</label>
          <br />
          <input type="text" placeholder="이름을 입력하세요" required />
        </div>
        <div>
          <label>메시지</label>
          <br />
          <textarea placeholder="메시지를 입력하세요" rows={4} required />
        </div>
        <button type="submit">전송하기</button>
      </form>
    </div>
  );
}

export default Contact;
