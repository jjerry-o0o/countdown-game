import { forwardRef } from "react";

// 이렇게 하면 ref와 forwardRef를 사용해서 modal을 open 할 수 있다.
// (* ResultModal에 직접 open 속성을 추가하는 방법도 있지만,)
// (* 그렇게 하면 모달 뒤에 백그라운드 불투명 블랙배경이 자동으로 나오지 않음)
//
// 근데 이렇게 하면 개발자가 여러명인 경우에, dialog 를 div로 바꾼다거나, ref 명을 수정하는 등의 경우에
// 참조가 깨지는 등의 에러가 날 수 있어서, useImperativeHandle 이라는 훅으로 관리해줘야 함.
// 이 부분은 내일 이어서...
const ResultModal =  forwardRef(function ResultModal({ result, targetTime }, ref) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {result}</h2>
      <p>The target time was <strong>{targetTime} seconds.</strong></p>
      <p>You stopped the timer with <strong>X seconds left.</strong></p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
})

export default ResultModal;