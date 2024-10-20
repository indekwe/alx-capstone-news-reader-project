import React from 'react' // access to raect
import { IoArrowBackOutline } from "react-icons/io5";
function NewsArticle({selectedNewsArticle,setselectedNewsArticle,backToTrending}) {
  return (
    <>   
     <div className='w-screen h-auto bg-whiteGreen flex flex-wrap'>     
      <div className=' w-auto h-auto m-1 flex flex-wrap'>
        <img className='lg:w-[40rem] h-96 mt-1 m-2 rounded-xl sm:w-full' src={selectedNewsArticle.urlToImage} alt="trending news pic" />
        <div className='lg:w-[25rem] lg:h-64 lg:mt-12 lg:ml-24 lg:bg-green-800 rounded-xl justify-between flex-row sm:w-full sm:ml-1 sm:-mt-16 sm:bg-transparent sm:h-auto'>
          <div className='lg:w-full flex justify-between sm:w-full'>
            <div className='lg:w-auto lg:h-10 rounded-full lg:bg-darkBrown m-4 text-white text-center flex sm:bg-transparent sm:font-bold'><h3 className='text-center mx-auto self-center p-2'>{selectedNewsArticle.source.name}</h3></div>
            <div className='w-auto h-auto lg:bg-darkBrown m-4 text-white flex sm:bg-transparent sm:font-bold'><p className='text-center mx-auto self-center p-2'>By: {selectedNewsArticle.author}</p></div>
          </div>
          <div className=' lg:bg-whiteRed lg:mt-0 sm:-mt-4 sm:bg-transparent sm:text-black'><a href={selectedNewsArticle.url} target="_blank" rel="noopener noreferrer">{selectedNewsArticle.url}</a></div>
          <div className='lg:w-[25rem] bg-whitned h-auto rounded-lg lg:-ml-8 lg:mt-4 self-center sm:w-full sm:m-1 font-bold'>{selectedNewsArticle.title}</div>
        </div>
      </div>
    </div>
   <div className='w-full m-5 h-96 bg-modifiedWhitishGreen '>{selectedNewsArticle.content}</div>
   <div>
     <button type="button" className='bg-darkBrown text-white p-2 rounded-lg m-2 justify-between flex' onClick={backToTrending} ><IoArrowBackOutline className='mr-2 self-center'></IoArrowBackOutline> BACK </button>
   </div>
     </>
  )
}

export default NewsArticle
