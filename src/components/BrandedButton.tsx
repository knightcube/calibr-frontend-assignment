import React from 'react'

const BrandedButton:React.FC<{title:string}> = (props) => {
  return (
    <button
          type="button"
          className="bg-[#4CAF4F] text-white rounded-md px-8 py-[14px]"
    >{props.title}</button>
  )
}

export default BrandedButton