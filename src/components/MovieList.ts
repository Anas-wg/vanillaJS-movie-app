import { Component } from '../core/heropy'
import movieStore from '../store/movie'
import MovieItem from './MovieItem'

export default class MovieList extends Component {
  constructor(){
    super()
    movieStore.subscribe('movies',() => {
      this.render()
    })
    movieStore.subscribe('loading',() => {
      this.render()
    })
    movieStore.subscribe('message',() => {
      this.render()
    })
  }
  render() {
    this.el.classList.add('movie-list')
    this.el.innerHTML = /* html */`
    ${movieStore.state.message 
      ? `<div class = "message">${movieStore.state.message}</div>`
      : '<div class = "movies"></div>' 
    }
      <div class="the-loader hide"></div>
    `

    const movieEls = this.el.querySelector('.movies')
    movieEls?.append(
      ...movieStore.state.movies.map(movie => new MovieItem({
          movie
        }).el
      )
    )
    // 타입 단언 -> 오타 에러 잡기 힘듦  따라서 선택적 체이닝 활용
    const loaderEl = this.el.querySelector('.the-loader')
    movieStore.state.loading 
      ? loaderEl?.classList.remove('hide') 
      : loaderEl?.classList.add('hide')
  }
}