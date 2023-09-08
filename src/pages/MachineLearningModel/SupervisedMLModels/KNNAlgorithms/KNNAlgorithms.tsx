import React from "react";
import PageHeader from "../../../../components/PageHeader/PageHeader";
import classes from "./KNNAlgorithms.module.scss";
import { ImageUrl } from "../../../../constants/ImageUrl";

const kNNAlgorithms = () => {
  return (
    <>
      <PageHeader />
      <div
        className={classes["knn-intro"] + " " + "section py-lg-4 py-md-3 py-4"}
      >
        <div className="container px-lg-3 px-md-2 px-sm-0 px-sm-0">
          <div className="row mx-0">
            <div className="col-md-12">
              <h5>Introduction to k-Nearest Neighbors (k-NN)</h5>
              <p>
                If you're curious about how computers can make decisions based
                on the "wisdom of the crowd" and identify patterns in data,
                you've come to the right place.We'll dive into the fascinating
                world of the k-Nearest Neighbors (k-NN) algorithm—a fundamental
                tool in the field of machine learning k-NN is all about finding
                similarities in data points to make predictions or
                classifications, and it's surprisingly intuitive.
              </p>
              <p>
                In the following pages, we'll explore the inner workings of
                k-NN, from its basic concept to practical implementation.
                Whether you're a beginner looking to grasp the fundamentals or
                an experienced practitioner seeking a refresher, we've got you
                covered.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          classes["knn-basic-concept"] +
          " " +
          "alt-section py-lg-4 py-md-3 py-4"
        }
      >
        <div className="container px-lg-3 px-md-2 px-sm-0 px-sm-0">
          <div className="row mx-0 px-lg-2 px-md-2 px-0">
            <div className="col-md-12 px-sm-0">
              <h5>Basic Concept :</h5>
              <p className="bs-body-color">
                The basic concept of the k-Nearest Neighbors (k-NN) algorithm is
                to classify or make predictions for a data point based on the
                majority class or average value of its k closest neighboring
                data points in a feature space. It assumes that similar data
                points tend to have similar labels or values. Let's have a look
                at the following diagram...
              </p>
            </div>
            <div className="col-md-6 ps-md-0 px-0 d-flex flex-column justify-content-around">
              <p>
                In this diagram, we have plotted the training data with the
                associated class levels. The blue squares represent one
                class(let's consider the classname as class-1), while the red
                triangles represent another class(class-2). Additionally, you'll
                notice solid circles denoting a k value of 3 and dotted circles
                representing a k value of 5. Now, our task is to determine the
                class level for the circle data point.
              </p>
              <p>
                According to the k-Nearest Neighbors (k-NN) algorithm, we will
                identify the k{" "}
                <span className="highlight-span"> nearest data points </span> to
                the circle. If, for example, we set k to 3, we would consider
                the three{" "}
                <span className="highlight-span">
                  {" "}
                  closest neighboring data points
                </span>
                . By determining the majority class among these neighbors, we
                can assign the circle data point to the most prevalent class.
                This process allows us to make predictions or classifications
                based on the collective knowledge of nearby data points, making
                k-NN a valuable tool in machine learning.
              </p>
            </div>
            <div className="col-md-6 perfect-center">
              <img src={ImageUrl.KNN} alt="" className={classes["knn-img"]} />
            </div>
            <div className="col-md-12 px-0 mt-3">
              <div className="row mx-0">
                <div className="col-6 ps-0">
                  <p>
                    For k=3, we consider the three nearest neighbors: (1) blue
                    square and (2) red triangles. The majority class among these
                    neighbors is class-1.
                  </p>
                </div>
                <div className="col-6 ps-0">
                  <p>
                    For k=5, we expand our consideration to the five nearest
                    neighbors: (3) blue squares and (2) red triangles. In this
                    case, the majority class among these neighbors is class-2.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          classes["knn-hyperparameter"] + " " + "section py-lg-4 py-md-3 py-4"
        }
      >
        <div className="container px-lg-3 px-md-2 px-sm-0 px-sm-0">
          <div className="row mx-0">
            <div className="col-md-12">
              <h5>k-NN Hyper-Parameter :</h5>
              <p className="bs-body-color mb-lg-3 mb-md-2">
                In the world of machine learning, models often come with a set
                of configuration settings that significantly impact their
                performance and behavior. These configuration settings are known
                as hyperparameters.
              </p>
              <ol>
                <li>
                  <h6>k-value:</h6>
                  <p>
                    In k-Nearest Neighbors (k-NN), the "k" value is a pivotal
                    hyperparameter. It determines the number of nearby data
                    points the algorithm should consult when making predictions
                    or classifications for a new, unseen data point.
                  </p>
                  <p>
                    The choice of "k" has a profound impact on the algorithm's
                    behavior:
                    <ul>
                      <li>
                        <strong>Smaller k Values:</strong> A smaller "k" (e.g.,
                        k=1 or k=3) results in a more sensitive model. It can
                        capture fine-grained patterns in the data, which may
                        lead to high variability in predictions and potential
                        overfitting to noise.
                      </li>
                      <li>
                        <strong>Larger k Values:</strong> Conversely, larger "k"
                        values (e.g., k=10 or k=20) yield smoother and more
                        stable predictions. They tend to provide a more robust
                        and generalized model by averaging the influence of more
                        data points.
                      </li>
                    </ul>
                  </p>
                  <p>
                    Selecting the right "k" value is a critical decision in
                    k-NN. It involves a trade-off between model sensitivity and
                    stability. The optimal "k" value often depends on the
                    specific dataset and problem you're working on, and it may
                    require experimentation and cross-validation to find the
                    best setting.
                  </p>
                  <p>
                    In the subsequent sections, we'll explore the effects of
                    different "k" values on k-NN's performance and provide
                    guidance on how to choose the most suitable "k" for your
                    machine learning tasks.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default kNNAlgorithms;
