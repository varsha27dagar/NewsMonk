import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
    articles = [
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Jada Yuan",
            "title": "At Elton John's White House concert, tears and a trip down memory lane - The Washington Post",
            "description": "The singer, who came to Washington on a farewell concert tour, performed a six-song set at the White House Friday, and was surprised to receive the National Humanities Medal",
            "url": "https://www.washingtonpost.com/lifestyle/2022/09/25/elton-john-white-house-biden/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/R5YII7GEXZB7ZLMHGN6RGJI4ZU.jpg&w=1440",
            "publishedAt": "2022-09-26T00:29:06Z",
            "content": "When Donald Trump asked one of his favorite musicians, Elton John, to perform at his 2017 inauguration, the knighted singer politely declined in an email:\r\nThank you so much for the extremely kind in… [+8029 chars]"
        },
    ]
    static defaultProps = {
        country: 'in',
        category: 'general',
    }
    static propsTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
    }
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 0,
            pageSize: 15,
            totalResults: 0
        }
    }    
    async updatenews() {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5461dcc223314433a32af9c2b1f30429&page=${this.state.page}&pageSize=12`;
        let data = await fetch(url);
        let parsedata = await data.json()
        this.setState({ articles: parsedata.articles, totalResults: parsedata.totalResults })
    }
    async componentDidMount() {
        window.scrollTo(0, 0)
        this.updatenews();

    }
    handleprevious = async () => {
        console.log("pre")
        window.scrollTo(0, 0)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5461dcc223314433a32af9c2b1f30429&page=${this.state.page - 1}&pageSize=12`;
        let data = await fetch(url);
        let parsedata = await data.json()
        this.setState({ articles: parsedata.articles, totalResults: parsedata.totalResults, page: this.state.page - 1 })
    }
    handlenext = async () => {
        console.log("next")
        window.scrollTo(0, 0)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5461dcc223314433a32af9c2b1f30429&page=${this.state.page + 1}&pageSize=12`;
        let data = await fetch(url);
        let parsedata = await data.json()
        this.setState({ articles: parsedata.articles, totalResults: parsedata.totalResults, page: this.state.page + 1 })
        
    }   
    render() {
        return (
            <>
                <div className="container" style={{marginTop:"75px"}}>
                <h2>NewsMonkey-Top Headlines</h2>
                </div>
                <div className="container">
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <Newsitem tittle={element.title ? element.title.slice(0, 40) : ""} description={element.description && element.description.length > 55 ? element.description.slice(0, 55) : "This is a default text use the link provided to read about the news"} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} />
                            </div>
                        })}
                    </div>
                    <div className="container d-flex justify-content-between" style={{ marginBottom: "15px" }} >
                        <button type='button' disabled={this.state.page <= 1} className='btn btn-dark' onClick={this.handleprevious} style={{ background: "black", color: "white", borderRadius: "20px" }}>&larr; Previous</button>
                        <button type='button' disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 12)} className='btn btn-dark' onClick={this.handlenext} style={{ background: "black", color: "white", borderRadius: "20px" }}>Next &rarr;</button>
                    </div>
                </div>
            </>
        )
    }
}
export default News
