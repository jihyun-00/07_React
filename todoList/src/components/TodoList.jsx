import { useEffect, useState } from 'react';
import { axiosApi } from "../api/axiosAPI";


const TodoList = () => {
  const [todoListData, setTodoListData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const getTodoListData = async () => {
    try {
      const resp = await axiosApi.get("/select");
      console.log(resp.data);

      if (resp.status === 200) {
        setTodoListData(resp.data);
      }
    } catch (error) {
      console.log("할 일 목록 조회 중 예외 발생 : ", error);
    }
  };

  const changeYN = async (todo) => {
    try {
      const resp = await axiosApi.put("/change", {
      todoNo: todo.todoNo,
      complete: todo.complete === "Y" ? "N" : "Y" // 상태 토글
    });
      
      console.log(resp.data);

      if (resp.status === 200) {
        setTodoListData(resp.data);
        getTodoListData();
      }
    } catch (error) {
      console.log("할 일 완료여부 변경 중 예외 발생 : ", error);
    }
  };

    const deleteTodo = async(todo) => {
    if(window.confirm(todo.todoNo + "번 할 일을 삭제하시겠습니까?")) {
      try{
        const resp = await axiosApi.put("/delete", {todoNo : todo.todoNo});

        if(resp.status === 200) {
          alert("삭제되었습니다.");
          getTodoListData(); // 꼭 필요함!
          // 복구된 데이터 확인 (업데이트된 내역을 확인하기 위해서)
        }


      } catch(error) {
        console.log(error);
      }
    }
  }

  // 할 일 추가
  async function addTodoList() {
    const {todoTitle, todoContent} = form; //form 상태 안에 있는 값들 하나씩 꺼내오기

    if(todoTitle.length === 0 || todoContent.length === 0) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    try{

      const response = await axiosApi.post("/add", {
        todoTitle : title,
        todoContent : content
      });

      if(response.status === 201) {
        const result = response.data; // 서버에서 응답해준 데이터 (body)
        alert("할 일이 추가되었습니다.");
        console.log(result);
      }

      // 입력필드 초기화
      setForm({
      title: "",
      content : ""
    });


    } catch(err) {
      alert(err.response.data);
      // 409일 때, 500일 때 응답받은 body 내용이 반영되어 alert 출력할 수 있게끔 함.

    }

  }

  useEffect(() => {
    getTodoListData();
    // changeYN();
    // deleteTodo();

  }, []);

  useEffect(() => {
    // 추후 다른 효과 필요 시 사용
  }, [todoListData]);

  return (
     <div>
        <table border={1}>
          <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>내용</th>
          <th>완료여부</th>
          <th>등록일</th>
          <th>삭제</th>
        </tr>
          </thead>

          <tbody>
        {todoListData && todoListData.map((todo, index) => (
        <tr key={index}>
          <td>{todo.todoNo}</td>
          <td>{todo.todoTitle}</td>
          <td>{todo.todoContent}</td>
          <td><button onClick={()=> changeYN(todo)}>{todo.complete === "Y" ? "완료" : "미완료"}</button></td>
          <td>{todo.regDate}</td>
          <td><button className="deleteBtn" onClick={()=> deleteTodo(todo)}>삭제</button></td>
        </tr>
        ))}

        </tbody>
        </table>
        제목 : <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
        내용 : <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
            <button>Add Todo</button>
      </div>
  );
};

export default TodoList;
