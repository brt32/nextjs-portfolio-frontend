import axios from "axios";

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = `${baseUrl}topstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = async (storyId) => {
  const result = await axios.get(`${storyUrl + storyId}.json`);
  return result.data;
};

export const getStoryIds = async () => {
  const result = await axios.get(newStoriesUrl);
  return result.data;
};
