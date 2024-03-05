import React from "react";

const Layout = (props) => {
    return (
        <React.Fragment>
                <nav className ="navbar navbar-expand navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="#">React in Rails Demo</a>
                        <div className="collaprse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-tem">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/demo">Demo</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container py-3">
                    {props.children}
                </div>
                <footer className="p-3 bg-light">
                    <span className="me-3 text-secondary">Built by <a href="https://www.altcademy.com" target="blank" rel="noopener noreferrer">Altcademy</a>with and </span>
                </footer>
        </React.Fragment>
    );
}

export default Layout;