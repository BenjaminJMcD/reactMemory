import { useState, useEffect } from 'react'
import Card from './Card'

function App() {

  const [items, setItems] = useState([])
  const [idArray, setIdArray] = useState([])
  const [trackingArray, setTrackingArray] = useState([])
  const [score, setScore] = useState(0)
  const [highestScore, setHighestScore] = useState(0)

  useEffect(() => {
      const fetchData = async () => {

          const response1 = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
          const data1 = await response1.json()
          const response2 = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
          const data2 = await response2.json()
          const response3 = await fetch('https://pokeapi.co/api/v2/pokemon/mawile')
          const data3 = await response3.json()
          const response4 = await fetch('https://pokeapi.co/api/v2/pokemon/phantump')
          const data4 = await response4.json()
          const response5 = await fetch('https://pokeapi.co/api/v2/pokemon/haunter')
          const data5 = await response5.json()
          const response6 = await fetch('https://pokeapi.co/api/v2/pokemon/sandygast')
          const data6 = await response6.json()
          const response7 = await fetch('https://pokeapi.co/api/v2/pokemon/emolga')
          const data7 = await response7.json()
          const response8 = await fetch('https://pokeapi.co/api/v2/pokemon/charcadet')
          const data8 = await response8.json()
          const response9 = await fetch('https://pokeapi.co/api/v2/pokemon/kecleon')
          const data9 = await response9.json()

          const combinedData = [data1, data2, data3, data4, data5, data6, data7, data8, data9];
          setItems(combinedData)

          const setIds = [data1.id, data2.id, data3.id, data4.id, data5.id, data6.id, data7.id, data8.id, data9.id];
          setIdArray(setIds);

          if (trackingArray.length == 0) {
            setTrackingArray(idArray)
          }

      }
      fetchData();

  }, []);




  function handleTracking(id) {

    if (trackingArray.includes(Number(id))) {
      setTrackingArray([])
      setScore(0)
      console.log("ALREADY THERE")
    }
    else {
      setTrackingArray((prev) => [...prev, Number(id)])
      setScore(score+1)
      console.log("FRESH CHOICE")
    }
  }

  function handleClick(e) {

    const itemsToShuffle = [...items];
    const shuffledItems = itemsToShuffle.sort(() => 0.5 - Math.random());
    setItems(shuffledItems);
    
    const targetId = e.target.getAttribute("data-key");
    console.log(targetId)

    handleTracking(targetId)

  }

  return (
    <div>
      <h1 className="pageTitle">Memory Card Game</h1>
      <h2>Score: {score}</h2>
      <div className="cardContainer">
        {items.map((item) => (
          <Card  
            key = {item.id}
            id={item.id}
            image = {item.sprites.front_default}
            name = {item.name}
            click = {handleClick}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
