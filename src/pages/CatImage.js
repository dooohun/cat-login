import { useState, useEffect } from "react";
import axios from "axios";
import "../pages/CatImage.css"
import Header from "../components/Header"

function CatImage() {
  const [cat, setCat] = useState("");
  const [loading, setLoading] = useState(true);

  const getImage = () =>{
    axios.get("https://api.thecatapi.com/v1/images/search?size=full")
      .then((image) => image.data)
      .then((value) => {
        setCat(value[0].url);
      })
    setLoading(false);
  }

  useEffect(() => {
    setLoading(false);
    getImage();
  }, [])

  return (
    <div>
      <Header />
      <div className="cat-image-container">
        <h1>Adorable cat</h1>
        <form>
          <select onChange={getImage}>
            <option>코숏</option>
            <option>러시안 블루</option>
            <option>페르시안 고양이</option>
            <option>샴 고양이</option>
            <option>터키쉬 앙고라</option>
          </select>
        </form>
        <br />
        {loading || cat === "" ? (
          <h1>Loading...</h1>
        ) : (
          <div className="cat-images">
            <img className="cat-image1" src={cat}></img>
            <img className="cat-image2" src={cat}></img>
            <img className="cat-image3" src={cat}></img>
            <img className="cat-image4" src={cat}></img>
        </div>
        )}
      </div>
    </div>
  )
}

export default CatImage;
