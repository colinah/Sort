import React, { Component } from "react";
import Sketch from "react-p5";
import Arr from './Support/makeArray'
 
export default class Canvas extends Component {
  x = 50;
  y = 50;
  cur = 0;
  checker = 0;
  xVal = 0;
  running = true;
  moveOn = false;
   
  sort = (array,cur) => {
      console.log('A',array, ' B', cur)
    for(let i= 0; i < 50; i++){
        if(cur !== i){
            let inital = {...array[i]};
            if(array[cur].h < array[i].h){
                array[i] = {...array[cur]};
                array[cur] = {...inital};
            }
        }
    }
    return array
}
  setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
    p5.frameRate(10);
};

  draw = (p5) => {
    p5.background(this.props.color);
    p5.fill(255);
    p5.ellipse(this.x, this.y, 70, 70);
    // NOTE: Do not use setState in draw function or in functions that is executed in draw function... pls use normal variables or class properties for this purposes
    this.x++;
    if(this.running){
    this.update(p5)
    } else {
      Arr.forEach((el)=>{
        p5.fill(el.color);
        p5.rect(this.xVal,el.y,el.w,el.h)
        this.xVal += 10;
        if(this.xVal > 500) this.xVal = 0; 
    });
    }

  };

  update = (p5) => {
    Arr[this.cur].color = 100;
    Arr.forEach((el)=>{
        p5.fill(el.color);
        p5.rect(this.xVal,el.y,el.w,el.h)
        this.xVal += 10;
    });
    // Sort needs to be below here---
    if(this.cur !== this.checker){
      console.log('Arr:', Arr, ' cur: ', this.cur, " val:" , Arr[this.cur].h);
      if(Arr[this.cur].h < Arr[this.checker].h){
        console.log('hrh')
        this.moveOn = true;
        // let inital = {...Arr[this.checker]};
        // Arr[this.checker] = {...Arr[this.cur]};
        // Arr[this.cur] = {...inital};
      }
    }
    //Sort above this line---
    Arr[this.cur].color = 255;
    if(this.cur < 50) {
      if(this.moveOn){
        this.cur++;
        this.checker = this.cur;
      }
      this.xVal = 0;
      this.checker ++
    } else {
      this.running = false
    }
  }
 
  render() {
    return <Sketch setup={this.setup} draw={this.draw}/>;
  }
}