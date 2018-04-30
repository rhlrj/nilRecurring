import React, { Component } from 'react';
import {Row, Col, Grid, Panel} from 'react-bootstrap';


class ShortStoryComponent extends React.Component{
	render(){
	return(<div>
						
						
					
						<Col xs={12} md={7} mdOffset={1}>
							<h3 className="story-title"><b>{this.props.note.title}</b></h3>
							<br/>
							<img width={600} height={200} src="http://www.jamescarlopio.com/wp-content/uploads/2015/02/JC-website-cover-1200x300.png" />
							<hr/>
							<p className="story-content">{this.props.note.content}</p>
						</Col>
					
				
				</div>
				
				)
				}
			}
				
export default ShortStoryComponent;