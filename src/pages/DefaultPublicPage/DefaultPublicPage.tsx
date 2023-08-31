import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RouteConstants } from "../../constants/RouteConstant";
import classes from "./DefaultPublicPage.module.scss";
import PageHeader from "../../components/PageHeader/PageHeader";

const DefaultPublicPage = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<string>("ml-blog-lane");
  const tabContainerArray = [
    {
      tabName: "ML Blog Lane",
      tabValue: "ml-blog-lane",
      tabContainerValue: `Welcome to ML Blog Lane, your virtual destination for all
    things related to Machine Learning (ML). Whether you're a
    curious beginner dipping your toes into the world of AI or a
    seasoned practitioner seeking the latest insights, our
    platform is designed to be your guide through the intricate
    avenues of machine learning. Here, we embark on a journey to
    unravel the mysteries of algorithms, data patterns, and
    intelligent systems that drive innovation across industries.
    Our goal is to demystify the complexities of machine learning,
    offering a plethora of articles, tutorials, case studies, and
    discussions that cater to various levels of expertise. From
    fundamental concepts like supervised and unsupervised learning
    to cutting-edge advancements in deep learning and neural
    networks, ML Blog Lane is your compass in navigating this
    ever-evolving landscape. Join our community of learners,
    enthusiasts, and experts as we explore the transformative
    potential of machine learning, its real-world applications,
    ethical considerations, and the limitless possibilities it
    presents. Embark on this adventure with us and be empowered to
    comprehend, apply, and contribute to the fascinating realm of
    machine learning.`,
    },
    {
      tabName: "Machine Learning",
      tabValue: "machine-learning",
      tabContainerValue: `Machine learning is a transformative branch of artificial
    intelligence that empowers computers to learn and improve from
    experience, without being explicitly programmed. It enables
    systems to identify patterns, make predictions, and solve
    complex problems by analyzing vast amounts of data. At its
    core, machine learning revolves around the concept of
    algorithms that iteratively learn from data, refining their
    performance over time. This learning process involves the
    extraction of meaningful insights from data, often enabling
    machines to outperform traditional rule-based systems in tasks
    like image and speech recognition, recommendation systems,
    medical diagnosis, and autonomous driving. Supervised learning
    involves training models on labeled data, while unsupervised
    learning uncovers inherent patterns in unlabeled data.
    Reinforcement learning guides machines through trial and error
    interactions to optimize decisions. As the field advances,
    techniques like deep learning, a subset of machine learning,
    have gained prominence due to their capability to handle
    intricate, high-dimensional data. However, challenges remain,
    such as interpretability, fairness, and ethical concerns,
    underscoring the need for responsible development and
    deployment of machine learning technologies across various
    domains.`,
    },
    {
      tabName: "Statistics",
      tabValue: "statistics",
      tabContainerValue: `Statistics is a fundamental branch of mathematics that
    involves the collection, analysis, interpretation, and
    presentation of data. Its primary goal is to extract
    meaningful insights and draw reliable conclusions from raw
    information, making it an essential tool in various fields,
    from science and economics to social research and beyond.
    Statistics provides methodologies to summarize and describe
    data through measures like mean, median, and standard
    deviation, enabling a better understanding of central
    tendencies and variability. It also offers techniques for data
    visualization, such as histograms, scatter plots, and box
    plots, which aid in presenting information in a comprehensible
    manner. Moreover, statistical inference plays a critical role
    in drawing conclusions about populations based on samples,
    offering methods like hypothesis testing and confidence
    intervals to quantify the uncertainty associated with these
    conclusions. With the advent of technology, statistics has
    become even more potent, allowing for the analysis of
    increasingly large and complex datasets. A solid understanding
    of statistical concepts is crucial not only for researchers
    and analysts but also for informed decision-making in everyday
    life, as it empowers individuals to critically assess
    information, evaluate claims, and make well-founded judgments
    in an increasingly data-driven world.`,
    },
  ];

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

  let tagArray = [...statsTags, ...mlTags];
  tagArray = tagArray.sort();

  return (
    <>
      <div className={classes["outline-page"]}>
        <PageHeader />
        <div className={classes["know-more-section"] + " " + "py-md-5 py-sm-3"}>
          <div className="container px-lg-3 px-md-2 px-sm-0">
            <div className="row mx-0">
              <h1 className="fw-600 f-60 mb-2">WelCome To</h1>
              <h1 className="fw-400 f-50 mb-3">Community</h1>
            </div>
            <div className="row mx-0 d-flex mx-0 flex-row mt-1 mb-0">
              <h4>Learn , </h4>
              <h4>Grow , </h4>
              <h4>Distribute </h4>
            </div>
            <div className="row mx-0 d-flex mx-0 flex-row my-0">
              <p className="mx-0 fw-400 f-16 mb-0">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti, exercitationem.
              </p>
            </div>
            <div className="row mx-0 mt-lg-4 mb-lg-2 my-md-3 ps-2">
              <div className={classes["join-now-btn"]}>
                <span></span> Join Now !
              </div>
            </div>
          </div>
        </div>
        <div className={classes["explore-section"] + " " + "py-md-4 py-sm-2"}>
          <div className="container px-lg-3 px-md-2 px-sm-0">
            <h2>Explore Articles</h2>
            <div className="tab-section">
              <ul>
                {tabContainerArray.map((tab, index) => {
                  return (
                    <>
                      <li
                        className={
                          tab.tabValue === selectedTab
                            ? "active-tab tab"
                            : "tab"
                        }
                        key={tab?.tabValue}
                        onClick={() => setSelectedTab(tab.tabValue)}
                      >
                        {tab?.tabName}
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
            <div className="tab-content">
              {tabContainerArray.map((tab, index) => {
                return (
                  selectedTab === tab.tabValue && <>{tab.tabContainerValue}</>
                );
              })}
            </div>
          </div>
        </div>
        <div className={classes["ml-topic-section"] + " " + "py-md-5 py-sm-3"}>
          <div className="container px-lg-3 px-md-2 px-sm-0">
            <div className="row mx-0">
              <div className="col-md-6 d-flex justify-content-center align-items-start flex-column">
                <h3>Find the right Topic for you</h3>
                <h6>Choose from over these topics</h6>
              </div>
              <div className="col-md-6">
                <div className={classes["topic-section"]}>
                  <ul>
                    {tagArray.map((tag, index) => {
                      return (
                        index < 15 && (
                          <>
                            <li
                              key={tag.tagValue}
                              className={classes["tag"]}
                              onClick={() =>
                                navigate(`${RouteConstants.ExploreTopics}`,{state:tag})
                              }
                            >
                              {tag.tagName}
                            </li>
                          </>
                        )
                      );
                    })}
                    <li
                      className={classes["tag"]}
                      onClick={() =>
                        navigate(`${RouteConstants.ExploreTopics}`,{state:null})
                      }
                    >
                      View More
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultPublicPage;
