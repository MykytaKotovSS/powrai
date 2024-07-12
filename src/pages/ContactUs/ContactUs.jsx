import "./ContactUs.scss";
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Button from "components/Button";
import Input from "components/Input/Input";
import TextArea from "components/TextArea";
import emailjs from "emailjs-com";
import Header from "components/Header";
import image from "assets/images/contactus-main.jpg";
import { ReactComponent as Mail } from "assets/icons/mail.svg";
import { ReactComponent as Globe } from "assets/icons/globe.svg";
import { ReactComponent as Home } from "assets/icons/home.svg";
import Footer from "components/Footer";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [submitted, setSubmitted] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send("service_hyygfr3", "template_s8nk3xu", data, "uCovDWgISoVp5NDH1")
      .then(
        (response) => {
          setSubmitted(true);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );

    reset();
  };

  return (
    <main className="contact">
      <article className="main">
        <Header />
        <section className="top container">
          <h1>Get in Touch</h1>
          <div className="contacts">
            <div className="text">
              <div className="element">
                <p>
                  <Mail /> Email
                </p>
                <h3>info@powrai.com</h3>
              </div>
              <div className="element">
                <p>
                  <Globe /> Website
                </p>
                <h3>www.powrai.com</h3>
              </div>
              <div className="element">
                <p>
                  <Home /> Address
                </p>
                <h3>
                  45, RUE DES SCILLAS <br />
                  L-2529 HOWALD, LUXEMBOURG
                </h3>
              </div>
            </div>
            <img src={image} alt="map" />
          </div>
        </section>
      </article>
      <article className="form-container">
        <div className="form-wrapper container">
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <Input
                    label="Name"
                    placeholder="Name"
                    {...field}
                    error={errors.name}
                  />
                )}
              />
            </div>

            <div>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <Input
                    label="Email"
                    placeholder="Email"
                    {...field}
                    error={errors.email}
                  />
                )}
              />
            </div>

            <div>
              <Controller
                name="message"
                control={control}
                defaultValue=""
                rules={{ required: "Message is required" }}
                render={({ field }) => (
                  <TextArea
                    label="Message"
                    placeholder="Message"
                    {...field}
                    error={errors.message}
                  />
                )}
              />
            </div>
            <Button>Submit</Button>
            {submitted && <h3>Your form has been successfully submitted!</h3>}
          </form>
        </div>
      </article>
      <Footer />
    </main>
  );
};

export default ContactUs;
