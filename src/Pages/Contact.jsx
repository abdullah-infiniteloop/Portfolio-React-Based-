import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(false);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [randomWord, setRandomWord] = useState(generateRandomWord());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function generateRandomWord() {
    const words = [
      "humand42",
      "secure9923",
      "verifyMe2",
      "noBot4fsd",
      "Ao3424d",
      "notABot1",
    ];
    return words[Math.floor(Math.random() * words.length)];
  }

  const handleCaptcha = () => {
    if (captchaAnswer.trim().toLowerCase() === randomWord.toLowerCase()) {
      setIsVerified(true);
    } else {
      alert("Incorrect captcha! Try again.");
      setRandomWord(generateRandomWord());
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidName = (name) => /^[A-Za-z\s]+$/.test(name);
  // Simple name validation
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  // Basic email validation
  const isValidMessage = (message) => message.trim().length > 0;
  // Check if message is not empty

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    if (!isValidName(formData.name)) {
      alert("Invalid name! Only letters are allowed.");
      return;
    }
    if (!isValidEmail(formData.email)) {
      alert("Temporary emails are not allowed! Use a real email.");
      return;
    }
    if (!isValidMessage(formData.message)) {
      alert("Message cannot be empty!");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_API_KEY", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(`Error: ${errorData.error || "Unable to send message."}`);
        return;
      }

      alert("Your message has been sent successfully!");

      // Clear the form data and captcha

      setFormData({ name: "", email: "", message: "" });
      setCaptchaAnswer("");
      // Clear captcha answer
      setRandomWord(generateRandomWord());
      // Reset captcha word
      setIsVerified(false);
      // Reset verification state
    } catch (error) {
      alert("Error sending message. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const disableRightClick = (e) => {
      e.preventDefault();
    };

    const disableKeyActions = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && (e.key === "u" || e.key === "s" || e.key === "c"))
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("keydown", disableKeyActions);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", disableKeyActions);
    };
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center p-10 text-gray-900 dark:text-white">
      {!isVerified ? (
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-5">🔍 Human Verification</h2>
          <p className="mb-4">
            To prove you're not a bot, type "{randomWord}" in the box below.
          </p>
          <input
            type="text"
            className="p-3 border rounded-md text-black w-full mb-4"
            placeholder="Enter verification text"
            value={captchaAnswer}
            onChange={(e) => setCaptchaAnswer(e.target.value)}
          />
          <button
            className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            onClick={handleCaptcha}
          >
            Verify ✅
          </button>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-3xl font-bold text-center mb-6">
            📩 Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label className="font-semibold mb-1">👤 Your Name:</label>
            <input
              type="text"
              name="name"
              required
              className="p-3 mb-4 border rounded-md text-black w-full"
              onChange={handleChange}
              autoComplete="off"
            />
            <label className="font-semibold mb-1">📧 Your Email:</label>
            <input
              type="email"
              name="email"
              required
              className="p-3 mb-4 border rounded-md text-black w-full"
              onChange={handleChange}
              autoComplete="off"
            />
            <label className="font-semibold mb-1">💬 Your Message:</label>
            <textarea
              name="message"
              required
              className="p-3 mb-4 border rounded-md text-black w-full"
              rows="4"
              onChange={handleChange}
              autoComplete="off"
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting} // Disable button while submitting
              className={`mt-4 w-full px-6 py-3 rounded-lg transition ${
                isSubmitting ? "bg-green-600" : "bg-purple-600"
              } text-white hover:bg-purple-700`}
            >
              {isSubmitting ? "Sending..." : "🚀 Send Message"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
