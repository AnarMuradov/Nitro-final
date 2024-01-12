import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Home from './Pages/Home';
import AddPage from './Pages/AddPage';
import DetailPage from './Pages/DetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/AddPage" element={<AddPage/>}/>
        <Route path="/DetailPage/:id" element={<DetailPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
