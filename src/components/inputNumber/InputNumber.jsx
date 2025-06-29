import "./InputNumber.css"




function InputNumber(props){
    const {testNumber,handleSubmit,onChange} = props;

    // const handleSubmit = (event) => {
    //     event.preventDefault();


    // }//handleSubmit()


    return(
        <form onSubmit={handleSubmit} className="container d-flex flex-column p-5 align-items-center gap-1">
            <label htmlFor="txtNumber">Ingresa un número</label>
            <input type="number" name="txtNumber" id="txtNumber" onChange={onChange} value={testNumber} placeholder="1" className="w-100 text-center"/>
            <button type="submit" className="w-100">Probar número</button>
        </form>
)
}//inputNumber()

export default InputNumber;