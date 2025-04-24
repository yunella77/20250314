let input;
let slider;
let button;
let jump = false;
let dropdown;
let iframe;

function setup() {  //這是一個設定函數，只會執行一次
  //產生一個畫布，充滿整個視窗，背景顏色為灰色
  createCanvas(windowWidth, windowHeight);
  background(220);
  frameRate(10); // 設置每秒的幀數為10，讓跳動慢一點
  
  // 創建一個輸入框
  input = createInput('教育科技學系');
  input.position(10, 10);
  input.size(200, 40); // 調整輸入框的大小
  input.style('font-size', '20px'); // 設置輸入框裡的字體大小為20px
  
  // 創建一個滑桿
  slider = createSlider(12, 30, 20);
  slider.position(335, 10); // 將滑桿向右移動5個像素
  slider.size(100);
  
  // 創建一個文字標籤
  let label = createDiv('文字大小');
  label.position(240, 10); // 將文字標籤向左移動10個像素
  label.style('font-size', '20px');
  
  // 創建一個按鈕
  button = createButton('跳動');
  button.position(450, 10);
  button.mousePressed(toggleJump);
  
  // 創建一個下拉選單
  dropdown = createSelect();
  dropdown.position(80, 80);
  dropdown.size(100);
  dropdown.option('淡江大學');
  dropdown.option('教育科技學系');
  dropdown.changed(changePage);
  
  // 創建一個iframe
  iframe = createElement('iframe');
  iframe.position(100, 150);
  iframe.size(windowWidth - 200, windowHeight - 220);
  iframe.attribute('src', 'https://www.tku.edu.tw/');
}

function changePage() {
  let selected = dropdown.value();
  if (selected === '淡江大學') {
    iframe.attribute('src', 'https://www.tku.edu.tw/');
  } else if (selected === '教育科技學系') {
    iframe.attribute('src', 'https://www.et.tku.edu.tw/');
  } else if (selected === '教學平台') {
    iframe.attribute('src', 'https://iclass.tku.edu.tw/');  
  }
}

function toggleJump() {
  jump = !jump;
}

function draw() {
  background('#FFED97'); //這是一個繪圖函數，會一直執行
  let textSizeValue = slider.value();
  textSize(textSizeValue);
  textStyle(BOLD); // 設置字體變粗
  textAlign(LEFT, TOP);
  fill('blue'); // 設置字體顏色為藍色
  strokeWeight(1);
  
  let textToDisplay = input.value();
  let spacing = textWidth(textToDisplay) + 20; // 字串與字串間距離為20
  let startX = 0;
  let startY = 100;

  for (let y = startY; y < windowHeight; y += 30) { // 行與行間距離為30
    let yOffset = jump ? random(-5, 5) : 0;
    for (let x = startX; x < windowWidth; x += spacing) {
      text(textToDisplay, x, y + yOffset);
    }
  }
}
