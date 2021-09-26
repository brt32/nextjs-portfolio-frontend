/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { getStory } from "./HnApi";
import { mapTime } from "../utils/mapTime";
import styles from "@/styles/Hn.module.css";

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, []);
  console.log(story);
  return story && story.url ? (
    <div className={styles.event}>
      <div className={styles.title}>
        <a href={story.url}>
          <h5 className="mb-1">{story.title}</h5>
        </a>
        <small>{mapTime(story.time)} ago</small>
      </div>
      <small>
        by {story.by} | <strong>{story.score} points</strong>
      </small>
    </div>
  ) : null;
};
