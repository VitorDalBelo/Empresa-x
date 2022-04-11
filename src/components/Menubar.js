
import logo from '../images/LogoJusto.jpg'
import {Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap'
import React,{useState} from 'react';
export const Menubar = (props)=>{
  let [open,setOpen] = useState(false)
  return (
    <div>
  <Navbar
    container={false}
    expand="md"
    className='navcustom'
    light
    fixed='top'
  >
    <div className='container-fluid custom-col'>
    <NavbarBrand className='m-0' href="/">
      <img id='navlogo' src={logo} />
      {/* <h1>reactstrap</h1> */}
    </NavbarBrand>
    <NavbarToggler onClick={()=>setOpen(!open)} />
    <Collapse isOpen={open} navbar>
      <Nav
        className="m-auto navul"
        navbar
      >
        <NavItem>
          <NavLink href="/components/">
            <strong>HOME</strong>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">
            EMPRESA
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">
            CONTATO
          </NavLink>
        </NavItem>

      </Nav>
      <NavbarText>
        <button className='telbuton'>+55 11 3564-3099</button>
      </NavbarText>
    </Collapse>
    </div>
  </Navbar>
  
</div>
  );
}

export default Menubar;