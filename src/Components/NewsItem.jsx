import React from 'react'
import image from '../assets/news.jpg';
import './newsitem.css';
const NewsItem = ({title, description, src, url,date}
  ) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 carditem" >
      <div className='imgcontainer bg-dark'>
      <img src={src ? src :image }  className="card-img-top" alt="..."  />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text date">Publised Date : {date.slice(0,10)}</p>
        <a href={url} target='_blank' className="btn  read_btn">Read More</a>
      </div>
     </div>
    );
}

export default NewsItem