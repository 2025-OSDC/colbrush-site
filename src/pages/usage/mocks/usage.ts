export const COLORS = [
  "#FF0000",
  "#FF4000",
  "#FF8000",
  "#FFBF00",
  "#FFFF00",
  "#BFFF00",
  "#7FFF00",
  "#40FF00",
  "#00FF00",
  "#00FF40",
  "#00FF7F",
  "#00FFBF",
  "#00FFFF",
  "#00BFFF",
  "#0080FF",
  "#0040FF",
  "#0000FF",
  "#4000FF",
  "#8000FF",
  "#BF00FF",
  "#FF00FF",
  "#FF00BF",
  "#FF007F",
  "#FF0040",
]

export const TODOS = {
  "시작 전": [
    { title: "운동하기", content: "공복 유산소", number: 3 },
  ],
  "진행 중": [
    { title: "프로젝트 작업", content: "코드 작성 및 리뷰", number: 2 }
  ],
  "완료": [
    { title: "독서하기", content: "하루 한 챕터 읽기", number: 1 }
  ]
}

export const Products = [
  {
    id: "01",
    name: "선크림",
    count: 45,
    bgColor: 'bg-blue/20',
    barColor: 'bg-blue',
  },
  {
    id: "02",
    name: "아이크림",
    count: 29,
    bgColor: 'bg-light-green/20',
    barColor: 'bg-light-green',
  },
  {
    id: "03",
    name: "로션",
    count: 18,
    bgColor: 'bg-purple/20',
    barColor: 'bg-purple',
  },
  {
    id: "04",
    name: "미스트",
    count: 25,
    bgColor: 'bg-yellow/20',
    barColor: 'bg-yellow',
  }
]

export const simulatorData = [
  {
    type: "protanopia",
    title: "적색맹 (protanopia)",
    text: [
      "빨강, 주황, 초록, 갈색 등",
      "빨강-갈색-초록-주황 등이 비슷하게 느껴짐",
      "빨강-검정(갈색), 빨강-초록 등"
    ],
    color: "bg-[#ff000080]"
  },
  {
    type: "deuteranopia",
    title: "녹색맹 (Deuteranopia)",
    text: [
      "초록, 빨강, 주황, 노랑, 갈색 등",
      "빨강-초록, 초록-노랑, 초록-주황 등이 섞여 보임",
      "초록-빨강, 갈색-빨강-녹색 등"
    ],
    color: "bg-[#00ff0080]"
  },
  {
    type: "tritanopia",
    title: "청색맹 (Tritanopia)",
    text: [
      "파랑, 하늘색, 노랑, 연두, 보라 등",
      "파랑-초록, 노랑-분홍 계열 구분이 어려움",
      "파랑-녹색, 하늘색-회색, 노랑-연두 등"
    ],
    color: "bg-[#0000ff80]"
  }
]
