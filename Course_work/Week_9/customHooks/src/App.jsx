// 
import { useEffect, useState } from 'react'
import axios from 'axios'

function useTodos(n){

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData(){
    console.log('Inside getData')
      await axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      });
  }

  useEffect(() => {
    const value = setInterval(() => {
      getData();
    }, n * 1000);

    return () => {
      // stops the old clock
      clearInterval(value);
    }
  }, [n])

  return {todos , loading};
}

function useIsOnline(){

  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    window.addEventListener('online', () =>  setIsOnline(true));
    window.addEventListener('offline', () =>  setIsOnline(false));
  }, []);

  return isOnline;
}

const useMousePointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    // return () => {
    //   window.removeEventListener('mousemove', handleMouseMove);
    // };
  }, []);

  return position;
};

function deBounce(value, delay){
  const [debouncedValue, setDebouncedValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    }
  }, [value, delay]);

  return debouncedValue;
}

function App() {

  const mousePointer = useMousePointer();

  // const {todos, loading} = useTodos(5);
  // const isOnline = useIsOnline();
  // console.log(isOnline);

  // if(isOnline){
  //   return <>
  //     You're online!
  //   </>
  // }else{
  //   return (
  //     <>
  //       {/* {todos.map(todo => <Track key={todo.id} todo={todo} />)} */}
  //       You're offline!
  //     </>
  //   )
  // }
  return <>
    Your mouse pointer is at x: {mousePointer.x}, y: {mousePointer.y}
  </>
};

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
};

export default App