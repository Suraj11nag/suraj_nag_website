import './Extracurricular.css'

import Template from '../Template2/Template.js';
import EDCell from '../../images/ED-Cell.JPG';
import SIHImg from "../../images/SIH.jpeg";
import TuringHut from "../../images/TuringHut.jpg";
import ShortFilmImg from "../../images/ShortFilm.jpeg";
import MuleSoftImg from "../../images/MuleSoft.jpg";
import ISACImg from '../../images/ISAC.jpeg'; // Fix the import statement for ISACImg

function ExtracurricularSection() {
  return (
    <div className="extracurricular__section section__padding" id="extracurriculars">
      <div className="extracurricular__heading">
        <h1 className="gradient__text">
          My Blogs!
        </h1>
      </div>
      <div className="extracurricular__container">
        {/* <div className="extracurricular__container_groupA">
          <Template path={SIHImg} link="https://medium.com/@suraj11nag/what-should-be-your-first-machine-learning-model-e946a8c490f6" name="What Should Be Your First Machine Learning Model?" />
        </div> */}
        <div className="extracurricular__container_groupB">
        <Template path={SIHImg} link="https://medium.com/@suraj11nag/what-should-be-your-first-machine-learning-model-e946a8c490f6" name="What Should Be Your First Machine Learning Model?" />
        <Template path={ISACImg} link="https://medium.com/@suraj11nag/8-ways-data-science-changed-my-life-232755d3865e" name="8 Ways Machine Learning Changed My Life" />
        <Template path={EDCell} link="https://medium.com/@suraj11nag/12-months-of-learning-machine-learning-8cc83798a36d" name="12 months of Learning — Machine Learning" />
          <Template path={MuleSoftImg} link="https://medium.com/@suraj11nag/what-is-metadata-d55b846ea6dc" name="What is Metadata? It all starts with a question?" />
          <Template path={TuringHut} link="https://medium.com/@suraj11nag/why-data-scientists-are-graph-ically-obsessed-4fcd73d93935" name="Why Data Scientists are Graph-ically Obsessed" />
          <Template path={ShortFilmImg} link="https://medium.com/@suraj11nag/5-tips-for-landing-a-data-science-job-7ba5ab3c1526" name="5 Tips for landing a Data Science job" />
        </div>

      </div>
    </div>
  );
}

export default ExtracurricularSection;
