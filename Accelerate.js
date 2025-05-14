import React,{Component} from "react"
import "./accelerate.css"
//import "./notification.css"
class Accelerate extends Component{
    
    state ={

        count : 0,
        mangoesEaten: 0,
        bananaEaten:0
    }

onIncrease=() => {

    this.setState((prevState) =>({
        count:prevState.count + 10
    }))
}
onDecrease=() => {

    this.setState((prevState) =>({
        count:prevState.count - 10
    }))
}

onEatMango = () => {
    this.setState(prevState => ({
        mangoesEaten: prevState.mangoesEaten + 1 // Increase mango count by 1
    }));
};

onEatBanana = () => {
    this.setState(prevState => ({
        bananaEaten: prevState.bananaEaten + 1 // Increase mango count by 1
    }));
};
    render(){

        return(
        <div className="content-container">
            <h1>SPEEDOMETER</h1>
            <img src="https://cms-img.coverfox.com/Odometer-vs-Speedometer01.jpg" alt="Speedometer" />
            <h3>Speed is  : {this.state.count}mph</h3>
            <p>Min Limit is 0mph,Max Limit is 200mph</p>
            <button className="button" onClick={this.onIncrease}>Accelerate</button>
            
            <button className="button" onClick={this.onDecrease}>ApplyBrake</button>
            {/* <h1>Speed is 0mph : {this.state.count}</h1> */}
                {/* <button onClick={this.onIncrease}>+</button> */}

                
            <div className="fruit-container">
                <div className="mango"> 
                <h3 className="bob">
                    Bob ate: 
                    <span className="eaten-number"> {this.state.mangoesEaten} </span> Mangoes
                    <span className="eaten-number"> {this.state.bananaEaten} </span> Bananas
                </h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSssahEW-cQjZF-rJpL7GANauT7hpiVdsYO8w&s" alt="mango" />
                <button className="button" onClick={this.onEatMango}>Eat Mango</button>
            </div>
            

            <div className="banana">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78UaVKiyi3dB2SHOs2QcnojppAmD12k3u3A&s" alt="banana"/>
                    <button className="button" onClick={this.onEatBanana}>Eat Banana</button>
            </div>
            </div>
            </div>
    




        )
      
    }


        
            
        
    
}

export default Accelerate