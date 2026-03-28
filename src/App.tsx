import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

export default function Portfolio() {
  const [text, setText] = useState("");
  const roles = ["Machine Learning Engineer","AI Developer","Data Analyst"];
  const [index, setIndex] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(roles[index].slice(0, i));
      i++;
      if (i > roles[index].length) {
        clearInterval(interval);
        setTimeout(() => setIndex((prev) => (prev + 1) % roles.length), 1500);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [index]);

  const Section = ({ id, children }: { id: string; children: React.ReactNode }) => (
    <section id={id} className="h-screen flex items-center justify-center snap-start px-6">
      <div className="max-w-5xl w-full text-center">{children}</div>
    </section>
  );

  return (
    <div className="bg-black text-white h-screen overflow-y-scroll snap-y snap-mandatory">

      {/* Scroll Progress */}
      <motion.div style={{ scaleX: scrollYProgress }} className="fixed top-0 left-0 right-0 h-1 bg-purple-500 origin-left z-50" />

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-40 bg-black/70 backdrop-blur px-6 py-4 flex justify-between">
        <h1 className="font-bold">Jatin</h1>
        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <Section id="home">
        <div>
          <h1 className="text-6xl font-bold">Jatin Jangir</h1>
          <p className="text-purple-400 mt-4 text-xl">{text}</p>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Aspiring Machine Learning Engineer with hands-on experience in NLP, ML models, and data pipelines. Passionate about solving real-world problems using AI.
          </p>
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about">
        <div>
          <h2 className="text-4xl mb-6">About Me</h2>
          <p className="text-gray-400 leading-relaxed">
            I am a B.Tech Computer Science student specializing in Artificial Intelligence and Machine Learning at Poornima University. I have a strong foundation in Python, Java, and SQL along with hands-on experience in machine learning and data analysis.
          </p>
          <p className="text-gray-400 mt-4">
            My interests include Natural Language Processing, predictive modeling, and cloud-based data engineering. I enjoy building scalable AI solutions and working with real-world datasets.
          </p>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience">
        <div>
          <h2 className="text-4xl mb-6">Experience</h2>
          <div className="bg-gray-900 p-6 rounded-2xl text-left">
            <h3 className="text-xl font-bold">AI & ML Intern - Kodacy</h3>
            <p className="text-gray-400">May 2024 - June 2024</p>
            <ul className="text-gray-400 mt-3 list-disc list-inside">
              <li>Worked on real-world datasets to build ML models</li>
              <li>Performed data preprocessing and feature engineering</li>
              <li>Implemented algorithms like Logistic Regression and Naive Bayes</li>
              <li>Evaluated models using accuracy, precision, and recall</li>
              <li>Improved workflow efficiency using automation</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects">
        <div>
          <h2 className="text-4xl mb-6">Projects</h2>

          <div className="bg-gray-900 p-6 rounded-2xl mb-6 text-left">
            <h3 className="text-xl font-bold">SMS Spam Detection</h3>
            <p className="text-gray-400 mt-2">
              Built an NLP-based spam detection system using TF-IDF and ML algorithms.
            </p>
            <ul className="text-gray-400 mt-2 list-disc list-inside">
              <li>Text preprocessing and tokenization</li>
              <li>Feature extraction using TF-IDF</li>
              <li>Model training with Naive Bayes & Logistic Regression</li>
              <li>Evaluated using accuracy, precision, recall</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl text-left">
            <h3 className="text-xl font-bold">Customer Churn Prediction</h3>
            <p className="text-gray-400 mt-2">
              Developed ML model using SAS Viya to predict customer churn.
            </p>
            <ul className="text-gray-400 mt-2 list-disc list-inside">
              <li>Data preprocessing and feature selection</li>
              <li>Trained multiple supervised ML models</li>
              <li>Analyzed performance using classification metrics</li>
              <li>Generated insights for retention strategies</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* CERTIFICATIONS */}
      <Section id="certifications">
        <div>
          <h2 className="text-4xl mb-6">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Google Cloud Data Analytics", desc: "Cloud data processing & analytics", year: "2026" },
              { title: "SAS Machine Learning", desc: "Model building & evaluation", year: "2025" },
              { title: "Power BI", desc: "Dashboard & reporting", year: "2025" },
              { title: "HTML & CSS", desc: "Frontend development", year: "2025" }
            ].map((cert, i) => (
              <div key={i} className="bg-gray-900 p-6 rounded-2xl text-left">
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <p className="text-gray-400 mt-2">{cert.desc}</p>
                <p className="text-purple-400 mt-2 text-sm">Year: {cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact">
        <div className="max-w-5xl w-full">
          <h2 className="text-4xl mb-6">Contact</h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="text-left space-y-4">
              <p className="text-gray-400">
                I’m open to internships and ML opportunities. Feel free to reach out!
              </p>

              <div className="bg-gray-900 p-4 rounded-xl">
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-semibold">jatinjangir41003@gmail.com</p>
              </div>

              <div className="bg-gray-900 p-4 rounded-xl">
                <p className="text-sm text-gray-400">Phone</p>
                <p className="font-semibold">+91 7426065932</p>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e)=>{e.preventDefault();alert("Message Sent!")}}>
              <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-gray-800" required />
              <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-gray-800" required />
              <textarea placeholder="Your Message" className="w-full p-3 rounded bg-gray-800 h-32" required />
              <button className="w-full bg-purple-600 p-3 rounded">Send Message</button>
            </form>

          </div>
        </div>
      </Section>

    </div>
  );
}
