import React from 'react' // access to react
import { IoSearchOutline } from "react-icons/io5";
import { CgSearchLoading } from "react-icons/cg";
import axios from 'axios';// access to fetching tool
function InputForm({searchTerm,setSearchTerm,isLoading,error,isSearching,setError,searchedArticle,setIsloading,setIsSearching,setSearchedArticle}) {
 //url for api to fetch and api key
 const apiKey=import.meta.env.VITE_API_KEY
 const url=`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`
     // a promise for fetching news articles dynamically
     const fetchingSeachedArticle=async (e)=>{
        //prevent refresh
        e.preventDefault()
         //rendering loading message while waiting fetching to complete
         setIsloading(true)
         //updating searching state
         setIsSearching(true)
         //fecthing news searched articles from news api
         try {
             const response=await axios.get(url)
             setSearchedArticle(response.data.articles)
         }
         //handling error
         catch(err){
            setError('Error while loading news article')
         }
         //resetting loading message after completion of fetching
         finally {
             setIsloading(false)
         }
     }
  return (
    /* form submission */
    <form onSubmit={fetchingSeachedArticle}>
            <div className='flex mt-4'>
              <div>
                {isLoading && (
                  <CgSearchLoading className='mt-7 ml-1 transform transition-all duration-500 animate-pulse w-6 h-6' />
                  )}
              </div>
              <input className='mt-5 align-middle w-40 h-8 rounded-xl text-center'
               type="text"
               placeholder='Search'
               value={searchTerm}
               onChange={(e)=>setSearchTerm(e.target.value)}
               />
               {/* search button */}
               <button type="submit">
              <IoSearchOutline className='mt-7 ml-1 hover:cursor-pointer'></IoSearchOutline>
               </button>
            </div>
     </form>
  )
}

export default InputForm
