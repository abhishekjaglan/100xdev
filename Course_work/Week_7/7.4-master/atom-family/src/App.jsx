
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, atom, useSetRecoilState } from 'recoil';
import { todosAtomFamily } from './atoms';
import { useEffect } from 'react';

// const todoAtom = atom({
//   key: "todoAtom",
//   default:{
//     id:1,
//     title: "Go to Gym",
//     description: "adsadsfaf",
//     completed: false
//   }
// });

function App() {
  return <RecoilRoot>
    <UpdaterComponent/>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
}

function UpdaterComponent(){

  const UpdateTodo = useSetRecoilState(todosAtomFamily(2));

  useEffect(() => {
    setTimeout(() => {
      UpdateTodo({
        id: 2,
        title: "New Todo",
        description: "New Todo description"
      })
    },5000)
  }, [])
  
}

function Todo({id}) {
   const [todo, setTodo] = useRecoilState(todosAtomFamily(id));
   console.log(todo)

  return (
    <>
      {todo.title} <br/>
      {todo.description}
      <br />
      <br />
    </>
  )
}

export default App
