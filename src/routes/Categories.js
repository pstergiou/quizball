import React from "react";
import { ReactDOM } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtlas } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faLandmark } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { fa1 } from "@fortawesome/free-solid-svg-icons";
import { fa2 } from "@fortawesome/free-solid-svg-icons";
import { fa3 } from "@fortawesome/free-solid-svg-icons";
import { fa5 } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";
import Delayed from "../components/Delayed";
import Header from "../components/Header";


const categories = [
  {
    title: "History",
    icon: faLandmark,
    points: [1,2,3]
  },
  {
    title: "Geography",
    icon: faAtlas,
    points: [1,2,3]
  },
  {
    title: "Player ID",
    icon: faIdCard,
    points: [2,2]
  },
  {
    title: "Manager ID ",
    icon: faIdCard,
    points: [2,2]
  },
  
  {
    title: "Missing Player",
    icon: faQuestion,
    points: [2,2]
  },
  {
    title: "Gossip ",
    icon: faComment,
    points: [2,2]
  },
  {
    title: "Top 5 ",
    icon: faTrophy,
    points: [1,2,3]
  }
  
];

var turn = Math.floor(Math.random()*2)+1;
console.log(turn);

function Categories() {
  return (
   <div> 
   <Header player={turn}></Header>
    <div className="categories">
     
      {categories.map((category) => (
        <div>
        
        <h3>  <FontAwesomeIcon className="icon" icon={category.icon} /> {category.title} {category.points.map((point) => <Link to={"/" + category.title + "/" + turn } >  <Button className="mybtn"> {point}</Button> </Link>) } </h3>
        <Outlet />
        
        
        </div>
      ))}
    </div>
    </div>
  );
}

export default Categories;
