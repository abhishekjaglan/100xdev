import { useState } from 'react'

function App() {

  return (
    <>
      <HeaderWithButton></HeaderWithButton>
      <Header title={"John"}></Header>
      <Header title={"Wright"}></Header>
      <Header title={"Homie"}></Header>
      <Header title={"Tosh"}></Header>
    </>
  )
}

function HeaderWithButton(){
  const [title, setTitle] = useState("Abhishek");

  function genRandomNum(){
    const randomNum = Math.random() * 100;
    setTitle(`${randomNum}`);
  }

  return <>
    <button onClick={genRandomNum}>Click to change title!</button>
    <Header  title={title}></Header>
  </>
}

function Header({title}){
  return <>
    <h1>My name is: {title}</h1>
  </>
}

export default App
