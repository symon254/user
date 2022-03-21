import React, { useState, useEffect } from "react";
//import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, findUser } from "../Actions/users";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const UsersInfo = (props) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchUser, setSearchUser] = useState("");
    //const [show, setShow] = useState("true");
    const users = useSelector((state) => state.users);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await axios.get(
    //             "https://jsonplaceholder.typicode.com/users"
    //         );
    //         setUser(res.data);
    //     };
    //     fetchData();
    // }, []);
    // console.log(user);

    // const handleVis = () => setShow((s) => !s);
    // if (searchUser === "") {
    //     return handleVis;
    // }

    const onChangeSearchUser = (e) => {
        const searchUser = e.target.value;
        setSearchUser(searchUser);
    };
    const refreshData = () => {
        setCurrentUser(null);
        setCurrentIndex(-1);
    };
    const setActiveUser = (user, index) => {
        setCurrentUser(user);
        setCurrentIndex(index);
    };
    const findUserMe = () => {
        refreshData();
        dispatch(findUser(searchUser));
    };

    return (
        <form>
            <div
                className="list row"
               
            >
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by Name"
                            value={searchUser}
                            onChange={onChangeSearchUser}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={findUserMe}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>User List</h4>
                    <ul className="list-group">
                        {users &&
                            users.map((user, index) => (
                                <li
                                    className={
                                        "list-group-item " +
                                        (index === currentIndex ? "active" : "")
                                    }
                                    onClick={() => setActiveUser(user, index)}
                                    key={index}
                                >
                                    {user.namess}
                                </li>
                            ))}
                    </ul>
                </div>

                {/* <div
                    className="col-md-6"
                    style={{ visibility: show ? "visible" : "hidden" }}
                >
                    <h4>User List</h4>
                    <ul className="list-group">
                        {users &&
                            users.map((user, index) => (
                                <li
                                    className={
                                        "list-group-item " +
                                        (index === currentIndex ? "active" : "")
                                    }
                                    onClick={() => setActiveUser(user, index)}
                                    key={index}
                                >
                                    {user.namess}
                                </li>
                            ))}
                    </ul>
                </div> */}

                <div className="col-md-6">
                    {currentUser ? (
                        <div>
                            <h4>user</h4>
                            <div>
                                <label>
                                    <strong>Name:</strong>
                                </label>{" "}
                                {currentUser.namess}
                            </div>
                            <div>
                                <label>
                                    <strong>Email:</strong>
                                </label>{" "}
                                {currentUser.email}
                            </div>
                            <div>
                                <label>
                                    <strong>Phone NO:</strong>
                                </label>{" "}
                                {currentUser.phone}
                            </div>
                            <div>
                                <label>
                                    <strong>Location:</strong>
                                </label>{" "}
                                {currentUser.location}
                            </div>

                            <Button variant="primary">
                                <Link
                                    to={`/users/${currentUser.id}`}
                                    className="badge badge-warning"
                                >
                                    Check Ammount
                                </Link>
                            </Button>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </form>
    );
};
export default UsersInfo;
