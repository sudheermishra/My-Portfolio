import styles from "./Contact.module.css";

function Contact() {
  return (
    <section className={styles.contact} id='contact'>
      <div className='contact-header'>
        <h2>Contact</h2>
      </div>
      <hr />

      <form>
        <div className={styles["form-group"]}>
          <div className={styles["left-form"]}>
            <div className='form-name'>
              <label for='name'>Name</label>
              <br />
              <input type='text' name='name' id='name' placeholder='john Doe' />
            </div>
            <div className='form-email'>
              <label for='Email'>Email</label>
              <br />
              <input
                type='email'
                name='email'
                id='email'
                placeholder='johndoe@gmail.com'
                required
              />
            </div>
          </div>

          <div className={styles["right-form"]}>
            <div className='form-message'>
              <label for='message'>Your Message</label> <br />
              <textarea
                name='message'
                id='message'
                placeholder='Enter your Message here'
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
