import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const News=({category})=> {
    //create a state to store the news articles
    const [articles,setArticles]=useState([]);
    //useEffect runs when the category changes
    useEffect(()=>{
        //Fetch API 
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=011fc31626fa4254bb72eed18e275942`)
        // always change data to json format
        .then(res=>res.json())
        .then(data=>{
            setArticles(data.articles||[]);
        });
    },[category]);
return (
    <div>
        <p>{category}News</p>
        <div style={{display:"grid",
            gridTemplateColumns:"repeat(3, 1fr)",
            gap:"15px"
        }}>
            {/* Looping through Articles */}
            {articles.map((news,index)=>(
                <NewsItem
                key={index}
                title={news.title}
                description={news.description}
                image={news.urlToImage}
                url={news.url}
                />
            ))}

        </div>
        </div>
)
}

export default News