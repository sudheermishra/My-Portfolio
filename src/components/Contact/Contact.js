import styles from "./Contact.module.css";
import { useState } from "react";

function Contact() {
<<<<<<< HEAD
=======
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

>>>>>>> c796fe832c7d2d142925770b2ad91bf712b35030
  return (
    <section className={styles.contact} id='contact'>
      <div className='contact-header'>
        <h2>Contact</h2>
      </div>
      <hr />
<<<<<<< HEAD
      <form action={"https://formspree.io/f/meqbgvpv"} method={"post"}>
=======

      <form action={"https://formspree.io/f/meqbzrew"} method={"POST"}>
>>>>>>> c796fe832c7d2d142925770b2ad91bf712b35030
        <div className={styles["form-group"]}>
          <div className={styles["left-form"]}>
            <div className='form-name'>
              <label htmlFor='name'>Name</label>
              <br />
              <input
<<<<<<< HEAD
                type='text'
                name='Name'
                id='name'
                required
                placeholder='john Doe'
=======
                type="text"
                name="name"
                id="name"
                value={name}
                required
                placeholder="john Doe"
                onChange={handlechangename}
>>>>>>> c796fe832c7d2d142925770b2ad91bf712b35030
              />
            </div>
            <div className='form-email'>
              <label htmlFor='Email'>Email</label>
              <br />
              <input
<<<<<<< HEAD
                type='email'
                name='Email'
                id='email'
                placeholder='johndoe@gmail.com'
=======
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handlechangeemail}
                placeholder="johndoe@gmail.com"
>>>>>>> c796fe832c7d2d142925770b2ad91bf712b35030
                required
              />
            </div>
          </div>
          <div className={styles["right-form"]}>
            <div className='form-message'>
              <label htmlFor='message'>Your Message</label> <br />
              <textarea
<<<<<<< HEAD
                name='Message'
                id='message'
                placeholder='Enter your Message here'
                required
              ></textarea>
            </div>
          </div>
        </div>
        <button type='submit' className={styles["submit-btn"]}>
=======
                name="message"
                id="message"
                onChange={handlechangemesaage}
                value={message}
                placeholder="Enter your Message here"
                required></textarea>
            </div>
          </div>
        </div>
        <button type="submit" className={styles["submit-btn"]}>
>>>>>>> c796fe832c7d2d142925770b2ad91bf712b35030
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
