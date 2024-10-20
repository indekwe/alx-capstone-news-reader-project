import React, { useState, useEffect } from 'react';
import axios from 'axios'; // fetching
import NavigationBar from './NavigationBar'; // navigation file
import logo from '../assets/logo.png'; // logo image
import { CiFacebook } from "react-icons/ci";// icon
import { FaTelegram } from "react-icons/fa";// icon
import { IoLogoInstagram } from "react-icons/io5";// icon
import { TiSocialLinkedinCircular } from "react-icons/ti";// icon
import { BsTwitterX } from "react-icons/bs";// icon
import { AiFillTikTok } from "react-icons/ai";// icon
import NewsArticle from './NewsArticle';// access article details
import InputForm from './InputForm'; // missing import for InputForm component
import SearchDisplay from './SearchDisplay'; // missing import for SearchDisplay component

function DynamicFetchingnews({ category }) {
    // setting different state to successfully fetch news dynamically and updates different state
    const [dynamicNews, setDynamicNews] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedNewsArticle, setselectedNewsArticle] = useState(null);
    const [isSearching, setIsSearching] = useState(false);
    const [searchedArticle, setSearchedArticle] = useState([]);
    const [home, setHome] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    // URL for API fetch and API key
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
    
    // a hook that holds a promise respecting the dependencies
    useEffect(() => {
        // a promise for fetching news articles dynamically
        const fetchNews = async () => {
            // rendering loading message while waiting for fetching to complete
            setIsloading(true);
            //resetting searched articles to an empty array inorder to render new fetched article dynamically
            setSearchedArticle([])
            setselectedNewsArticle(null)
            // fetching news articles dynamically from news API
            try {
                const response = await axios.get(url);
                setDynamicNews(response.data.articles);
            } catch (err) {
                setError('Error while loading news articles');
            } finally {
                setIsloading(false);
            }
        };
        fetchNews();
    }, [category]);

    // function to update the state once the article is selected
    const handleSelectedNewsArticle = (article) => setselectedNewsArticle(article);
    // function resetting the state to go back to trending
    const backToTrending = () => setselectedNewsArticle(null);
    // rendering 
    return (
        <div className='bg-lightGray h-auto sm:bg-yellow-100 lg:bg-yellow-100'>
            <div className='flex justify-around '>
                <div className='mt-4'>
                    <img className='w-20 h-20 rounded-md lg:w-20 lg:h-20 sm:w-10 sm:h-10 md:h-16 md:w-16' src={logo} alt="Hard info logo" />
                </div>
                <InputForm
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    isLoading={isLoading}
                    error={error}
                    setError={setError}
                    setIsloading={setIsloading}
                    setSearchedArticle={setSearchedArticle}
                    setIsSearching={setIsSearching} 
                />
            </div>
            <NavigationBar />
            
            {/* Conditional rendering based on search and dynamic content */}
            {isSearching ? (
                searchedArticle && searchedArticle.length > 0 ? (
                    <SearchDisplay
                        searchedArticle={searchedArticle}
                        handleSelectedNewsArticle={handleSelectedNewsArticle}
                    />
                ) : (
                    <div>
                        <p className='text-lg text-red-950 font-bold'>No articles found for searched keywords</p>
                        <p>Make sure all words are spelled correctly, try different or more general keywords.</p>
                    </div>
                )
            ) : (
                <>
                    {isLoading && <p>Loading...</p>}
                    {error && <p>{error}</p>}
                    {!selectedNewsArticle ? (
                        <div className='flex flex-wrap bg-whitishGreen'>
                            {dynamicNews.map((article, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleSelectedNewsArticle(article)}
                                    className='lg:w-96 lg:h-96 m-8 hover:cursor-pointer sm:mx-auto sm:w-[40rem] sm:h-[30rem] md:w-[60rem] md:h-[40rem]'
                                >
                                    <div className='lg:w-96 lg:h-auto gap-5 rounded-lg m-1 sm:w-full sm:h-[30rem]'>
                                        <div className='w-full flex justify-between'>
                                            <div className='w-auto h-auto rounded-2xl bg-darkBrown m-4 text-white'>
                                                <p className='mx-auto text-center p-1 text-sm self-center'>
                                                    {article.source.name}
                                                </p>
                                            </div>
                                            <div className='w-auto h-auto rounded-md bg-darkBrown m-4 text-white'>
                                                <p className='p-1 text-xs'>
                                                    {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString('en-us', {
                                                        year: 'numeric',
                                                        month: 'short',
                                                        day: '2-digit',
                                                        timeZone: 'UTC'
                                                    }) : ''}
                                                </p>
                                            </div>
                                        </div>
                                        <div className='w-full h-auto bg-whiteRed rounded-xl font-bold md:my-3'>
                                            <p className='p-1 hover:underline hover:decoration-red-950 md:text-xl lg:text-sm'>{article.title}</p>
                                        </div>
                                        <img
                                            className='lg:w-full lg:h-36 object-cover mt-1 bg-lightBlue rounded-xl md:w-full sm:w-full sm:h-[18rem] md:h-[25rem]'
                                            src={article.urlToImage}
                                            alt="article news picture"
                                        />
                                        <div className='w-full h-auto mt-1 bg-whitishRed rounded-xl md:my-3'>
                                            <p className='font-semibold p-1 hover:cursor-text md:text-xl lg:text-sm'>{article.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        /* rendering selected article in details once clicked */
                        <NewsArticle setselectedNewsArticle={setselectedNewsArticle} selectedNewsArticle={selectedNewsArticle} backToTrending={backToTrending} />
                    )}
                </>
            )}
            {/* footer */}
            <footer>
              <div className='w-screen h-36 bg-darkBlue flex justify-between'>
                <div className='flex w-32 h-5 justify-evenly mt-4'>
                  <a href="http://"><CiFacebook /></a>
                  <a href="http://"><FaTelegram /></a>
                  <a href="http://"><BsTwitterX /></a>
                </div>
                <div className='mt-24'>
                  <p>© 2024 hard info</p>
                </div>
                <div className='flex w-32 h-5 justify-evenly mt-4'>
                  <a href="http://"><IoLogoInstagram /></a>
                  <a href="http://"><TiSocialLinkedinCircular /></a>
                  <a href="http://"><AiFillTikTok /></a>
                </div>
              </div>
            </footer>
        </div>
    );
}

export default DynamicFetchingnews;