import React, { useEffect, useState } from 'react'//access to react
import axios from 'axios' //access to fetching tool
import { IoArrowBackOutline } from "react-icons/io5";//icon
import NewsArticle from './NewsArticle';
function TrendingArticle() {
// declare states needed 
    const [trending, setTrending]=useState([])
    const [isLoading, setIsloading]=useState(false)
    const [error, setError]=useState(null)
    const [selectedNewsArticle, setselectedNewsArticle]=useState(null)
//url for api to fetch and api key
    const apiKey=import.meta.env.VITE_API_KEY
    const url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
    // a hook which hold promise respecting the dependencies
    useEffect(()=>{
        // a promise for fetching popular news articles
        const fetchTrending=async ()=>{
          //updating loading state
            setIsloading(true)
            try {
                const response=await axios.get(url)
                setTrending(response.data.articles)
            }
            catch(err){
               setError(err.response.data.message)
            }
            finally {
                setIsloading(false)
            }
            
        }
        fetchTrending()
    },[url])
    //function to update the state once the article selected
    const handleSelectedNewsArticle=(article)=>setselectedNewsArticle(article)
    //function resetting the state to back to trending
    const backToTrending=()=>setselectedNewsArticle(null)
  return (
    <>
    {/* Rendering loading message before fetch completion */}
    {isLoading && (
        <p>Loading...</p>
    )}
    {/* Displaying error when fetch fails */}
    {error && (
        <p>{error}</p>
    )}
    {/* rendering articles depending on whether there is selected article or not */}
    {!selectedNewsArticle ? (
        <>
        <div className='flex flex-wrap'>
            {trending.map(
                (article,index)=>(
                <div key={index} className=' w-52 h-48 m-2 hover:cursor-pointer sm:m-14 lg:m-2' onClick={()=>handleSelectedNewsArticle(article)}>
                        <div className='w-full h-7 bg-whiteRed rounded-xl font-bold '>TRENDING</div>
                        <img className='w-full h-28 object-cover mt-1 bg-lightBlue rounded-xl' src={article.urlToImage} alt="trending news pic" />
                        <div className='w-full h-9 mt-1 bg-whitishRed rounded-xl '>
                            <p className='truncate font-semibold p-1 hover:underline hover:decoration-red-950'>{article.title}</p>
                        </div>
                </div>)
            )}
        </div>
        </>
        
    ) : (
        <NewsArticle 
        selectedNewsArticle={selectedNewsArticle} 
        backToTrending={backToTrending}
        setselectedNewsArticle={setselectedNewsArticle}
        ></NewsArticle>
    )}
    </>
    
  )
}

export default TrendingArticle
