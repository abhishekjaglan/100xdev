import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'
import axios from 'axios';

// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then((res) => {
//         console.log(res.data)
//         setTodos(res.data.todos)
//       })
//   }, []);

//   return (
//     <>
//       {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/> )}
//     </>
//   )
// }

// function Todo({title, description}){
//   return <>
//     <h1>{title}</h1>
//     <p>{description}</p>
//   </>
// }

// function App(){
  
//   const [btnNum, setBtnNum] = useState(1)

//   function BtnNumHandler(value){
//     setBtnNum(value)
//   }

//   return <>
//   <button  onClick={() => BtnNumHandler(1)}>1</button>
//   <button onClick={() => BtnNumHandler(2)}>2</button>
//   <button onClick={() => BtnNumHandler(3)}>3</button>
//   <button onClick={() => BtnNumHandler(4)}>4</button>
//   <button onClick={() => BtnNumHandler(5)}>5</button>
//   <Todo id={btnNum}></Todo>
//   </>
// }

// function Todo({id}){
//   const [todos, setTodos] = useState({});

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todo?id="+id)
//   .then((res) => {
//     console.log(res.data)
//     setTodos(res.data.todo)
//   })
//   }, [id])

//     return<>
//     <br></br>
//     ID:{id}
//     <h1>{todos.title}</h1>
//     <p>{todos.description}</p>
//   </>

// }

// export default App;

function App(){
  const [count, setCount] = useState(0);
  const [sumNum, setSumNum] = useState(1);
  
  let sum = useMemo(() => {
  let finalSum = 0;

  for(let i = 1; i<=sumNum; i++){
    finalSum += i;
  }
    return finalSum;
  }, [sumNum]);


  return <div>
    <input type='text' placeholder='Enter the number' onChange={(e) => setSumNum(e.target.value)}></input>
    <div>Sum from 1-{sumNum}: {sum}</div>
    <button onClick={()=>{setCount(count+1)}}>Counter ({count})</button>
  </div>
}

export default App;

// import { memo, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0)

//   const onClick = useCallback(() => {
//     console.log("child clicked")
//   },[])

//   // function onClick (){
//   //     console.log("child clicked")
//   // }

//   return <div>
//     <Child onClick={onClick} />
//     <button onClick={() => {
//       setCount(count + 1);
//     }}>Click me {count}</button>
//   </div>
// }

// const Child = memo(({onClick}) => {
//   console.log("child render")

//   return <div>
//     <button onClick={onClick}>Button clicked</button>
//   </div>
// })

// export default App;