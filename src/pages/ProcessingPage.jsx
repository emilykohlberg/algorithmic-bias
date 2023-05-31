import { useState } from "react";
import "./ProcessingPage.css";

const ProcessingPage = ({}) => {
  const q1 = {
    q: "If we have access to all of the training data and the model, which data processing method should we use?",
    a: "Pre-Processing",
  };

  const q2 = {
    q: "If we only have access to the results of the algorithm, what type of data processing would be best to use?",
    a: "Post-Processing",
  };

  const [question1, setQuestion1] = useState("q");
  const [question2, setQuestion2] = useState("q");

  const handleClick = (question, setQuestion) => {
    // console.log(data);
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
          <p>
            In-processing is when you change the algorithm to mitigate bias.
            Often, this come in the form of adding a de-bias term that helps
            reweight the underpriveleged groups.
          </p>
        </div>
        <div className="processing-subsection">
          <h2>Post-Processing</h2>
          <h4>
            When you don't have access to either the model or the training data,
            just the results.
          </h4>
          <p>
            Post-processing occurs when the model has already created
            predictions for the data. This is more of a last step to mitigate
            bias. One popular method is to get rid of predictions that had
            higher values of uncertainty because these values likely contain
            biased results.
          </p>
        </div>
        <h2>Questions to test your knowledge!</h2>
        <div className="button-container">
          <button
            className={
              question1 == "q"
                ? "question-button question"
                : "question-button answer"
            }
            onClick={() => handleClick(question1, setQuestion1)}
          >
            <p>{question1 == "q" ? "Question:" : "Answer:"}</p>
            <p>
              <b>{q1[question1]}</b>
            </p>
            <p>Click to see {question1 == "q" ? "answer" : "question"}</p>
          </button>
        </div>
        <div className="button-container">
          <button
            className={
              question2 == "q"
                ? "question-button question"
                : "question-button answer"
            }
            onClick={() => handleClick(question2, setQuestion2)}
          >
            <p>{question2 == "q" ? "Question:" : "Answer:"}</p>
            <p>
              <b>{q2[question2]}</b>
            </p>
            <p>Click to see {question2 == "q" ? "answer" : "question"}</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProcessingPage;
