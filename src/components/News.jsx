import { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    console.log("cdm");
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ce46be9b01ec45cdbbcffaaa6d28867b&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
  }
  handlePrevClick = async () => {
    console.log("prev");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ce46be9b01ec45cdbbcffaaa6d28867b&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, page: this.state.page - 1 });
  };

  handleNextClick = async () => {
    console.log("next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
      console.log("Last Page");
    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ce46be9b01ec45cdbbcffaaa6d28867b&page=${this.state.page + 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, page: this.state.page + 1 });
    }
  };

  render() {
    console.log("render");
    return (
      <div className="container">
        <div className="row">
          <h1>News Monkey- Top Headlines</h1>
          {this.state.articles.map((element) => {
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
          <button onClick={this.handleNextClick} className="btn btn-dark">
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
