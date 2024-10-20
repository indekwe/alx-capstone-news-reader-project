import React, { useState } from 'react' //Accessing react
import logo from '../assets/logo.png'//logo image
import library from '../assets/library.png' //library image
import { CiFacebook } from "react-icons/ci";// icon
import { FaTelegram } from "react-icons/fa";// icon
import { IoLogoInstagram } from "react-icons/io5";// icon
import { TiSocialLinkedinCircular } from "react-icons/ti";// icon
import { BsTwitterX } from "react-icons/bs";// icon
import { AiFillTikTok } from "react-icons/ai";// icon
import SearchDisplay from './SearchDisplay';// access to file
import InputForm from './InputForm'; //access to file
/* import NewsArticle from './components/NewsArticle'; */
import TrendingArticle from './TrendingArticle' //access to trending file
/* import NewsList from './NewsList' */
import NavigationBar from './NavigationBar' // access to navigation file
function Home() {
  // state determining whether searched articles are completely rendered
  const [isSearching, setIsSearching] = useState(false);
  const [searchedArticle, setSearchedArticle] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [selectedNewsArticle, setselectedNewsArticle] = useState(null);
  const [error, setError] = useState(null);
  //function allowing back button in NewsArticle to work
  const backToTrending = () => setselectedNewsArticle(null)

  return (
    <>
      {/* Displaying home, searched articles, or trending */}
      <div className='bg-lightGray w-screen h-screen lg:bg-yellow-100 sm:bg-yellow-100'>
        <div className='flex justify-around '>
          <div className='mt-4'>
            <img className='lg:w-20 lg:h-20 rounded-md sm:w-10 sm:h-10 md:h-16 md:w-16' src={logo} alt="Hard info logo" />
          </div>
          <InputForm
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            isLoading={isLoading}
            error={error}
            setError={setError}
            /* searchedArticle={searchedArticle} */
            setIsloading={setIsloading}
            setSearchedArticle={setSearchedArticle}
            setIsSearching={setIsSearching}
            isSearching={isSearching}
            selectedNewsArticle={selectedNewsArticle}
            setselectedNewsArticle={setselectedNewsArticle}
          />
        </div>
        <div className='flex justify-evenly'>
          <div className='bg-lightBlue w-96 h-64 rounded-md mt-28 sm:-mr-32 sm:w-60 sm:h-48 sm:bg-red-300 z-20 relative md:w-80 md:h-40 md:-mr-44 md:mt-20 lg:w-96 lg:h-64 '>
            <h1 className='text-7xl m-auto font-bold sm:text-5xl md:text-5xl lg:text-7xl '>News can be your medicine</h1>
          </div>
          <div className='relative z-10'>
            <img className='lg:w-[40rem] lg:h-[30rem] md:w-[25] md:h-[17rem] sm:w-[20rem] sm:h-[15rem] sm:mt-44 sm:mr-24 rounded-md blur-0 md:mt-32' src={library} alt="library picture" />
          </div>
        </div>
        <div className='sticky top-0 z-50'>
          {/* navigation */}
        <NavigationBar />  
        </div>
        {/* conditional rendering of searched articles */}
        {searchedArticle  && searchedArticle.length > 0 ? (
          <SearchDisplay searchedArticle={searchedArticle} /* handleSelectedNewsArticle={handleSelectedNewsArticle} */ />
        ) : ( searchedArticle && searchedArticle.length === 0 ? (
          <div>
            <p className='text-lg text-red-950 font-bold'>No articles found for searched keywords</p>
            <p>Make sure all words are spelled correctly, try different or more general keywords.</p>
          </div>) : (
            <>
            <div className='w-screen h-auto bg-slate-900 flex flex-wrap'>
              <TrendingArticle />
            </div>           
          </>)         
        )}
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
    </>
  );
}

export default Home;

