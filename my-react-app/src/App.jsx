import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Exam1 from "./components/Exam1";
import Exam2 from "./components/Exam2";

function App() {
  // 상태(state)
  const [showExam, setShowExam] = useState(true);

  return (
    // js 주석
    // <></> : fragment (html 역할 X)
    // <>
    //   <h1>Hellow World!</h1>
    //   {/* jsx 주석 */}
    //   <h1>Hellow World!</h1>
    // </>

    <>
      <button onClick={() => setShowExam(!showExam)}>클릭</button>

      {/* showExam이 true면 화면에 Exam1 컴포넌트 호출하여 렌더링함 */}
      {showExam && <Exam2 jihyun="Hot" test="Dog" />}
    </>
  );
}

export default App;
