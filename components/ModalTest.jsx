// components/ModalTest.js
import React from "react";
import TestBubble from "./TestBubble";
import SpeechBubble from "./SpeechBubble";
import TemaContainer from "./TemaContainer";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function ModalTest({ setShowTest, setTestCt }) {
  const router = useRouter();
  const { topic } = router.query;
  const [testSandias, setTestSandias] = useState([]);
  const [askedSandias, setAskedSandias] = useState([]);
  const [alreadyTested, setAlreadyTested] = useState([]);
  const [attempt, setAttempt] = useState(0);
  const [current, setCurrent] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [isLogged, setIsLogged]= useState(false)
  const [isQuestion, setIsQuestion] = useState(true);
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [points, setPoints] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showWinningModal, setShowWinningModal] = useState(false);
  const [showConfirm, setShowconfirm] = useState(true);

  const getRandomQuestion = (sandias) => {
    if (attempt < 3 && topic !== "default") {
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
    const token = localStorage.getItem("token")
    const testedSandias = localStorage.getItem("tested");
    const storedSandias = localStorage.getItem("view");
    if (token) setIsLogged(true)
    if (storedSandias) {
      const stored = JSON.parse(storedSandias).filter(
        (sandia) => sandia?.topic?.name === topic
      );
      const tested =
        testedSandias &&
        JSON.parse(testedSandias).filter(
          (sandia) => sandia?.topic?.name === topic
        );
      if (tested) {
        setAlreadyTested(tested);
        const storedExcTested = stored.filter(
          (sandia) =>
            !tested.some((alreadyTested) => alreadyTested._id == sandia._id)
        );
        setTestSandias(storedExcTested);
      } else {
        setTestSandias(stored);
      }

      getRandomQuestion(testSandias);
      // console.log(newQuestion)
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

  const handleStartTest = () => {
    setShowconfirm(false);
    getRandomQuestion(testSandias);
  };

  const handleLogros = () => {
    if (isLogged) {
      const updateUser = async () => {
        const userID = localStorage.getItem("userID");
        const views = JSON.parse(localStorage.getItem("view")) || [];
        const favs = JSON.parse(localStorage.getItem("favs")) || [];
        const username = localStorage.getItem("username") || "";
        const avatar = localStorage.getItem("avatar") || "";
        const achieve = JSON.parse(localStorage.getItem("achieve")) || {};
        const score = JSON.parse(localStorage.getItem("score")) || {};
        const tested = JSON.parse(localStorage.getItem("tested")) || [];

        const sandiasVistas = [...new Set(views.map((sandia) => sandia._id))]
        const sandiasFavoritas = [...new Set(favs.map((sandia) => sandia._id))]
        const sandiasTested = [...new Set(tested.map((sandia) => sandia._id))]

        const requestBody = {
          sandiasVistas,
          name: username,
          avatar,
          achievements: achieve,
          sandiasFavoritas,
          score,
          sandiasTested
        };

        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_RANDOM_API}users/${userID}`,
            {
              method: "PUT",
              body: JSON.stringify(requestBody),
              headers: {
                "Content-Type": "application/json; charset=UTF-8"
              }
            }
          );
          const json = await response.json();
          console.log(json);
        } catch (error) {
          console.log("Error", error);
        }
      };

      updateUser();
    }
    router.push("/user/achv");
  };

  const handleFinalResult = () => {
    let achieveStructure = {
      idiomas: { level: 0 },
      matematicas: { level: 0 },
      ciencias: { level: 0 },
      mundo: { level: 0 },
      deportes: { level: 0 },
      vida: { level: 0 },
      nerd: { level: 0 },
      artes: { level: 0 }
    };
    let achieve =
      JSON.parse(localStorage.getItem("achieve")) || achieveStructure;
    const score = correctAnswersCount >= 3 ? 10 : 0;
    const storedScore = localStorage.getItem("score");
    const totalScore = storedScore ? parseInt(storedScore) + score : score;
    localStorage.setItem("score", totalScore);
    if (correctAnswersCount === 3) {
      const updatedTested = [...alreadyTested, ...askedSandias];
      const updatedAchieveLevel = (achieve[topic]?.level || 0) + 1;
      setPoints(updatedAchieveLevel);
      achieve[topic].level = updatedAchieveLevel;
      localStorage.setItem("tested", JSON.stringify(updatedTested));
      localStorage.setItem("achieve", JSON.stringify(achieve));
    }
    setShowWinningModal(true);
  };

  const closeModal = () => {
    setShowWinningModal(false);
    setShowTest(false);
    setTestCt(0);
  };

  const getRandyImage = () => {
    if (isLoading || isQuestion) {
      return "/RANDY_01.svg";
    } else if (isCorrect === true || correctAnswersCount === 3) {
      return "/RANDY_08.svg";
    } else if (isCorrect === false || correctAnswersCount < 3) {
      return "/RANDY_06.svg";
    }
    return "/RANDY_01.svg";
  };

  const isFinal = attempt >= 3;

  return showConfirm ? (
    <div className="flex justify-center items-center w-screen">
      <div className="lg:pt-16 w-[80%] flex justify-center items-center">
        <div className="w-screen min-w-sm grid sm:flex justify-center gap-10 sm:border-4 border-yellow-600 rounded-lg sm:bg-white/70">
          <div className="flex flex-col">
            <div className="sm:pl-20 sm:pr-8 sm:pt-7 text-center">
              <SpeechBubble
                text={
                  "Eh llegado de una tierra misteriosa para retarte ¿Crees que lograrás vencerme?"
                }
              />
            </div>
            <img src={getRandyImage()} alt="randy" className="w-32 sm:w-56" />
          </div>
          <div className="grid sm:flex items-center gap-5">
            <button
              onClick={handleStartTest}
              className="py-2 px-4 bg-lgreen rounded-xl text-white font-lucky text-3xl"
            >
              ¡Obviamente!
            </button>
            <button
              onClick={closeModal}
              className="py-2 px-4 bg-lorange rounded-xl text-white font-lucky text-3xl"
            >
              Ahorita no joven
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
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
        <div className="fixed inset-0 bg-white bg-opacity-70 flex items-center justify-center">
          <div className="w-4/5 bg-oldwhite/95 grid gap-6 p-6 rounded-xl shadow-2xl shadow-lorange/70">
            <h2 className="text-4xl text-center font-bold font-ram text-dorange mb-4">
              {correctAnswersCount === 3
                ? `¡Seguro hiciste trampa! `
                : "¡Ay no!"}
            </h2>
            <p className="text-center text-dgreen grid gap-2">
              {correctAnswersCount === 3 ? (
                `¡Es broma... parece que lo sabes todo! Por cierto ganaste ${
                  points % 5 === 0
                    ? "una nueva insignia."
                    : "una garrita al éxito."
                }`
              ) : (
                <>
                  <p>¡No te desanimes! </p>
                  <p>Aquí tienes una frase célebre para motivarte: </p>
                  <p>
                    "El éxito es la suma de pequeños esfuerzos repetidos día
                    tras día."
                  </p>
                </>
              )}
            </p>
            {/* Preparar un listado de frases random positivas y de motivacion */}
            <div className="grid sm:flex gap-10 justify-center items-center py-3">
              <img
                src={
                  correctAnswersCount === 3 ? "/RANDY_08.svg" : "/RANDY_06.svg"
                }
                alt="randy"
                className="w-40 sm:w-56"
              />
              <div className="flex sm:flex-col gap-5 font-lucky text-3xl">
                <button
                  onClick={closeModal}
                  className="bg-gradient-to-tr from-lgreen via-natL to-natD hover:bg-gradient-to-bl hover:shadow-lg hover:shadow-langL text-white p-4 rounded-full transform hover:-translate-y-3 hover:scale-105"
                >
                  ¡Sigamos Jugando!
                </button>
                <button
                  onClick={() => router.push("/menu")}
                  className="bg-gradient-to-tr from-artL via-worldL to-worldD hover:bg-gradient-to-bl hover:shadow-lg hover:shadow-lifeL text-white p-4 rounded-full transform hover:-translate-y-3 hover:scale-105"
                >
                  Al menú
                </button>

                {correctAnswersCount === 3 && (
                  <button
                    onClick={handleLogros}
                    className="bg-gradient-to-tr from-lorange via-dorange to-mathD hover:bg-gradient-to-bl hover:shadow-lg hover:shadow-red-500 text-white p-4 rounded-full transform hover:-translate-y-3 hover:scale-105"
                  >
                    Logros
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
