import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const News = ({category}) => {
    const [articles, setArticles] = useState([]);

    //useEffect runs when the category changes, dependency=> category
    useEffect(
        () => {
            //Fetch API url, Fetch is a predeifined request function
            fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=011fc31626fa4254bb72eed18e275942`)
            .then(res=>res.json())
            .then(data => setArticles(data.articles || []));
            }, [category]);
  return (
    <div>
        <h4>{category.toUpperCase()} NEWS</h4> 
        <div style={{display: "grid",
            gridTemplateColumns: "repeat(3 1fr)",
            gap: "15px"
        }}>
            {/* Looping through articles */}
            {
                articles.map((news, index) => (
                    <NewsItem 
                        key={index} 
                        title={news.title}
                        description={news.description}
                        image={news.urlToImage} 
                        url={news.url}  
                    />
                ))
            }
        </div>
        <NewsItem />
    </div>
  )
}

export default News