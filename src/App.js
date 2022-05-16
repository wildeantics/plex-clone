import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CategoryRecommended from './pages/CategoryRecommended'
import CategoryLibrary from './pages/CategoryLibrary'
import Movie from './pages/Movie'
import TvShow from './pages/TvShow'
import Episode from './pages/Episode'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Season from './pages/Season'
import Navigation from 'components/Navigation'

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/:category' element={<CategoryRecommended />}></Route>
          <Route
            path='/:category/library'
            element={<CategoryLibrary />}
          ></Route>
          <Route path='/:movie' element={<Movie />}></Route>
          <Route path='/:tvshow' element={<TvShow />}></Route>
          <Route path='/:tvshow/:season' element={<Season />}></Route>
          <Route path='/:tvshow/:season/:episode' element={<Episode />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/*' element={<NotFound />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
