# Projects related to DOM

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("hitesh")

const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach(function(button){
 console.log(button)
 button.addEventListener('click',function(e){
console.log(e)
console.log(e.target)
if(e.target.id === 'grey'){
  body.style.backgroundColor = e.target.id
}
if(e.target.id === 'white'){
  body.style.backgroundColor = e.target.id
}
if(e.target.id === 'blue'){
  body.style.backgroundColor = e.target.id
}
if(e.target.id === 'yellow'){
  body.style.backgroundColor = e.target.id
}
if(e.target.id === 'purple'){
  body.style.backgroundColor = e.target.id
}
 })
})

```


# solution code
## project 2
```
javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(3);
   let message = '';
   if(weight<18.6)
   {
     message = "your weight is less than 18.6";
   }
   else if(weight>18.6 && weight < 24.9)
   {
     message = "your weight lies in noraml range(18.6 to 24.9)";
   }
   else{
    message = "you are overweight(greater than 24.9)";
   }


    results.innerHTML = `<span>${bmi} - ${message}</span>`;
  }
});

```


## Project 3 solution code
```javaScript
const clock = document.getElementById('clock')

setInterval(function(){
  let date = new Date()
  //console.log(date.toLocaleString());
  clock.innerHTML = date.toLocaleTimeString();
},1000)
```

