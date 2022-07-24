import React from 'react'
import "./Aent.css";

function News({apiData, isLoading}) {
    if(isLoading) return <h1>{isLoading }</h1>
  return (
   <>
   <h1 id="news_h">News</h1>
   {apiData?.news?.map((item)=>{
    return(
        <div id="news">
            
            <p className="news_item" key={item.id="196"}><img src={item.urlToImage} alt=""/>
            
            <h3 className="title">{item.title}</h3>
            {item.description}
            </p>
            
        </div>
    )
   })}
   </>
  )
}

export default News