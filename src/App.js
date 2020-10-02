import React from 'react';
import './App.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './App.css';  

import towel_01 from './images/towel_01.jpg';
import towel_02 from './images/towel_02.jpg'; 
import towel_03 from './images/towel_03.jpg'; 
import towel_04 from './images/towel_04.jpg'; 
import towel_05 from './images/towel_05.jpg'; 
import towel_06 from './images/towel_06.jpg'; 
import towel_07 from './images/towel_07.jpg'; 
import towel_08 from './images/towel_08.jpg'; 
import towel_09 from './images/towel_09.jpg'; 
import towel_10 from './images/towel_10.jpg'; 
import towel_11 from './images/towel_11.jpg'; 
import towel_12 from './images/towel_12.jpg'; 
import towel_13 from './images/towel_13.jpg'; 
import towel_14 from './images/towel_14.jpg'; 
import towel_15 from './images/towel_15.jpg'; 
import towel_16 from './images/towel_16.jpg'; 
import towel_17 from './images/towel_17.jpg'; 
import towel_18 from './images/towel_18.jpg'; 
import towel_19 from './images/towel_19.jpg'; 
import towel_20 from './images/towel_20.jpg'; 
 
const images = [
	towel_01,
	towel_02,
	towel_03,
	towel_04,
	towel_05,
	towel_06,
	towel_07,
	towel_08,
	towel_09,
	towel_10,
	towel_11,
	towel_12,
	towel_13,
	towel_14,
	towel_15,
	towel_16,
	towel_17,
	towel_18,
	towel_19,
	towel_20,
		];

class App extends React.Component {
  
  
  constructor(props) {
    super(props);
    this.state = {photoIndex: 0,
      isOpen: false,value: 'th'};
	 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
	  
    this.setState({value: event.target.value});
  }
   

  handleSubmit(event) {
     
    event.preventDefault();
	 
  }

		
	render(){
		const { photoIndex, isOpen } = this.state;		

		return (
			<div > 
				<Header/>		
				<div className="container">
					{isOpen && (
					  <Lightbox
						mainSrc={images[photoIndex]}
						nextSrc={images[(photoIndex + 1) % images.length]}
						prevSrc={images[(photoIndex + images.length - 1) % images.length]}
						onCloseRequest={() => this.setState({ isOpen: false })}
						onMovePrevRequest={() =>
						  this.setState({
							photoIndex: (photoIndex + images.length - 1) % images.length,
						  })
						}
						onMoveNextRequest={() =>
						  this.setState({
							photoIndex: (photoIndex + 1) % images.length,
						  })
						}
					  />
					)}
					<div className="row">
						<div className="col-md-12">
							Welcome to Kowols Knitting Works!!<br/><br/><br/>
							Below are examples of projects that I have done in the past.<br/><br/><br/>
							Please feel free to reach out to me with any questions or to place an order.
						</div>
					</div>
					<div className="row">
						<div className="col-md-12" style={{marginTop:"20px"}}>
							<button className="btn btn-info" type="button" onClick={() => this.setState({ isOpen: true })}>
								View Images Larger
							</button>
						</div>
					</div>
					<div className="row align-items-center my-5">
						<div className="col-lg-3">
							<img className="rImage" src={towel_01} alt={towel_01} />
						</div>
						<div className="col-lg-3">
							<img className="rImage" src={towel_02} alt={towel_02} />
						</div>
						<div className="col-lg-3">
							<img className="rImage" src={towel_03} alt={towel_03} />
						</div>
						<div className="col-lg-3">
							<img className="rImage" src={towel_04} alt={towel_04} />
						</div>
					</div>
					<div className="row align-items-center my-5">
						<div className="col-lg-3">
							<img className="rImage" src={towel_05} alt={towel_05} />
						</div>
						<div className="col-lg-3">
							<img className="rImage" src={towel_06} alt={towel_06} />
						</div>
						<div className="col-lg-3">
							<img className="rImage" src={towel_07} alt={towel_07} />
						</div>
						<div className="col-lg-3">
							<img className="rImage" src={towel_08} alt={towel_08} />
						</div>
					</div>
					<div className="row align-items-center my-5">
						<div className="col-lg-3">
							<img className="rImage" src={towel_09} alt={towel_09} />
						</div>
						<div className="col-lg-3">
							<img className="rImage" src={towel_10} alt={towel_10} />
						</div>
						<div className="col-lg-3">
							<img className="rImage" src={towel_11} alt={towel_11} />
						</div>
						<div className="col-lg-3">
							<img className="rImage" src={towel_12} alt={towel_12} />
						</div>
					</div>
					<div className="row align-items-center my-5">
						<div className="col-lg-3">
							<img className="rImage" src={towel_13} alt={towel_13} />
						</div>
						<div className="col-lg-3">
							<img className="rImage" src={towel_14} alt={towel_14} />
						</div>
						<div className="col-lg-3">
							<img className="rImage" src={towel_15} alt={towel_15} />
						</div>
						<div className="col-lg-3">
							<img className="rImage" src={towel_16} alt={towel_16} />
						</div>
					</div>
					<div className="row align-items-center my-5">
						<div className="col-lg-3">
							<img className="rImage" src={towel_17} alt={towel_17} />
						</div>
						<div className="col-lg-3">
							<img className="rImage" src={towel_18} alt={towel_18} />
						</div>
						<div className="col-lg-3">
							<img className="rImage" src={towel_19} alt={towel_19} />
						</div>
						<div className="col-lg-3">
							<img className="rImage" src={towel_20} alt={towel_20} />
						</div>
					</div>
							
				</div>
				<Footer/>
			</div>
		);
	}}


function Header() {
  return (
	<div className="navigation">
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<div className="navbar-header">
					<a className="navbar-brand" href="/">Kowols Knitting Works</a>
					
				</div>
				<span id="contactInfo">
						pkowols@outlook.com &middot; (847) 269-7356
					</span>
			</div>
		</nav>
	</div>
  );
}


function Footer() {
  return (
    <div className="footer">
      <footer className="bg-dark fixed-bottom">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Kowols Knitting Works 2020
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
