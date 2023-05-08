import { Component } from "../core/heropy";

interface State {
  [key: string]:unknown
  menus: {
    name: string
    href: string
  }[]
}

export default class TheHeader extends Component {
  // 명확한 할당 단언 -> TS 에게 state에게 값 할당 되어있다고 문법상으로 제공
  public state!: State
  constructor(){
    super({
      tagName: 'header',
      state: {
        menus: [
          {
            name: 'Search',
            href: '#/'
          },
          {
            name: 'Movie',
            href: '#/movie?id=tt4520988'
          },
          {
            name: 'About',
            href: '#/about'
          }
        ]
      }
    })
    // 페이지 바뀔때마다 render 함수 실행, isActive 변수 비교 가능
    window.addEventListener('popstate',() => {
      this.render()
    })
  }
  render() {
    this.el.innerHTML =/* html */`
      <a 
      href="#/" 
      class="logo">
      <span>OMDbAPI</span>.COM
    </a>
    <nav>
      <ul>
        ${this.state.menus.map(menu => {
          const href = menu.href.split('?')[0]
          const hash = location.hash.split('?')[0]
          const isActive = href === hash
          return /* html */`
            <li>
              <a 
                class ="${isActive ? 'active' : ''}"
                href="${menu.href}">
                ${menu.name}
              </a>
            </li>
          `
        }).join('')}
      </ul>
    </nav>
    <a href="#/about" class="user">
      <img src="https://avatars.githubusercontent.com/u/70210457?v=4" alt="User"> 
    </a>
    `
  }
}