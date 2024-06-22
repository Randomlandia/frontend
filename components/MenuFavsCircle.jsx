import React from "react"
import TemaContainer from "./TemaContainer"

export default function MenuFavsCircle() {
  const badgesList = [
    {
      id: 1,
      content: <TemaContainer bool={true} name="nerd" />,
      style: "translate-x-12 translate-y-10"
    },
    {
      id: 2,
      content: <TemaContainer bool={true} name="ciencias" />,
      style: ""
    },
    {
      id: 3,
      content: <TemaContainer bool={true} name="idiomas" />,
      style: "-translate-x-12 translate-y-10"
    },
    {
      id: 4,
      content: <TemaContainer bool={true} name="matematicas" />,
      style: ""
    },
    {
      id: 5,
      content: <p> </p>,
      style: ""
    },
    {
      id: 6,
      content: <TemaContainer bool={true} name="deportes" />,
      style: ""
    },
    {
      id: 7,
      content: <TemaContainer bool={true} name="mundo" />,
      style: "translate-x-12 -translate-y-10"
    },
    {
      id: 8,
      content: <TemaContainer bool={true} name="artes" />,
      style: ""
    },
    {
      id: 9,
      content: <TemaContainer bool={true} name="vida" />,
      style: "-translate-x-12 -translate-y-10"
    }
  ]

  return (
    <div className="py-6 md:py-2 relative mx-auto">
      <div className="grid grid-cols-3 mx-auto gap-1">
        {badgesList.map((badge) => (
          <div key={badge.id} className={`w-44 h-40 lg:w-36 lg:h-32 flex justify-items-center ${badge.style}`}>
            {badge.content}
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <TemaContainer bool={true} name="default" />
      </div>
    </div>
  )
}
