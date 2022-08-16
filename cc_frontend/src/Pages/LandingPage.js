import React from 'react'

const LandingPage = () => {
    return (
        <div className="border p-4 border-opacity-10 rounded">
            <h1>Student Login Portal</h1>
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">Please enter your student E-mail</div>
            <select className="form-select mt-3" aria-label="Default select example">
                <option selected>Your College</option>
                <option value="1">C1</option>
                <option value="2">C2</option>
                <option value="3">C3</option>
                <option value="3">C4</option>
            </select>
            <div id="collegeHelp" className="form-text">Select your college</div>
        </div>
    )
}

export default LandingPage
