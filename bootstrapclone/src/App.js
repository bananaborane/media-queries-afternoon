import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      showMenu:false
    }
  }



  render() {
    return (
      <div className="App">
        <div>
          <img src='https://blackrockdigital.github.io/startbootstrap-agency/img/header-bg.jpg' className='background-image' />
        </div>
          <nav className='nav-section'>
          <div className={this.state.showMenu ? 'menu slide' : 'menu'}>
            <div className='ham-link-container'>
              <span className='each-nav-link'>SERVICES</span>
              <span className='each-nav-link'>PORTFOLIO</span>
              <span className='each-nav-link'>ABOUT</span>
              <span className='each-nav-link'>TEAM</span>
              <span className='each-nav-link'>CONTACT</span>
            </div>
        </div>
            <div className='title'>Start Bootstrap</div>
            <div className='link-container'>
              <span className='each-ham-nav-link'>SERVICES</span>
              <span className='each-ham-nav-link'>PORTFOLIO</span>
              <span className='each-ham-nav-link'>ABOUT</span>
              <span className='each-ham-nav-link'>TEAM</span>
              <span className='each-ham-nav-link'>CONTACT</span>
            </div>
            <div className='hamburger' onClick={()=>{console.log('clicked'); this.setState({ showMenu: !this.state.showMenu }) }}>MENU ☰</div>
          </nav>
          <div className='main-section'>
            <div className='welcome'>
              Welcome To Our Studio
            </div>
            <div className='its-nice-to-meet-you'>
              <span className='its-nice'>IT'S NICE TO</span>
              <span className='meet-you'> MEET YOU</span>
            </div>
            <div className='tell-me-more'>
              <button className='tell-me-more-button'>TELL ME MORE</button>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className='services-section'>
            <div className='services'>
              <div className='services-text'>
                SERVICES
              </div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='yellow-icons-section'>
              <div className='e-commerce'>
                <div className='e-commerce-text'>
                  E-Commerce
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
              <div className='responsive-design'>
                <div className='responsive-design-text'>
                  Responsive Design
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
              <div className='web-security'>
                <div className='web-security-text'>
                  Web Security
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
            </div>
          </div>

      </div>
    );
  }
}

export default App;
