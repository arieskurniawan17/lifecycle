import React, { Component} from "react";
import './css/Header.css'

export default class Header extends React.Component{
    constructor(){
        super();
        this.state={
            show:true,
        }
    }
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Seputar News</a>
                    <button className="navbar-toggler border border-info text-info"  
                    onClick={()=>{this.setState({show: !this.state.show})}}>
                    <span className="navbar-toggler-icon"></span>
                    </button>
                
                <div className={this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'} >
                <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        <a className="nav-link text-light" href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-light" href="#">FIND</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-light" href="#">TENTANG KAMI</a>
                        </li>
                </ul>
    </div>
  </div>
</nav>
        )
    }
}