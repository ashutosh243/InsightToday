import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import NewsBoard from './Components/NewsBoard';


const App = () => {
  
  const [category, setCategory] = useState("general");
  const[endPoint ,setEndpoint]=useState();
  {console.log(endPoint); }
  return(
    <>
    <Navbar setCategory = {setCategory} setEndpoint={setEndpoint} />
    <NewsBoard category= {category} endpoint={endPoint} setEndpoint={setEndpoint} setCategory = {setCategory} />
    </>
  )
}

export default App;