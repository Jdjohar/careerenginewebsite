import { Helmet } from 'react-helmet'

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Career Engine - Get in Touch for Career Development</title>
        <meta name="description" content="Contact Career Engine for inquiries about our courses, internships, and career development opportunities. Reach out to us today!" />
        <meta name="keywords" content="contact career engine, career development, course inquiries, internship opportunities" />
      </Helmet>
      <main>
        <h1>Contact Us</h1>
        <section className="contact-info">
          <div>
            <h2>Call Anytime</h2>
            <p>90 416 19 321</p>
          </div>
          <div>
            <h2>Send Email</h2>
            <p>Info@careerengine.in</p>
          </div>
          <div>
            <h2>Location</h2>
            <p>Near Maan Chonwk, Chak Road, Sri Muktsar Sahib (152026), Punjab, India</p>
          </div>
        </section>
        <section className="contact-form">
          <form>
            <input type="text" name="firstName" placeholder="First Name *" required />
            <input type="email" name="email" placeholder="Email Address *" required />
            <input type="tel" name="phone" placeholder="Phone Number" />
            <textarea name="message" placeholder="Enter your message..." required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
        <section className="map">
          <h2>Career Engine Computer Center</h2>
          <p>Chak Road, near Maan Chowk, Sarngpusa Mohalla, Sri Muktsar Sahib, Muktsar Rural, Punjab 152026</p>
          <div className="google-map">
            {/* Insert Google Maps iframe or component here */}
          </div>
          <div className="rating">
            <p>5.0 ★★★★★ 18 reviews</p>
          </div>
        </section>
      </main>
    </>
  )
}

export default Contact