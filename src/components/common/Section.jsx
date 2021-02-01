import PropTypes from "prop-types";
import s from "./Section.module.css";

const Section = ({ title, children }) => (
  <section className={s.section}>
    <b className={s.title}>{title}</b>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
