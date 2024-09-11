import React, { useRef, useState } from "react";
import "./ImageField.css";
const ImageField = ({ filter, image, imgref, customfil, menu, select }) => {
  const inputref = useRef(null);
  const [file, setfile] = useState(null);
  const handleupload = (e) => {
    console.log(e.target.files);
    setfile(e.target.files[0]);
    image(e.target.files[0]);
    inputref.current.value = "";
  };
  const filterStyles = {
    filter: `
      contrast(${customfil.Contrast}%) 
      brightness(${customfil.Brightness}%) 
      saturate(${customfil.Saturation}%) 
      sepia(${customfil.Sepia}%) 
      grayscale(${customfil.GrayScale}%)
    `,
  };
  return (
    <div onClick={() => inputref.current.click()} className="Imagefield_cont">
      <input
        type="file"
        accept=".png,.jpeg,.jpg"
        ref={inputref}
        onChange={handleupload}
        style={{ display: "none" }}
      />

      {file ? (
        <img
          ref={imgref}
          onLoad={() => select(true)}
          className={filter}
          src={URL.createObjectURL(file)}
          style={menu === "Custom" ? filterStyles : null}
        />
      ) : (
        <>Upload Image</>
      )}
    </div>
  );
};

export default ImageField;
