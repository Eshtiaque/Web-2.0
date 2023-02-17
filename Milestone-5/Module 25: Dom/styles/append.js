// console.log('I am ok');
//where to add?
const placesList = document.getElementById('places-list')
// console.log(placesList);
//what to be added?
const li = document.createElement('li');
li.innerText ='pahartoli';
//3 add the child..
placesList.appendChild(li);

// 1.where to add?
const mainContainer= document.getElementById('main-container');
//what to be added?
const section =document.createElement('section');
const h1 =document.createElement('h1');
h1.innerText ='My Food list';
section.appendChild(h1);


const ul =document.createElement('ul');
const li1= document.createElement('li');
li1.innerText='biriyani';
ul.appendChild(li1);


const li2= document.createElement('li');
li2.innerText='borhani';
ul.appendChild(li2);


const li3= document.createElement('li');
li3.innerText='kacci';
ul.appendChild(li3);


section.appendChild(ul);
mainContainer.appendChild(section);


//set inner html directory
const sectionDress =document.createElement('section');
sectionDress.innerHTML = `
<h1>My dress section <h1>
<ul>
<li>Apple </li>
<li>Mango</li>
<li>Banana</li>
</ul>
`
mainContainer.appendChild(sectionDress);