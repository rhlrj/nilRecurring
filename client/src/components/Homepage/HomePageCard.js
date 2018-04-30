import React, { Component } from 'react';
import {Row, Col, Grid, Media} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './HomePageStyle.css';

class HomePageCard extends React.Component{
		
	
	render(){
		
		const htmlString = this.props.note.contentState;
		const Content= () => (
  <div dangerouslySetInnerHTML={{ __html: htmlString }} />
);
		return(
				<Col xs={6} md={4}>				
				<div className="cards">
  					<img className="card-image" src={this.props.note.imageurl} alt="Avatar"/ >
						<Link to={`/article/${this.props.note.slug}`} className="preview-link">																																																																
						<div className="card-texts">
						<h5><b>{this.props.note.title}</b></h5>
						<p> {this.props.note.author.username} {this.props.note.createdAt}</p>
						<h7>{this.props.note.content.slice(0,150)}...</h7>
						</div>
						</Link>
    				
				</div> 
				<br/>
				</Col>	
				)
			}
		}
export default HomePageCard;
