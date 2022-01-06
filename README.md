## Momentum 구현 프로젝트

---

### 💻 구글 크롬 확장 프로그램인 Momentum 제작

참고 momentum 사이트 (https://momentumdash.com/)

### 사용 기술

- HTML
- CSS
- Javascript

### 데모 링크 : https://leenawon.github.io/javascript-momentum-practice/

---

### **웹 사이트** 모습

- Main 화면

  - 현재 시각을 시/분/초 단위로 보여주는 기능

  - 사용자의 이름을 입력받을 수 있는 입력란과 할 일을 입력 받을 수 있는 입력란으로 구성

  - 사이트의 하단에는 랜덤 명언과 현재 사용자가 위치한 곳에 대한 날씨를 볼 수 있도록 openweathermap Api를 이용해서 구현

  ![image](https://user-images.githubusercontent.com/76942087/147536435-e36c0bc7-66b7-4d84-b40d-577b7198f001.png)

- 이름과 할 일을 입력한 모습

  - 자신의 이름을 입력하면 안녕하세요 문구와 함께 보여지고, 할 일은 그 밑에 지우기 버튼과 함께 나타남

  - 배경 이미지는 4가지 중 한 가지를 랜덤으로 보여줌

  ![image](https://user-images.githubusercontent.com/76942087/147478734-642b9ccb-e6ac-4404-acb9-83970b9bd462.png)

  ![image](https://user-images.githubusercontent.com/76942087/147479075-edf523f2-d23f-4c5e-ba6f-1b380b460722.png)

  ![image](https://user-images.githubusercontent.com/76942087/147479126-ac1ed86f-c4ef-439a-aa4e-2554101ff315.png)

  ![image](https://user-images.githubusercontent.com/76942087/147478876-6572da87-a88e-487b-8a83-a1d737436e63.png)

- localStorage

  - 작성한 할 일은 localStorage에 저장되어 새로고침을 하더라도 작성한 내용을 보존함

  ![image](https://user-images.githubusercontent.com/76942087/147479317-bdc49f5d-e3df-4e6f-b879-0e62bf24a4f6.png)

- 모바일 반응형

  ![image](https://user-images.githubusercontent.com/76942087/147479921-bd4946de-45e2-41f1-a462-59d7ab4e20af.png)

---

### Advanced Feature

- Math.floor와 Math.random을 이용해 랜덤하게 보여지는 배경 사진과 명언을 구현

```Javascript
// Random Background Image
const selectImage = background[Math.floor(Math.random() * background.length)];
// Random Quotes
const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];
```

- 현재 사용자의 위치를 알아내기 위해서 Geolocation Web Api를 이용해서 구현

```Javascript
navigator.geolocation.getCurrentPosition(successGeolocation, errorGeolocation);
```
