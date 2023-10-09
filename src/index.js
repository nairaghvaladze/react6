import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./header";
import Footer from "./footer";
import "./style.css";


class App extends React.Component {

onButtonClickHandler= () =>{
    window.alert("გამარჯობა მსოფლიო!!!!!!!!!!")
}

    render() {
        return (
        <React.Fragment>
            
            <Header />
            <button onClick={this.onButtonClickHandler}>Click Me</button>
           <Footer />
        </React.Fragment>
        )
    }
}
var root=document.getElementById("root");
ReactDOM.createRoot(root).render(<App />)