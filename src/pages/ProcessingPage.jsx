import { useState } from "react";
import "./ProcessingPage.css";

const ProcessingPage = ({}) => {
  const q1 = {
    q: "If we have access to all of the training data and the model, which data processing method should we use?",
    a: "Pre-Processing",
  };
  const [question, setQuestion] = useState("q");

  const handleClick = () => {
    if (question == "q") {
      setQuestion("a");
    } else {
      setQuestion("q");
    }
  };
  return (
    <div className="processing-page">
      <h1>Addressing Algoirthmic Bias</h1>
      <div className="main-content">
        <div className="processing-intro">
          <h4>
            Where can bias come from in algorithms, and how does that change how
            we address it?
          </h4>
        </div>
        <div className="processing-subsection">
          <h2>Pre-Processing</h2>
          <h4>
            For when bias coming from training data and you have access to the
            data
          </h4>
          <p>Training data can be biased in many ways.</p>
          <ul>
            <li>Groups of people can be under-represented</li>
            <li>
              Labels for the training data are created by people, these labels
              can reflect that person's individual biases
            </li>
          </ul>
          <p>
            This is when we make changes to the training data to make it more
            fair.
          </p>
        </div>
        <div className="processing-subsection">
          <h2>In-Processing</h2>
          <h4>
            For when bias coming from the model and you have access to the model
          </h4>
        </div>
        <div className="processing-subsection">
          <h2>Post-Processing</h2>
          <h4>
            When you don't have access to either the model or the training data,
            just the results.
          </h4>
        </div>
        <div className="button-container">
          <button className="question-button" onClick={handleClick}>
            <p>{question == "q" ? "Question:" : "Answer:"}</p>
            <p>
              <b>{q1[question]}</b>
            </p>
            <p>Click to see {question == "q" ? "answer" : "question"}</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProcessingPage;
