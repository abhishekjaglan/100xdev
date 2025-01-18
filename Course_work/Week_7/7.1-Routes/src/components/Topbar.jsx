import { useNavigate } from "react-router-dom"

export function Topbar(){
    const navigate = useNavigate();
    return (
        <div style={{background:"black", color:"white"}}>
            <button onClick={() => {
                navigate('/');
            }}>Landing</button>
            <button onClick={() => {
                navigate('/dashboard');
            }}>Dashboard</button>
            <button>Button 3</button>
        </div>
    )
}