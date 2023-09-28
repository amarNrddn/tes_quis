import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './styleSoal.css'

const Soal = () => {
  const [pertanyaan, setpertanyaan] = useState([]);
  const [pertanyaanSaatini, setpertanyaanSaatini] = useState(0);
  const [nilai, setnilai] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const getApi = () => {
    axios
      .get("https://opentdb.com/api.php?amount=5&#38;category=9&#38;difficulty=easy&#38;type=multiple")
      .then((response) => {
        const data = response.data.results;
        setpertanyaan(data);
      });
  }

  useEffect(() => {
    getApi()
  }, []);

  const hendelePertanyaan = (isCorrect) => {
    if (isCorrect) {
      setnilai(nilai + 1);
    }

    const nextQuestion = pertanyaanSaatini + 1;
    if (nextQuestion < pertanyaan.length) {
      setpertanyaanSaatini(nextQuestion);
    } else {
      setGameOver(true);
    }
  };
  return (
    <div className="container_soal">
      {gameOver ? (
        <div className="game-over">
          <h2>Trimakasih sudah mengerjakan</h2>
          <h3>Anda mendapat: {nilai} Secore</h3>
        </div>
      ) : (
        <div className='lembar_soal'>
          <h2 className='pertanyaan'>{pertanyaan[pertanyaanSaatini] && pertanyaan[pertanyaanSaatini].question}</h2>
          <ul className='pilihan'>
            {pertanyaan[pertanyaanSaatini] &&
              pertanyaan[pertanyaanSaatini].incorrect_answers.map((answer, index) => (
                <li key={index}>
                  <button onClick={() => hendelePertanyaan(false)}>{answer}</button>
                </li>
              ))}
            <li>
              <button onClick={() => hendelePertanyaan(true)}>{pertanyaan[pertanyaanSaatini] && pertanyaan[pertanyaanSaatini].correct_answer}</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Soal