import React from "react";
class WeatherComponent extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(){
   
  }
  render() {
    // change code below this line
        return(            
                <div>
                    <h2>Weather Forecast</h2>
                    
                    <button onClick={this.handleClick}>Switch Forecast Period</button>
                </div>      
        )


    // change code above this line
  }
};

export default WeatherComponent;