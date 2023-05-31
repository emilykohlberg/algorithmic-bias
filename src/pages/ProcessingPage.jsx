const ProcessingPage = ({}) => {
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
          <h4>For when bias coming from training data</h4>
          <p>Training data can be biased in many ways.</p>
          <ul>
            <li>Groups of people can be under-represented</li>
            <li>
              Labels for the training data are created by people, these labels
              can reflect that person's individual biases
            </li>
            <li></li>
          </ul>
          <p>Why is training data biased and how can we address it?</p>
        </div>
        <div className="processing-subsection">
          <h2>In-Processing</h2>
          <p>
            I will discuss algorithmic bias and fairness through an explainer
            blog/website. This will be aimed towards high school or college
            students early on in their computer science education or students
            who do not plan on studying computer science. This is an important
            and often overlooked computer science topic that I have only
            recently seen in classes, but I think it would be better to learn
            about earlier as fighting algorithmic bias should shape the way that
            people program. Societal biases are often reflected in artificial
            intelligence algorithms, whether this is intentional or
            unintentional. Algorithmic bias is something that can be fixed,
            which can lead to a more fair future for marginalized communities,
            but people need to be educated on the topic in order to do this. The
            intent behind the design will be to make people aware of the issue,
            provide tangible examples so they can understand how it affects
            people, and offer solutions that they can use in their own
            programming. Because the target audience is not very familiar with
            computer science, it will stay at a fairly high level instead of
            going into the mechanics of different fairness metrics/algorithms.
            For computer science students, it is meant to spark interest in the
            topic early on in their education because I think it will help shape
            their overall outlook on programming rather than feel like an
            afterthought if it were to be presented later on in their careers.
            For non-computer science students, it is meant to teach them about
            the social implications that algorithmic bias has on the world.
          </p>
        </div>
        <div className="processing-subsection">
          <h2>Post-Processing</h2>
          <p>
            I will discuss algorithmic bias and fairness through an explainer
            blog/website. This will be aimed towards high school or college
            students early on in their computer science education or students
            who do not plan on studying computer science. This is an important
            and often overlooked computer science topic that I have only
            recently seen in classes, but I think it would be better to learn
            about earlier as fighting algorithmic bias should shape the way that
            people program. Societal biases are often reflected in artificial
            intelligence algorithms, whether this is intentional or
            unintentional. Algorithmic bias is something that can be fixed,
            which can lead to a more fair future for marginalized communities,
            but people need to be educated on the topic in order to do this. The
            intent behind the design will be to make people aware of the issue,
            provide tangible examples so they can understand how it affects
            people, and offer solutions that they can use in their own
            programming. Because the target audience is not very familiar with
            computer science, it will stay at a fairly high level instead of
            going into the mechanics of different fairness metrics/algorithms.
            For computer science students, it is meant to spark interest in the
            topic early on in their education because I think it will help shape
            their overall outlook on programming rather than feel like an
            afterthought if it were to be presented later on in their careers.
            For non-computer science students, it is meant to teach them about
            the social implications that algorithmic bias has on the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessingPage;
