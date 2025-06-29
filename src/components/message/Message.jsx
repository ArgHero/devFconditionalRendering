import "./Message.css"

function Message(props){
    const {message} = props;

    return(<>
        {message && <h3>{message}</h3>}
    </>)
}

export default Message;