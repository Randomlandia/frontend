// components/TestBubble.js
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const TestBubble = ({
  text,
  trianglePosition,
  width,
  height,
  result,
  content,
  isQuestion,
  isLoading,
  setAnswer,
  isFinal,
  correctAnswersCount
}) => {
  const triangleClasses = classNames({
    "absolute bottom-[-15px] w-0 h-0 border-t-[15px] border-t-cream border-x-[15px] border-x-transparent": true,
    "left-6": trianglePosition === "left",
    "right-6": trianglePosition === "right"
  });

  const bubbleStyles = {
    width: width,
    height: height
  };

  const finalMessage = correctAnswersCount === 3
    ? "¡Felicidades! Has respondido correctamente a todas las preguntas."
    : "¡No te desanimes! Aquí tienes una frase célebre para motivarte: 'El éxito es la suma de pequeños esfuerzos repetidos día tras día.'";

  return (
    <div
      className="relative speech-bubble bg-cream text-black p-4 rounded-3xl shadow-xl shadow-slate-300"
      style={bubbleStyles}
    >
      <div className="overflow-y-auto h-full text-center grid justify-center py-4 gap-3">
        {isLoading ? (
          <p className="w-auto flex text-center">Cargando...</p>
        ) : (
          <>
            {isFinal ? (
              <p className="w-auto flex text-center">{finalMessage}</p>
            ) : (
              <>
                {!isQuestion && <p className="w-auto flex text-center">{result}</p>}
                <p className="w-auto flex text-center">{isQuestion ? text : content}</p>
                {isQuestion && (
                  <div className="font-lucky text-white flex justify-around items-center">
                    <button
                      onClick={() => setAnswer(true)}
                      className="bg-lgreen rounded-md py-2 px-3 transform transition duration-400 ease-in-out active:scale-90 active:bg-green-700"
                    >
                      cierto
                    </button>
                    <button
                      onClick={() => setAnswer(false)}
                      className="bg-lorange rounded-md py-2 px-3 transform transition duration-400 ease-in-out active:scale-90 active:bg-orange-700"
                    >
                      falso
                    </button>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
      <div className={triangleClasses}></div>
    </div>
  );
};

TestBubble.propTypes = {
  text: PropTypes.string.isRequired,
  trianglePosition: PropTypes.oneOf(["left", "right"]),
  width: PropTypes.string,
  height: PropTypes.string,
  result: PropTypes.string,
  content: PropTypes.string,
  isQuestion: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  setAnswer: PropTypes.func.isRequired,
  isFinal: PropTypes.bool.isRequired,
  correctAnswersCount: PropTypes.number.isRequired
};

TestBubble.defaultProps = {
  trianglePosition: "left",
  width: "332.25px", // Default width
  height: "329.34px", // Default height
  result: null,
  content: null
};

export default TestBubble;

