import React, { useEffect, useState } from 'react'
import Card from './Card'
    const Newsapp=()=>{
      const[search,setSearch]=useState("india")
      const[newsData,setNewsData]=useState(null)
     const API_KEY="67148b45f940493fbfde1bc7cde363ba"
    
      const getData=async()=>{
          const response=await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
          const jsonData=await response.json();
          console.log(jsonData.articles);
          setNewsData(jsonData.articles)
      }
      useEffect(()=>{
           getData()
      },[]) 
      const handleInput=(e)=>{
            console.log(e.target.value)
            setSearch(e.target.value)
      }
      const userInput=(e)=>{
            setSearch(e.target.value)
      }
    
    
  return (
    <div>
        <nav>
            <div>
                <h1>Trendy news</h1>
            </div>
            <ul>
              <a>all news</a>
              <a>trending</a>
            </ul>
            <div className='searchbar'>
            <input type='text' placeholder='serch news'value={search} vonChange={handleInput} />
            <button onClick={getData} >search</button>
            </div>
        </nav>
        <div>
             <p className='head'>stay update with trendynews</p>
        </div>
        <div className='categoryBtn'>
          <button onClick={userInput}  value="sports">sports</button>
          <button onClick={userInput}  value="politics">politics</button>
          <button onClick={userInput}  value="entertainment">entertainment</button>
          <button onClick={userInput}  value="health">health</button>
          <button onClick={userInput}  value="fitness">fitness</button>
        </div>
        <div>
         <Card data={newsData}/>
        
        </div>
    </div>
  )
    }

export default Newsapp