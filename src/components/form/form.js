import React, { useRef } from 'react'
import { connect } from 'react-redux'
import updateWord from '../../store/palabra/action'

const Form = ({ updateWord }) =>{
    const palabraRef = useRef(null)
    return(
        <div>
            <input type="text" ref={palabraRef}/>
            <button onClick={ () => {updateWord(palabraRef.current.value)}}>Guardar en la store</button>
        </div>
    )
}

export default connect(null, {updateWord})(Form)