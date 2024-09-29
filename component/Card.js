
import React from 'react'

const Card =({data})=> {
   console.log(data);
    
    const readMore=(url)=>{
         window.open(url)
    }
   
  return (
       <div className='cardcontainer'>
       {data?.map((curItem,index)=>{
        if(!curItem.urlToImage){
          return null
        }else{
          return(
            <div className='card'>
              <img src={curItem.urlToImage}/>
              <div className='Content'>
                <a className='title' onClick={()=>window.open(curItem.url)}>{curItem.title}</a>
                <p>{curItem.description}</p>
                <button onClick={()=>window.open(curItem.url)}>Read more</button>
              </div>
              </div>

          )
        }
             
      })}
      </div>
           
    )
  }  
               
         
  
    



export default Card