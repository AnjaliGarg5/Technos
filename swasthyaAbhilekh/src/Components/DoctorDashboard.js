import React from 'react';

function DoctorDashboard() {
    return(
        <div className='container'>
            <header className='heading container-fluid m-4 mt-10'>
                <h3 className='center'>Doctor abc's Dashboard</h3>
            </header>
            <div className='row m-4'>
                <div className='col m-4 p-4 border'>
                    <h4>Specilization</h4>
                    <ul>
                        <li>Fever</li>
                        <li>Cough</li>
                        <li>xyz</li>
                    </ul>
                </div>
                <div className='col m-4 p-4 border'>
                    <h4>Number of Patients</h4>
                    <p>10</p>
                </div>
                <div className='col m-4 p-4 border'>
                    <h4>Rating</h4>
                    <p>9/10</p>
                </div>
            </div>
            <div class="input-group m-4 p-4">
                <input type="text" class="form-control" placeholder="Enter Health ID" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Submit</button>
                </div>
            </div>
            
        </div>
    );
}

export default DoctorDashboard;



