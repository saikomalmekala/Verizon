import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Dropdown } from 'react-bootstrap';


function RaiseRequest() {
    return (
        <>
            <div className="row">

                <div className="col-4">
                    <div className="row">
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                E-mail Us
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">abcd@gmail.com</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">bdc@yahoo.com</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">efgh@12345.com</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="row">
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                Chat with us
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/">Whats app:- 1234567</Dropdown.Item>
                                <Dropdown.Item href="/">Hyderabad:- 98765432</Dropdown.Item>
                                <Dropdown.Item href="/">Chennai:- 1234567</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="row">
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                Phone
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Main Branch:- 123456789</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Hyderabad:- 987654321</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Chennai:- 222266666</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
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
