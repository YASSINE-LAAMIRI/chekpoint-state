
import './App.css';
import './components/Personne.css';

// rcc ==> react class Component

import React, { Component } from 'react'
import Personne from './components/Personne';

export default class App extends Component {
  constructor(props){
    super(props)

      this.state={
        show:false,
      
    }
  }
basculer =() =>this.setState
//le contraire a chaque appel de la fonction 
({show:!this.state.show})

  render() {
    return (
      <div className='App'>
         <h1>State dans React Js</h1>
         {/* contenu static du button "show" */}
         {/* <button onClick={this.basculer}>show</button> */}

{/* changer le contenu du betton selon l'etat du show true/false */}
         <button onClick={this.basculer}>{this.state.show ? "Cacher":"Afficher"}</button>
         
         {/* condition pour afficher le bloc */}
         {this.state.show &&
         <Personne/>}
         </div>
    )
  }
}
