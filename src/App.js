import './App.css';
import { useState } from 'react';
import Footer from './components/footer';
import Header from './components/header';
import styled from 'styled-components';

function App() {
  const [dropdown, setDropdown] = useState(false)
  const Sample = styled.div`
  height:2000px;
  width:500px;
  `

    console.log(`현재상태 : ${dropdown}`)
  return (
    <div>
      <Header />
      <Sample>뭘봐?</Sample>
      <Footer />
    </div>
  );
}

export default App;
