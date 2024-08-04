import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

// * pages
import Dashboard from './pages/Dashboard'

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
