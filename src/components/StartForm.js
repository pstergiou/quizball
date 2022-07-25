import React from "react";
import { ReactDOM } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";



    



function StartForm(){
    
  
    return (
        <div className="test">

        <h1>Welcome to QuizBall</h1>
        
          
          
          <Link to="/categories"> <Button  className="mybtn" variant="primary" size="lg" type="submit"> Random Quizball </Button></Link>
         
          <Button className="mybtn" variant="primary" size="lg" type="submit">
            Make your own Quizball
          </Button>
          
        
        </div>
      );
}

export default StartForm;