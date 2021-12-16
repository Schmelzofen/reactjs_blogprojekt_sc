import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Blog from "./pages/Blog"
import BlogDetails from "./components/BlogDetails"
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogData/:id" element={<BlogDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
