import axios from "axios";
import "./App.css";
import Header from "./components/header/Header";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    axios.get('http://127.0.0.1:3000').then(res => {
      console.log('res', res)
    })

    const options = { 
      method: "GET",
      url: "http://127.0.0.1:3000",
      headers: { "authorization": "Bearer " },
    };
    
    axios(options)
      .then(response => {
        console.log('token', response.data);
      })
      .catch(error => {
        console.log(error);
      });
  })
  return (
    <div>
      <Header></Header>
      <h1>Welcome to Ajoal!</h1>
    </div>
  );
}

export default App;
