// Quotes
const quotes = [
  {
    quote : "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
    author : "괴테"
  },
  {
    quote : "실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다.",
    author : "하버트 개서"
  },
  {
    quote : "이미끝나버린 일을 후회하기 보다는 하고 싶었던 일들을 하지못한 것을 후회하라.",
    author : "탈무드"
  },
  {
    quote : "우리는 두려움의 홍수에 버티기 위해서 끊임없이 용기의 둑을 쌓아야 한다.",
    author : "마틴 루터 킹"
  },
  {
    quote : "도중에 포기하지 말라. 망설이지 말라. 최후의 성공을 거둘 때까지 밀고 나가자.",
    author : "헨리포드"
  },
  {
    quote : "인생에 뜻을 세우는데 있어 늦은 때라곤 없다.",
    author : "볼드윈"
  },
  {
    quote : "우선 무엇이 되고자 하는가를 자신에게 말하라 그리고 해야 할일을 하라.",
    author : "에픽토테스"
  },
  {
    quote : "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
    author : "L.론허바드"
  },
  {
    quote : "인간의 삶 전체는 단지 한 순간에 불과하다 . 인생을 즐기자.",
    author : "플루타르코스"
  },
  {
    quote : "세상은 고통으로 가득하지만 그것을 극복하는 사람들로도 가득하다.",
    author : "헬렌켈러"
  }
];

const quote = document.querySelector('div.quotes span:first-child');

const author = document.querySelector('div.quotes span:last-child');

// Random Quotes
const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuotes.quote;
author.innerText = `- ${randomQuotes.author}`;