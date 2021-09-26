import React, { useEffect, useState } from "react";
import { getStoryIds } from "./HnApi";
import { Story } from "./HnStory";
import styles from "@/styles/Hn.module.css";

export const HnContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <div>
      <h1 className={styles.maintitle}>Hacker News Stories</h1>
      {storyIds.slice(0, 10).map((storyId) => (
        <Story key={storyId} storyId={storyId} />
      ))}
    </div>
  );
};
