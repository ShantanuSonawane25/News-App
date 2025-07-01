import Header from './Components/Header';
import News from "./Components/News";
import NewsItem from './Components/NewsItem';
import React ,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode , setMode] = useState("light");
  const toggleMode = () =>{
    if(mode === 'light'){
       setMode('dark');
       document.body.style.backgroundColor = '#242323';
       document.body.style.color = 'white';
       
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }
  


  return (
    <>
      <Router>
      <Header searchBar = {true} mode={mode} toggleMode = {toggleMode}/>
      
      <Routes>
      <Route path="/" element={<News key="general" pageSize={9} country="in" APIkey="68964c03c1b413f519a1560012912f05" category="general" mode={mode} />} />

          <Route path="/home" element ={<News key = "home" pageSize ={9} country ={"in"} APIkey ={"68964c03c1b413f519a1560012912f05" } category ={"general"} mode ={mode}/>}/>
          <Route path="/general" element ={<News key = "general" pageSize ={9} country ={"in"} APIkey ={"68964c03c1b413f519a1560012912f05" } category ={"general"} mode ={mode}/>}/>
          <Route path="/business" element ={<News key = "business" pageSize ={9} country ={"in"} APIkey ={"68964c03c1b413f519a1560012912f05" } category ={"business"} mode ={mode}/>}/>
          <Route path="/entertainment" element ={<News key = "entertainment" pageSize ={9} country ={"in"} APIkey ={"68964c03c1b413f519a1560012912f05" } category ={"entertainment"} mode ={mode}/>}/>
          <Route path="/health" element ={<News key = "health" pageSize ={9} country ={"in"} APIkey ={"68964c03c1b413f519a1560012912f05" } category ={"health"} mode ={mode}/>}/>
          <Route path="/science" element ={<News key = "science" pageSize ={9} country ={"in"} APIkey ={"68964c03c1b413f519a1560012912f05" } category ={"science"} mode ={mode}/>}/>
          <Route path="/sports" element ={<News key = "sports" pageSize ={9} country ={"in"} APIkey ={"68964c03c1b413f519a1560012912f05" } category ={"sports"} mode ={mode}/>}/>
          <Route path="/technology" element ={<News key = "technology" pageSize ={9} country ={"in"} APIkey ={"68964c03c1b413f519a1560012912f05" } category ={"technology"} mode ={mode}/>}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
