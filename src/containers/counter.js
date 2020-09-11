import { connect } from "react-redux";
import App from "../App";

const mapStateToProps = state =>{
    return {counter: state.counter}
}

const mapDispatchToProps = dispatch => {
    return{
        increment: () => dispatch({type:'INCREMENT'}),
        descrement: () => dispatch({type:'DECREMENT'})
    }
}

const createConnection = connect(
    mapStateToProps,
    mapDispatchToProps 
)

const componentWithConnectionToRedux = createConnection(App)

export default componentWithConnectionToRedux