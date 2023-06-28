const Home = () => {

    const handleClick = (e) => {
        console.log("clicked!", e);
    }

    const handleClickAgain = (name, e) => {
        console.log("Clicked Again! :" + name, e.target);
    }
    return ( <div className="home">
        <h2>Homepage</h2>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={(e) => handleClickAgain('marion', e)}>Click Me Again</button>
    </div> );
}
 
export default Home;