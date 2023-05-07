// App 컴포넌트 import
import App from './App'
// 라우팅 위한 import ---> routing?
import router from './routes/index'

// root 변수에 id="root" 인 요소 할당
const root = document.querySelector('#root')
// App 호출해서 얻은 인스턴스를 root 요소에 밀어넣기
root.append(new App().el)

// routes/index 에서 가져온 router 함수 호출
router()
