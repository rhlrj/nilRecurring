import React, { Component } from 'react';
import {Grid, Row, Col, Panel,Image} from 'react-bootstrap';
import BookListing from './BookListing.js';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";


class LatestBooksListing extends React.Component{
	render(){
		return(
  			<Row className="show-grid">
    			<p>Latest Books
    				
    					<BookListing book={this.props.book}/>
    				
    			</p>
    		
    		</Row>
    	)
	}
	}
	
	export default LatestBooksListing;