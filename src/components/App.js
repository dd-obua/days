import { useState } from 'react';

const App = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const reduceStep = () => step > 1 && setStep((s) => s - 1);
  const increaseStep = () => setStep((s) => s + 1);
  const reduceCount = () => setCount((c) => c - step);
  const increaseCount = () => setCount((c) => c + step);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={reduceStep}>-</button> Step: {step}{' '}
        <button onClick={increaseStep}>+</button>
      </div>
      <div>
        <button onClick={reduceCount}>-</button> Count: {count}{' '}
        <button onClick={increaseCount}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? 'Today is '
            : count > 0
            ? `${count} day${count === 1 ? '' : 's'} from today is `
            : `${Math.abs(count)} day${count === -1 ? '' : 's'} ago was `}
        </span>
        <span>{date.toDateString()}</span>.
      </p>
    </div>
  );
};

export default App;
