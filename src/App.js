import React from 'react';
import './App.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './App.css';  
import blanket_01 from './images/blanket_01.JPG';
import blanket_02 from './images/blanket_02.jpg';
import stocking_01 from './images/stocking_01.JPG';
import stocking_02 from './images/stocking_02.JPG'; 
import stocking_03 from './images/stocking_03.jpg'; 
import stocking_04 from './images/stocking_04.jpg'; 
import stocking_05 from './images/stocking_05.jpg'; 
import towel_01 from './images/towel_01.jpg';
import towel_02 from './images/towel_02.jpg'; 
import towel_03 from './images/towel_03.jpg'; 
import towel_04 from './images/towel_04.jpg'; 
import towel_05 from './images/towel_05.jpg'; 
import towel_06 from './images/towel_06.jpg'; 
import towel_09 from './images/towel_09.jpg'; 
import towel_11 from './images/towel_11.jpg'; 
import towel_12 from './images/towel_12.jpg'; 
import towel_13 from './images/towel_13.jpg'; 
import towel_14 from './images/towel_14.jpg'; 
import towel_18 from './images/towel_18.jpg'; 
import towel_19 from './images/towel_19.jpg'; 
import towel_20 from './images/towel_20.jpg'; 
import towel_21 from './images/towel_21.jpg'; 
import towel_22 from './images/towel_22.jpg'; 
import towel_23 from './images/towel_23.jpg'; 
import towel_24 from './images/towel_24.jpg'; 
import towel_25 from './images/towel_25.jpg'; 
import towel_26 from './images/towel_26.jpg'; 
import towel_27 from './images/towel_27.jpg';
import towel_28 from './images/towel_28.jpg'; 
 
const images = [
	towel_20,
	towel_04,
	towel_18,
	towel_22,
	towel_23,
	towel_19,
	towel_03,
	towel_14,
	towel_25,
	towel_28,
	towel_05,
	towel_12,
	towel_01,
	towel_06,
	towel_21,
	towel_11,
	towel_02,
	towel_13,
	towel_24,
	towel_09,
	towel_26,
	towel_27,
	blanket_01,
	blanket_02,
	stocking_01,
	stocking_02,
	stocking_03,
	stocking_04,
	stocking_05

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
					<div className="row" style={{marginTop:"120px"}}>
						<div className="col-md-12">
							Welcome to Kowols Knitting Works!!<br/><br/> 
							I make custom stockings, towels, and blankets. Below are examples of some projects I've done in the past. I can also do lots of other designs.<br/><br/> 
							Please email me at <a href="mailto:pkowols@outlook.com">pkowols@outlook.com</a> or call me at (847) 269-7356 to place an order or to let me know if you have any questions. 
						</div>
					</div>
					<div className="row" style={{marginTop:"40px"}}>
						<div className="col-md-12"><h3>Prices</h3></div>
						 
							
					</div>
					<div className="row" style={{marginTop:"40px"}}>
						<div className="col-md-4">Towels    : $5</div>
						<div className="col-md-4">Stockings : $20</div>
						<div className="col-md-4">Blankets  : Please email or call for quote. </div>
							
					</div>
					<div className="row">
						<div className="col-md-12" style={{marginTop:"20px"}}>
							<button className="btn btn-info" type="button" onClick={() => this.setState({ isOpen: true })}>
								View Images Larger
							</button>
						</div>
					</div>
					<div className="row align-items-center my-5">
						<div className="col-md-3">
							<img className="rImage" src={towel_20} alt={towel_20} />
						</div>
						<div className="col-md-3">
							<img className="rImage" src={towel_04} alt={towel_04} />
						</div>
						<div className="col-md-3">
							<img className="rImage" src={towel_18} alt={towel_18} />
						</div>
						<div className="col-md-3">
							<img className="rImage" src={towel_22} alt={towel_22} />
						</div>
					</div>
					<div className="row align-items-center my-5">
						<div className="col-md-3">
							<img className="rImage" src={towel_23} alt={towel_23} />
						</div>
						<div className="col-md-3">
							<img className="rImage" src={towel_19} alt={towel_19} />
						</div>
						<div className="col-md-3">
							<img className="rImage" src={towel_03} alt={towel_03} />
						</div>
						<div className="col-md-3">
							<img className="rImage" src={towel_14} alt={towel_14} />
						</div>
					</div>
					<div className="row align-items-center my-5">
						<div className="col-md-3">
							<img className="rImage" src={towel_25} alt={towel_25} />
						</div>
						<div className="col-md-3">
							<img className="rImage" src={towel_28} alt={towel_28} />
						</div>
						<div className="col-md-3">
							<img className="rImage" src={towel_05} alt={towel_05} />
						</div>
						<div className="col-md-3">
							<img className="rImage" src={towel_12} alt={towel_12} />
						</div>
					</div>
					<div className="row align-items-center my-5">
						<div className="col-md-3">
							<img className="rImage" src={towel_01} alt={towel_01} />
						</div>
						<div className="col-md-3">
							<img className="rImage" src={towel_06} alt={towel_06} />
						</div>
						<div className="col-md-3">
							<img className="rImage" src={towel_21} alt={towel_21} />
						</div> 
						<div className="col-md-3">
							<img className="rImage" src={towel_11} alt={towel_11} />
						</div>
					</div>
					<div className="row align-items-center my-5">
						<div className="col-md-3">
							<img className="rImage" src={towel_02} alt={towel_02} />
						</div>
						<div className="col-md-3">
							<img className="rImage" src={towel_13} alt={towel_13} />
						</div>
						<div className="col-md-3">
							<img className="rImage" src={towel_24} alt={towel_24} />
						</div>
						<div className="col-md-3">
							<img className="rImage" src={towel_09} alt={towel_09} />
						</div>
					</div>
					<div className="row align-items-center my-5">
						<div className="col-md-3">
							<img className="rImage" src={towel_26} alt={towel_26} />
						</div>

						<div className="col-md-3">
							<img className="rImage" src={towel_27} alt={towel_27} />
						</div>
					</div>
					<div className="row align-items-center my-5">
						<div className="col-md-3">
							<img className="rImage" src={stocking_01} alt={stocking_01} />
						</div>
						<div className="col-md-3">
							<img className="rImage" src={stocking_02} alt={stocking_02} />
						</div>
						<div className="col-md-3">
							<img className="rImage" src={stocking_03} alt={stocking_03} />
						</div>
						<div className="col-md-3">
							<img className="rImage" src={stocking_04} alt={stocking_04} />
						</div>
					</div>
					<div className="row align-items-center my-5">
						
						<div className="col-md-3">
							<img className="rImage" src={stocking_05} alt={stocking_05} />
						</div>
						
					</div>
					<div className="row align-items-center my-5">
						<div className="col-md-3">
							<img className="rImage" src={blanket_01} alt={blanket_01} />
						</div>	
						<div className="col-md-3">
							<img className="rImage" src={blanket_02} alt={blanket_02} />
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
            Copyright &copy; Kowols Knitting Works 2024
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
