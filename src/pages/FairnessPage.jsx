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
              <b>Fairness through awareness</b> means that variables like gender
              or race are considered to make the data fair. This is also known
              as individual fairness. It basically means that individuals with
              similar attributes (including protected attributes) are treated
              similarly. Essentially, the difference in outcomes between
              individuals should not be greater than the difference between
              their attributes. It can sometimes be difficult to measure
              "distance" between certain attributes.
            </p>
            <p>
              <b>Fairness through unawareness</b> means that these sensative
              variables are completely ignored to promote fairness. This is a
              fairly intuitive measure of fairness, as the protected attributes
              are excluded entirely. One downside to this approach is that
              certain attributes can be correlated to protected attributes and
              still introduce bias into the model even though they are not
              protected attributes. For example, zipcode can be closely related
              to a protected attribute like race or socio-economic status. This
              method is only useful if there is no such correlation, which is
              unlikely.
            </p>

            <h4>Rationality Based Fairness</h4>
            <p>
              This can be divided into statistical based fairness and causality
              based fairness.
            </p>
            <p>
              <b>Statistical based fairness</b> means that the vulnerable group
              as a whole is treated similarly to the non-vulnerable group as a
              whole.
            </p>
            <p>
              Demographic parity means the vulnerable and non-vulnerable groups
              have the same probability for each result. The output Y does not
              depend on the protected attribute S.
            </p>
            <p>𝑃( 𝑦̂ | 𝑠 = 0 ) = 𝑃( 𝑦̂ | 𝑠 = 1 )</p>
            <p>
              Equalized odds means that the true positive and false positive
              rates are the same for the vulnerable and non-vulnerable groups.
            </p>
            <p>𝑃( 𝑦̂ | 𝑠 = 0, 𝑦 ) = 𝑃( 𝑦̂ | 𝑠 = 1, 𝑦 ), 𝑦̂ = 0, 1, 𝑦 = 0, 1</p>
            <p>Equal opportunity just focuses on the true positive rates.</p>
            <p>𝑃( 𝑦̂ = 1 | 𝑠 = 0, 𝑦 = 1 ) = 𝑃( 𝑦̂ = 1 | 𝑠 = 1, 𝑦 = 1 )</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FairnessPage;
