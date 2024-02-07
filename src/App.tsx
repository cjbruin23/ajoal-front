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
      headers: { "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlJZWVpEY1o5WmgyOEVwVTRuaUo3ZSJ9.eyJpc3MiOiJodHRwczovL2Fqb2FsLTEudXMuYXV0aDAuY29tLyIsInN1YiI6IllSV1hHV1NJNzRrTVZpcHRVUEhyRzJ3ZGxRVkZzRHE0QGNsaWVudHMiLCJhdWQiOiJodHRwczovL2FwaS5ham9hbC5jb20iLCJpYXQiOjE3MDcyNjcyNTQsImV4cCI6MTcwNzM1MzY1NCwiYXpwIjoiWVJXWEdXU0k3NGtNVmlwdFVQSHJHMndkbFFWRnNEcTQiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.h7j7dXHjjgLJ8gQkFKffpU3erfSsu8-AKk7GPh6y6-g6Nv0aTbwYf73GgYvmNruFoSykhbdgPj8IOD-OB0BbJrmBuPzPzywwZGjx9slb7T6GIwJ7153PzcGgaC7dNb_oztIV8HJ9NOROD_oDu6WaeGB5oRnSwwk7sZYfLjQbtNDzrmrrqAJAj6--SkOIguk_OACyPiALtSpQbNuHvAp1SmKGidTRYSY8O2LVhSML7-N5wv_Wf57JtP3xSy723BBAGpqdAsf6V9B6tFKV3eypQkn1GFPCANj802nZ8HFsp4rGqzNXtzPa_lMcgG1th3LZM8exAJUOEy4ZpL0dyra2Gw" },
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
