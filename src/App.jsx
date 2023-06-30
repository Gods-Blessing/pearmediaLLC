import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(2);
  const [prize, setPrize] = useState('');

  function rotate(){
    if(count > 0){
      let wheel = document.querySelector('.wheel');
      let value = Math.ceil(Math.random()*3600);
      wheel.style.transform = `rotate(+${value}deg)`
      setCount((prev)=>prev-1);
      document.getElementById('btn').disabled = true;
      setTimeout(()=>{
        document.getElementById('btn').disabled = false;
      }, 5000)

      // for the last chance
      if(count == 1){
        setTimeout(()=>{
          let ele = document.elementFromPoint(window.innerWidth/2, 270).innerText;
          console.log(ele);
          setPrize(ele)
        }, 5000)
      }
    }
  }
  


  return (
    <div className='main-container'>
      <h2>Chances left: {count}</h2>
    <button id='btn' className='btn' onClick={()=>rotate()}>SPIN</button>
    <div className='wheel'>
          <div id='section-1' className='section-1 spinning-section'><span>20</span></div>
          <div id='section-2' className='section-2 spinning-section'><span>50</span></div>
          <div id='section-3' className='section-3 spinning-section'><span>10</span></div>
          <div id='section-4' className='section-4 spinning-section'><span>100</span></div>
          <div id='section-5' className='section-5 spinning-section'><span>25</span></div>
          <div id='section-6' className='section-6 spinning-section'><span>5</span></div>
          <div id='section-7' className='section-7 spinning-section'><span>40</span></div>
          <div id='section-8' className='section-8 spinning-section'><span>6</span></div>

      </div>

      <h2>Prize Won: {prize.length > 0 ? `$${prize}` : " Try Again"}</h2>
    </div>
  )
}

export default App;
