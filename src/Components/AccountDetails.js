import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser, updateAmount } from "../Actions/users";

function AccountDetails() {
    const { id } = useParams();
    const initialUerState = {
        id: null,
        namess: "",
        email: "",
        phone: "",
        location: "",
        amount: "",
    };

    const [user, setUser] = useState(initialUerState);

    const [depo, setDepo] = useState(false);
    const [withdraw, setWithdraw] = useState(false);
    const users = useSelector((state) => state.users);

    let a = 4;
    let b = 5;
    let c = a + b;
    console.log(c);

    const handleDepo = () => setDepo(true);
    const handleClose = () => setDepo(false);
    const handleWith = () => setWithdraw(true);
    const handleWithClose = () => setWithdraw(false);

    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        console.log("you ");
    }

    useEffect(() => {
        dispatch(getUser(id));
        console.log(id);
    }, [dispatch, id]);
    useEffect(() => {
        if (users) {
            setUser({ ...users });
        }
    }, [users]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };
    const approveAmount = () => {
        dispatch(updateAmount(user.id, user))
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <div style={{ padding: "100px", marginBottom: "10px" }}>
            {user ? (
                <div
                    style={{
                        padding: "100px",
                        paddingRight: "500px",
                        marginBottom: "10px",
                        marginTop: "10px",
                    }}
                >
                    <Form>
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
                                disabled
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
                                disabled
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>AMOUNT</Form.Label>
                            <Form.Control
                                type="text"
                                className="form-control"
                                id="amount"
                                required
                                value={user.amount}
                                onChange={handleInputChange}
                                name="amount"
                                disabled
                            />
                            <br />
                            <Button
                                type="submit"
                                variant="success"
                                onClick={approveAmount}
                            >
                                Confirm
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
            ) : (
                <div>
                    <br />
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <Modal
                    show={depo}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Deposit Cash</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        How much do you wish to deposit!<br></br>
                        <input />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="warning" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal
                    show={withdraw}
                    onHide={handleWithClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Withdraw Cash</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        How much do you wish to Withdraw!!
                        <br></br>
                        <input />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleWithClose}>
                            Close
                        </Button>
                        <Button variant="warning" onClick={handleWithClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                <label>action to be performed</label>
                <br></br>
                <br></br>
                <Button variant="primary" onClick={handleDepo}>
                    Deposit
                </Button>
                <Button variant="success" onClick={handleWith}>
                    Withdraw
                </Button>
            </form>
        </div>
    );
}

export default AccountDetails;
