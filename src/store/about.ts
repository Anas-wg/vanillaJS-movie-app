import { Store } from "../core/heropy";


interface State {
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}

export default new Store<State>({
  photo: 'https://avatars.githubusercontent.com/u/70210457?v=4',
  name: 'Anas-wg / ChoWanGi',
  email:'wg12181218@gmail.com',
  blog: 'https://blog.naver.com/false90',
  github:"https://github.com/Anas-wg",
  repository: "https://github.com/Anas-wg/vanillaJS-movie-app"
})