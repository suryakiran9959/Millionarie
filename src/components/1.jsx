import { useEffect, useMemo, useState } from "react";
import "../App.css";
import Trivia from "./main";
import Timer from "./Timer";
function One() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "What is React-JS ?",
      answers: [
        {
          text: "A database management system",
          correct: false,
        },
        {
          text: "A JavaScript library for building user interfaces",
          correct: true,
        },
        {
          text: "A server-side framework",
          correct: false,
        },
        {
          text: "A web browser",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Who created the React-js?",
      answers: [
        {
          text: "Jordan Walke",
          correct: true,
        },
        {
          text: "Tim Berners-Lee",
          correct: false,
        },
        {
          text: "Brendan Eich",
          correct: false,
        },
        {
          text: "Jordan eich",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which of the following is the correct way to create a React component?",
      answers: [
        {
          text: "function MyComponent { return <div>Hello</div>}",
          correct: false,
        },
        {
          text: "const MyComponent = { <div>Hello</div>}",
          correct: false,
        },
        {
          text: "const MyComponent = <div>Hello</div>",
          correct: false,
        },
        {
          text: "function MyComponent() { return <div>Hello</div>}",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "In React, what is the significance of keys in a list?",
      answers: [
        {
          text: "They help to uniquely identify elements",
          correct: true,
        },
        {
          text: "They are used to set the state",
          correct: false,
        },
        {
          text: "They are used to define props",
          correct: false,
        },
        {
          text: "They are used to create event handlers",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "How do you pass data from a parent component to a child component in React?",
      answers: [
        {
          text: "Using Context",
          correct: false,
        },
        {
          text: "Using state",
          correct: false,
        },
        {
          text: "Using props",
          correct: true,
        },
        {
          text: "Using Redux",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Which lifecycle method is called when a component is being removed from the DOM?",
      answers: [
        {
          text: "componentDidMount",
          correct: false,
        },
        {
          text: "componentWillUnmount",
          correct: true,
        },
        {
          text: "componentDidUpdate",
          correct: false,
        },
        {
          text: "shouldComponentUpdate",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "What is the purpose of the useEffect hook in React?",
      answers: [
        {
          text: "To perform side effects",
          correct: true,
        },
        {
          text: "To manage component state",
          correct: false,
        },
        {
          text: " To create context",
          correct: false,
        },
        {
          text: "To render JSX",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "In React, what is the significance of keys in a list?",
      answers: [
        {
          text: "They help to uniquely identify elements",
          correct: true,
        },
        {
          text: "They are used to set the state",
          correct: false,
        },
        {
          text: "They are used to define props",
          correct: false,
        },
        {
          text: "They are used to create event handlers",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "In React, what is the significance of keys in a list?",
      answers: [
        {
          text: "They help to uniquely identify elements",
          correct: true,
        },
        {
          text: "They are used to set the state",
          correct: false,
        },
        {
          text: "They are used to define props",
          correct: false,
        },
        {
          text: "They are used to create event handlers",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "In React, what is the significance of keys in a list?",
      answers: [
        {
          text: "They help to uniquely identify elements",
          correct: true,
        },
        {
          text: "They are used to set the state",
          correct: false,
        },
        {
          text: "They are used to define props",
          correct: false,
        },
        {
          text: "They are used to create event handlers",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "In React, what is the significance of keys in a list?",
      answers: [
        {
          text: "They help to uniquely identify elements",
          correct: true,
        },
        {
          text: "They are used to set the state",
          correct: false,
        },
        {
          text: "They are used to define props",
          correct: false,
        },
        {
          text: "They are used to create event handlers",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "In React, what is the significance of keys in a list?",
      answers: [
        {
          text: "They help to uniquely identify elements",
          correct: true,
        },
        {
          text: "They are used to set the state",
          correct: false,
        },
        {
          text: "They are used to define props",
          correct: false,
        },
        {
          text: "They are used to create event handlers",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "In React, what is the significance of keys in a list?",
      answers: [
        {
          text: "They help to uniquely identify elements",
          correct: true,
        },
        {
          text: "They are used to set the state",
          correct: false,
        },
        {
          text: "They are used to define props",
          correct: false,
        },
        {
          text: "They are used to create event handlers",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "In React, what is the significance of keys in a list?",
      answers: [
        {
          text: "They help to uniquely identify elements",
          correct: true,
        },
        {
          text: "They are used to set the state",
          correct: false,
        },
        {
          text: "They are used to define props",
          correct: false,
        },
        {
          text: "They are used to create event handlers",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "In React, what is the significance of keys in a list?",
      answers: [
        {
          text: "They help to uniquely identify elements",
          correct: true,
        },
        {
          text: "They are used to set the state",
          correct: false,
        },
        {
          text: "They are used to define props",
          correct: false,
        },
        {
          text: "They are used to create event handlers",
          correct: false,
        },
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

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="app">
      <div className="main">
        {stop ? (
          <h1 className="endText">you earned:{earned}</h1>
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
                setStop={setStop}
                setQuestionNumber={setQuestionNumber}
                questionNumber={questionNumber}
              />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneylist">
          {moneyPyramid.map((m) => (
            <li
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
