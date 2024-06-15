import React, { useState } from 'react'
import './navbar.css';
const Navbar = ({setCategory,setEndpoint}) => {
    
  const[text,setText]=useState();
  const SetText=(e)=>{
    setText(e.target.value);
  }
  const changeEndpoint=(e)=>{
        e.preventDefault();
        setEndpoint(text);
        setText("");
   }
   
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><span className="badge check" >InsightToday</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
          <li className="nav-item ">
            <a className="nav-link category" onClick={()=>setCategory("general")}>General </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link category" onClick={()=>setCategory("business")}>Business </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link category" onClick={()=>setCategory("entertainment")}>Entertainment</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link category" onClick={()=>setCategory("health")}>Health</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link category" onClick={()=>setCategory("science")}>Science</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link category" onClick={()=>setCategory("sports")}>Sports</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link category" onClick={()=>setCategory("technology")}>Technology</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link category" onClick={()=>setCategory("world")}>world</a>
          </li>
        </ul>
        <form className='search_bar d-flex'>
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={text}onChange={SetText}/>
            <button class="btn btn-outline-primary" type="submit" onClick={changeEndpoint}>Search</button>
          </form>
      </div>
    </div>
  </nav>
  )
}

export default Navbar