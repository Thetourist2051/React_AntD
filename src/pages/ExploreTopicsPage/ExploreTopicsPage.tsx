import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import classes from "./ExploreTopicsPage.module.scss";
import { useLocation } from "react-router-dom";

interface tagProps {
  tagName: string;
  tagValue: string;
}

const ExploreTopicsPage = () => {
  const location = useLocation();
  let statsTags = [
    { tagName: "Central Limit Theorem", tagValue: "central-limit-theorem" },
    { tagName: "Correlation Analysis", tagValue: "correlation-analysis" },
    { tagName: "Confidence Intervals", tagValue: "confidence-intervals" },
    { tagName: "ANOVA Testing", tagValue: "anova-testing" },
    {
      tagName: "Nonparametric Statistics",
      tagValue: "nonparametric-statistics",
    },
    { tagName: "Regression Analysis", tagValue: "regression-analysis" },
    { tagName: "Time Series Analysis", tagValue: "time-series-analysis" },
    { tagName: "Chi-Square Test", tagValue: "chi-square-test" },
    { tagName: "Multivariate Analysis", tagValue: "multivariate-analysis" },
    { tagName: "Normal Distribution", tagValue: "normal-distribution" },
    { tagName: "P-value", tagValue: "p-value" },
    { tagName: "Statistical Inference", tagValue: "statistical-inference" },
    {
      tagName: "Probability Distributions",
      tagValue: "probability-distributions",
    },
    { tagName: "Sampling Distribution", tagValue: "sampling-distribution" },
    { tagName: "Skewness", tagValue: "skewness" },
    { tagName: "Kurtosis", tagValue: "kurtosis" },
    { tagName: "Confounding Variables", tagValue: "confounding-variables" },
    { tagName: "Residual Analysis", tagValue: "residual-analysis" },
    {
      tagName: "Maximum Likelihood Estimation",
      tagValue: "maximum-likelihood-estimation",
    },
    { tagName: "Variance Analysis", tagValue: "variance-analysis" },
  ];
  let mlTags = [
    { tagName: "Ensemble Learning", tagValue: "ensemble-learning" },
    { tagName: "Reinforcement Learning", tagValue: "reinforcement-learning" },
    {
      tagName: "Natural Language Processing",
      tagValue: "natural-language-processing",
    },
    { tagName: "Computer Vision", tagValue: "computer-vision" },
    {
      tagName: "Dimensionality Reduction",
      tagValue: "dimensionality-reduction",
    },
    { tagName: "Feature Selection", tagValue: "feature-selection" },
    { tagName: "Gradient Boosting", tagValue: "gradient-boosting" },
    { tagName: "Random Forest", tagValue: "random-forest" },
    { tagName: "Support Vector Machines", tagValue: "support-vector-machines" },
    { tagName: "Neural Architecture", tagValue: "neural-architecture" },
    { tagName: "Transfer Learning", tagValue: "transfer-learning" },
    { tagName: "Instance-based Learning", tagValue: "instance-based-learning" },
    { tagName: "Unsupervised Learning", tagValue: "unsupervised-learning" },
    {
      tagName: "Semi-Supervised Learning",
      tagValue: "semi-supervised-learning",
    },
    { tagName: "Model Evaluation", tagValue: "model-evaluation" },
    { tagName: "Hyperparameter Tuning", tagValue: "hyperparameter-tuning" },
    { tagName: "Overfitting", tagValue: "overfitting" },
    { tagName: "Underfitting", tagValue: "underfitting" },
    { tagName: "Bias-Variance Tradeoff", tagValue: "bias-variance-tradeoff" },
    { tagName: "Model Interpretability", tagValue: "model-interpretability" },
  ];

  const [selectedTag, setSelectedTag] = useState<tagProps>({
    tagName: "",
    tagValue: "",
  });

  let tagArray = [...statsTags, ...mlTags];

  useEffect(() => {
    if (location && location?.state) {
      setSelectedTag(location?.state);
    } else {
      setSelectedTag({
        tagName: "",
        tagValue: "",
      });
    }
  }, [location]);

  return (
    <>
      <PageHeader />
      <div
        className={classes["explore-topic"] + " " + "py-lg-5 py-md-3 py-sm-2"}
      >
        <div className="container px-lg-3 px-md-2 px-sm-0">
          <h4 className="mb-4">Select the Topics of your interest:</h4>
          <div className="row mx-0 my-3">
            <div className={classes["topic-section"]}>
              <ul>
                {tagArray.map((tag, index) => {
                  return (
                    <>
                      <li
                        key={index}
                        className={
                          selectedTag?.tagValue === tag?.tagValue
                            ? classes["active-tag"] + " " + classes["tag"]
                            : classes["tag"]
                        }
                        onClick={() => setSelectedTag(tag)}
                        data-bs-toggle="collapse"
                        data-bs-target={`#${tag?.tagValue}`}
                        aria-controls={`${tag?.tagValue}`}
                      >
                        {tag?.tagName}
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className={classes["selected-tag-section"] + " " + "py-md-4 py-sm-2"}
      >
        <div className="container px-lg-3 px-md-2 px-sm-0">
          <h5 className="mb-3">Selected tag : {selectedTag?.tagName}</h5>
          {selectedTag?.tagValue === 'central-limit-theorem' && (
          <>
            <div className="card card-body">
              {selectedTag?.tagName} Some placeholder content for the collapse
              component. This panel is hidden by default but revealed when the
              user activates the relevant trigger.
            </div>
          </>)}
        </div>
      </div>
    </>
  );
};

export default ExploreTopicsPage;
