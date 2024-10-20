import React, {useState} from "react";
import NewsArticle from "./NewsArticle";
function SearchDisplay({ searchedArticle }) {
  const [selectedNewsArticle, setSelectedNewsArticle] = useState(null);
    const handleSelectedNewsArticle=(article)=>setSelectedNewsArticle(article)
    const backToTrending=()=>setSelectedNewsArticle(null)
  return (
    <>
      {!selectedNewsArticle ? (
        searchedArticle.length > 1 ? (
          <>
            <div className='flex flex-wrap bg-whitishGreen'>
              {searchedArticle.map((article, index) => (
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
          </>
        ) : (
          <div>
            <p className='text-lg text-red-950 font-bold'>
              No articles found for searched keywords
            </p>
            <p>
              Make sure all words are spelled correctly, try different or more general
              keywords.
            </p>
          </div>
        )
      ) : (
        <NewsArticle
          selectedNewsArticle={selectedNewsArticle}
          setSelectedNewsArticle={setSelectedNewsArticle}
          backToTrending={backToTrending}
        />
      )}
    </>
  );
}

export default SearchDisplay;