import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateUser from "./Components/CreateUser";
import "bootstrap/dist/css/bootstrap.min.css";
import AccountDetails from "./Components/AccountDetails";
import UsersInfo from "./Components/UsersInfo";
import { Button, Nav, Navbar } from "react-bootstrap";

function App() {
    return (
        <Router>
            <Navbar bg="light" variant=" light">
                <Nav className="me-auto">
                    <Button variant="outline-success">
                        <Nav.Item>
                            <Nav.Link>
                                <Link to={"/add"} className="nav-link">
                                    Add
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                    </Button>
                    <Button variant="outline-success">
                        <Nav.Item>
                            <Nav.Link>
                                <Link to={"/users"} className="nav-link">
                                    users
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                    </Button>
                </Nav>
            </Navbar>
            <div className="container mt-3">
                <Routes>
                    <Route path={"/users"} element={<UsersInfo />} />
                    <Route path="/add" element={<CreateUser />} />
                    <Route path="/users/:id" element={<AccountDetails />} />
                </Routes>
            </div>
        </Router>
        // <div className="App">
        //     {/* <CreateUser />

        //      <UsersInfo /> */}
        //     <AccountDetails />
        // </div>
    );
}

export default App;
