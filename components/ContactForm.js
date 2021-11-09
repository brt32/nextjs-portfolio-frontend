import React, { Fragment, useState } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "@/styles/Contact.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function ValidateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      name,
      email,
      message,
    };

    const isNameValid = name !== "";
    const isMessageValid = message !== "";

    if (!isNameValid) {
      toast.error("Name is not valid, please try again.");
      setName("");
    }
    if (!ValidateEmail(email)) {
      toast.error("Email is not valid, please try again.");
    }
    if (!isMessageValid) {
      toast.error("Message is not valid, please try again.");
    }

    if (ValidateEmail && isNameValid & isMessageValid) {
      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.status === 200) {
          toast.success("Email Sent!");
          setName("");
          setEmail("");
          setMessage("");
        } else {
          toast.error("Error");
        }
      });
    }
  };
  return (
    <Fragment>
      <ToastContainer />
      <Form>
        <h1 className={styles.title}>Contact Me</h1>
        <p className={styles.paragraph}>
          If you want to ask me for something, send me an email...
        </p>
        <Form.Group
          className="mb-3"
          name="name"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="name"
            placeholder="Enter your name..."
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          name="email"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          name="message"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Message</Form.Label>
          <Form.Control
            type="text"
            placeholder="Write a message..."
            as="textarea"
            rows={4}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            name="message"
          />
        </Form.Group>

        <Button
          variant="secondary"
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Send
        </Button>
      </Form>
    </Fragment>
  );
};
export default ContactForm;
