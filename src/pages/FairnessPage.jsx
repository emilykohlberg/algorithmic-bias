import "./FairnessPage.css";
const FairnessPage = ({}) => {
  return (
    <div className="fairness-page">
      <h1>Fairness Metrics</h1>
      <div className="main-content">
        <div className="fairness-intro-content">
          <div className="fairness-intro-text">
            <p>Here is a brief overview of what this page will entail:</p>
          </div>
          <div className="fairness-image-container">
            <img src="./fairness.png" className="fairness-image"></img>
            <p>Image by Xiaomeng Wang, Yishi Zhang, & Ruilin Zhu </p>
          </div>
        </div>
        <h4>
          Definition: Protected attributes are characteristics like race,
          gender, sexual orientation, etc. that can be used to disciminate
          against a person.
        </h4>
        <div className="fairness-stage1-content">
          <h3>Stage 1: Initialization</h3>
          <div className="fairness-stag1-text">
            <h4>Awareness Based Fairness</h4>
            <p>There is fairness through awarness and unawareness.</p>
            <p>
              Fairness through awarness means that variables like gender or race
              are considered to make the data fair.
            </p>
            <p>
              Fairness through unawarness means that these sensative variables
              are completely ignored to promote fairness.
            </p>
            <h4>Rationality Based Fairness</h4>
            <p>
              This can be divided into statistical based fairness and causality
              based fairness.
            </p>
            <p>
              Basically rationality based fairness takes the protected
              attributes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FairnessPage;
