import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { finalSumSelector, jobsAtom, messageAtom, networkAtom, notificationAtom } from "./store/atoms/atoms"


function App() {
  return (

      <RecoilRoot>
        <Before_App/>
      </RecoilRoot>

  )
}

function Before_App(){

  const networkNotificationAtom = useRecoilValue(networkAtom) >= 100 ? "99+" : useRecoilValue(networkAtom);
  const jobsNotificationAtom = useRecoilValue(jobsAtom) >= 100 ? "99+" : useRecoilValue(jobsAtom);
  const messageNotificationAtom = useRecoilValue(messageAtom) >= 100 ? "99+" : useRecoilValue(messageAtom);
  const notificationNotificationAtom = useRecoilValue(notificationAtom)>= 100 ? "99+" : useRecoilValue(notificationAtom);
  const finalSum = useRecoilValue(finalSumSelector);

  return (
    <>
      <button>Home</button>
      
      <button> My Network ({networkNotificationAtom})</button>
      <button> Jobs ({jobsNotificationAtom})</button>
      <button> Messaging ({messageNotificationAtom})</button>
      <button>Notifications ({notificationNotificationAtom})</button>
      
      <button>Me ({finalSum})</button>
    </>
  )

}

export default App
