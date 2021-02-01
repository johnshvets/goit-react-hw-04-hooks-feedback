import { Component } from "react";
import "./App.css";
import Section from "./components/common/Section";
import FeedBackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Notification from "./components/Notification/Notification";
import Statistics from "./components/Statistics/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (e) => {
    const value = e.target.id.toLowerCase();

    this.setState((prevState) => ({ [value]: prevState[value] + 1 }));
  };

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (good, total) => {
    return Math.round((good * 100) / total);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(good, neutral, bad);
    const positivePercentage = this.countPositiveFeedbackPercentage(
      good,
      total
    );

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedBackOptions
            options={["Good", "Neutral", "Bad"]}
            onLeaveFeedback={this.onLeaveFeedback}
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
  }
}

export default App;
