import { lazy, Suspense, useContext, useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Topbar } from './components/Topbar'
import { CountContext } from './context'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'
const Dashbaord = lazy(() => import("./components/Dashboard"))
const Landing = lazy(() => import("./components/Landing"))

// function App() {

//   return (
//     <>
//     <BrowserRouter>
//     <Topbar></Topbar>
//       <Routes>
//         <Route path='/dashboard' element={<Suspense fallback={"loading..."}> <Dashbaord /> </Suspense>}/>
//         <Route path='/' element={<Suspense fallback={"loading..."}> <Landing /> </Suspense>}/>
//       </Routes>
//     </BrowserRouter>
//     </>
//   )
// }

function App(){

  return (
    <div>
      <RecoilRoot>
      <Count ></Count> 
      </RecoilRoot>
    </div>
  )
}

function Count(){
  console.log("Count re-render")
  return (
    <div>
      <CountRender ></CountRender>
      <Button  ></Button>
    </div>
  )
}

function CountRender(){

  const count = useRecoilValue(countAtom)

  return (
    <div>
      Count: {count}
    </div>
  )
}

function Button(){
  const [count, setCount] = useRecoilState(countAtom);

  // const isEven = useMemo(()=>{
  //   return (count % 2 == 0);
  // },[count]);

  const isEven = useRecoilValue(evenSelector);
  
  return (
    <div>
      <button onClick={() => {setCount(count + 1)}}>Increase Count</button>
      <br></br>
      <button onClick={() => {setCount(count - 1)}}>Decrease Count</button>
      <br></br>
      {isEven ? "It is Even" : ""}
    </div>
  )
}

export default App
