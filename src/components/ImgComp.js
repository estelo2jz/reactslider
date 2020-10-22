import React from 'react'

function ImgComp({ src }) {
  let imgStyles = {
    width: 100 + "%",
    height: "auto",
    backgroundPosition: "center",
    backgroundSize: "100% 100%",
    }
  return (
    <div>
      <img src={src} slt="slide-img" style={imgStyles}></img>
    </div>
  )
}

export default ImgComp;
