import React, {useEffect, useState} from 'react'

const T3 = (props) => {
  const [rows, setRows] = useState([]);
  const [cols, setCols] = useState([]);
  const [startTime, setStartTime] = useState('00:00')
  const [slot1 , setSlot1] = useState(true)
  const [slot2 , setSlot2] = useState(true)
  const [update, setUpdate] = useState(0);

  const [selectedTime, setSelectedTime] = useState('');

  const data = {
    "StartTime": startTime
  }

  const book = {
      "email" : "b@gmail.com",
      "StartTime" : selectedTime,
  }

  useEffect(() => {
    fetch('http://localhost:8080/getAvailTime',{
      method:'POST',
      headers:{
        "Content-type":"application/json",
        Accept:"application/json"
      },
      body:JSON.stringify(data)
    }).then(response => response.json())
    .then((data) => setRows(data))

    fetch('http://localhost:8080/seeAllSlots')
            .then(response => response.json())
            .then((data) => setCols(data))
}, [startTime])

const bookSlot = () => {
   //console.log(JSON.stringify(data));
   fetch('http://localhost:8080/bookTimeSlot',{
    method:'POST',
    headers:{
      "Content-type":"application/json",
      Accept:"application/json"
    },
    body:JSON.stringify(book)
  }).then(response=>response.json())
  .then((res)=>{console.log(res.msg); setStartTime(selectedTime)})
}



  return (
    <div>
      <h3>T3 selection form</h3>
      { slot1 &&
      <div>
            <select class="form-select mt-4" aria-label="Default select example" onChange={(e) => {setSelectedTime(e.target.value)}}>
                <option selected>Pick a time slot</option>
                {
                  rows.map((item) => {
                    return (
                      <option key = {item} value = {item}>{item}</option>
                    )
                  })
                }
            </select>
            <button className = "btn btn-success mt-2" onClick = {bookSlot}>Book Slot 1</button>
        </div>
      }
    { slot2 &&
      <div>
            <select class="form-select mt-4" aria-label="Default select example" onChange={(e) => {setSelectedTime(e.target.value)}} >
                <option selected>Pick a time slot</option>
                {
                  rows.map((item) => {
                    return (
                      <option key = {item} value = {item}>{item}</option>
                    )
                  })
                }
            </select>
            <button className = "btn btn-success mt-2" onClick = {bookSlot}>Book Slot 2</button>
      </div>
    }   

<div className="divtable mt-5">
                <table className="table table-striped">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">StartTime</th>
                            <th scope="col">EndTime</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cols.map((item) => {
                                return (
                                    <tr key={item.SlotID}>
                                        <td>{item.SlotID}</td>
                                        <td>{item.EmailID}</td>
                                        <td>{item.StartTime}</td>
                                        <td>{item.EndTime}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default T3
