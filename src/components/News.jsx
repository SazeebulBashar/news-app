import { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "../Spinner";
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
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
      page: 1
    };
  }

  async componentDidMount() {
    console.log("cdm");
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ce46be9b01ec45cdbbcffaaa6d28867b&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, 
                    totalResults: parsedData.totalResults, 
                    loading: false });
                }
  handlePrevClick = async () => {
    console.log("prev");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ce46be9b01ec45cdbbcffaaa6d28867b&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, page: this.state.page - 1, loading: false });
  };

  handleNextClick = async () => {
    console.log("next");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ce46be9b01ec45cdbbcffaaa6d28867b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, page: this.state.page + 1, loading: false });
    }
  };

  render() {
    console.log("render");
    return (
      <div className="container">
        <div className="row">
          <h1 className="text-center mb-2" style={{margin: '40px 0px'}}>News Monkey- Top Headlines</h1>
          {this.state.loading && <Spinner/>}
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div key={element.url} className="col-md-4 my-3">
                <NewsItems
                  title={element.title ? element.title.slice(0, 45) : " "}
                  description={
                    element.description ? element.description.slice(0, 80) : " "
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>

        <div className="container  d-flex justify-content-between my-3">
          <button disabled={this.state.page <= 1} onClick={this.handlePrevClick} className="btn btn-dark">
            &larr; Previous
          </button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNextClick} className="btn btn-dark">
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
