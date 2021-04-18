import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from 'C:/Users/patha/Desktop/reactapp/myapp/src/components/contexts/AuthContext.js'
import { Link, useHistory } from 'react-router-dom'
import CenteredContainer from './CenteredContainer'


export default function Profile() {
    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout(){
        setError('')

        try
        {
            await logout()
            history.push('/login')
        }

        catch
        {
            setError('Failed to log out')
        }


    }


    return (
        <>
        <CenteredContainer>
            <Card>
                <Card.Body>
                <h2 classname='text-center mb-4'>Profile:</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <strong>Email: </strong> {currentUser.email}<br/><br/>
                <Link to="/update-profile" classname="btn btn-primary w-100 mt-3">
                    <Button>
                        Update Profile
                    </Button>
                </Link>

                <br/> <br/> <Link to="/user" classname="btn btn-primary w-100 mt-8">
                    <Button>
                        Dashboard
                    </Button>
                </Link>

                </Card.Body>
            </Card>

            <div className="w-100 text-center mt-2"><br/>
              <Button variant='link' onClick={handleLogout} > Log Out </Button>
          </div><br/>
          </CenteredContainer>
        </>
    )
}
