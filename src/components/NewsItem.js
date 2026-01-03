import React from 'react'

const NewsItem = (props) => {
  return (
    <div onClick={() => window.open(props.url, '_blank')} 
    style={{
        border:'1px solid gray',
        borderWidth: '3px',
        borderRadius: '5px',
        padding: '10px',
        cursor: 'pointer'
    }}>
        <img src={props.image || 'https://dummyimage.com/300x180/000/fff&text=News'} 
        alt='News Image'
        style={{width: "100%", height: "180px", objectFit: "cover"}}/>
        <h4>{props.title}</h4>
        <p>{props.description || 'No description available'}</p>
    </div>
  )
}

export default NewsItem