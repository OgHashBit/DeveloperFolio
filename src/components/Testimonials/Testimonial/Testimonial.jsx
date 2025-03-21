import React from "react";

// Styles
import "./testimonial.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkAlt";

const Testimonial = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="source-icon">fiverr.</div>
      <div className="details">
        <p className="text">{testimonial.text}</p>
        <p className="name">
          {testimonial.name}
          <span className="country"> - {testimonial.country}</span>{" "}
        </p>

        <a
          href={testimonial.url}
          target="_blank"
          rel="noopener noreferrer"
          className="url"
        >
          View
          <FontAwesomeIcon
            icon={faExternalLinkAlt}
            size="sm"
            className="icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Testimonial;
