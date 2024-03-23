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
      wordTr: "merhaba",
      wordEng: "hello",
      sentenceTr: "I said hello to him",
      sentenceEng: "Ona merhaba dedim",
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
    if (words.length === 0) {
      setwordNumber(0);
      return;
    }
    if(words.length === wordNumber+1){
      setwordNumber(wordNumber-1)
    }

    const currentWordNumber =
      wordNumber >= words.length ? words.length - 1 : wordNumber;
    const currentWord = words[currentWordNumber];

    if (!currentWord) {
      // Eğer currentWord undefined ise, işlemi sonlandır
      return;
    }

    await axios.delete(`http://localhost:3000/unknownwords/${currentWord.id}`);
    getWords();

    if (currentWordNumber === words.length - 1) {
      setwordNumber(0);
    } else {
      setwordNumber(currentWordNumber);
    }

    await axios.post("http://localhost:3000/knownwords", {
      wordTr: currentWord.wordTr,
      wordEng: currentWord.wordEng,
      sentenceTr: currentWord.sentenceTr,
      sentenceEng: currentWord.sentenceEng,
    });
  };

  useEffect(() => {
    getWords();
  }, [learned]);

  return (
    <div className="appContainer">
      <button className="addButton" onClick={addWordStatus}>
        Yeni Bir Kelime Ekle
      </button>
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
