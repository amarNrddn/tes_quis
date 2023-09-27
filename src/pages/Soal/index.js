import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Soal = () => {
    const [soal, setSoal] = useState([])

    const getSoal = async() => {
        const res = await axios.get('https://opentdb.com/api.php?amount=5&category=27&difficulty=medium&type=multiple')
        console.log(res)
    }

    useEffect(() => {
        getSoal()
    }, [])
  return (
    <div>Selamat mengerjakan</div>
  )
}

export default Soal