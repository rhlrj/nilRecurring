import React, { Component } from 'react';
import {Grid, Row, Col, Panel,Image} from 'react-bootstrap';
import BookListing from './BookListing.js';

class TopBooksListing extends React.Component{
	render(){
		return(
  			<Row className="show-grid">
    			<p>Top Books
    			<BookListing/>
    			</p>
    		</Row>
    	)
	}
	}
	
	export default TopBooksListing;