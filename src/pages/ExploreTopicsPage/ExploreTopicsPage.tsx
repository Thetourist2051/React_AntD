import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import classes from "./ExploreTopicsPage.module.scss";
import { useLocation } from "react-router-dom";
import { TagArray } from "../../assests/data/TagArray";

interface tagProps {
  tagName: string;
  tagValue: string;
}

const ExploreTopicsPage = () => {
  const location = useLocation();
  console.log("location", location);
  let statsTags = TagArray.statsTags;
  let mlTags = TagArray.mlTags;
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
            <div className={classes["topic-section"]+ " "+ "p-0"}>
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

      {selectedTag?.tagValue && (
        <div
          className={classes["selected-tag-section"] + " " + "py-md-4 py-sm-2"}
        >
          <div className="container px-lg-3 px-md-2 px-sm-0">
            <h5 className="mb-3">Selected tag : {selectedTag?.tagName}</h5>
            {selectedTag?.tagValue === "central-limit-theorem" && (
              <>
                <div className="card card-body">
                  {selectedTag?.tagName} Some placeholder content for the
                  collapse component. This panel is hidden by default but
                  revealed when the user activates the relevant trigger.
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ExploreTopicsPage;
