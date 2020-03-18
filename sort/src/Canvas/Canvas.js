import React, { Component } from "react";
import Sketch from "react-p5";
 
export default class Canvas extends Component {
    state = {
        arr: []
    }
  x = 50;
  y = 50;


componentDidMount(){
    let   arr= [],
    xVal = 0,
    yVal = 500,
    width = 10;
    for(let i = 0; i < 50; i++){

    arr.push({x:xVal,y:yVal,w:width,h:500-yVal})
    xVal += 10;
    yVal -= 10;
    }
    this.setState({arr:arr})
}

    shuffle = (array) => {
        
    }
 
  setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
  };

  draw = (p5) => {
    p5.background(this.props.color);
    p5.ellipse(this.x, this.y, 70, 70);
    // NOTE: Do not use setState in draw function or in functions that is executed in draw function... pls use normal variables or class properties for this purposes
    this.x++;
    p5.fill(255);
    this.state.arr.forEach((el)=>{
        p5.rect(el.x,el.y,el.w,el.h)
    });
  };
 
  render() {

    console.log(this.state.arr);
    return <Sketch setup={this.setup} draw={this.draw}/>;
  }
}