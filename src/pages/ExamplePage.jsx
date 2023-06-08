import { useState } from "react";
import "./ExamplePage.css";

const ExamplePage = ({}) => {
  const q1 = {
    q: "What are some types of bias that you can think of?",
    a: "Bias can be based on race, gender, sexual orientation, age, religion, nationality, appearance, affinity group, and much more.",
  };

  const [question1, setQuestion1] = useState("q");

  const handleClick = (question, setQuestion) => {
    // console.log(data);
    if (question == "q") {
      setQuestion("a");
    } else {
      setQuestion("q");
    }
  };

  return (
    <div className="example-page">
      <h1>What are some examples of algorithmic bias?</h1>
      <div className="main-content">
        <div className="example-with-image-container">
          <div className="example with-image">
            <h2>Racism in Healthcare</h2>
            <p>
              US healthcare uses in algorithm to determine which patients need
              more medical care. This algorithm favored white patients over
              minorities.
            </p>
            <p>
              Race was not used in the algorithm directly, but due to systemic
              biases in society, race is heavily correlated to socio-economic
              status and healthcare history.
            </p>
            <p>
              The algorithm uses previous healthcare spending data, and the data
              showed that white patients have spent more money on healthcare
              than black patients.
            </p>
            <p>
              This bias has been reduced by 80%, but could still use work to
              fully eliminate (Shin, 2021).
            </p>
          </div>
          <div className="healthcare-image-container">
            <img src="./healthcare.png" className="healthcare-image"></img>
            <p>Photo by Daan Stevens</p>
          </div>
        </div>
        <div className="example">
          <h2>Racism in Criminal Justice</h2>
          <p>
            COMPAS (Correctional Offender Management Profiling for Alternative
            Sanctions) is a software that is used by courts to determine how
            likely someone is to repeat the criminal behavior that they are on
            trial for, even after they receive sanctions/punishment.
          </p>
          <p>
            The US criminal justice system is widely known to hold racial biases
            against black people. This software is no different. It has twice as
            many false positive results (meaning that it incorrectly predicted
            them to have to have repeat offenses) for black individuals over
            white individuals (Shin, 2021).
          </p>
        </div>

        <div className="example">
          <h2>Gender Bias in Hiring</h2>
          <p>
            Amazon uses a machine learning model during their hiring process.
            Since a lot of the applications were from men, the model learned to
            favor men over women.
          </p>
          <p>
            This created a bias against female applicants where the men were
            more likely to get hired than women of the same ability were (Shin,
            2021).
          </p>
        </div>
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
    </div>
  );
};

export default ExamplePage;
