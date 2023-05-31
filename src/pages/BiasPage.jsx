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
          <div className="bias-image-container">
            <img src="../../bias_image.png" className="bias-image"></img>
          </div>
        </div>
        <h3>Ok, so can computers have bias too?</h3>
        <div className="simple-alg-bias-content">
          <div className="simple-alg-bias-text">
            <h2>Bias in Computer Algorithms</h2>
            <p>
              To get computers to perform tasks, people have to program them
              with <b>algorithms</b>.
            </p>
            <p>
              An <b>algorithm</b> is a set of rules and calculations that takes
              input data and produces a result. They are like instructions for
              your computer.
            </p>
            <p>Example algorithm that me contain bias:</p>
            <p>
              You may program a computer to select candidates for a job. If the
              programmer is biased against women, for example, their algorithm
              for job selection might reflect this bias and select only men.
            </p>
            <p>
              So, any algorithm that is written by a human will likely reflect
              the biases that this particular programmer has.
            </p>
          </div>
        </div>
        <h3>Ok, well then what about artificial intelligence algorithms?</h3>
        <div className="alg-container">
          <div className="alg-text">
            <div className="ai-content">
              <div className="ai-text">
                <h2>Artificial Intelligence</h2>
                <p>
                  <b>Artificial intelligence (AI)</b> is the replication of
                  human intelligence in a computer system. AI programs should be
                  able to make decisions that would normally require a human
                  brain to do.
                </p>
                <p>
                  A subfield of artificial intelligence is{" "}
                  <b>machine learning</b>.
                </p>
                <p>
                  <b>Machine learning (ML)</b> algorithms, just like regular
                  computer algorithms, are a set of instructions that a computer
                  follows to take input and produce output.
                </p>
                <p>
                  The fundamental difference between ML algoirthms and regular
                  algorithms is that
                </p>
                <p>
                  <b>
                    The instructions of regular algorithms are written by a
                    human.
                  </b>
                  The human creates the instructions, and the computer follows
                  them.
                </p>
                <p>
                  <b>
                    The instruction of ML algorithms are created by the machine.
                  </b>
                  Using complicated statistical approaches, the computer is
                  given millions of sample input with expected outputs to
                  "learn" how to predict what the output should be.
                </p>
                <p>
                  For example, an ML algorithm might be used to classify
                  pictures of apples and oranges. The algorithm is "trained" on
                  millions of pictures of apples and oranges with labels. During
                  the training, the computer is creating rules that it uses to
                  guess if a picture contains an apple or an orange. Eventually,
                  the ML model produces an algorithm that is able to succesfully
                  determine if an image contains an apple or an orange.
                </p>
              </div>
              <div className="alg-bias-image-container">
                <img
                  src="../../alg_bias_image.png"
                  className="alg-bias-image"
                ></img>
              </div>
            </div>
            <h3>
              Great, since these models are purely data based, they won't have
              the same biases as people do!
            </h3>
            <h3>Well, not quite...</h3>
            <div className="ai-bias-content">
              <div className="ai-bias-text">
                <h2>Algorithmic Bias in Artificial Intelligence</h2>
                <p>
                  AI and ML algorithms seem like an easy fix to algorithmic
                  bias, but there are still a few glaring issues.
                </p>
                <p>
                  <b>Training data</b> can be a huge source of bias. Because we
                  live in a biased society, much of the data we use to train ML
                  models reflects those biases. When an algorithm is trained on
                  biased data, it will ultimately reflect those biases in its
                  algorithm. See examples on the next page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiasPage;
