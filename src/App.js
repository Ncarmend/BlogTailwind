import { Route, Routes, useParams } from 'react-router-dom';
import Layout from "./Component/pages/Layout";
import Home from "./Component/pages/Home";
import Blogs from "./Component/pages/Blogs";
import Articles from "./Component/pages/Articles"
import Compte from "./Component/pages/Compte";
import Inscription from "./Component/pages/Inscription";
import Contact from "./Component/pages/Contact";
import Error from "./Component/pages/Error";
import Footer from "./Component/pages/Footer";
import './App.css';


function App() {
  return (
    <div className="App">
      
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="/article/:id" element={Articles} />
              <Route path="compte" element={<Compte />} />
              <Route path="inscription" element={<Inscription />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<Error />} />
            </Route>

          </Routes>
        
          <Footer/>
        
    </div>
  );
}

export default App;
