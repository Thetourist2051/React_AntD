import React from "react";
import classes from "./MachineLearningModel.module.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useNavigate } from "react-router-dom";
import { RouteConstants } from "../../constants/RouteConstant";

const MachineLearningModel = () => {
  const navigate = useNavigate()
  return (
    <>
      <PageHeader />
      <div
        className={classes["ml-intro"] + " py-lg-4 py-md-3 py-3 alt-section"}
      >
        <div className="container px-lg-3 px-md-2 px-sm-0 px-sm-0">
          <div className="row mx-0">
            <div className="col-md-12 mb-lg-4 mb-md-3 mb-3">
              <h5>
                What is <span className="bold-span">Machine Learning </span> ?
              </h5>
              <p>
                <span className="bold-span">Machine learning</span> is a subset
                of artificial intelligence where computer systems learn and make
                predictions from data without explicit programming. It involves
                algorithms and statistical models to recognize patterns,
                allowing machines to improve performance on tasks such as image
                recognition, language processing, and decision-making through
                continuous learning from data.
              </p>

              <h5>Real-World Applications:</h5>
              <ul>
                <li>
                  Healthcare: Predictive diagnosis and treatment
                  recommendations.
                </li>
                <li>Finance: Fraud detection, stock market analysis.</li>
                <li>E-commerce: Personalized product recommendations.</li>
                <li>
                  Transportation: Autonomous vehicles and route optimization.
                </li>
                <li>
                  Natural Language Processing (NLP): Language translation,
                  chatbots.
                </li>
                <li>
                  Image and Video Analysis: Object recognition, facial
                  recognition.
                </li>
              </ul>
              <p>
                These are just a few examples of how machine learning is
                transforming industries and improving the quality of life.
                Machine learning models analyze vast amounts of data, make
                predictions, and automate tasks that were once time-consuming or
                impossible to do accurately.
              </p>

              <h5>Challenges and Ethical Considerations:</h5>
              <p className="mb-0">
                While machine learning offers immense benefits, it also presents
                challenges and ethical considerations. Issues like bias in
                algorithms, data privacy, and the potential for job displacement
                need to be addressed as the technology continues to advance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          classes["ml-work-flow"] + " " + "section py-lg-5 py-md-4 py-4"
        }
      >
        <div className="container px-lg-3 px-md-2 px-sm-0 px-sm-0">
          <div className="row mx-0">
            <div className="col-md-12">
              <h5>How a machine learning model works?</h5>
              <p>
                A machine learning model works by analyzing data, identifying
                patterns, and making predictions or decisions. It involves data
                collection, preprocessing, feature extraction, model selection,
                training on labeled data, evaluation, and prediction on new
                data. The model continuously learns and adapts to improve its
                accuracy and effectiveness over time.
              </p>
            </div>
            <div className="col-md-12">
              <div className={classes["ml-diagram"]}>
                <div
                  className={
                    classes["shape"] + " " + classes["data-collection"]
                  }
                >
                  <span className={classes["flow-name"]}>
                    1.Data Collection
                  </span>{" "}
                </div>
                <div className={classes["arrow"]}>→</div>
                <div
                  className={
                    classes["shape"] + " " + classes["data-preprocessing"]
                  }
                >
                  <span className={classes["flow-name"]}>
                    2.Data Preprocessing
                  </span>{" "}
                </div>
                <div className={classes["arrow"]}>→</div>
                <div
                  className={
                    classes["shape"] + " " + classes["feature-extraction"]
                  }
                >
                  <span className={classes["flow-name"]}>
                    3.Feature Extraction
                  </span>{" "}
                </div>
                <div className={classes["arrow"]}>→</div>
                <div
                  className={
                    classes["shape"] + " " + classes["model-selection"]
                  }
                >
                  <span className={classes["flow-name"]}>
                    4.Model Selection
                  </span>{" "}
                </div>
                <div className={classes["arrow"]}>→</div>
                <div
                  className={
                    classes["shape"] + " " + classes["model-evaluation"]
                  }
                >
                  <span className={classes["flow-name"]}>5.Model Training</span>{" "}
                </div>
                <div className={classes["arrow"]}>→</div>
                <div
                  className={classes["shape"] + " " + classes["model-training"]}
                >
                  <span className={classes["flow-name"]}>
                    6.Model Evaluation
                  </span>{" "}
                </div>
                <div className={classes["arrow"]}>→</div>
                <div
                  className={
                    classes["shape"] + " " + classes["model-prediction"]
                  }
                >
                  <span className={classes["flow-name"]}>
                    7.Model Prediction
                  </span>{" "}
                </div>
              </div>
              <p className="mt-lg-4 mt-md-3 my-2">
                Data flows through these stages, and the model makes predictions
                based on patterns it has learned.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          classes["ml-model-classification"] +
          " " +
          "alt-section py-lg-5 py-md-4 py-4"
        }
      >
        <div className="container px-lg-3 px-md-2 px-sm-0 px-sm-0">
          <h5>Classification of Machine Learning Algorithms</h5>

          <section>
            <h6>1. Supervised Learning</h6>
            <p>
              Supervised learning algorithms learn from labeled training data,
              where the algorithm is provided with input-output pairs. The goal
              is to learn a mapping function that can predict the output for
              new, unseen inputs accurately. Common supervised learning
              algorithms include:
            </p>
            <ul>
              <li>Linear Regression</li>
              <li>Logistic Regression</li>
              <li>Decision Trees</li>
              <li>Random Forest</li>
              <li>Support Vector Machines (SVM)</li>
              <li>
                <span className="clickable-text" onClick={()=>navigate(RouteConstants.KNN)}>Nearest Neighbors (K-NN)</span>: Effective for recommendation systems
                and pattern recognition.
              </li>
            </ul>
          </section>

          <section>
            <h6>2. Unsupervised Learning</h6>
            <p>
              Unsupervised learning algorithms work with unlabeled data, aiming
              to discover patterns, structures, or relationships within the
              data. These algorithms include:
            </p>
            <ul>
              <li>K-Means Clustering</li>
              <li>Hierarchical Clustering</li>
              <li>Principal Component Analysis (PCA)</li>
              <li>Generative Adversarial Networks (GANs)</li>
            </ul>
          </section>

          <section>
            <h6>3. Semi-Supervised Learning</h6>
            <p>
              Semi-supervised learning is a combination of supervised and
              unsupervised learning. It uses both labeled and unlabeled data to
              improve learning accuracy. This approach is useful when obtaining
              labeled data is expensive or time-consuming.
            </p>
          </section>

          <section>
            <h6>4. Reinforcement Learning</h6>
            <p>
              Reinforcement learning involves an agent that learns to make a
              sequence of decisions to maximize a reward signal. It's commonly
              used in applications like game playing, robotics, and autonomous
              systems. Key elements in reinforcement learning include states,
              actions, rewards, and policies.
            </p>
          </section>
          <section>
            <h6>5. Self-Supervised Learning</h6>
            <p>
              Self-supervised learning is a subset of unsupervised learning
              where the algorithm generates labels from the data itself. It's
              becoming popular in natural language processing (NLP) and computer
              vision tasks.
            </p>
          </section>

          <section>
            <h6>6. Deep Learning</h6>
            <p>
              Deep learning is a subset of machine learning that focuses on
              neural networks with many layers (deep neural networks).
              Convolutional Neural Networks (CNNs) are used for image
              processing, Recurrent Neural Networks (RNNs) for sequential data,
              and Transformer models for NLP tasks. Deep learning has achieved
              remarkable success in various fields, including image recognition,
              natural language processing, and autonomous driving.
            </p>
          </section>
          <section>
            <h6>7. Ensemble Methods</h6>
            <p>
              Ensemble methods combine multiple machine learning models to
              improve predictive performance. Common ensemble techniques include
              bagging (e.g., Random Forest) and boosting (e.g., AdaBoost and
              Gradient Boosting).
            </p>
          </section>

          <section>
            <h6>8. Other Specialized Algorithms</h6>
            <p>
              There are numerous specialized machine learning algorithms for
              specific tasks, such as:
            </p>
            <ul>
              <li>
                Naive Bayes: Used for text classification and spam detection.
              </li>
              <li>Anomaly Detection: Identifying unusual patterns in data.</li>
              <li>
                Neural Style Transfer: Transforming images with the artistic
                style of another image.
              </li>
            </ul>
          </section>
        </div>
      </div>

    </>
  );
};

export default MachineLearningModel;
