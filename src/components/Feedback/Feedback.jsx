import { useState } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export const Feedback = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const options = ['good', 'neutral', 'bad'];

    const onAddFeedback = (option) => {
        switch (option) {
            case 'good':
                setGood(prevGood => prevGood + 1)
                break;
            case 'neutral':
                setNeutral(prevNeutral => prevNeutral + 1)
                break;
            case 'bad':
                setBad(prevBad => prevBad + 1)
                break;
            default:
                break;
        };
    };

    const countTotalFeedback = () => {
        return good + neutral + bad;
    }

    const countPositiveFeedbackPercentage = () => {
        const total = countTotalFeedback();
        return Math.round(good * 100 / total);
    }

    return (
        <>
            <Section title='Please, leave feedback!'>
                <FeedbackOptions
                    options={options}
                    onLeaveFeedback={onAddFeedback} />
            </Section>
            <Section title='Statistics'>
                {(countTotalFeedback() > 0) ? (<Statistics
                    goodCounter={good}
                    neutralCounter={neutral}
                    badCounter={bad}
                    total={countTotalFeedback()}
                    positivePercentage={countPositiveFeedbackPercentage()} />)
                    : (<Notification
                        message='There is no feedback' />)}
            </Section>
        </>
    );
};