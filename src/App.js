import { useState } from "react";
import "./App.css";
import Section from "./components/common/Section";
import FeedBackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Notification from "./components/Notification/Notification";
import Statistics from "./components/Statistics/Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = ({ target }) => {
    const value = target.id.toLowerCase();

    if (value === "good") {
      setGood((prevState) => prevState + 1);
    }

    if (value === "neutral") {
      setNeutral((prevState) => prevState + 1);
    }

    if (value === "bad") {
      setBad((prevState) => prevState + 1);
    }
  };

  const countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = (good, total) => {
    return Math.round((good * 100) / total);
  };

  const total = countTotalFeedback(good, neutral, bad);
  const positivePercentage = countPositiveFeedbackPercentage(good, total);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedBackOptions
          options={["Good", "Neutral", "Bad"]}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
