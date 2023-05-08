import { Component } from "../core/heropy";
import Headline from "../components/Headline";
import Search from "../components/Search";
import MovieList from "../components/MovieList";
import MovieListMore from "../components/MovieListMore";



export default class Home extends Component {
  render() {
    const headline = new Headline().el
    const search = new Search().el
    const movieList = new MovieList().el
    const movieListMore = new MovieListMore().el

    this.el.classList.add('container')
    // 홈페이지 메인의 .container 에 헤드라인 요소를 밀어넣기
    this.el.append(
      headline,
      search,
      movieList,
      movieListMore
    )
  }
}