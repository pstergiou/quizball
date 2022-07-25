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
import { useParams } from "react-router-dom";
import Header from "./Header";


const questions = [
  {
    id: 1,
    category: "Manager ID",
    question: "Who has managed Barcelona and Ajax ",
    answer: "Real Madrid",
    difficulty: 1,
  },
  {
    id: 2,
    category: "Gossip",
    question: "Who is shakira ?",
    answer: "Bayern",
    difficulty: 1,
  },

  {
    id: 3,
    category: "Gossip",
    question: "Who is georgina ?",
    answer: "Bayern",
    difficulty: 1,
  },
  {
    id: 4,
    category: "Gossip",
    question: "Who is pique?",
    answer: "Bayern",
    difficulty: 1,
  },

  {
    id: 5,
    category: "Player ID",
    question: "Who has played at Chelsea and Arsenal?",
    answer: "Real Madrid",
    difficulty: 1,
  },
  {
    id: 6,
    category: "Player ID",
    question: "Test QUESTION ",
    answer: "Test Answer",
    difficulty: 1,
  },
  {
    id: 7,
    category: "Geography",
    question: " Where is madrid ",
    answer: "In spain",
    difficulty: 1,
  },
];



//filter down the questions in their category



function Question() {

    let params = useParams();

    var categoryQuestions = questions.filter(function (question) {
        return question.difficulty === 1 && question.category === params.questionCategory;
      });
      
      console.log(categoryQuestions);
      
      //random index for questions
      var random_index = Math.floor(Math.random() * categoryQuestions.length);
      
      //pick a random question from the chosen category
      
      var generatedQuestion = categoryQuestions.filter(function (question, index) {
        return question.difficulty === 1 && random_index === index;
      });
      
      //get the question details and render
      
      var selectedQuestion = generatedQuestion.map((question) => question.question);
      
      var selectedCategory = generatedQuestion.map((question) => question.category);
      
      var selectedAnswer = generatedQuestion.map((question) => question.answer);
      var selectedDifficulty = generatedQuestion.map(
        (question) => question.difficulty
      );
    
  return (
    <div> 

    <Header player={params.player}/>
    <div className="question">
      <div>
      

        <h1> {selectedCategory} </h1>
        <h3> {selectedQuestion} </h3>

        <br></br>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Your answer" />
          </Form.Group>

          <Button className="mybtn" variant="primary" type="submit">
            Submit
          </Button>
        </Form>

       
      </div>
    </div>
    </div>
  );
}

export default Question;
