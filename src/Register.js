import React,{useState} from 'react'

const Register = () => {

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleInputChange = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    const submitData = () =>{
        console.log(data);
    }

    return (
        <div>
            <label>E-mail</label>
            <br/>
            <input onChange={handleInputChange} name="email" />
            <br/>
            <label>password</label>
            <br/>
            <input onChange={handleInputChange} name="password" />
            <br/>
            <button onClick={submitData}>submit</button>
        </div>
    )
}

export default Register
