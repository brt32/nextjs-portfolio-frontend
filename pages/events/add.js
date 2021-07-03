import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import styles from "@/styles/Form.module.css";

export default function AddEventPage() {
  const [values, setValues] = useState({
    title: "",
    jobTitle: "",
    mainTechnologies: "",
    difficultyLevel: "",
    description: "",
    herokuDemoWebsite: "",
    githubSourceCode: "",
    startDate: "",
    endDate: "",
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    const hasEmptyFields = Object.values(values).some(
      (element) => element === ""
    );
    if (hasEmptyFields) {
      toast.error("Please fill in all fields");
    }
    const res = await fetch(`${API_URL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    console.log(res);
    if (!res.ok) {
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

  return (
    <Layout title="Add New Event">
      <Link href="/events">Go Back</Link>
      <h1>Add Event</h1>
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
              value={values.startDate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="endDate">Project Ended Date </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={values.endDate}
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
        <input type="submit" value="Add Event" className="btn-secondary" />
      </form>
    </Layout>
  );
}
