import React, { useState, useEffect } from 'react'
import Newitems from './Newitems'
import Loading from './Loading'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResult] = useState(0)
    const [mode1, setmode1] = useState('light');
  const togglemode = () => {
    if (mode1 === 'light') {
      setmode1('dark');
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
    else {
      setmode1('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }
  


    const updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parseddata = await data.json();
        setArticles(parseddata.articles)
        setLoading(false)
    }

    useEffect(() => {
        updateNews();
        //eslint-disable-next-line
    }, [])

    const moreFetchData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parseddata = await data.json();
        setArticles(articles.concat(parseddata.articles))
        setTotalResult(parseddata.totalResults)
    }
    return (

        <div className={`container mt-5 ${props.mode}`}>
            <h1 className='text-center' style={{marginTop: '80px'}}>Pug News - Top {(props.category)} Healines</h1>
            {loading && <Loading  />}
            <InfiniteScroll
                dataLength={articles.length} //This is important field to render the next data
                next={moreFetchData}
                hasMore={articles.length !== totalResults}
                loader={<Loading />}
            >
                <div className={`conatiner ${props.mode}`} style={{ overflow: 'hidden', marginLeft: '5px' }}>
                    <div className='row'>
                        {articles.map((element) => {
                            return <div className='col-md-4' key={element.url}>
                                <Newitems mode={mode1} togglemode={togglemode} title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgurl={element.urlToImage} newsdeatil={element.url} />
                            </div>

                        })}
                    </div>
                </div>

            </InfiniteScroll>
        </div>
    )
}

News.defaultProps = {
    country: "in",
    pageSize: 15,
    category: "general"
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News
