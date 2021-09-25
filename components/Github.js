/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Layout from "@/components/Layout";
import styles from "@/styles/Github.module.css";

const Github = ({
  name,
  company,
  location,
  bio,
  blog,
  login,
  html_url,
  followers,
  following,
  public_repos,
  public_gists,
}) => {
  return (
    <Layout>
      <div className="card grid-2">
        <div className="all-center">
          <Image
            src="https://res.cloudinary.com/dmwslghlx/image/upload/v1629563971/Zdjecie_Dowodowe_b45a5886d1.jpg"
            className="round-img"
            alt=""
            width={150}
            height={200}
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
};

export default Github;
