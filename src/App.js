import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages Component
import Home from './pages/home/Home';
import Recipe from './pages/recipe/Recipe';
import Create from './pages/create/Create';
import Search from './pages/search/Search';

//Styles
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/search' element={<Search />}></Route>
          <Route path='/recipes/:id' element={<Recipe />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
