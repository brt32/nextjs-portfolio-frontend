/* eslint-disable @next/next/no-img-element */
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "@/components/Layout";
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
    <Layout>
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt=""
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p className={styles.location}>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <>
              <h3>Bio</h3>
              <p>{bio}</p>
            </>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <div className={styles.info}>
            <ul>
              <li>
                {login && (
                  <>
                    <strong>Username: </strong> {login}
                  </>
                )}
              </li>

              <li>
                {company && (
                  <>
                    <strong>Company: </strong> {company}
                  </>
                )}
              </li>

              <li>
                {blog && (
                  <>
                    <strong>Website: </strong> {blog}
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card text-center">
        <div className={styles.followers}>Followers: {followers}</div>
        <div className={styles.following}>Following: {following}</div>
        <div className={styles.repos}>Public Repos: {public_repos}</div>
        <div className={styles.gists}>Public Gists: {public_gists}</div>
      </div>
    </Layout>
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
