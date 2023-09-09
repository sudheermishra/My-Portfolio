import "./Footer.css";

function Footer() {
  return (
    <form>
      <div className="from-header">
        <h1>Contact</h1>
        <hr />

        <div class="form-group-name-email">
          <div>
            <label for="name">Name</label>
            <br />
            <input type="text" name="name" id="name" placeholder="john Doe" />
          </div>
          <br />
          <div>
            <label for="email">Email</label> <br />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@example.com"
            />
          </div>
        </div>

        <div class="form-group-message-btn">
          <label for="message">Your Message</label> <br />
          <textarea name="message" id="message"></textarea> <br />
          <button className="form-group-btn">Submit</button>
        </div>
      </div>
    </form>
  );
}

export default Footer;
