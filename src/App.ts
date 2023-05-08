// heropy 에서 컴포넌트 삽입
import { Component } from "./core/heropy"
// 헤더 컴포넌트
import TheHeader from "./components/TheHeader"
// 푸터 컴포넌트
import TheFooter from "./components/TheFooter"

// Component를 상속한 App 클래스 생성 & 기본 내보내기
export default class App extends Component {
  render() {
    // 생성자 함수를 활용, 가져온 헤더의 요소를 변수에 할당
    const theHeader = new TheHeader().el
    // html 문서에 router-view 라는 태그를 가진 요소를 생성
    const routerView = document.createElement('router-view')
    // 생성자 함수를 활용, 가져온 푸터의 요소를 변수에 할당
    const theFooter = new TheFooter().el
    /*
      App 클래스 객체에 헤더, routerView, 푸터를 밀어넣기
      결국 App = { theHeader, routerView, theFooter} 가 main.js 로 삽입되는 것과 동일함
    */ 
    this.el.append(
      theHeader,
      routerView,
      theFooter
      )
  }
}