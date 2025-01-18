import React from 'react';

function App() {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <CustonButton count={count} setCount={setCount}></CustonButton>
    </div>
  )
}

function CustonButton(props){

  function onClickHandler(){
    props.setCount(props.count + 1);
  }

  // return React.createElement(
  //   'button', 
  //   {onClick: onClickHandler},
  //   `Counter: ${props.count}`
  // );
  return <button onClick={onClickHandler}>
    Counter: {props.count}
  </button>
}

export default App