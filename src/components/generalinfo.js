import React from 'react'

const GeneralInfo = () => (
  <div className="bg-indigo-600">
  <div className=" flex flex-col py-6 md:flex-row h-full  justify-between items-center max-w-6xl mx-auto px-6">
    <div className="flex flex-col items-center justify-center py-4">
      <span className="text-xl text-white font-semibold">
        CALL US 24/7
      </span>
      <span className="text-2xl text-white font-light ">
        {" "}
        +977-01-554787
      </span>
    </div>
    <div className="flex flex-col items-center justify-center py-4">
      <span className="text-xl text-white font-semibold">
        EMAIL ADDRESS
      </span>
      <span className="text-2xl text-white font-light ">
        {" "}
        info@infinity.com
      </span>
    </div>
    <div className="flex flex-col items-center justify-center py-4">
      <span className="text-xl text-white font-semibold">
        OPEN HOURS
      </span>
      <span className="text-2xl text-white font-light ">
        {" "}
        Daily 8:00-19:00
      </span>
    </div>
  </div>
</div>
)

export default GeneralInfo