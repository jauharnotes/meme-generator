import { useState } from "react";
import memesData from "../memeData";

export default function Meme() {
    // const [memeImage, setMemeImage] = useState("")
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMeme, setAllMeme] = useState(memesData)

    function getMemeImage() {
        const data = allMeme.data.memes
        const dataRandom = Math.floor(Math.random() * data.length)
        const url = data[dataRandom].url
        setMeme(revMemeImage => ({
            ...revMemeImage,
            randomImage: url
        }))
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
            <img className="meme--img" src={meme.randomImage} alt="meme" />
        </main>
    );
};
