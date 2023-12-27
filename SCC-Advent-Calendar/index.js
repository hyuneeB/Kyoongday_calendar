// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "내게 있어서 활력소 같은 존재" },
  { "number": 2, "message": "엑소팬이 짱이야. 최고야. 내꺼." },
  { "number": 3, "message": "세상 사람들이 무조건 행복했으면 좋겠어요. 네, 그게 다예요." },
  { "number": 4, "message": "계속 이대로만 있어주세요. 멋진 모습으로 올 테니까요." },
  { "number": 5, "message": "EXO-L은 치트키와 같아. 내가 무적이 되는 것 같거든요." },
  { "number": 6, "message": "저희가 어디에 있든 여러분을 찾을 수 있게 은빛 물결을 보여주세요." },
  { "number": 7, "message": "앞으로 저희가 정말 오래오래 함께 손잡고 가는 엑소와 엑소엘이 되었으면 좋겠습니다." },
  { "number": 8, "message": "앞으로도 서로 지켜주자. 사랑해." },
  { "number": 9, "message": "여러분들 힘들면 잠깐 어디 갔다 와도 돼요. 다시 오면 어차피 나 다시 좋아하게 돼 있으니까." },
  { "number": 10, "message": "저를 행복하게 하는 건 진짜 팬분들인 것 같아요, 진짜로." },
  { "number": 11, "message": "지금 있는 여러분들과 함께 더 오래오래 가는 게 더 중요한 것 같습니다." },
  { "number": 12, "message": "이 마이크로 항상 무대에서 여러분께 행복이란 선물을 드릴게요. 언제나 밝게 빛날게요." },
  { "number": 13, "message": "어디에 있든지 우리는 항상 같이 있는 거예요." },
  { "number": 14, "message": "하루하루 믿다 보면 언젠간 서로 믿지 않겠어요? 저희가 더 다가갈게요." },
  { "number": 15, "message": "기다림이 얼마나 힘든 것인 줄 알기 때문에 기다려 달라는 말보단 내가 너를 사랑한다고 말하고 싶어! 사랑하고 좋아해!" },
  { "number": 16, "message": "영원한 건 없겠지만 저와 함께하는 순간은 행복했으면 좋겠습니다." },
  { "number": 17, "message": "항상 보고 듣고 있으니까! 우리 멀리 있다고 생각하지 말자!" },
  { "number": 18, "message": "누가 뭐래도, 네가 믿는 그것이 정답일 거야." },
  { "number": 19, "message": "저는 못한다는 사람이 없을 때까지 노력할 거예요." },
  { "number": 20, "message": "너만 행복하면 나도 행복해. 진짜로." },
  { "number": 21, "message": "여러분에게 자랑스러운 백현으로 남아있을 테니까 여러분들은 항상 그 자랑스러움을 누리세요." },
  { "number": 22, "message": "오랜 기다림 끝에 복이 있는 거니까요. 지치지 마세요." },
  { "number": 23, "message": "우리 에리 여러분들에게 자부심을 느낄 수 있도록 하는 그런 아티스트가 되겠습니다." },
  { "number": 24, "message": "어떤 모습이든 어떠한 형태든 저희가 항상 사랑해줄게요." }
];

