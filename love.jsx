* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #120b10;
  color: white;
}

.app {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: linear-gradient(
    135deg,
    #160b12,
    #351522,
    #170b12
  );
}

.welcome,
.stop-page,
.memories,
.final {
  width: 100%;
  max-width: 500px;
  text-align: center;
}

.heart {
  font-size: 70px;
  margin-bottom: 20px;
}

h1 {
  font-size: 30px;
  margin-bottom: 15px;
}

h2 {
  margin-bottom: 25px;
}

p {
  color: #ddd;
  line-height: 1.7;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 30px;
  flex-wrap: wrap;
}

button {
  border: none;
  padding: 14px 25px;
  border-radius: 30px;
  font-size: 15px;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  transform: scale(1.05);
}

.continue {
  background: #ff4f81;
  color: white;
}

.stop {
  background: #333;
  color: white;
}

.photo-box {
  width: 100%;
  height: 500px;
  overflow: hidden;
  border-radius: 20px;
  background: #222;
}

.photo-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.note {
  margin: 25px 10px 10px;
  font-size: 18px;
  font-style: italic;
}

.counter {
  margin-top: 15px;
  color: #aaa;
}

.navigation {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 25px;
}

.navigation button {
  background: #ff4f81;
  color: white;
  min-width: 100px;
}

.navigation button:disabled {
  background: #555;
  cursor: not-allowed;
}

.final p {
  font-size: 17px;
  margin: 25px 0;
}

.final h2 {
  font-size: 20px;
  font-weight: normal;
  margin-bottom: 30px;
}

@media (max-width: 600px) {
  h1 {
    font-size: 25px;
  }

  .photo-box {
    height: 430px;
  }

  .heart {
    font-size: 60px;
  }
}