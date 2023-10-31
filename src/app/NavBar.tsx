"use client"

import {Navbar,Container,Nav, NavDropdown} from "react-bootstrap"
import Link from "next/link"
import { usePathname } from "next/navigation"
export default function NavBar() {
    const pathname=usePathname()
  return (
    <div>
      <Navbar bg="primary" variant="dark" sticky="top" expand="sm"
      collapseOnSelect>
        <Container>
            <Navbar.Brand as={Link} href="/" >nectjs 13.4 image gallrey</Navbar.Brand>
             <Navbar.Toggle aria-controls="main-navbar"/>
             <Navbar.Collapse id="main-navbar">
               <Nav>
              <Nav.Link active={pathname==="/static"} href="/static">static</Nav.Link>
              <Nav.Link active={pathname==="/dynamic"} href="/dynamic">dynamic</Nav.Link>
              <Nav.Link active={pathname==="/isr"} href="/isr">isr</Nav.Link>
              <NavDropdown title="Topics" id="topics-dropdown">
                <NavDropdown.Item as={Link} href="/topics/health">Health</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/topics/fitness">Fitness</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/topics/coding">Coding</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link active={pathname==="/search"} href="/search">Search</Nav.Link>

               </Nav>
             </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
 