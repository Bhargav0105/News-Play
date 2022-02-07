// import React, { Component } from 'react'
import NewsItem from './newsitem';
import Spinner from './spinner';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {useState, useEffect} from 'react';


export default function News(props) {

  const [articles, setArticles]=useState([]);
  const [loading, setLoading]=useState(false);
  const [page, setPage]=useState(1);
  const [hasMore, setHasMore]=useState(true);

  const updateNews = async ()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
    setArticles(parsedData.articles)
    setLoading(false)
    props.setProgress(100);
}

  useEffect(() => {
    document.title = `${captialise(props.category)} - NEWS PLAY`;
    updateNews();
  }, [])

  const fetchMoreData = async () => {
      setPage(page+1);
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true);
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      (parsedData.articles.length===0)?(setHasMore(false)):(setHasMore(true));
      setArticles(articles.concat(parsedData.articles));
      setLoading(false);

      // console.log(articles.length);
  };

  function captialise(string){
    return string.toUpperCase();
  }

    return (
      <div>
        <div className='container my-4'>
          <h3 className='text-center' style={{marginTop: "6rem", color: "#4C4C6D", fontSize: "1.5rem"}}><b>TOP HEADLINES FROM {captialise(props.category)} CATEGORY</b></h3>
          {loading && <Spinner />}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<Spinner />}
          >
            <div className='row my-5' style={{width: "90%", margin: "auto"}}>
                {articles.map((element)=>(
                    <div className='col-md-4 my-3' key={element.url}>
                        <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} detail={element.url} 
                        author={element.author ? element.author:"UnKnown"} date={element.publishedAt} source={element.source} />
                    </div>
                ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    )
}


// export default function News() {
//     const [data, setData] = useState(null)
//   const fetchURL = "https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${apiKey}"
//   const getData = () =>
//     fetch(fetchURL)
//       .then((res) => res.json())

//   useEffect(() => {
//     getData().then((data) => setData(data))
//   }, [])
//   console.log(data)
//   return (
//     <div className='container my-4'>
//        <h3 style={{textAlign: "centre"}}>NEWS Monkey - Top HeadLines </h3>
//         <div className='row my-5'>
//             {data.articles.map((element)=>(
//                 <div className='col-md-4 my-3' key={element.url}>
//                     <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} detail={element.url} />
//                 </div>
//             ))}
//         </div>
//     </div>
//   )
// }