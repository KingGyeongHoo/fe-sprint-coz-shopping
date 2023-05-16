import './App.css';
import { useEffect, useState } from 'react';
import Footer from './components/footer';
import Header from './components/header';
import styled from 'styled-components';
import { setItems } from './redux/action';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('http://cozshopping.codestates-seb.link/api/v1/products')
    .then(res => {
      dispatch(setItems(res.data))
    })
  }, [])

  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
