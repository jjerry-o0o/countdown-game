import {useState} from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    setTimerStarted(true);
    setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
  }

  function handleStop() {
    // handleStart 함수 안에 있는 setTimeout 이 실행 되지 않도록 하는 내용을 널어야 함.
    // 이때 ref 를 활용하여 해결 가능.
    // 내일 이어서 ....
  }

  return <section className="challenge">
    <h2>{title}</h2>
    {timerExpired && <p>You lost!</p>}
    <p className="challenge-time">
      {targetTime} second{targetTime > 1 ? 's' : ''}
    </p>
    <p>
      <button onClick={handleStart}>
        {timerStarted ? 'Stop' : 'Start'} Challenge
      </button>
    </p>
    <p className={timerStarted ? 'active' : undefined}>
      {timerStarted ? 'Time is running...' : 'Timer inactive'}
    </p>
  </section>
}