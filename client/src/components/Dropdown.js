import React, {Component} from 'react';
import {Row, Col, Grid } from 'react-bootstrap';
import './HeaderStyle.css';
import {Link} from "react-router-dom";




class Dropdown extends React.Component{
	
	render(){
		return(
		import Nav from 'react-bootstrap/lib/Nav';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import NavItem from 'react-bootstrap/lib/NavItem';		
	 

	<NavDropdown title="Browse" id="basic-nav-dropdown" >
					
					<Row className="dropdown-multi">
						<Col md={6} className="dropdown-link"> 
							<MenuItem className="dropdown-link">
								<Link to='/short-stories' className="link">
									Short Stories
								</Link>
							</MenuItem>
							<MenuItem className="dropdown-link" className="link">
								<Link to='/short-stories'>
									Novels
								</Link>
							</MenuItem>
							<MenuItem >
								<Link to='/short-stories' className="link">
									Plays
								</Link>
							</MenuItem>
							<MenuItem >
								<Link to='/short-stories'>
									Plays
								</Link>
							</MenuItem>
						</Col>
						<Col md={6}>
							<MenuItem >Action</MenuItem>
							<MenuItem>Another action</MenuItem>
							<MenuItem>Something else here</MenuItem>
							<MenuItem divider />
							<MenuItem>Separated link</MenuItem>
						</Col>
					</Row>
					
					</NavDropdown>
					)
				}
			}
			
export default Dropdown;
    			
