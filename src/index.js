import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./header";
import Footer from "./footer";
import "./style.css";


function App() {

function alert(){
    window.alert("გამარჯობა მსოფლიო!!!!!!!!!!!!!!!!!!!!!!!!!!")
}

   
        return (
        <React.Fragment>
            
            <Header />
            <button onClick={alert}>Click Me</button>
           <Footer />
        </React.Fragment>
        )
   
}
var root=document.getElementById("root");
ReactDOM.createRoot(root).render(<App />)