import React, {Component} from "react";
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import NavItem from 'react-bootstrap/lib/NavItem';		
import {Row, Col, Grid , FormGroup, FormControl, Button} from 'react-bootstrap';
import './HeaderStyle.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import ShortStories from './ShortStories';
import MyEditor from './MyEditor';
import Dropdown from './Dropdown';

const LoggedOutView=props=>{
	if(!props.currentUser){
		return(
		<div className= "HeaderContainer" >  
			<Navbar collapseOnSelect className="Menutab">
  				<Navbar.Header>
    				<Navbar.Brand>
      				<Link to="/"> penUltimate</Link>
    				</Navbar.Brand>
    				<Navbar.Toggle />
  				</Navbar.Header>
  				<Navbar.Collapse>
    			<Nav>
					<NavItem eventKey={1}>
						<Link to='/short-stories'>
        					Short Stories
						</Link>
					</NavItem>
    			</Nav>
    			<Nav pullRight>
					<NavItem eventKey={1} >
						<Link to='/signup'>
							SignUp
						</Link>
      				</NavItem>
					<NavItem eventKey={2} href="#">
						<Link to='/login'>
							SignIn
						</Link>
					</NavItem>
				</Nav>
  				</Navbar.Collapse>																	
			</Navbar>
					
		</div>	
		
		)
		
}
return null;
}

const LoggedInView=props =>{
	if(props.currentUser){
		return(
			<div className= "HeaderContainer" >  
			<Navbar collapseOnSelect className="Menutab">
  				<Navbar.Header>
    				<Navbar.Brand >
      				<Link to="/" className="link"> penUltimate</Link>
    				</Navbar.Brand>
    				<Navbar.Toggle />
  				</Navbar.Header>
  				<Navbar.Collapse>
    			<Nav>
					<NavItem>
						<Link to='/write'className="link">
							Write
						</Link>
					</NavItem>
					<NavItem>
						<Link to='/dashboard' className="link">
							Dashboard
						</Link>
					</NavItem>
					<NavDropdown title="Browse" id="basic-nav-dropdown" 	>
					
					<Row className="dropdown-multi">
						<Col md={6} className="dropdown-link"> 
							<MenuItem className="dropdown-link">
								<Link to='/short-stories' className="link">	Short Stories</Link>
							</MenuItem>
							<MenuItem className="dropdown-link" className="link">	
								<Link to='/genre/adventure' className="link">Adventure</Link>
							</MenuItem>
							<MenuItem >
								<Link to='/genre/comedy' className="link">Comedy</Link>
							</MenuItem>
							<MenuItem >
								<Link to='/genre/drama' className="link">	Drama</Link>
							</MenuItem>
							<MenuItem >
								<Link to='/genre/horror' className="link">	Horror</Link>
							</MenuItem>
							<MenuItem divider />
							<MenuItem >
								<Link to='/genre/satire' className="link">	Satire</Link>
							</MenuItem>
							<MenuItem >
								<Link to='/genre/screenplay' className="link">	Screenplay</Link>
							</MenuItem>
						</Col>
						<Col md={6}>
							<MenuItem >
								<Link to='/genre/tragedy' className="link">	Tragedy</Link>
							</MenuItem>
							<MenuItem >
								<Link to='/genre/Fantasy' className="link">	Fantasy</Link>
							</MenuItem>
							<MenuItem >
								<Link to='/genre/mythology' className="link">	Mythology</Link>
							</MenuItem>
							<MenuItem >
								<Link to='/genre/romance' className="link">	Romance</Link>
							</MenuItem>
							<MenuItem >
								<Link to='/genre/mystery' className="link">	Mystery</Link>
							</MenuItem>
							<MenuItem divider />
							<MenuItem >
								<Link to='/genre/plays' className="link">	Plays</Link>
							</MenuItem>
							<MenuItem >
								<Link to='/genre/poetry' className="link">	Poetry</Link>
							</MenuItem>
						</Col>
					</Row>
					
					</NavDropdown>
    			</Nav>
    			<Nav pullRight>
					<NavDropdown title="Find" id="basic-nav-dropdown" 	>
					
					
							<MenuItem>
								<Link to='/listing/agents' className="link" >Agents</Link>
							</MenuItem>
							<MenuItem >
								<Link to='/listing/publishers' className="link">Publishers</Link>
							</MenuItem>
							<MenuItem >
								<Link to='/listing/editors' className="link">Editors</Link>
							</MenuItem>
					</NavDropdown>
					
					<NavItem>
						<Link to={`/@${props.currentUser.username}`} className="link">
							<img src={props.currentUser.image} className="user-pic"  />
								{props.currentUser.username}
						</Link>
      				</NavItem>
					
					<NavItem>
						<Link to='/settings' className="link">
							Settings
						</Link>
					</NavItem>
				</Nav>
  				</Navbar.Collapse>																	
			</Navbar>
					
		</div>	
		
		
		)}
		
		return null;
		}
		


class Header extends React.Component{
	 
     
    
	render(){
		return(
		 <nav className="navbar navbar-light">
          <Link to="/" className="navbar-brand"></Link>
          <LoggedOutView currentUser={this.props.currentUser} />
          <LoggedInView currentUser={this.props.currentUser} />
		 </nav>
			)
		}
	}
	
	export default Header;
