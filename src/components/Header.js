import React from "react";
import { Link } from "react-router-dom";

function Header () {
    return <header>
        <h1>Forgetify</h1>
        <Link className="profileLink" to="/" href="/">Profile</Link>
        <Link className="noteLink" to="/noteboard" href="/noteboard">Notes</Link>
    </header>
}

export default Header;
