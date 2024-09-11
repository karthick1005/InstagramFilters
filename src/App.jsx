import { useEffect, useRef, useState } from "react";
import "./App.css";
import ImageField from "./Component/ImageField/ImageField";
import FilterPreview from "./Component/FilterPreview/FilterPreview";
import FilterSlider from "./Component/Slider/FilterSlider";

function App() {
  const [currentmenu, setcurrentmenu] = useState("Insta");
  const [currentfilter, setcurrentfilter] = useState("");
  const [filtervalue, setfilterval] = useState({
    Contrast: 100,
    Brightness: 100,
    Saturation: 100,
    Sepia: 0,
    GrayScale: 0,
  });
  const [image, setimage] = useState(null);
  const imageRef = useRef(null);
  const [imgsel, setimgsel] = useState(false);

  const canvasRef = useRef(null);
  const saveimage = async () => {
    const image = imageRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    console.log(image);
    // Set the canvas size to the image size
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;

    // Get the CSS filter applied to the image
    const filter = getComputedStyle(image).filter;

    // Apply the CSS filter to the canvas
    ctx.filter = filter;

    // Draw the image onto the canvas with the filter applied
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    // Convert the canvas to a Blob
    // canvas.toBlob(async (blob) => {
    //   // Create a FormData object to upload the image
    //   const formData = new FormData();
    //   formData.append("file", blob, "filtered-image.png");

    //   // Example upload to the backend
    //   try {
    //     const response = await fetch("/upload-endpoint", {
    //       method: "POST",
    //       body: formData,
    //     });

    //     if (response.ok) {
    //       console.log("Image uploaded successfully");
    //     } else {
    //       console.error("Image upload failed");
    //     }
    //   } catch (error) {
    //     console.error("Error uploading image:", error);
    //   }
    // }, "image/png"); // You can change the file type if needed
    const imageURL = canvas.toDataURL("image/png");

    // Create a temporary link element to trigger the download
    const downloadLink = document.createElement("a");
    downloadLink.href = imageURL;
    downloadLink.download = "filtered-image.png"; // Image name
    downloadLink.click();
  };
  return (
    <div className="App_container">
      <div>
        <h1>Image Filter</h1>
      </div>
      <div className="App_body">
        <div className="Appbodyimage">
          <canvas ref={canvasRef} style={{ display: "none" }}></canvas>{" "}
          {/* Hidden canvas */}
          <ImageField
            menu={currentmenu}
            customfil={filtervalue}
            filter={currentfilter}
            imgref={imageRef}
            image={setimage}
            select={setimgsel}
          />
          {/* {console.log(imageRef.current.src)} */}
          <button disabled={!imgsel ? true : false} onClick={() => saveimage()}>
            Download Image
          </button>
        </div>
        <div className="App_body_selection">
          <div className="App_body_selection_btn">
            <button
              className={currentmenu === "Insta" ? "active" : ""}
              onClick={() => setcurrentmenu("Insta")}
            >
              Instagram Filter
            </button>
            <button
              className={currentmenu === "Custom" ? "active" : ""}
              onClick={() => {
                setcurrentmenu("Custom");
                setcurrentfilter("");
              }}
            >
              Custom
            </button>
          </div>
          {currentmenu === "Insta" ? (
            <FilterPreview
              setfilter={setcurrentfilter}
              current={currentfilter}
            />
          ) : (
            <FilterSlider filter={filtervalue} set={setfilterval} />
          )}
        </div>
      </div>
      <div>&copy; 2024 udhayakarthick</div>
    </div>
  );
}

export default App;
