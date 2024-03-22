import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import AddWordComponent from "./components/AddWordComponent";

function App() {
  const [translateStatus, settranslateStatus] = useState(false);
  const [addStatus, setaddStatus] = useState(false);
  const [words, setWords] = useState([
    {
      id: "1",
      word: "merhaba",
      eng: "hello",
      sentence: "I said hello to him",
      turkish_sentence: "Ona merhaba dedim",
    },
  ]);
  const [wordNumber, setwordNumber] = useState(0);

  const showTranslate = () => {
    settranslateStatus(!translateStatus);
  };

  const addWordStatus = () => {
    setaddStatus(!addStatus);
  };

  const getWords = async () => {
    const response = await axios.get("http://localhost:3000/unknownwords");
    setWords(response.data);
  };

  const nextWord = () => {
    if (wordNumber + 1 === words.length) {
      setwordNumber(0);
    } else {
      setwordNumber(wordNumber + 1);
    }
  };

  const learned = async () => {
    await axios.delete(
      `http://localhost:3000/unknownwords/${words[wordNumber].id}`
    );
    getWords();
    if (words.length === 0) {
      setwordNumber(0); // Silindikten sonra boşsa 0'a ayarla
    } else if (wordNumber + 1 === words.length) {
      setwordNumber(wordNumber - 1);
    }
    await axios.post("http://localhost:3000/knownwords", {
      wordTr: words[wordNumber].wordTr,
      wordEng: words[wordNumber].wordEng,
      sentenceTr: words[wordNumber].sentenceTr,
      sentenceEng: words[wordNumber].sentenceEng,
    });
  };
  

  useEffect(() => {
    getWords();
  }, [learned]);
  return (
    <div className="appContainer">
      <button className="addButton" onClick={addWordStatus}>Yeni Bir Kelime Ekle</button>
      <button className="learnedWordsBtn">Öğrenilen Kelimeleri Göster</button>
      {addStatus ? <AddWordComponent></AddWordComponent> : <div></div>}
      <p className="wordTurn">
        {wordNumber + 1}/{words.length}
      </p>
      <h1 className="wordTr">{words[wordNumber].wordTr}</h1>
      {translateStatus ? (
        <div>
          <h4 className="wordEng">{words[wordNumber].wordEng}</h4>
          <h5 className="sentenceEng">{words[wordNumber].sentenceEng}</h5>
          <h5 className="sentenceTr">{words[wordNumber].sentenceTr}</h5>
        </div>
      ) : (
        <div></div>
      )}
      <div className="btns">
        <button onClick={learned}>Öğrendim</button>
        {translateStatus ? (
          <button onClick={showTranslate}>Çevirisi Kapat</button>
        ) : (
          <button onClick={showTranslate}>çevirisini göster</button>
        )}
        <button onClick={nextWord}>devam et</button>
      </div>
    </div>
  );
}

export default App;
