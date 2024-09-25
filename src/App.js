import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Pages/Home/Home';
import ListCategory from './Pages/ListCategory/ListCategory';
import NotFound from './Pages/404/NotFound';
import ItemPage from './Pages/ItemPage/ItemPage';
import ItemList from './components/ItemList/ItemList';
import FindList from './components/FindList/FindList';

function App() {

  


  return (
  <Routes>
    <Route path='/' element={<Home/>}>

    <Route index path='/mgwf' element={<ItemList/>}></Route>
    <Route path='/mgwf/findList' element={<FindList/>}></Route>
    <Route path='/mgwf/pageItem/:nameCategory' element={<ListCategory/>}></Route>
    <Route path='/mgwf/pageItem/:nameCategory/:name' element={<ItemPage/>}></Route>
    <Route path="*" element={<NotFound/>}></Route>
    </Route>
  </Routes>

  );
}

export default App;
