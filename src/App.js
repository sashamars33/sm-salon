import Header from './components/Header'
import Main from './components/Main'
import InfoBanner from './components/InfoBanner'
import Styles from './components/Styles'
import Contact from './components/LocationContact'
import Services from './components/Services'
import Stylists from './components/Stylists'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <InfoBanner />
      <Styles />
      <Contact />
      <Services />
      <Stylists />
      <About />
      <Header />
    </div>
  );
}

export default App;