import styles from "./Contact.module.css";
import { useState } from "react";

function Contact() {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [message, SetMessage] = useState("");

  const handlechangename = (e) => {
    SetName(e.target.value);
  };
  const handlechangeemail = (e) => {
    SetEmail(e.target.value);
  };
  const handlechangemesaage = (e) => {
    SetMessage(e.target.value);
  };

  return (
    <section className={styles.contact} id='contact'>
      <div className='contact-header'>
        <h2>Contact</h2>
      </div>
      <hr />

      <form action={"https://formspree.io/f/meqbzrew"} method={"POST"}>
        <div className={styles["form-group"]}>
          <div className={styles["left-form"]}>
            <div className='form-name'>
              <label htmlFor='name'>Name</label>
              <br />
              <input
                type='text'
                name='name'
                id='name'
                value={name}
                required
                placeholder='john Doe'
                onChange={handlechangename}
              />
            </div>
            <div className='form-email'>
              <label htmlFor='Email'>Email</label>
              <br />
              <input
                type='email'
                name='email'
                id='email'
                value={email}
                onChange={handlechangeemail}
                placeholder='johndoe@gmail.com'
                required
              />
            </div>
          </div>
          <div className={styles["right-form"]}>
            <div className='form-message'>
              <label htmlFor='message'>Your Message</label> <br />
              <textarea
                name='message'
                id='message'
                onChange={handlechangemesaage}
                value={message}
                placeholder='Enter your Message here'
                required
              ></textarea>
            </div>
          </div>
        </div>
        <button type='submit' className={styles["submit-btn"]}>
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
