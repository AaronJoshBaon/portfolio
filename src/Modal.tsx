import { useState } from "react";
import "./modal.css";

function Modal({
  onClose,
  details,
}: {
  onClose: () => void;
  details: {
    images: string[];
    link?: string;
    languages: string[];
    type: string;
    description: string;
    title: string;
  };
}) {
  const { images, link, languages, type, description, title } = details;

  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState<"next" | "prev">("next");
  const [isClosing, setIsClosing] = useState(false);

  const goTo = (idx: number) => setCurrent(idx);
  const handleNext = () => {
    setDir("next");
    if (current < images.length - 1) setCurrent((c) => c + 1);
  };
  const handlePrev = () => {
    setDir("prev");
    if (current > 0) setCurrent((c) => c - 1);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 280);
  };

  return (
    <div
      className={`modal-backdrop ${isClosing ? "closing" : ""}`}
      onClick={handleClose}
    >
      <div
        className={`modal ${isClosing ? "closing" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="modal-dots">
            <div className="mdot" />
            <div className="mdot" />
            <div className="mdot" />
          </div>
          <span className="modal-title">{images[current]}</span>
          <button className="modal-close" onClick={handleClose}>
            ✕
          </button>
        </div>

        <div className="img-stage">
          <img
            key={current}
            data-dir={dir}
            src={`./public/${type}/${images[current]}.png`}
            alt={images[current]}
          />

          <div className="img-nav">
            <button
              className="nav-btn"
              onClick={handlePrev}
              disabled={current === 0}
            >
              <svg
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M7.5 2L4 6l3.5 4" />
              </svg>
              prev
            </button>
            <div className="nav-dots">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`nav-dot${i === current ? " active" : ""}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <span className="nav-counter">
              {current + 1} / {images.length}
            </span>
            <button
              className="nav-btn"
              onClick={handleNext}
              disabled={current === images.length - 1}
            >
              next
              <svg
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4.5 2L8 6l-3.5 4" />
              </svg>
            </button>
          </div>
        </div>

        <div className="modal-body">
          <div className="proj-meta">
            <span className="proj-name">{title}</span>
          </div>

          <p className="proj-desc">{description}</p>

          <div>
            <div className="stack-label">tech stack</div>
            <div className="stack-tags">
              {languages.map((lang) => (
                <span className="stack-tag">{lang}</span>
              ))}
            </div>
          </div>
        </div>

        {type !== "mio" && (
          <div className="modal-footer">
            <a
              className="btn-primary"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
