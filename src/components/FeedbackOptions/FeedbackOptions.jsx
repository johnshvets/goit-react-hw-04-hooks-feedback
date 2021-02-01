import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

const FeedBackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={s.buttonList}>
    {options.map((option) => (
      <li key={option} className={s.item}>
        <button
          type="button"
          onClick={onLeaveFeedback}
          id={option}
          className={s.button}
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
);

FeedBackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedBackOptions;
