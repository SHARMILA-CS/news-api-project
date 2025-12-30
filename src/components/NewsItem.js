import React from 'react'
// {}inside this get coll. of arrays ie.,title,desc,iamge,url
const NewsItem = ({title,description,image,url})=> {
  return (
    <div onClick={()=> window.open(url,"_blank")} style={{
      border:'1px solid gray',
      padding:'10px',
      cursor:'pointer'
    }}>
        <img src={image || 'https://www.dummyimage.com/300x180/000/fff'} 
        alt='=News'
        style={{width:'100%',height:'180px',objectFit:'cover'}}
        />
        <h4>{title}</h4>
    <p>{description ||'No description for this news'}</p>
    </div>
  );
};

export default NewsItem