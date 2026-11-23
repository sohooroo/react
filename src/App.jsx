
import './App.css'
import FocusInput from './components/FocusInput'
import Counter from './components/Counter'
import ClickLogger from './components/ClickLogger'

function App() {

  return (
    <main>
      <ClickLogger/>
      <Counter/>
      <FocusInput/>
    </main>
  )
}

export default App
