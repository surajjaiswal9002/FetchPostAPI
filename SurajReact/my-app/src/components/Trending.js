import React from 'react'
import "./Trending.css";

function Trending({apiData,isLoading}) {
    if(isLoading) return <h1>{isLoading }</h1>
    return (
     <>
     <h1>Trending News</h1>
     {apiData?.trandingArticle?.map((item)=>{
      return(
          <div id="trandingArticle">
           <div id="imgg"><img src={item.articleImg} alt=""/></div> 
              <h3 className="Trending_article">{item.articleTitle}</h3>
          </div>
      )
     })}
     </>
    )
}

export default Trending