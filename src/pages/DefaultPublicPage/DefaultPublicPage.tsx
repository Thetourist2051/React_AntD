import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RouteConstants } from "../../constants/RouteConstant";
import classes from "./DefaultPublicPage.module.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import { TagArray } from "../../assests/data/TagArray";
import { TabContainerArray } from "../../assests/data/TabContainerArray";
import { ImageUrl } from "../../constants/ImageUrl";
import PopupComponent from "../../components/PopupComponent/PopupComponent";

const DefaultPublicPage = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<string>("ml-blog-lane");
  const tabContainerArray = TabContainerArray.tabContainerArray;
  let statsTags = TagArray.statsTags;
  let mlTags = TagArray.mlTags;
  let tagArray = [...statsTags, ...mlTags];
  const [visible, setVisible] = useState<boolean>(false);


  return (
    <>
      <div className={classes["outline-page"]}>
        <PageHeader />
        <div className={classes["scrollable-section"]}>

        <div
          className={
            classes["know-more-section"] + " " + "py-lg-5 py-md-4 py-5"
          }
        >
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
        <div
          className={classes["explore-section"] + " " + "py-lg-5 py-md-4 py-5"}
        >
          <div className="container px-lg-3 px-md-2 px-sm-0">
            <h2>Explore Ideas</h2>
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
                        key={index}
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
                  selectedTab === tab.tabValue && (
                    <div key={index}>{tab.tabContainerValue}</div>
                  )
                );
              })}
            </div>
          </div>
        </div>
        <div
          className={classes["ml-topic-section"] + " " + "py-lg-5 py-md-4 py-5"}
        >
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
                              key={index}
                              className={classes["tag"]}
                              onClick={() =>
                                navigate(`${RouteConstants.ExploreTopics}`, {
                                  state: tag,
                                })
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
                        navigate(`${RouteConstants.ExploreTopics}`, {
                          state: null,
                        })
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
        <div className={classes["ml-model-section"] + " py-lg-5 py-md-4 py-5"}>
          <div className="container px-lg-3 px-md-2 px-sm-0">
            <div className="row mx-0">
              <div className="col-md-6">
                <img
                  src={ImageUrl.MachineLearningModelImg}
                  alt="Machine Learning Model"
                />
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-start flex-column">
                <h2>Unlock the Power of Machine Learning</h2>
                <p>
                  Explore the world of Machine Learning with our easy-to-follow
                  tutorials and practical examples. Master the art of
                  data-driven decision-making.
                </p>
                <button
                  className={classes["dive-in-btn"]}
                  onClick={() =>
                    navigate(RouteConstants.MachineLearningModels, {
                      state: null,
                    })
                  }
                >
                  <span className={classes["label"]}>Dive In</span>
                  <span className={classes["icon"]}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
                  
        <div className="py-lg-5">
          <button className="btn btn-primary" onClick={() => setVisible(true)}>
            Open popup
          </button>
        </div>
        </div>
      </div>
      <PopupComponent
            popupTitle="Common Popup"
            size={'md'}
            visible={visible}
            setVisible={setVisible}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            debitis.
            <>
              <div className="row">
                <div className="col-md-6">
                  <div className={classes["ctm-class"] + " f-12"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit, esse.
                  </div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
                  corporis enim nihil! Numquam ducimus laboriosam, reprehenderit
                  tenetur dolor reiciendis voluptate deleniti accusamus vero
                  aperiam nobis? Ipsum totam quam libero harum eligendi esse
                  beatae officiis at sapiente hic blanditiis distinctio
                  consequuntur labore minima quibusdam atque, nisi error enim
                  molestiae optio adipisci fuga magni tempore suscipit.
                  Dignissimos, ea ipsa modi autem provident facere unde
                  voluptate aspernatur repudiandae fugit harum, voluptates
                  maiores pariatur quia asperiores magnam explicabo vitae?
                  Voluptate, modi! Ipsam sequi sed sapiente culpa neque sunt,
                  reprehenderit corporis cum accusamus recusandae minima quia,
                  nam perferendis temporibus iusto veniam voluptatem optio eius
                  quasi.
                </div>
                <div className="col-6">
                <button className="btn btn-danger">Check Btn</button>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, distinctio officiis corporis harum molestias perferendis consectetur sit assumenda magni alias, autem sed unde suscipit commodi architecto. Sapiente tempore, amet quas laboriosam atque exercitationem harum deserunt nemo pariatur ipsum nihil iste neque perferendis earum eligendi autem nobis voluptate, ipsa aspernatur voluptatibus tenetur doloribus! Repellendus accusantium in, porro libero, alias iste assumenda eaque, laborum officia unde blanditiis explicabo molestias? Sit nisi, recusandae dolores ullam obcaecati autem ipsa similique sunt iste, voluptates corporis, fugiat molestias. Quam distinctio ab doloribus sint nobis voluptatibus optio temporibus mollitia voluptatem quasi ea similique, expedita culpa excepturi minus? Tempora rem fugit harum quidem aut eum. Voluptatibus consectetur excepturi corporis nulla. Omnis iusto incidunt qui at commodi dignissimos inventore ex eveniet consectetur voluptatibus dolore quis ipsam quidem consequuntur fugiat molestias, cumque modi ut facere ipsum id labore repellendus accusantium eos? Debitis quia, aliquam itaque ex iusto magni optio omnis non impedit nobis eius voluptatibus odit veritatis incidunt saepe ipsum fugit adipisci molestiae ullam quos totam laboriosam eaque voluptas ratione. Quos perspiciatis excepturi reprehenderit, nobis ducimus temporibus corrupti fugit nemo eveniet illo reiciendis quod nulla numquam nihil et accusamus facilis error omnis totam? Voluptatem laboriosam doloremque quidem aliquid, impedit totam.
                </div>
              </div>
            </>
          </PopupComponent>
    </>
  );
};

export default DefaultPublicPage;