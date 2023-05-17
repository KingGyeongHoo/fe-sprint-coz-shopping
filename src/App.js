import './App.css';
import { useEffect } from 'react';
import Footer from './components/footer';
import Header from './components/header';
import { setItems } from './redux/action';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('http://cozshopping.codestates-seb.link/api/v1/products')
    .then(res => {
      dispatch(setItems(res.data))
    })
  }, [])
  console.log('hi')
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default App;
