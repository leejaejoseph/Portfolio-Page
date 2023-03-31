import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Feedbacks, Navbar, Tech, Works, StarsCanvas } from './components';

function App() {
  
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-nop-repeat bg-center">
          <Navbar/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
