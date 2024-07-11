import TestBubble from "./TestBubble" 
import TemaContainer from "./TemaContainer"
import { useState,useEffect } from "react"
import { useRouter } from "next/router"

export default function ModalTest(){
  const router = useRouter()
const [testSandias, setTestSandias] = useState([])
const [attempt, setAttempt]= useState(1)

useEffect(()=>{
  const sandias = localStorage.getItem("view")
  if (sandias){
    const reverseFavs=[...sandias].reverse().slice(0, 10)
    setTestSandias(reverseFavs)
  }

},[])


  return (
   
      <div className="sm:p-4 min-h-screen bg-oldwhite/50 sm:bg-transparent">
        <div
          id="card-test"
          className="w-full h-full lg:w-[85%]  sm:bg-cream/50 px-3 py-5 lg:mx-auto sm:rounded-xl"
        >
          <div
            className={`w-full sm:w-full sm:max-w-full flex flex-col items-center gap-4 sm:px-6 sm:gap-16`}
          >
            <div className="flex justify-between w-full lg:hidden">
              <div className="w-14 sm:w-20">
                <TemaContainer />
              </div>
              <button
                onClick={() => router.push("/menu")}
                className="hover:transform hover:scale-125"
              >
                <img src="/close.svg" alt="Close Icon" className="w-10 h-10 " />
              </button>
            </div>
            <div className="flex gap-3">
            <div className=" hidden lg:grid">
F            <div className="flex justify-start items-start">
                  <div className="w-14 sm:w-20 sm:h-20">
                    <TemaContainer />
                  </div>
                </div>

                {/* <button
                  key="arrowLeftIcon"
                  // onClick={reverseSandia}
                  className="hover:transform hover:scale-125 hidden lg:flex"
                >
                  <img
                    src="/icon_arrowleft.svg"
                    alt="Arrow Left Icon"
                    className="w-16"
                  />
                </button> */}
              </div>
              <div className="lg:pt-16">
                <div className="grid gap-10 sm:border-4 border-yellow-600 rounded-lg sm:bg-white w-full">
                  <div className="sm:pl-20 sm:pr-8 sm:pt-7 text-center">
                    {/* <TestBubble
                      text={
                        showQuestion ? sandia?.question : "respuesta"
                      }
                      height=""
                      width=""
                    /> */}
                  </div>
                  <div className="flex justify-between items-center px-3">
                    <img
                      src={"/RANDY_08.svg"}
                      alt="randy"
                      className="w-32 sm:w-40"
                    />
                    <div className="flex flex-col gap-3 pr-5">
                      <div className="flex justify-between gap-4 sm:gap-10">
                        {/* <button
                          key="turnIcon"
                          onClick={handleToggleReference}
                          className="hover:transform hover:scale-125"
                        >
                          <img
                            src="/icon_turn.svg"
                            alt="Turn Icon"
                            className="w-14 h-14 sm:w-24"
                          />
                        </button>

                        <button
                          key="redHeartIcon"
                          onClick={handleLike}
                          className="hover:transform hover:scale-125"
                        >
                          <img
                            src={favIcon}
                            alt="Red Heart Icon"
                            className="w-12 h-12 sm:w-24"
                          />
                        </button> */}
                      </div>
                      <div className="flex justify-between gap-4 sm:hidden">
                        {/* <button
                          key="arrowLeftIcon"
                          onClick={reverseSandia}
                          className="hover:transform hover:scale-125"
                        >
                          <img
                            src={"/icon_arrowleft.svg"}
                            alt="Arrow Left Icon"
                            className="w-12 h-12"
                          />
                        </button>*/}
                        <button
                          key="turnRightIcon"
                          // onClick={handleNextButton}
                          className="hover:transform hover:scale-125"
                        >
                          <img
                            src={"/icon_turnright.svg"}
                            alt="Turn Right Icon"
                            className="w-12 h-12"
                          />
                        </button> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" hidden lg:grid">
                <div id="forlg" className="w-20 flex justify-end items-start">
                  <button
                    onClick={() => router.push("/menu")}
                    className="hover:transform hover:scale-125"
                  >
                    <img
                      src="/close.svg"
                      alt="Close Icon"
                      className="w-10 h-10 "
                    />
                  </button>
                </div>
                <button
                  key="turnRightIcon"
                  // onClick={handleNextButton}
                  className="hidden lg:flex hover:transform hover:scale-125 justify-end"
                >
                  <img
                    src="/icon_turnright.svg"
                    alt="Turn Right Icon"
                    className="w-16 h-16"
                  />
                </button>
              </div>
            </div>
            <div className="hidden w-full gap-4 sm:flex justify-between lg:hidden">
              {/* <button
                key="arrowLeftIcon"
                onClick={reverseSandia}
                className="hover:transform hover:scale-125"
              >
                <img
                  src={"/icon_arrowleft.svg"}
                  alt="Arrow Left Icon"
                  className="w-12 h-12"
                />
              </button> */}
              <button
                key="turnRightIcon"
                // onClick={handleNextButton}
                className="hover:transform hover:scale-125"
              >
                <img
                  src={"/icon_turnright.svg"}
                  alt="Turn Right Icon"
                  className="w-12 h-12"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}