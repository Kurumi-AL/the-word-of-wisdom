import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaceOfWorship } from "@fortawesome/free-solid-svg-icons";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  return (
    <VerticalTimeline lineColor="gray">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(201, 230, 253)", color: "#000" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(201, 230, 253)" }}
        date="2011 - present"
        iconStyle={{ background: "gray", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faPlaceOfWorship} />}
      >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2010 - 2011"
        iconStyle={{ background: "gray", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faPlaceOfWorship} />}
      >
        <h3 className="vertical-timeline-element-title">Art Director</h3>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online
          Marketing
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2008 - 2010"
        iconStyle={{ background: "gray", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faPlaceOfWorship} />}
      >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2006 - 2008"
        iconStyle={{ background: "gray", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faPlaceOfWorship} />}
      >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="April 2013"
        iconStyle={{ background: "gray", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faPlaceOfWorship} />}
      >
        <h3 className="vertical-timeline-element-title">
          Content Marketing for Web, Mobile and Social Media
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
        <p>Strategy, Social Media</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="November 2012"
        iconStyle={{ background: "gray", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faPlaceOfWorship} />}
      >
        <h3 className="vertical-timeline-element-title">
          Agile Development Scrum Master
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Certification</h4>
        <p>Creative Direction, User Experience, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2002 - 2006"
        iconStyle={{ background: "gray", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faPlaceOfWorship} />}
      >
        <h3 className="vertical-timeline-element-title">
          Bachelor of Science in Interactive Digital Media Visual Imaging
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
        <p>Creative Direction, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: "gray", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faPlaceOfWorship} />}
      />
    </VerticalTimeline>
  );
};

export default Timeline;
