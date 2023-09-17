import styles from "./Contact.module.css";

function Contact() {
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <section className={styles.contact} id="contact">
      <div className="contact-header">
        <h2>Contact</h2>
      </div>
      <hr />

      <form
        action={"https://formspree.io/f/xrgwlpzz"}
        method={"post"}
        onSubmit={handlesubmit}>
        <div className={styles["form-group"]}>
          <div className={styles["left-form"]}>
            <div className="form-name">
              <label htmlFor="name">Name</label>
              <br />
              <input
                type="text"
                name="Name"
                id="name"
                // value={name}
                required
                placeholder="john Doe"
              />
            </div>
            <div className="form-email">
              <label htmlFor="Email">Email</label>
              <br />
              <input
                type="email"
                name="Email"
                id="email"
                // value={email}
                placeholder="johndoe@gmail.com"
                required
              />
            </div>
          </div>

          <div className={styles["right-form"]}>
            <div className="form-message">
              <label htmlFor="message">Your Message</label> <br />
              <textarea
                name="Message"
                id="message"
                // value={message}
                placeholder="Enter your Message here"
                required></textarea>
            </div>
          </div>
        </div>

        <button type="submit" className={styles["submit-btn"]}>
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
