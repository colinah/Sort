import React, { Component } from "react";
import Sketch from "react-p5";
import Arr from './Support/makeArray'
 
export default class Canvas extends Component {
  x = 50;
  y = 50;
  cur = 0
   
  sort = (array,cur) => {
      console.log('A',array, ' B', cur)
    for(let i= 0; i < 50; i++){
        if(cur !== i){
            let initalX = array[i].x;
            if(array[cur].x < array[i].x){
                array[i].x = array[cur].x;
                array[cur].x = initalX;
            }
        }
        array[cur].color = 100; 
    }
    return array
}
  setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
    p5.frameRate(10);
};

  draw = (p5) => {
    p5.background(this.props.color);
    p5.ellipse(this.x, this.y, 70, 70);
    // NOTE: Do not use setState in draw function or in functions that is executed in draw function... pls use normal variables or class properties for this purposes
    this.x++;
    Arr.forEach((el)=>{
        p5.fill(el.color);
        p5.rect(el.x,el.y,el.w,el.h)
    });
    this.sort(Arr, this.cur);
    if(this.cur < 49) {this.cur++ }
  };
 
  render() {
    return <Sketch setup={this.setup} draw={this.draw}/>;
  }
}