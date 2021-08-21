import { parseCookies } from "@/helpers/index";
import moment from "moment";
import { FaImages } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import ImageUpload from "@/components/ImageUpload";
import { API_URL } from "@/config/index";
import styles from "@/styles/Form.module.css";

export default function EditEventPage({ evt, token }) {
  const [values, setValues] = useState({
    title: evt.title,
    jobTitle: evt.jobTitle,
    mainTechnologies: evt.mainTechnologies,
    applicationType: evt.applicationType,
    database: evt.database,
    difficultyLevel: evt.difficultyLevel,
    description: evt.description,
    herokuDemoWebsite: evt.herokuDemoWebsite,
    githubSourceCode: evt.githubSourceCode,
    startDate: evt.startDate,
    endDate: evt.endDate,
  });

  const [imagePreview, setImagePreview] = useState(
    evt.image ? evt.image.formats.thumbnail.url : null
  );

  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasEmptyFields = Object.values(values).some(
      (element) => element === ""
    );
    if (hasEmptyFields) {
      toast.error("Please fill in all fields");
    }
    const res = await fetch(`${API_URL}/events/${evt.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });
    console.log(res);
    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error("Unauthorized");
        return;
      }
      toast.error("Something went wrong");
    } else {
      const evt = await res.json();
      router.push(`/events/${evt.slug}`);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const imageUploaded = async (e) => {
    const res = await fetch(`${API_URL}/events/${evt.id}`);
    const data = await res.json();
    setImagePreview(data.image.formats.thumbnail.url);
    setShowModal(false);
  };

  return (
    <Layout title="Edit Event">
      <Link href="/events">Go Back</Link>
      <h1>Edit Event</h1>
      <ToastContainer />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div>
            <label htmlFor="title">Project Title </label>
            <input
              type="text"
              id="title"
              name="title"
              value={values.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="jobTitle">Job Title </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={values.jobTitle}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="mainTechnologies">Main Technologies </label>
            <input
              type="text"
              id="mainTechnologies"
              name="mainTechnologies"
              value={values.mainTechnologies}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="applicationType">Application Type </label>
            <input
              type="text"
              id="applicationType"
              name="applicationType"
              value={values.applicationType}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="database">Database </label>
            <input
              type="text"
              id="database"
              name="database"
              value={values.database}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="difficultyLevel">Difficulty Level </label>
            <input
              type="text"
              id="difficultyLevel"
              name="difficultyLevel"
              value={values.difficultyLevel}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="herokuDemoWebsite">Heroku Demo Website </label>
            <input
              type="text"
              id="herokuDemoWebsite"
              name="herokuDemoWebsite"
              value={values.herokuDemoWebsite}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="githubSourceCode">GitHub Source Code </label>
            <input
              type="text"
              id="githubSourceCode"
              name="githubSourceCode"
              value={values.githubSourceCode}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="startDate">Project Started Date </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={moment(values.startDate).format("yyyy-MM-DD")}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="endDate">Project Ended Date </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={moment(values.endDate).format("yyyy-MM-DD")}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="description">Event Description</label>
          <textarea
            type="text"
            name="description"
            id="description"
            value={values.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <input type="submit" value="Update Event" className="btn-secondary" />
      </form>

      <h2>Project Image</h2>
      {imagePreview ? (
        <Image src={imagePreview} height={100} width={170} alt={evt.image} />
      ) : (
        <div>
          <p>No image uploaded</p>
        </div>
      )}
      <div>
        <button onClick={() => setShowModal(true)} className="btn-secondary">
          <FaImages /> Set Image
        </button>
      </div>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <ImageUpload
          evtId={evt.id}
          imageUploaded={imageUploaded}
          token={token}
        />
      </Modal>
    </Layout>
  );
}

export async function getServerSideProps({ params: { id }, req }) {
  const { token } = parseCookies(req);
  const res = await fetch(`${API_URL}/events/${id}`);
  const evt = await res.json();

  return {
    props: {
      evt,
      token,
    },
  };
}
