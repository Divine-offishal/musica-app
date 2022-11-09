import React from "react"
import MainPage from "./mainPage"
import { BrowserRouter } from "react-router-dom"

function App (){
    return (
        <>
            <BrowserRouter>
            <MainPage/>
            </BrowserRouter>
        </>
    )
}

export default App
