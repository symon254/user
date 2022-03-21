import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../Actions/users";
import { Button, Form } from "react-bootstrap";

const CreateUser = () => {
    const initialUerState = {
        id: null,
        namess: "",
        email: "",
        phone: "",
        location: "",
    };
    const [user, setUser] = useState(initialUerState);
    const [submitted, setSubmitted] = useState(false);

    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };
    const saveUser = () => {
        const { namess, email, phone, location } = user;
        dispatch(createUser(namess, email, phone, location))
            .then((data) => {
                setUser({
                    id: data.id,
                    namess: data.namess,
                    phone: data.phone,
                    email: data.email,
                    location: data.location,
                });
                setSubmitted(true);
                console.log(data);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    const newUser = () => {
        setUser(initialUerState);
        setSubmitted(false);
    };
    return (
        <Form>
            <div className="submit-form">
                {submitted ? (
                    <div>
                        <Button variant="success" onClick={newUser}>
                            Add
                        </Button>
                    </div>
                ) : (
                    <div>
                        <Form.Group className="mb-3">
                            <Form.Label>NAME</Form.Label>
                            <Form.Control
                                type="text"
                                className="form-control"
                                id="namess"
                                required
                                value={user.namess}
                                onChange={handleInputChange}
                                name="namess"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>EMAIL</Form.Label>
                            <Form.Control
                                type="email"
                                className="form-control"
                                id="email"
                                required
                                value={user.email}
                                onChange={handleInputChange}
                                name="email"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>PHONE NUMBER</Form.Label>
                            <Form.Control
                                type="text"
                                className="form-control"
                                id="phone"
                                required
                                value={user.phone}
                                onChange={handleInputChange}
                                name="phone"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>LOCATION</Form.Label>
                            <Form.Control
                                type="location"
                                className="form-control"
                                id="location"
                                required
                                value={user.location}
                                onChange={handleInputChange}
                                name="location"
                            />
                        </Form.Group>

                        <Button onClick={saveUser} variant="primary">
                            Submit
                        </Button>
                    </div>
                )}
            </div>
        </Form>
    );
};
export default CreateUser;
