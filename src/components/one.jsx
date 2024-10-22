import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "../App.css";
import "./one.css"
import Trivia from "./main"; // Trivia component for questions
import Timer from "./timer"; // Timer component for game timer

function One() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false); // Track if the game is stopped
  const [earned, setEarned] = useState("$ 0");
  const navigate = useNavigate(); // For navigating back to the main page


  // Full set of 15 trivia questions
  const data = [
    {
      id: 1,
      question: "What is React-JS?",
      answers: [
        { text: "A database management system", correct: false },
        { text: "A JavaScript library for building user interfaces", correct: true },
        { text: "A server-side framework", correct: false },
        { text: "A web browser", correct: false },
      ],
    },
    {
      id: 2,
      question: "Who created React-JS?",
      answers: [
        { text: "Jordan Walke", correct: true },
        { text: "Tim Berners-Lee", correct: false },
        { text: "Brendan Eich", correct: false },
        { text: "Jordan Eich", correct: false },
      ],
    },
    {
      id: 3,
      question: "Which of the following is the correct way to create a React component?",
      answers: [
        { text: "function MyComponent { return <div>Hello</div> }", correct: false },
        { text: "const MyComponent = { <div>Hello</div> }", correct: false },
        { text: "const MyComponent = <div>Hello</div>", correct: false },
        { text: "function MyComponent() { return <div>Hello</div> }", correct: true },
      ],
    },
    {
      id: 4,
      question: "In React, what is the significance of keys in a list?",
      answers: [
        { text: "They help to uniquely identify elements", correct: true },
        { text: "They are used to set the state", correct: false },
        { text: "They are used to define props", correct: false },
        { text: "They are used to create event handlers", correct: false },
      ],
    },
    {
      id: 5,
      question: "How do you pass data from a parent component to a child component in React?",
      answers: [
        { text: "Using Context", correct: false },
        { text: "Using state", correct: false },
        { text: "Using props", correct: true },
        { text: "Using Redux", correct: false },
      ],
    },
    {
      id: 6,
      question: "Which lifecycle method is called when a component is being removed from the DOM?",
      answers: [
        { text: "componentDidMount", correct: false },
        { text: "componentWillUnmount", correct: true },
        { text: "componentDidUpdate", correct: false },
        { text: "shouldComponentUpdate", correct: false },
      ],
    },
    {
      id: 7,
      question: "What is the purpose of the useEffect hook in React?",
      answers: [
        { text: "To perform side effects", correct: true },
        { text: "To manage component state", correct: false },
        { text: "To create context", correct: false },
        { text: "To render JSX", correct: false },
      ],
    },
    {
      id: 8,
      question: "Which of the following is true about React hooks?",
      answers: [
        { text: "Hooks are JavaScript classes", correct: false },
        { text: "Hooks are used to manage side effects and state in functional components", correct: true },
        { text: "Hooks are used only in class components", correct: false },
        { text: "Hooks are event listeners", correct: false },
      ],
    },
    {
      id: 9,
      question: "What is JSX in React?",
      answers: [
        { text: "A JavaScript extension for defining objects", correct: false },
        { text: "A JavaScript syntax extension to write HTML in React", correct: true },
        { text: "A database query language", correct: false },
        { text: "A style sheet language", correct: false },
      ],
    },
    {
      id: 10,
      question: "What is the use of the useState hook in React?",
      answers: [
        { text: "To manage the state of functional components", correct: true },
        { text: "To handle events", correct: false },
        { text: "To manage side effects", correct: false },
        { text: "To connect to the DOM", correct: false },
      ],
    },
    {
      id: 11,
      question: "What does the virtual DOM in React improve?",
      answers: [
        { text: "Server performance", correct: false },
        { text: "Rendering speed by reducing the actual DOM updates", correct: true },
        { text: "JavaScript execution speed", correct: false },
        { text: "CSS styling", correct: false },
      ],
    },
    {
      id: 12,
      question: "What is the significance of 'key' in a list of React elements?",
      answers: [
        { text: "It helps React keep track of elements between renders", correct: true },
        { text: "It sets the component state", correct: false },
        { text: "It defines the order of elements in a list", correct: false },
        { text: "It triggers event handlers", correct: false },
      ],
    },
    {
      id: 13,
      question: "Which React hook is used to perform side effects in function components?",
      answers: [
        { text: "useState", correct: false },
        { text: "useEffect", correct: true },
        { text: "useContext", correct: false },
        { text: "useReducer", correct: false },
      ],
    },
    {
      id: 14,
      question: "What is the purpose of useReducer in React?",
      answers: [
        { text: "To fetch data from an API", correct: false },
        { text: "To manage state with reducers", correct: true },
        { text: "To handle routing", correct: false },
        { text: "To style components", correct: false },
      ],
    },
    {
      id: 15,
      question: "What is Context API used for in React?",
      answers: [
        { text: "To handle API calls", correct: false },
        { text: "To manage state globally", correct: true },
        { text: "To create new components", correct: false },
        { text: "To define routes", correct: false },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1000" },
        { id: 6, amount: "$ 2000" },
        { id: 7, amount: "$ 4000" },
        { id: 8, amount: "$ 8000" },
        { id: 9, amount: "$ 16000" },
        { id: 10, amount: "$ 32000" },
        { id: 11, amount: "$ 64000" },
        { id: 12, amount: "$ 125000" },
        { id: 13, amount: "$ 250000" },
        { id: 14, amount: "$ 500000" },
        { id: 15, amount: "$ 1000000" },
      ].reverse(),
    []
  );

 
  // Update earned amount based on the question number
  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  // Handle "Back to Main Page" button click
  const handleBackToMain = () => {
    navigate("/"); // Navigate back to the main page
  };

  return (
    <div className="app">
      <div className="main">
        {stop ? (
          <div>
            <h1 className="endText">You earned: {earned}</h1>
            {/* Back to Main Page button after game ends */}
            <button onClick={handleBackToMain} className="back-button">
              Back to Main Page
            </button>
          </div>
        ) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer setStop={setStop} questionNumber={questionNumber} />
              </div>
            </div>
            <div className="bottom">
              <Trivia
                data={data}
                setStop={setStop} // Stop the game when the player answers incorrectly
                setQuestionNumber={setQuestionNumber}
                questionNumber={questionNumber}
              />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
            <li
              key={m.id}
              className={
                questionNumber === m.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default One;