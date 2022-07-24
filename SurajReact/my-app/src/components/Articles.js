import React from 'react'

function Articles({apiData,isLoading}) {
    if(isLoading) return <h1>{isLoading }</h1>
    return (
     <>
     <h1>Latest News</h1>
     {apiData?.latestArticle?.map((item)=>{
      return(
          <div>
              <h3 className="title_article">{item.articleTitle}</h3>
          </div>
      )
     })}
     </>
    )
}

export default Articles