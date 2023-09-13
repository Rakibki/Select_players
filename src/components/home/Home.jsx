import React, { useEffect, useState } from 'react'
import {Container} from '@mui/material';
import Player from '../players/Player';
import SelectedPlayers from '../SelectedPlers/SelectedPlayers';

const Home = () => {

  const [players, setPlayers] = useState([])
  const [seletPlays, setSelectPlays] = useState([])

  useEffect(() => {
    fetch(`data.json`)
    .then((res) => res.json())
    .then((data) => setPlayers(data))
  }, [])

  const handleSelect = (item) => {
    const exsit = seletPlays.find((p) => p.ID === item.ID)
    if(exsit) {
      return alert("Akber select korchen bro...!")
    }else {
      if(seletPlays.length <= 10) {
        setSelectPlays([...seletPlays, item])
      }else {
        alert("vai hoiya geche")
      }
    }
  }


  const handleDelete = (id) => {
    const newSele = seletPlays.filter((item) => item.ID !== id)
    setSelectPlays(newSele)
  }

  return (
    <Container maxWidth="lg">
        <div className='md:flex lg:flex gap-3 p-4'>
            <Player handleSelect={handleSelect} players={players} />
            <SelectedPlayers  handleDelete={handleDelete} seletPlays={seletPlays} />
        </div>
    </Container>
  )
}

export default Home