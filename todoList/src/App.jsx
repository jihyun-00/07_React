import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

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

    // <>
    //   <button onClick={() => setShowExam(!showExam)}>클릭</button>

    //   {/* showExam이 true면 화면에 Exam1 컴포넌트 호출하여 렌더링함 */}
    //   {showExam && <Exam2 jihyun="Hot" test="Dog" />}
    // </>
    <TodoList />
  );
}

export default App;
