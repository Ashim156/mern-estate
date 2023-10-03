import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import About from './pages/About'
function App() {

  return (
 <>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' ele={<About/>}/>
  <Route path='/sign-in' ele={<Signin/>}/>
  <Route path='/sign-up' ele={<Signup/>}/>
 </Routes>
 </>
  )
}

export default App
