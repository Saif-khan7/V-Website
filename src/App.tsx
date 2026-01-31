"use client";
import { useState } from "react";
import "./index.css";

export default function Page() {
  const [showIntro, setShowIntro] = useState(true);
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked more nicely?",
      "pleasee?",
      "With a chocolate??",
      "With a flower???",
      "On my knees???",
      "PLEASEEE BB?",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to my ghost",
      "please bb",
      ":((((",
      "PLEASE",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">
      {/* INTRO PAGE */}
      {showIntro ? (
        <>
          <img
            className="bear-img"
            src="https://media.tenor.com/Ndb7rROknSkAAAAj/bear-cute.gif" 
            alt="Cute Bear Laughing"
          />
          <div className="question-text">Helloo bb!!</div>
          <button
            className="yes-button"
            onClick={() => setShowIntro(false)}
          >
            Continue
          </button>
        </>
      ) : (
        /* VALENTINE QUESTION PAGE */
        yesPressed ? (
          <>
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
            <div className="success-text">Yayayayy!!! I love you cutie patootie!!💖😘</div>
            {/* NEW ADDITION BELOW */}
            <div className="glove-box-text">Please open the glove box</div>
          </>
        ) : (
          <>
            <img
              className="bear-img"
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            />
            <h1 className="question-text">Will you be my Valentine?</h1>
            <div className="button-wrap">
              <button
                className="yes-button"
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>
              <button
                onClick={handleNoClick}
                className="no-button"
              >
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )
      )}
    </div>
  );
}