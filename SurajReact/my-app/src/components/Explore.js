import React from 'react'

function Explore({apiData,isLoading}) {
    if(isLoading) return <h1>{isLoading }</h1>
    return (
     <>
     <h1>Explore more in news</h1>
     {apiData?.exploreArticle?.map((item)=>{
      return(
          <div>
              <h3 className="explore_article">{item.articleTitle}</h3>
          </div>
      )
     })}
     </>
    )
}

export default Explore