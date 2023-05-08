import App from './App'
import router from './routes/index'

// 선택적 체이닝 사용
const root = document.querySelector('#root')
// App 호출해서 얻은 인스턴스를 root 요소에 밀어넣기
root?.append(new App().el)

// routes/index 에서 가져온 router 함수 호출
router()
