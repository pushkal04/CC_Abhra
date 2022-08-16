import React from 'react'

const T1 = () => {
    return (
        <div>
            <h3>T1 uplaod form</h3>
            <div className="input-group border p-5">
                <div className="custom-file">
                    <input type="file" className="custom-file-input border p-1" id="inputGroupFile04" />
                </div>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary mx-2" type="button">Upload</button>
                </div>

            </div>
        </div>
    )
}

export default T1
