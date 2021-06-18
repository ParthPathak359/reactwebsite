import React from 'react'
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
export default function NewNavbarComponent() {

    return (
        <>
            <Navbar style={{ marginRight: '40px', marginLeft: '40px'}} bg="transparent" expand="true" display="flex">
                <NavbarBrand as={Link} to="/user">
                    Teachers Dashboard
                </NavbarBrand>

                <Nav>
                    <NavLink as={Link} to="/profile">
                        Profile
                    </NavLink>
                </Nav>
            </Navbar>
        </>
    )
}
