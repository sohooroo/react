
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Section from './components/Section'
import Article from './components/Article'
import Aside from './components/Aside'
import Footer from './components/Footer'


function App() {

  return (
    <main className='container'>
      <Header/>
      <Nav/>
      <div className="content">
        <Section/>
        <Article/>
        <Aside/>
      </div>
      <Footer/>
    </main>
  )
}

export default App
