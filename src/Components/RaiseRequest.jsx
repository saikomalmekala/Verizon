import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function RaiseRequest() {
    return (
        <>
            <div className="row">

                <div className="col-4">
                    <div className="row">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                chat with us
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <p>123457890</p>
                                <p>098754321</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                chat with us
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <p>123457890</p>
                                <p>098754321</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                chat with us
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <p>123457890</p>
                                <p>098754321</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-8">
                    <h1>Raise your request here..!</h1><br></br>
                    <a class="dropdown-item" href="#">Billing</a><br></br>
                    <a class="dropdown-item" href="#">Network isssue</a><br></br>
                    <a class="dropdown-item" href="#">Other</a>
                </div>
            </div>

        </>
    )
}

export default RaiseRequest
