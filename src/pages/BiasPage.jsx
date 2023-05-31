import "./BiasPage.css";

const BiasPage = ({}) => {
  return (
    <div className="bias-page">
      <h1>Algorithmic bias</h1>
      <div className="main-content">
        <div className="bias-content">
          <div className="bias-text">
            <h2>What is bias?</h2>
            <p>
              Bias is defined as prejudice or unfair treatment against certain
              people or groups. We normally think about bias in the context of
              <b> people</b> holding biases against other <b>people</b>, usually
              <b> majority</b> groups being biased against <b>minority</b>{" "}
              groups.
            </p>
            <p>
              People can have <b>explicit biases</b> and <b>implicit biases</b>.
            </p>
            <p>
              <b>Explicit biases</b> are biases that people know they have.
            </p>
            <p>
              <b>Implict biases</b> are more suble. They are biases that people
              don't mean to have and don't initially realize they have. They
              unconciously favor certain people or groups.
            </p>
            <p>
              Both explicit and implicit biases come from years or societal
              prejuduce against minority groups. Even as people becoming more
              accepting and work to elimate exlicit biases, implicit biases
              still remain, and they are much harder to stop.
            </p>
          </div>
          <img src="../../bias_image.png" className="bias-image"></img>
        </div>

        <h3>Ok, so if every person has biases, computers must be better.</h3>
      </div>
    </div>
  );
};

export default BiasPage;
