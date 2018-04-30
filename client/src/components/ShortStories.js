import React, { Component } from 'react';
import {Row, Col, Button, Grid} from 'react-bootstrap';
import ShortStoryComponent from './ShortStoryComponent';
import MyEditor from './MyEditor';
import {connect} from 'react-redux';
import {TOP_RATED_PAGE_LOADED,TOP_RATED_PAGE_UNLOADED} from '../constants/actionTypes';
import agent from '../agent';
import Check from './check';



const mapStateToProps = state => ({
  ...state.article,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload =>
    dispatch({ type: TOP_RATED_PAGE_LOADED, payload }),
  onUnload: () =>
    dispatch({ type: TOP_RATED_PAGE_UNLOADED })
});

class ShortStories extends React.Component{
	
  componentWillMount() {
    this.props.onLoad(agent.Articles.all());
  }

  componentWillUnmount() {
    this.props.onUnload();
  }
  
	render(){
		if(this.props.topRated){
			console.log(this.props.topRated)
		//console.log(this.state.notes);
		return(
		
		
				<Grid>
				
				<Row>
				
					
					
				</Row>
				<ul>
        			 { this.props.topRated.map(note => <div><ShortStoryComponent note={note}/></div>)}
      		</ul>
      			
      			
      			      		</Grid>


    	
    	)}
    	else return null;
	}
	}
	
	export default connect(mapStateToProps, mapDispatchToProps)(ShortStories);
