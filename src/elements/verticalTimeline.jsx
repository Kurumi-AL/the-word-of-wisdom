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
        contentStyle={{ background: "rgb(201, 230, 253, 0.35)", color: "#000" }}
        contentArrowStyle={{
          borderRight: "7px solid  rgb(201, 230, 253, 0.35)",
        }}
        date="Feburary 27, 1833"
        iconStyle={{ background: "gray", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faPlaceOfWorship} />}
      >
        {/* <h3 className="vertical-timeline-element-title">Creative Director</h3> */}
        <h4 className="vertical-timeline-element-subtitle">
          Joseph Smith received the Word of Wisdom by revelation
        </h4>
        <p>
          This happened during the time when intense public debate about alcohol
          abuse happened in the United States. They were encouraged to avoid
          strong drinks, hot drinks, and tobacco.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(201, 230, 253, 0.35)", color: "#000" }}
        contentArrowStyle={{
          borderRight: "7px solid  rgb(201, 230, 253, 0.35)",
        }}
        date="Middle and late 1860s"
        iconStyle={{ background: "gray", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faPlaceOfWorship} />}
      >
        {/* <h3 className="vertical-timeline-element-title">Art Director</h3> */}
        <h4 className="vertical-timeline-element-subtitle">
          Brigham realized that imports of tea, coffee, and tobacco were to
          increase as costs of transportation decreased.
        </h4>
        <p>
          He saw the Word of Wisdom as a temporal way to save money for useful
          resources by avoiding spending on those things.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(201, 230, 253, 0.35)", color: "#000" }}
        contentArrowStyle={{
          borderRight: "7px solid  rgb(201, 230, 253, 0.35)",
        }}
        date="1861"
        iconStyle={{ background: "gray", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faPlaceOfWorship} />}
      >
        {/* <h3 className="vertical-timeline-element-title">Web Designer</h3> */}
        <h4 className="vertical-timeline-element-subtitle">
          Brigham Young raised repeatedly the issue of the local manufacture and
          control of alcohol
        </h4>
        <p>
          “I despise the whiskey maker more than I do the thieves, and I have no
          use for either”
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(201, 230, 253, 0.35)", color: "#000" }}
        contentArrowStyle={{
          borderRight: "7px solid  rgb(201, 230, 253, 0.35)",
        }}
        date="1867"
        iconStyle={{ background: "gray", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faPlaceOfWorship} />}
      >
        {/* <h3 className="vertical-timeline-element-title">Web Designer</h3> */}
        <h4 className="vertical-timeline-element-subtitle">
          Brigham Young suggested that the Saints might properly donate money
          recently saved by obeying the Word of Wisdom to the Church’s
          missionary fund.
        </h4>
        <p>
          He stressed his Word of Wisdom message that spring while visiting
          southern Utah with several general authorities.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "rgb(201, 230, 253, 0.35)", color: "#000" }}
        contentArrowStyle={{
          borderRight: "7px solid  rgb(201, 230, 253, 0.35)",
        }}
        date="1870"
        iconStyle={{ background: "gray", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faPlaceOfWorship} />}
      >
        {/* <h3 className="vertical-timeline-element-title">
          Content Marketing for Web, Mobile and Social Media
        </h3> */}
        <h5 className="vertical-timeline-element-subtitle">
          Brigham Young announced that tobacco, coffee, and tea are not
          initially prohibited, but instead their use was discouraged
        </h5>
        {/* <p>Strategy, Social Media</p> */}
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "rgb(201, 230, 253, 0.35)", color: "#000" }}
        contentArrowStyle={{
          borderRight: "7px solid  rgb(201, 230, 253, 0.35)",
        }}
        date="1877"
        iconStyle={{ background: "gray", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faPlaceOfWorship} />}
      >
        {/* <h3 className="vertical-timeline-element-title">
          Agile Development Scrum Master
        </h3> */}
        <h4 className="vertical-timeline-element-subtitle">
          Brigham Young included the statement to preside over the European
          Mission
        </h4>
        <p>
          "Missionaries who could not abstain from tobacco and alcohol were to
          be sent home.""
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "rgb(201, 230, 253, 0.35)", color: "#000" }}
        contentArrowStyle={{
          borderRight: "7px solid  rgb(201, 230, 253, 0.35)",
        }}
        date="1898"
        iconStyle={{ background: "gray", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faPlaceOfWorship} />}
      >
        {/* <h3 className="vertical-timeline-element-title">
          Bachelor of Science in Interactive Digital Media Visual Imaging
        </h3> */}
        <h5 className="vertical-timeline-element-subtitle">
          The First Presidency noted that bishops should not withhold temple
          recommends based upon the Word of Wisdom
        </h5>
        {/* <p>Creative Direction, Visual Design</p> */}
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "rgb(201, 230, 253, 0.35)", color: "#000" }}
        contentArrowStyle={{
          borderRight: "7px solid  rgb(201, 230, 253, 0.35)",
        }}
        date="1902"
        iconStyle={{ background: "gray", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faPlaceOfWorship} />}
      >
        {/* <h3 className="vertical-timeline-element-title">
          Bachelor of Science in Interactive Digital Media Visual Imaging
        </h3> */}
        <h5 className="vertical-timeline-element-subtitle">
          Temple recommends were beginning to be denied to those who did not
          follow the Word of Wisdom
        </h5>
        {/* <p>Creative Direction, Visual Design</p> */}
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "rgb(201, 230, 253, 0.35)", color: "#000" }}
        contentArrowStyle={{
          borderRight: "7px solid  rgb(201, 230, 253, 0.35)",
        }}
        date="Early 1900s"
        iconStyle={{ background: "gray", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faPlaceOfWorship} />}
      >
        {/* <h3 className="vertical-timeline-element-title">
          Bachelor of Science in Interactive Digital Media Visual Imaging
        </h3> */}
        <h5 className="vertical-timeline-element-subtitle">
          Saints replaced wine with water for sacrament use
        </h5>
        {/* <p>Creative Direction, Visual Design</p> */}
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "rgb(201, 230, 253, 0.35)", color: "#000" }}
        contentArrowStyle={{
          borderRight: "7px solid  rgb(201, 230, 253, 0.35)",
        }}
        date="1921"
        iconStyle={{ background: "gray", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faPlaceOfWorship} />}
      >
        {/* <h3 className="vertical-timeline-element-title">
          Bachelor of Science in Interactive Digital Media Visual Imaging
        </h3> */}
        <h5 className="vertical-timeline-element-subtitle">
          Herber Grant called on all Saints to live the Word of Wisdom to the
          letter by completely abstaining from all alcohol, coffee, tea, and
          tobacco.
        </h5>
        {/* <p>Creative Direction, Visual Design</p> */}
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "rgb(201, 230, 253, 0.35)", color: "#000" }}
        contentArrowStyle={{
          borderRight: "7px solid  rgb(201, 230, 253, 0.35)",
        }}
        date="1933"
        iconStyle={{ background: "gray", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faPlaceOfWorship} />}
      >
        {/* <h3 className="vertical-timeline-element-title">
          Bachelor of Science in Interactive Digital Media Visual Imaging
        </h3> */}
        <h5 className="vertical-timeline-element-subtitle">
          The General Handbook of Instructions listed the Word of Wisdom as a
          requirement for temple worship, exactly 100 years after the receipt of
          the revelation by Joseph Smith.
        </h5>
        {/* <p>Creative Direction, Visual Design</p> */}
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Timeline;
