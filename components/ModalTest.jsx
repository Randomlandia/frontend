// components/ModalTest.js
import TestBubble from "./TestBubble";
import TemaContainer from "./TemaContainer";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function ModalTest({ setShowTest }) {
  const router = useRouter();
  const { topic } = router.query;
  const [testSandias, setTestSandias] = useState([]);
  const [askedSandias, setAskedSandias] = useState([]);
  const [attempt, setAttempt] = useState(0);
  const [current, setCurrent] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [isQuestion, setIsQuestion] = useState(true);
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [showWinningModal, setShowWinningModal] = useState(false);

  const getRandomQuestion = (sandias) => {
    if (attempt < 3 && topic === "default") {
      let randomQuestion = null;
      let randomQuestionIndex = -1;
      setAnswer(null);
      setIsCorrect(null);
      setIsQuestion(true);
      setShowResult(false);
      setIsLoading(true);

      do {
        randomQuestionIndex = Math.floor(Math.random() * sandias.length);
        randomQuestion = sandias[randomQuestionIndex];
      } while (
        askedSandias.includes(randomQuestion) &&
        sandias.length > askedSandias.length
      );

      if (randomQuestion) {
        setCurrent(randomQuestion);
        setAskedSandias([...askedSandias, randomQuestion]);
        setIsLoading(false);
        return randomQuestion;
      }
    }
  };

  const handleNextQuestion = () => {
    if (attempt === 2) {
      handleFinalResult();
    } else {
      setIsQuestion(true);
      getRandomQuestion(testSandias);
      setAttempt(attempt + 1); // Increment attempt after setting current question
    }
  };

  useEffect(() => {
    const storedSandias = localStorage.getItem("view");
    if (storedSandias) {
      const reverseFavs = JSON.parse(storedSandias).reverse().slice(0, 10);
      setTestSandias(reverseFavs);
      getRandomQuestion(reverseFavs);
    }
  }, []);

  useEffect(() => {
    if (answer !== null) {
      setTimeout(() => {
        if (answer === current?.answer) {
          setIsCorrect(true);
          setCorrectAnswersCount(correctAnswersCount + 1);
        } else {
          setIsCorrect(false);
        }
        setTimeout(() => {
          setIsQuestion(false);
          setShowResult(true);
        }, 1000);
      }, 1000);
    }
  }, [answer]);

  const handleFinalResult = () => {
    const score = correctAnswersCount >= 3 ? 10 : 0;
    const storedScore = localStorage.getItem("score");
    const totalScore = storedScore ? parseInt(storedScore) + score : score;
    localStorage.setItem("score", totalScore);
    setShowWinningModal(true);
  };

  const closeModal = () => {
    setShowWinningModal(false);
    setShowTest(false);
  };

  const getRandyImage = () => {
    if (isLoading || isQuestion) {
      return "/RANDY_01.svg";
    } else if (isCorrect === true) {
      return "/RANDY_08.svg";
    } else if (isCorrect === false) {
      return "/RANDY_06.svg";
    }
    return "/RANDY_01.svg";
  };

  const isFinal = attempt >= 3;

  return (
    <div className="sm:p-4 min-h-screen bg-oldwhite/50 sm:bg-transparent">
      <div
        id="card-test"
        className="w-full h-full lg:w-[85%] sm:bg-cream/50 px-3 py-5 lg:mx-auto sm:rounded-xl"
      >
        <div className="w-full sm:w-full sm:max-w-full flex flex-col items-center gap-4 sm:px-6 sm:gap-16">
          <div className="flex justify-between w-full lg:hidden">
            <div className="w-14 sm:w-20">
              <TemaContainer />
            </div>
            <button
              onClick={() => router.push("/menu")}
              className="hover:transform hover:scale-125"
            >
              <img src="/close.svg" alt="Close Icon" className="w-10 h-10" />
            </button>
          </div>
          <div className="flex gap-3">
            <div className="hidden lg:grid">
              <div className="flex justify-start items-start">
                <div className="w-14 sm:w-20 sm:h-20">
                  <TemaContainer />
                </div>
              </div>
            </div>
            <div className="lg:pt-16">
              <div className="grid gap-10 sm:border-4 border-yellow-600 rounded-lg sm:bg-white w-full">
                <div className="sm:pl-20 sm:pr-8 sm:pt-7 text-center">
                  <TestBubble
                    text={current?.question}
                    result={
                      isCorrect !== null
                        ? isCorrect
                          ? "¡Correcto!"
                          : "¡Incorrecto!"
                        : ""
                    }
                    content={current?.content}
                    isQuestion={isQuestion}
                    isLoading={isLoading}
                    setAnswer={setAnswer}
                    isFinal={isFinal}
                    correctAnswersCount={correctAnswersCount}
                  />
                </div>
                <div className="flex justify-between items-center px-3">
                  <img
                    src={getRandyImage()}
                    alt="randy"
                    className="w-32 sm:w-40"
                  />
                  <div className="flex flex-col gap-3 pr-5">
                    <div className="flex justify-between gap-4 sm:gap-10"></div>
                    <div className="flex justify-between gap-4 sm:hidden">
                      {showResult && attempt < 4 && (
                        <button
                          key="turnRightIcon"
                          onClick={handleNextQuestion}
                          className="hover:transform hover:scale-125"
                        >
                          <img
                            src={"/icon_turnright.svg"}
                            alt="Turn Right Icon"
                            className="w-12 h-12"
                          />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:grid">
              <div id="forlg" className="w-20 flex justify-end items-start">
                <button
                  onClick={() => router.push("/menu")}
                  className="hover:transform hover:scale-125"
                >
                  <img
                    src="/close.svg"
                    alt="Close Icon"
                    className="w-10 h-10"
                  />
                </button>
              </div>
              {showResult && attempt < 4 && (
                <button
                  key="turnRightIcon"
                  onClick={handleNextQuestion}
                  className="hidden lg:flex hover:transform hover:scale-125 justify-end"
                >
                  <img
                    src="/icon_turnright.svg"
                    alt="Turn Right Icon"
                    className="w-16 h-16"
                  />
                </button>
              )}
            </div>
          </div>
          <div className="hidden w-full gap-4 sm:flex justify-between"></div>
        </div>
      </div>

      {showWinningModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Resultados</h2>
            <p>
              {correctAnswersCount === 3
                ? "¡Felicidades! Has respondido correctamente a todas las preguntas."
                : "¡No te desanimes! Aquí tienes una frase célebre para motivarte: 'El éxito es la suma de pequeños esfuerzos repetidos día tras día.'"}
            </p>
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
