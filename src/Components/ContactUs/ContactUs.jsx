import React from "react";
import { WiStars } from "react-icons/wi";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return; // Prevent multiple submissions while loading
    setLoading(true); // Set loading state to true
    setError(null); // Reset error state
    // Handle form submission logic here
    const form = e.target; // Get the form element
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      setSuccess(null);
      setLoading(false); // Reset loading state
      return;
    }

    emailjs
      .sendForm("service_sz0y7cj", "template_a8o27ov", form, {
        publicKey: "_UAqXaW9Gn-Nsu3lO",
      })
      .then(
        () => {
          console.log("Email sent successfully!");
          setSuccess("Email sent successfully!");
          setError(null); // Reset error state
          setLoading(false); // Reset loading state
          form.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log("Error sending email:", error);
          setError("Error sending email. Please try again later.");
          setSuccess(null); // Reset success state
        }
      );
  };

  return (
    <div className="md:px-12 px-8 py-12 flex flex-wrap items-center justify-between contact">
      {" "}
      <div className="w-full md:w-1/2 md:mb-16 mb-8">
        <h1 className="text-primary text-lg mb-4 tracking-widest">
          Contact Us{" "}
          <span className="absolute">
            <WiStars className="inline text-primary text-6xl" />
          </span>
        </h1>
        <h2 className="text-4xl md:mb-12 mb-8 relative">
          Take the next step. Let’s give your project a go!{" "}
        </h2>
        <div className="flex flex-col gap-1 mb-4">
          <h1 className="text-primary text-lg">Contact Details</h1>
          <p className="text-sm text-zinc-300">Phone: +91-8368747835</p>
          <p className="text-sm text-zinc-300">Email: webifyweb@gmail.com</p>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <h1 className="text-primary">Follow Us</h1>
          <div className="flex items-center gap-2">
            <a
              className="w-6 h-6 bg-primary rounded-full flex items-center justify-center"
              href="https://www.instagram.com/webifywave/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare />
            </a>
            {/* <a
              className="w-6 h-6 bg-primary rounded-full flex items-center justify-center"
              href="/"
            >
              <FaFacebookSquare />
            </a> */}
            {/* <a
              className="w-6 h-6 bg-primary rounded-full flex items-center justify-center"
              href="/"
            >
              <FaTwitterSquare />
            </a> */}
            <a
              className="w-6 h-6 bg-primary rounded-full flex items-center justify-center"
              href="https://www.linkedin.com/company/webifywave/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 w-full">
        <form className="flex flex-col md:p-12 md:pr-0" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-primary text-lg mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="w-full p-4 border border-zinc-300 rounded-lg focus:outline-none focus:border-primary"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-primary text-lg mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full p-4 border border-zinc-300 rounded-lg focus:outline-none focus:border-primary"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-primary text-lg mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="w-full p-4 border border-zinc-300 rounded-lg focus:outline-none focus:border-primary scrollbar-hide"
            />
          </div>
          <button
            className="bg-primary text-white w-full p-4 rounded-lg hover:bg-[#0A959E] transition duration-300 ease-in-out"
            type="submit"
            disabled={loading} // Disable button while loading
          >
            Send
          </button>
          {loading && (
            <div className="text-center mt-4 text-sm text-gray-500">
              Sending...
            </div>
          )}
          {error && (
            <div className="text-red-500 text-sm mt-4 text-center">{error}</div>
          )}
          {success && (
            <div className="text-green-500 text-sm mt-4 text-center">
              {success}
            </div>
          )}

          <div className="text-center mt-4 text-sm text-gray-500">
            We will get back to you as soon as possible.
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
