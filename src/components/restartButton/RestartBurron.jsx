import "./RestartButton.css"

function RestartButton(props){
    const {handleRestart} = props;

    return(<>
        <button type="button" onClick={handleRestart}>Reiniciar</button>
    </>)
}//RestartButton()

export default RestartButton;