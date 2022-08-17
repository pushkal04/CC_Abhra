import React, { useEffect, useState } from 'react'

const T2 = (props) => {
    const [rows, setRows] = useState([]);
    const [special, setSpecial] = useState('');
    const [upSpecial, setUpSpecial] = useState('');

    const [res, setResponse] = useState('');

    const data = 
    {
        "email" : props.email.toString(), // TOD: Make dynamic
        "choice": special
    }

    const updateData = 
    {
        "id" : res,
        "choice" : upSpecial

    }



    useEffect(() => {
        fetch('http://localhost:8080/getSpecial')
            .then(response => response.json())
            .then((data) => setRows(data))
    }, [res])

    const addSpecial = () => {
        fetch('http://localhost:8080/createSpecial',{
      method:'POST',
      headers:{
        "Content-type":"application/json",
        Accept:"application/json"
      },
      body:JSON.stringify(data)
    }).then(response=>response.json())
    .then((res)=>{console.log(res[0].Selectionid);  setResponse(res[0].Selectionid)})
    // .then(() => window.location.reload())
    }

    const updateSpecial = () => {
        fetch('http://localhost:8080/updateSpecial',{
            method:'POST',
            headers:{
              "Content-type":"application/json",
              Accept:"application/json"
            },
            body:JSON.stringify(updateData)
          }).then(response=>response.json())
          .then((res)=>{console.log(res.msg)})
          .then(() => window.location.reload())
          }

    return (
        <div>
            <h3>T2 selection form</h3>
            <select class="form-select" aria-label="Default select example" onChange={(e) => setSpecial(e.target.value)}>
                <option selected>Pick Specialization</option>
                <option value="SP1">SP1</option>
                <option value="SP2">SP2</option>
                <option value="SP3">SP3</option>
                <option value="SP4">SP4</option>
                <option value="SP5">SP5</option>
            </select>

            <button className = "btn btn-success mt-2" onClick = {addSpecial}>ADD</button>

            <div className="divtable mt-5">
                <table className="table table-striped">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Specialization</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rows.map((item) => {
                                return (
                                    <tr key={item.Selectionid}>
                                        <td>{item.Selectionid}</td>
                                        <td>{item.EmailID}</td>
                                        <td>{item.Special}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>

            <h4 className="mt-4">Update</h4>
            <select class="form-select" aria-label="Default select example" onChange={(e) => setUpSpecial(e.target.value)}>
                <option selected>Pick Specialization</option>
                <option value="SP1">SP1</option>
                <option value="SP2">SP2</option>
                <option value="SP3">SP3</option>
                <option value="SP4">SP4</option>
                <option value="SP5">SP5</option>
            </select>
            <button onClick={updateSpecial} className = "btn btn-primary mt-2">UPDATE</button>

        </div>
    )
}

export default T2
