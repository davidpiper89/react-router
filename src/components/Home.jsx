import React, { Component } from 'react';
import homeImg from '../images/Home.jpg'

class Home extends Component {
    state = {  } 
    render() { 
        return (<><div>Home Page</div>
    <img src={homeImg} alt="home"></img></>);
    }
}
 
export default Home;