import "./Contact.css";

function Contact() {
  return (
    <section className='contact'>
      <div className='contact-header'>
        <h2>Contact</h2>
      </div>
      <hr />

      <form>
        <div className='form-group'>
          <div className='left-form'>
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
              />
            </div>
          </div>

          <div className='right-form'>
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

        <button type='submit' className='submit-btn'>
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
