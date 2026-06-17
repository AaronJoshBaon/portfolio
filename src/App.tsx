import { useEffect, useRef, useState } from "react";
import "./App.css";
import Map, { Marker, type MapRef } from "react-map-gl/maplibre";
import Modal from "./Modal";

function App() {
  const mapRef = useRef<MapRef>(null);
  const [showMarker, setShowMarker] = useState(false);
  const [showMioModal, setShowMioModal] = useState<boolean>(false);
  const [showStelioModal, setShowStelioModal] = useState<boolean>(false);

  const stelioImages = [
    "home",
    "property",
    "booking property",
    "bookings",
    "messages",
    "manage",
  ];

  const mioImages = [
    "home",
    "subject",
    "activity 1",
    "activity 2",
    "activity 3",
    "scoring",
    "analytics",
  ];
  const stelioLanguages = [
    "React",
    "Typescript",
    "Tailwind",
    "Spring Boot",
    "PostgreSQL",
    "Digital Ocean",
    "Cloudflare R2",
  ];

  const mioLanguages = [
    "React Native",
    "Typescript",
    "Laravel",
    "Firebase Realtime Database",
    "Firebase Storage",
    "Hostinger",
  ];

  const targetLocation = {
    longitude: 121.0582,
    latitude: 14.7567,
  };

  // PHT
  const now = new Date();
  const time = now.toLocaleTimeString("en-PH", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Manila",
  });

  // Get hour in 24-hour format
  const hour = parseInt(
    now.toLocaleString("en-PH", {
      hour: "2-digit",
      hour12: false,
      timeZone: "Asia/Manila",
    }),
    10,
  );

  // Determine period and icon
  let periodIcon;
  if (hour >= 5 && hour < 12) {
    periodIcon = "☀️"; // Morning
  } else if (hour === 12) {
    periodIcon = "🌞"; // Noon
  } else if (hour > 12 && hour < 18) {
    periodIcon = "🌤️"; // Afternoon
  } else {
    periodIcon = "🌙"; // Evening/Night
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (mapRef.current) {
        mapRef.current.flyTo({
          ...targetLocation,
          zoom: 12,
          duration: 4000,
          essential: true,
        });

        setTimeout(() => setShowMarker(true), 4000);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showMioModal && (
        <Modal
          onClose={() => setShowMioModal(false)}
          details={{
            title: "mío",
            description:
              "Mio is a web and mobile oralism-based Learning Management System that supports speech and auditory development for learners at the Philippine Institute for the Deaf.",
            images: mioImages,
            languages: mioLanguages,
            type: "mio",
          }}
        />
      )}
      {showStelioModal && (
        <Modal
          onClose={() => setShowStelioModal(false)}
          details={{
            title: "Stelio - A Booking System",
            description:
              "Stelio is a backend system for a real-estate rental platform built with Spring Boot, focused on transactional safety, idempotency, and strong booking state management.",
            images: stelioImages,
            link: "https://stelio-frontend.aaronbaon1.workers.dev/",
            languages: stelioLanguages,
            type: "stelio",
          }}
        />
      )}

      {/* NAV */}
      <nav className="nav">
        <a href="#" className="nav-logo">
          Aaron Josh Baon
        </a>
        <div className="nav-links">
          <a href="#work" className="nav-link">
            Work
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#education" className="nav-link">
            Education
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
          >
            CV →
          </a>
        </div>
      </nav>

      {/* BANNER */}
      <div className="banner">
        <div className="banner-map">
          <Map
            ref={mapRef}
            initialViewState={{
              ...targetLocation,
              zoom: 3,
            }}
            mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
            dragPan={false}
            scrollZoom={false}
            dragRotate={false}
            touchZoomRotate={false}
            attributionControl={false}
          >
            {showMarker && (
              <Marker
                longitude={targetLocation.longitude}
                latitude={targetLocation.latitude}
                anchor="center"
                style={{ marginTop: "-320px", marginLeft: "-50px" }}
              >
                <div style={{ color: "red", fontSize: "24px" }}>📍</div>
              </Marker>
            )}
          </Map>

          {/* Time */}
          <div className="banner-clock">
            <div style={{}}>
              {periodIcon} {time} PHT
            </div>
          </div>
        </div>
        <h1 className="banner-name">Aaron Josh Baon</h1>
      </div>

      <div className="page">
        <section className="hero">
          <div>
            <p className="hero-role">Software Engineer · Backend & Fullstack</p>
            <p className="hero-bio">
              <strong>Backend-focused Full Stack Developer</strong> experienced
              in building transactional systems and RESTful APIs using Spring
              Boot, Flask, and MySQL. Strong foundation in system design,
              relational database modeling, concurrency control, and secure
              authentication. Focused on developing scalable and
              production-ready backend architectures.
            </p>
          </div>
        </section>
        {/* WORK */}
        <section className="section" id="work">
          <div className="section-header">
            <h2 className="section-title">Work</h2>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="section-link"
            >
              Read CV →
            </a>
          </div>

          <div className="timeline">
            <div className="work-entry">
              <div className="timeline-col">
                <div className="tl-dot current"></div>
                <div className="tl-line"></div>
              </div>
              <div className="work-content">
                <div className="work-meta">
                  <span className="work-company">
                    IBM Technologies Philippines Inc.
                  </span>
                </div>
                <div className="work-role">Application Developer Associate Intern</div>
                <div className="work-period">May 2026 – Aug 2026</div>
                <p className="work-desc">
                  Completed structured training in Java (Jakarta EE), Vue.js, and mobile application development 
                  to build hands-on experience with modern full-stack frameworks. Collaborated with cross-functional 
                  teams in an agile environment, gaining exposure to IBM's enterprise software development culture 
                  and best practices. Contributed to a team project that leveraged Excel VBA macros to automate 
                  Excel workflows, reducing manual data processing tasks and improving operational efficiency.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline">
            <div className="work-entry">
              <div className="timeline-col">
                <div className="tl-dot current"></div>
                <div className="tl-line"></div>
              </div>
              <div className="work-content">
                <div className="work-meta">
                  <span className="work-company">
                    Simplevia Technologies Inc.
                  </span>
                </div>
                <div className="work-role">Backend Developer Intern</div>
                <div className="work-period">Jan 2026 – March 2026</div>
                <p className="work-desc">
                  Developed a scalable SLA-driven ticketing system using Flask
                  and MySQL, featuring automated escalation workflows and
                  well-defined lifecycle state management. Designed and
                  implemented RESTful APIs for ticket creation and assignment,
                  supported by normalized database schemas. Collaborated with
                  stakeholders to translate complex business requirements into a
                  reliable, production-ready backend solution.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* PROJECTS */}
        <section className="section" id="projects">
          <div className="section-header">
            <h2 className="section-title">Projects</h2>
            {/* <a href="#" className="section-link">
              All projects →
            </a> */}
          </div>

          <div className="proj-list">
            {/* Web project — browser frame */}
            <button
              className="proj-spotlight"
              onClick={() => setShowStelioModal(!showStelioModal)}
            >
              <div className="frame-web">
                <div className="frame-web-bar">
                  <span className="frame-dot"></span>
                  <span className="frame-dot"></span>
                  <span className="frame-dot"></span>
                  <span className="frame-url">runx</span>
                </div>
                <div className="frame-web-body">
                  <img
                    src="/stelio/home.png"
                    alt="runx preview"
                    className="frame-img"
                  />
                  <div className="frame-web-placeholder">
                    <div className="ph-line w70"></div>
                    <div className="ph-line w50 accent"></div>
                    <div className="ph-grid">
                      <div className="ph-card"></div>
                      <div className="ph-card"></div>
                      <div className="ph-card"></div>
                      <div className="ph-card"></div>
                      <div className="ph-card"></div>
                      <div className="ph-card"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="proj-info">
                <div className="proj-num">01</div>
                <h3 className="proj-name">
                  Stelio <span className="proj-arrow">↗</span>
                </h3>
                <p className="proj-desc">
                  Stelio is a backend system for a real-estate rental platform,
                  built with Spring Boot, that ensures transactional safety,
                  idempotency, and strong state management for bookings. As a
                  Backend Developer, I implemented secure JWT-based
                  authentication, transactional booking workflows with
                  pessimistic locking, and file storage via Cloudflare R2, while
                  also handling idempotent booking requests and automated
                  cleanup tasks. The system supports property management,
                  messaging, reviews, and real-time booking statistics for both
                  renters and property owners.
                </p>
                <div className="proj-tags">
                  {stelioLanguages.map((lang) => (
                    <span className="proj-tag">{lang}</span>
                  ))}
                </div>
              </div>
            </button>

            {/* <Modal /> */}

            {/* Mobile project */}
            <button
              className="proj-spotlight"
              onClick={() => setShowMioModal(!showMioModal)}
            >
              <div className="proj-info">
                <div className="proj-num">02</div>
                <h3 className="proj-name">
                  mío <span className="proj-arrow">↗</span>
                </h3>
                <p className="proj-desc">
                  Mio is a web and mobile oralism-based Learning Management
                  System that supports speech and auditory development for
                  learners at the Philippine Institute for the Deaf. As a Mobile
                  and Backend Developer, I built the app using React Native and
                  TypeScript, developed secure RESTful APIs with Laravel,
                  implemented Firebase Realtime Database and Storage for data
                  and media management, and integrated RNN-based Automatic
                  Speech Recognition for interactive speech training features.
                </p>
                <div className="proj-tags">
                  {mioLanguages.map((lang) => (
                    <span className="proj-tag">{lang}</span>
                  ))}
                </div>
              </div>
              <div className="frame-phone">
                <div className="frame-phone-shell">
                  {/* <div className="frame-phone-notch">
                    <span className="frame-phone-time">9:41</span>
                    <span className="frame-phone-camera"></span>
                    <span className="frame-phone-icons">▲▲▲</span>
                  </div> */}
                  <div className="frame-phone-screen">
                    <img
                      src="../mio/activity 1.png"
                      alt="mío app preview"
                      className="frame-img"
                    />
                  </div>
                  {/* <div className="frame-phone-home"></div> */}
                </div>
              </div>
            </button>
          </div>
        </section>

        <hr className="divider" />

        {/* EDUCATION */}
        <section className="section" id="education">
          <div className="section-header">
            <h2 className="section-title">Education</h2>
          </div>

          <div className="edu-list">
            <div className="edu-item">
              <div className="edu-year">2022 – Present</div>
              <div className="edu-body">
                <div className="edu-school">FEU Institute of Technology</div>
                <div className="edu-degree">
                  B.S. Information Technologies Specialized on Web and Mobile
                  Applications
                </div>
                <p className="edu-detail">
                  Contributed as a full stack developer in building Mio, an
                  oralism-based LMS for the Philippine Institute for the Deaf,
                  using React Native, TypeScript, Laravel, and MySQL. Developed
                  secure RESTful APIs and designed relational database schemas
                  to support user management and learning workflows. Integrated
                  RNN-based Automatic Speech Recognition to enhance speech and
                  auditory learning experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* CONNECT */}
        <section className="section" id="contact">
          <div className="connect-intro">
            <h2 className="connect-heading">
              Let's <em>connect.</em>
            </h2>
            <p className="connect-sub">
              Open to roles, consulting, or just a good conversation about code.
              Pick your platform below.
            </p>
          </div>

          <div className="connect-list">
            <a
              href="https://github.com/AaronJoshBaon"
              className="connect-row"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="connect-left">
                <span className="connect-icon-wrap icon-github">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </span>
                <div>
                  <div className="connect-platform">GitHub</div>
                  <div className="connect-handle">@AaronJoshBaon</div>
                </div>
              </div>
              <span className="connect-arrow">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/aaron-josh-baon-436537334/"
              className="connect-row"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="connect-left">
                <span className="connect-icon-wrap icon-linkedin">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </span>
                <div>
                  <div className="connect-platform">LinkedIn</div>
                  <div className="connect-handle">Aaron Josh Baon</div>
                </div>
              </div>
              <span className="connect-arrow">↗</span>
            </a>

            <a href="mailto:aaronbaon1@gmail.com" className="connect-row">
              <div className="connect-left">
                <span className="connect-icon-wrap icon-email">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <polyline points="2 4 12 14 22 4" />
                  </svg>
                </span>
                <div>
                  <div className="connect-platform">Email</div>
                  <div className="connect-handle">aaronbaon1@gmail.com</div>
                </div>
              </div>
              <span className="connect-arrow">↗</span>
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <span className="footer-copy">© 2026 Aaron Josh Baon</span>
          <div className="footer-links">
            <a href="#">Profile</a>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              CV
            </a>
            <a href="#">Projects</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
