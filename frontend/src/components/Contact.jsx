import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Sending contact form:", formData);

    setIsSending(true);
    setStatus("Sending...");

    try {
      const response = await fetch(
        "http://127.0.0.1:8001/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      console.log("Backend response status:", response.status);

      const data = await response.json();

      console.log("Backend response:", data);

      if (response.ok && data.status === "success") {
        setStatus("Your message has been received!");

        // Clear form
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        // Hide success message after 5 seconds
        setTimeout(() => {
          setStatus("");
        }, 5000);
      } else {
        setStatus(
          data.message || "Something went wrong. Please try again."
        );

        setTimeout(() => {
          setStatus("");
        }, 5000);
      }
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus(
        "Unable to connect to the server. Please try again."
      );

      setTimeout(() => {
        setStatus("");
      }, 5000);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">

        <p className="section-subtitle">
          Get In Touch
        </p>

        <h2>Contact Me</h2>

        <p className="contact-intro">
          Have a question, project idea, or opportunity?
          Feel free to get in touch with me.
        </p>

        <div className="contact-container">

          {/* Contact Information */}
          <div className="contact-info">

            <h3>Let's Connect</h3>

            <p>
              I'm always interested in discussing new
              opportunities, projects, and ideas.
            </p>

            <div className="contact-item">
              <strong>Email</strong>
              <p>varshadubbaka@gmail.com</p>
            </div>

            <div className="contact-item">
              <strong>Location</strong>
              <p>India</p>
            </div>

          </div>

          {/* Contact Form */}
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {/* Name */}
            <div className="form-group">
              <label htmlFor="name">
                Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message */}
            <div className="form-group">
              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="contact-btn"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {/* Status */}
            {status && (
              <p className="contact-status">
                {status}
              </p>
            )}

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;