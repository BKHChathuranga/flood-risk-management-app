import React from 'react'

const ContentHolder = ({children, customStyles}) => {
  return (
    <div className={`bg-white h-max w-full max-w-[1000px] p-5 rounded-md ${customStyles}`}>{children}</div>
  )
}

export default ContentHolder