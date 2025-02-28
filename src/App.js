import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Hero from './compunents/hero';
import Work from './compunents/work';
import Footer from './compunents/footer';
import CaseStudy from './compunents/caseStudy';
import Contact from './compunents/contact'
import './App.css';

function App() {
  return (
    <Router>
  

      <Routes>
        
        {/* Default route renders all components as a single page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <CaseStudy />
              <Work />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
