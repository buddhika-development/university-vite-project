import './App.css'
import Greeting from './components/Greeting'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <div style={{ paddingTop: '80px' }}>
        <Greeting />
      </div>
    </>
  )
}

export default App
