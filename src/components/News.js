import React, { Component } from 'react'
import Newitems from './Newitems'
import Loading from './Loading'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {

    static defaultProps = {
        country: "in",
        pageSize: 15,
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }


    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseddata = await data.json();
        this.setState({ articles: parseddata.articles })
        this.setState({ loading: false })
    }
    moreFetchData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseddata = await data.json();
        this.setState({ totalResults: parseddata.totalResults })
        this.setState({ articles: this.state.articles.concat(parseddata.articles) })
    }
    render() {
        return (

            <div className='container mt-5'>
                <h1 className='text-center'>Classic News - Top Healines</h1>
                {/* {this.state.loading && <Loading />} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length} //This is important field to render the next data
                    next={this.moreFetchData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Loading />}
                >
                    <div className="conatiner" style={{overflow:'hidden', marginLeft:'5px'}}>
                        <div className='row'>
                            {this.state.articles.map((element) => {
                                return <div className='col-md-4' key={element.url}>
                                    <Newitems title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgurl={element.urlToImage} newsdeatil={element.url} />
                                </div>

                            })}
                        </div>
                    </div>

                </InfiniteScroll>
            </div>
        )
    }
}

export default News
