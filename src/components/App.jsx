import React from 'react';
import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';
import { GlobalStyle } from './GlobalStyle';
import { AppSection } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const onLeaveFeedback = option => {
    switch (option) {
      case 'Good':
        return setGood(prevGood => prevGood + 1);
      case 'Neutral':
        return setNeutral(prevNeutral => prevNeutral + 1);
      case 'Bad':
        return setBad(prevBad => prevBad + 1);
      default:
        return;
    }
  };

  const countPositiveFeedbackPercentage = () => {
    const result = countTotalFeedback();
    const percentage = (good * 100) / result;
    return Math.round(percentage);
  };

  return (
    <AppSection>
      <GlobalStyle />
      <Section titel="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      {countTotalFeedback() === 0 ? (
        <Notification massage="No feedback given" />
      ) : (
        <Section titel="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </AppSection>
  );
};

// class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countPositiveFeedbackPercentage = () => {
//     const result = this.countTotalFeedback();
//     const { good } = this.state;
//     const percentage = (good * 100) / result;
//     return Math.round(percentage);
//   };

//   onLeaveFeedback = e => {
//     const name = e.target.name;
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const objKey = Object.keys(this.state);
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <AppSection>
//         <GlobalStyle />
//         <Section titel="Please leave feedback">
//           <FeedbackOptions
//             options={objKey}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>

//         {total === 0 ? (
//           <Notification massage="No feedback given" />
//         ) : (
//           <Section titel="Statistics">
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           </Section>
//         )}
//       </AppSection>
//     );
//   }
// }

export default App;
