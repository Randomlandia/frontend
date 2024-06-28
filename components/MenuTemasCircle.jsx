import React from "react"
import TemaContainerCircle from "./TemaContainerCircle"

export default function MenuTemasCircle() {
  return (
    <div className=" pt-4 mx-auto w-5/6 lg:w-3/4 xl:w-2/3 grid grid-cols-3">
      <div className="flex flex-col">
        <div className="flex justify-end items-end pt-7 pl-7">
          <TemaContainerCircle bool={true} name="nerd" />
        </div>
        <div className="flex items-center py-3 pr-7">
          <TemaContainerCircle bool={true} name="mundo" />
        </div>
        <div className="flex justify-end items-start pb-7 pl-7">
          <TemaContainerCircle bool={true} name="artes" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-start justify-center pb-7 px-3">
          <TemaContainerCircle bool={true} name="ciencias" />
        </div>
        <div className="flex items-center justify-center">
          <TemaContainerCircle bool={true} name="default" />
        </div>
        <div className="flex items-end justify-center pt-7 px-3">
          <TemaContainerCircle bool={true} name="vida" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-end pt-7 pr-7">
          <TemaContainerCircle bool={true} name="idiomas" />
        </div>
        <div className="flex items-center justify-end py-3 pl-7">
          <TemaContainerCircle bool={true} name="matematicas" />
        </div>
        <div className="flex items-start pb-7 pr-7">
          <TemaContainerCircle bool={true} name="deportes" />
        </div>
      </div>
    </div>
  )
}
