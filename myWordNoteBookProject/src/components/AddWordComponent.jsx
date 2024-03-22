import React, { useState } from "react";
import axios from "axios";

function AddWordComponent() {
  const [wordTr, setWordTr] = useState("");
  const [wordEng, setWordEng] = useState("");
  const [sentenceTr, setSentenceTr] = useState("");
  const [sentenceEng, setSentenceEng] = useState("");

  const saveWordTr = (e) => {
    setWordTr(e.target.value);
  };
  const saveWordEng = (e) => {
    setWordEng(e.target.value);
  };
  const saveSentenceTr = (e) => {
    setSentenceTr(e.target.value);
  };
  const saveSentenceEng = (e) => {
    setSentenceEng(e.target.value);
  };

  const addWord = () => {
    axios.post("http://localhost:3000/unknownwords", {
      wordTr,
      wordEng,
      sentenceTr,
      sentenceEng,
    });
    setWordTr("");
    setWordEng("");
    setSentenceTr("");
    setSentenceEng("");
  };

  return (
    <div className="addWordContainer">
      <input
        type="text"
        onChange={saveWordTr}
        value={wordTr}
        placeholder="Türkçe kelime"
      />
      <input
        type="text"
        onChange={saveWordEng}
        placeholder="İngilizce kelime"
        value={wordEng}
      />
      <input
        type="text"
        onChange={saveSentenceTr}
        value={sentenceTr}
        placeholder="Türkçe cümle"
      />
      <input
        type="text"
        onChange={saveSentenceEng}
        placeholder="İngilizce cümle"
        value={sentenceEng}
      />
      <button onClick={addWord}>Kaydet</button>
    </div>
  );
}

export default AddWordComponent;
