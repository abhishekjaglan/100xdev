import { RevenueCard } from "./components/RevenueCard"


function App() {

  return (
    <>
      {/* <div className='flex justify-around'>
        <div className="bg-red-300">One</div>
        <div className="bg-green-500">Two</div>
        <div className="bg-yellow-700">Three</div>
      </div>

      <br></br>

      <div className='grid grid-cols-12'> 
        <div className="bg-red-300 col-span-4">One</div>
        <div className="bg-green-500 col-span-1">Two</div>
        <div className="bg-yellow-700 col-span-2">Three</div>
        <div className="bg-blue-900 col-span-1">Four</div>
        <div className="bg-red-900 col-span-4">Five</div>
      </div>

      <br></br>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="bg-red-300 col-span-1">One</div>
        <div className="bg-green-500 col-span-1">Two</div>
        <div className="bg-yellow-700 col-span-1">Three</div>
      </div> */}

      <div className="grid grid-cols-4">
      <RevenueCard title={"Amount pending"} amount={"92,312,20"} orderCount={13}/>
      <RevenueCard title={"Amount Pending"} amount={"92,312,20"} orderCount={13}/>
      <RevenueCard title={"Amount Pending"} amount={"92,312,20"} orderCount={13}/>
      </div>
    </>
  )
}

export default App
