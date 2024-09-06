document.addEventListener('DOMContentLoaded', function () {
  // id가 "result"인 요소를 가져옵니다.
  const resultElement = document.getElementById('result');
  // 로컬스토리지에서 "mbti_result" 값을 가져옵니다.
  const mbtiResult = localStorage.getItem('mbti_result');
  // id가 "restart-button"인 버튼 요소를 가져옵니다.
  const restartButton = document.getElementById('restart-button');

  if (mbtiResult) {
    // 로컬스토리지에 값이 있으면 해당 값을 텍스트에 추가합니다.
    resultElement.textContent = `${mbtiResult}입니다!`;
  } else {
    // 로컬스토리지에 값이 없으면 기본 메시지를 설정합니다.
    resultElement.textContent = '아직 테스트를 진행하지 않았습니다!';
    // 버튼 텍스트를 "테스트 하러 가기"로 변경합니다.
    restartButton.textContent = '테스트 하러 가기';
  }
});
