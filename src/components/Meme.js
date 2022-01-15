export const Meme = () => {
    return (
        <main>
            <form className="form">
                <input className="form--input" type="text" placeholder="Top tex" />
                <input className="form--input" type="text" placeholder="Bottom Text" />
                <button className="form--button">Get a new meme image  🖼</button>
            </form>
        </main>
    )
}

export default Meme;