

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Chart from './page/chart';
import Home from './page/Home';
import Introduction from './page/introduction';
import ListStatistical from './page/listSatistical';
import Securities from './page/securities';
import Setting from './page/setting';
import TablePrice from './page/tablePrice';
import TableUserInformation from './page/tableUserInformation';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/TableUserInformation' element={<TableUserInformation/>}/>
        <Route path='/TablePrice' element={<TablePrice/>}/>
        <Route path='/ListStatistical' element={<ListStatistical/>}/>
        <Route path='/Securities' element={<Securities/>}/>
        <Route path='/Chart' element={<Chart/>}/>
        <Route path='/Introduction' element={<Introduction/>}/>
        <Route path='/Setting' element={<Setting/>}/>
      </Routes>
    </BrowserRouter>
  );
}

