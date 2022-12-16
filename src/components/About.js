import React from 'react'
import { useNavigate } from "react-router-dom";

const Home  = () => {
    const history = useNavigate();
  
    const clicked = () => {
        history('/events')
    }
    return (
        <div>
            This is about page
        </div>

    )
}

export default Home;