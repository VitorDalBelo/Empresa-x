import logo from './logo.svg';
import './App.css';

import {Menubar} from './components/Menubar'
import {Banner} from './components/Banner'
import {Content} from './components/Content'
import {Footer} from './components/Footer'
import React from 'react';
function App() {
  return (
    <>
    <Menubar></Menubar>
    <div className='pagecontent'> 
    <Banner></Banner>
    <Content></Content>
    <Footer/>
    </div>
   
    </>
  );
}

export default App;
