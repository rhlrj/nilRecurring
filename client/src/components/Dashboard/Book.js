import React , {Component} from 'react';


class Book extends React.Component{
	render(){
		return(
		          
    <div class="container">
      <div class="row">

        <div class="col-md-3">
          <img class="img-fluid" src="https://www.joeabercrombie.com/wp-content/uploads/2015/07/htw-uspb-200x300.jpg" alt=""/>
        </div>

        <div class="col-md-4">
          <h4 class="my-3">Book Description</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
          <h4 class="my-3">Project Details</h4>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Dolor Sit Amet</li>
            <li>Consectetur</li>
            <li>Adipiscing Elit</li>
          </ul>
        </div>

      </div>
      <h5 class="my-4">Related Books</h5>

      <div class="row">

        <div class="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img class="img-fluid" src="http://www.unitefoundation.co.uk/wp-content/uploads/2017/06/sof-160x225.jpg" alt=""/>
          </a>
        </div>

        <div class="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img class="img-fluid" src="http://placehold.it/160x225" alt=""/>
          </a>
        </div>

        <div class="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img class="img-fluid" src="http://placehold.it/160x225" alt=""/>
          </a>
        </div>

        <div class="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img class="img-fluid" src="http://placehold.it/160x225" alt=""/>
          </a>
        </div>

      </div>

    </div>
	)
}
}

export default Book;