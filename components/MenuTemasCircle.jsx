import React from "react"
import TemaContainer from "./TemaContainer"

export default function MenuTemasCircle() {

  const badgesList = [
    <TemaContainer bool={true} name="nerd" />,
    <TemaContainer bool={true} name="ciencias" />,
    <TemaContainer bool={true} name="idiomas" />,
    <TemaContainer bool={true} name="deportes" />,
    <TemaContainer bool={true} name="vida" />,
    <TemaContainer bool={true} name="default" />,
    <TemaContainer bool={true} name="artes" />,
    <TemaContainer bool={true} name="mundo" />,
    <TemaContainer bool={true} name="matematicas" />
  ]

  return (
    <div className="grid grid-cols-3 gap-4 w-full h-full">
      {badgesList.map((badge, index) => (
        <div
          key={index}
          className={`w-20 h-20 rounded-full shadow-md flex items-center justify-center transform rotate-${index * 40} ${badge}`}
        >
          <TemaContainer bool={true} name={badge} />
        </div>
      ))}
    </div>
  )
}
