import "./ExamplePage.css";

const ExamplePage = ({}) => {
  return (
    <div className="example-page">
      <h1>What are some examples of algorithmic bias?</h1>
      <div className="main-content">
        <div className="example">
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
            showed that white patients have spent more money on healthcare than
            black patients.
          </p>
          <p>
            This bias has been reduced by 80%, but could still use work to fully
            eliminate.
          </p>
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
            white individuals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExamplePage;
