import { Component } from "../core/heropy";
import { SimpleMovie } from "../store/movie"

interface Props {
  [key: string]: unknown
  movie: SimpleMovie
}

export default class MovieItem extends Component {
  // 할당 단언
  public props!: Props
  constructor(props: Props) {
    // props 를 인수로 받고, super 키워드로 MovieItem 만의 props 와 tagName 사용
    // 이를 통해 a 태그 생성
    super({
      props,
      tagName: 'a'
    })
  }
  render() {
    // 구조분해할당, movie 를 MovieItem 객체의 props 에 할당 
    const { movie } = this.props
    // setAttribute를 통해 href를 뒤에 있는 movie~ 로 변경
    this.el.setAttribute('href', `#/movie?id=${movie.imdbID}`)
    this.el.classList.add('movie')
    this.el.style.backgroundImage = `url(${movie.Poster})`
    this.el.innerHTML = /* html */`
      <div class="info">
        <div class="year">
          ${movie.Year}
        </div>
        <div class="title">
          ${movie.Title}
        </div>
      </div>

    `
  }
}