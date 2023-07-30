const h1El = document.querySelector('h1');
console.dir(h1El);
console.log(h1El.textContent);
h1El.textContent = '変更タイトル';

const btnEl = document.querySelector('button');
btnEl.addEventListener('click', (e) => {
  console.dir(e.target);
  console.log(e.target.textContent);
  console.log('hello');
});
