// 상태 내리꽂기 (props Drilling) : 부모가 가진 데이터를 자식에게 전달해서
//                                 자식이 사용할 수 있게끔 하는 것.

import { useState } from "react";

// 부모 컴포넌트
const Exam3 = () => {
    const [name, setName] = useState("홍길동");

    // 자식 컴포넌트 (Child에 부모의 상태인 name 값을
    // username이라는 key에 세팅하여 props를 통해 전달)
    return <Child1 usernmae={name} age="10"/>;
};

// 자식 컴포넌트
const Child1 =(props) =>{

    return ( 
    <div>
        <p>나는 {props.usernmae}입니다.</p>
        <p>나는 {props.age}세입니다.</p>

        <Child2 name={props.usernmae}/>
    </div>
    )
};

// 자식의 자식 컴포넌트
const Child2 =({name}) =>{
    // props 대신 {key}로 값을 꺼내올 수 있음
    return <p>{name}</p>;
};

export default Exam3;