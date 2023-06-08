const About = ({}) => {
  return (
    <div className="About-page">
      <h1>About Us</h1>
      <div className="main-content">
        <p>
          My name is Emily Kohlberg, and I am a junior at Northwestern
          University majoring in Computer Science.
        </p>
        <p>
          I created this project because I felt like algorithmic bias was not
          introduced early enough in my Computer Science education, so I wanted
          to provide a resource that high school students and early college
          students could use to learn more about algorithmic bias. I hope that
          my website is able to spark interest and help students make more
          informed design decisions as they begin their journey in Computer
          Science.
        </p>
      </div>
      <div className="works-cited">
        <b>References</b>
        <p>
          Bias. (n.d.). National Museum of African American History and Culture.
          https://nmaahc.si.edu/learn/talking-about-race/topics/bias
        </p>
        <p>
          Feast, J. (2020, October 30). Root Out Bias at Every Stage of Your
          AI-Development Process. Harvard Business Review.
          https://hbr.org/2020/10/root-out-bias-at-every-stage-of-your-ai-development-process
        </p>
        <p>
          Shin, T. (2021, December 14). Real-life Examples of Discriminating
          Artificial Intelligence. Medium.
          https://towardsdatascience.com/real-life-examples-of-discriminating-artificial-intelligence-cae395a90070
        </p>
        <p>
          Wang, X., Zhang, Y., & Zhu, R. (2022). A brief review on algorithmic
          fairness. Management System Engineering, 1(1).
          https://doi.org/10.1007/s44176-022-00006-z
        </p>
      </div>
    </div>
  );
};

export default About;
