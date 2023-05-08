import { Component  } from "../core/heropy";
import movieStore, { searchMovies } from '../store/movie'

export default class Search extends Component {
  render(){
    this.el.classList.add('search')
    this.el.innerHTML = /* html */`
      <input 
        value = "${movieStore.state.searchText}" 
        placeholder="Enter the movie title to Search!" />
      <button class="btn btn-primary">
        Search!
      </button>
    `
//  선택적 체이닝
    const inputEl = this.el.querySelector('input')
    inputEl?.addEventListener('input', () => {
      movieStore.state.searchText = inputEl.value
    })
    inputEl?.addEventListener('keydown',event => {
      if(event.key === 'Enter' && movieStore.state.searchText.trim()) {
        searchMovies(1)
      }
    })
// 할당 단언
    const btnEl = this.el.querySelector('.btn') as HTMLButtonElement
    btnEl.addEventListener('click', () => {
      // 검색어 있는 지만 확인!
      if(movieStore.state.searchText.trim()) {
        searchMovies(1)
      }
    })
  }
}