import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
const LandingPage = (props) => {
    const [emailAddr, setEmailAddr] = useState('example@gmail.com')
    const navigate = useNavigate();
    const [choice, setChoice] = useState('')
    const navigation = () => {
        console.log(choice)
        if(choice == 1)
        {
            navigate('/T1');
        }
        if(choice == 2)
        {
            navigate('/T2');
        }
        if(choice == 3)
        {
            navigate('/T3');
        }
    }
    return (
        <div className="border p-4 border-opacity-10 rounded">
            <h1>Student Login Portal</h1>
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input  type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange = {(e) => props.emailReq(e.target.value)} />
            <div id="emailHelp" className="form-text">Please enter your student E-mail</div>
            <select className="form-select mt-3" aria-label="Default select example" onChange = {(e) => setChoice(e.target.value)}>
                <option selected>Your College</option>
                <option value="1">T1</option>
                <option value="2">T2</option>
                <option value="3">T3</option>
            </select>
            <div id="collegeHelp" className="form-text">Select your college</div>
            <button className="btn btn-primary mt-2" onClick={navigation}>Submit</button>
        </div>
    )
}

export default LandingPage
