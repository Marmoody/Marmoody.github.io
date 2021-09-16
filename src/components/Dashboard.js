import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Header from "./Header";


const Dashboard = () => {
    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    const handleLogout = async () => {
        setError('')

        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to log out')
        }

    };


    return (
        <div>
            <Header />
            <Card className="cards">
                <Card.Body className="w-100 text-center mt-2">
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email: </strong>{currentUser.email}
                    <Link to="/update-profile" className="btn w-100 mt-3 text-center">
                        Update Profile
                    </Link>
                </Card.Body>

            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="" onClick={handleLogout}> Log Out </Button>
            </div>
        </div>

    )
}

export default Dashboard;