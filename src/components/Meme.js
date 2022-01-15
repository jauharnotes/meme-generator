import { useState } from "react";
import memesData from "../memeData";

export default function Meme() {
    const [memeImage, setMemeImage] = useState("")

    function getMemeImage() {
        const arrayData = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * arrayData.length)
        setMemeImage(arrayData[randomNumber].url)

    }

    return (
        <main>
            <form className="form">
                <input className="form--input" type="text" placeholder="Top tex" />
                <input className="form--input" type="text" placeholder="Bottom Text" />
                <button type="button" onClick={getMemeImage} className="form--button">
                    Get a new meme image 🖼
                </button>
            </form>
            <img className="meme--img" src={memeImage} alt="meme" />
        </main>
    );
};
