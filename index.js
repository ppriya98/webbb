import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";

// console.log(Sdata[0].sname);
// function ncard(val){
// return(
//   <Card 
//     imgsrc= {val.imgsrc}
//     title={val.title}
//      sname={val.sname} 
//      link={val.link}
//      />
// )

// }

ReactDOM.render(
  <>
    <h1 className="heading_style">List of top Netflix series</h1>

    {Sdata.map((val) =>
    {
return(
    <Card
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
);
})}
  </>,
  document.getElementById('root')
);