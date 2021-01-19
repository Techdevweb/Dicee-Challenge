randomNumber1=Math.random()
randomNumber1=Math.floor(randomNumber1*6)+1
var num1='./images/dice'+randomNumber1+'.png'

document.getElementsByClassName('img1')[0].setAttribute('src',num1)

randomNumber1=Math.random()
randomNumber1=Math.floor(randomNumber1*6)+1
var num2='./images/dice'+randomNumber1+'.png'

document.getElementsByClassName('img2')[0].setAttribute('src',num2)

// document.querySelector('h1').textContent="Hello world"
if(num1===num2){
  document.querySelector('h1').textContent="Draw!"
}
else if(num1>num2){
  document.querySelector('h1').textContent="Player 1 Wins!"
}
else{
  document.querySelector('h1').textContent="Player 2 Wins!"
}
