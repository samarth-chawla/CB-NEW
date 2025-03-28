import Header from "../components/Header";
import Footer from "../components/Footer";
import PageWrapper from "../components/PageWrapper";
import styles from "./contact.module.css";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <PageWrapper>
      <Header />
      <div className={styles.contactContainer}>
        <h2 className={styles.heading}>Contact Us</h2>
        <p className={styles.subHeading}>
          Stay connected with us through social media or join our WhatsApp support group.
        </p>

        <form action="https://formspree.io/f/xrbplqow" method="POST" className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows={4} required></textarea>
          </div>

          <button type="submit" className={styles.sendButton}>Send Message</button>
        </form>

        <a
          href="https://chat.whatsapp.com/Da2ABvAUxjZ7Dn7sGvVGOT"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappButton}
          aria-label="Join our WhatsApp support group"
        >
          <FaWhatsapp className={styles.whatsappIcon} /> Join Our WhatsApp Support Group 🚀
        </a>
      </div>
      <Footer />
    </PageWrapper>
  );
};

export default Contact;
