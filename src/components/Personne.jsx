import React, { Component } from 'react'

export default class Personne extends Component {
   
//constractor avant le render()
constructor(props){
    super(props)
    this.personne={
        fullName: "Laamiri Yassine",
        bio:"Développeur Full Stack",
        profession:"Ingénieur Systéme",
        Image:"https://f.hellowork.com/obs-static-images/seo/ObsJob/ingenieur-en-systemes-information.jpg"      
    };
    this.state={
        tempsEcouler:0
    }
    
}
// cycle de vie du Personne
componentDidMount(){

    this.timer = setInterval(()=>{
        this.setState({
            tempsEcouler:this.state.tempsEcouler+1
        })
    },1000)
}
//remise a zéro du Timer
componentWillUnmount(){
    clearInterval(this.timer)
}

  render() {
    return (
      <div>

        <h2>{this.personne.fullName}</h2>       
        <img  src={this.personne.Image} alt='img' />
        <h3>{this.personne.bio}</h3>    
        <h3>{this.personne.profession}</h3>    
        <p>Temps Ecouler = {this.state.tempsEcouler} sec</p>
        </div>
    )
  }
}
