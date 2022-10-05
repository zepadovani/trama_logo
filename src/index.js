import './style/main.css'
import p5 from 'p5';
import p5Svg from "p5.js-svg"

var SvgSaver = require('svgsaver');


p5Svg(p5);


import sketch from './sketch';

// let p5sk;
// let p5sk;
// window.onload = () => {
//   p5sk = new p5(sketch);
// };


// p5sk = new p5(sketch, 'p5container');
new p5(sketch, 'p5container');

export function teste(){
    // let svg;
    var svg = document.querySelector('svg');
    
    console.log(svg)
}


function downloadSVGAsText() {
    var svgsaver = new SvgSaver();                      // creates a new instance
    const svg = document.querySelector('svg');
    svgsaver.asSvg(svg,"trama_generative_logo.svg");    
  }


window.downloadSVGAsText = downloadSVGAsText;

