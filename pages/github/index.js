/* eslint-disable @next/next/no-img-element */
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "@/components/Layout";
import Github from "@/components/Github";
import styles from "@/styles/Github.module.css";
import { USERNAME } from "@/config/index";

export default function GithubPage({ gitUser, gitRepos }) {
  const router = useRouter();

  // console.log(gitUser, gitRepos);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = gitUser;

  return (
    <>
      <Github
        name={name}
        company={company}
        location={location}
        bio={bio}
        blog={blog}
        login={login}
        html_url={html_url}
        followers={followers}
        following={following}
        public_repos={public_repos}
        public_gists={public_gists}
      />
    </>
  );
}

export async function getStaticProps() {
  const gitUserRes = await fetch(`https://api.github.com/users/${USERNAME}`);
  const gitUser = await gitUserRes.json();

  const gitReposRes = await fetch(
    `https://api.github.com/users/${USERNAME}/repos?per_page=5&sort=created:asc`
  );
  const gitRepos = await gitReposRes.json();

  return {
    props: {
      gitUser,
      gitRepos,
    },
    revalidate: 1,
  };
}
