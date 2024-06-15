import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import { endpointPath,endpointSearch } from '../../config/config';
import './newsboard.css';
const NewsBoard = ({category,endpoint,setEndpoint,setCategory}) => {
        const [state, setState] = useState([]);
        const fetchData = () =>{
        let url = endpointPath("in",category);
        fetch(url)
        .then(response =>response.json())
        .then(res => {
           setState(res.articles);
        })
        .catch(err => {
            console.log(err);
            alert("Check you internet connection")})

    }
    const fetchBYSearch=()=>{

        let url=endpointSearch(endpoint);
        console.log(url);
        fetch(url)
        .then(response =>response.json())
        .then(res => {
           setState(res.articles)
        })
        .catch(err => {
            console.log(err);
            alert("Check you internet connection")})

    };
    
    useEffect(()=>{
    fetchData();
    setEndpoint("");
    },[category]);

    useEffect(()=>{
     fetchBYSearch();
    },[endpoint]);
    

    return (<>
       <div className='container'>
           {state && state.map((news, index) => (
              <NewsItem
                    key={index}
                    title={news.title}
                    description={news.description}
                    src={news.image}
                    url={news.url}
                    date={news.publishedAt}
                /> 
             ))}  
        </div> 
    </>)
};

export default NewsBoard;
