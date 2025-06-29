import "./Game.css"
import InputNumber from "../inputNumber/InputNumber";
import Message from "../message/Message";
import RestartButton from "../restartButton/RestartBurron";
import { useState } from "react";

function Game(){

    function generarNumeroAleatorio() {
        return Math.floor(Math.random() * 100) + 1;
    }

    const gameDefault = {
    number: generarNumeroAleatorio(),
    test : "",
    message: ""
    }

    const [game,setGame] = useState(gameDefault);

    const handleSubmit = (event) =>{
        event.preventDefault();
        const comparacion = game.number - game.test
        let mensaje
        if(comparacion>0)
            mensaje = "El número es más grande"
        else if(comparacion < 0)
            mensaje = "El número es más pequeño"
        else 
            mensaje ="Adivinaste el número"

        setGame((actualState)=>{
            return{
                ...actualState,
                message: mensaje
            }

        })

    }
    const handleChange = (event) => {
        event.preventDefault();
        setGame((actualState) => {
            return {
                ...actualState,
                test: Number(event.target.value)
            }
        })
        
    }

    return(
        <section className="fluid-container">
            <h2>Adivina el número entre 1 y 100</h2>
            <InputNumber testNumber={game.test} handleSubmit={handleSubmit} onChange={handleChange}/>
            <RestartButton handleRestart={()=>setGame(gameDefault)}/>
            <Message message={game.message}/>
        </section>
    )
}

export default Game;