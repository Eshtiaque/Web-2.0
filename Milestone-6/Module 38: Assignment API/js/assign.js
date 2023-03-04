const  loadPhone =async()=>{
    const url =`https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data =await res.json();
    displayCard(data.data.tools.slice(0,6));
    
    }
    const displayCard =(cards) =>{
            console.log(cards);
    
       const cardContainer = document.getElementById('card-container');
        cardContainer.textContent ='';

    //     //display card found
         cards.forEach(card=>{
            const cardDiv =document.createElement('div');
             cardDiv.classList.add('col');
             cardDiv.innerHTML =`
            <div class="card p-3">
             <img src="${card.image}" class="card-img-top p-3"  alt="...">
            <div class="card-body">
            <h4>Features</h4>
            <ol>
            <li>${card.features[0]?card.features[0]:'No Data Found '}</li>
            <li>${card.features[1]?card.features[1]:'No Data Found '}</li>
            <li>${card.features[2]?card.features[2]:'No Data Found '}</li>
            <li>${card.features[3] ?card.features[3]:'No Data Found '}</li>
            </div>
            <hr class="w-200">
            <div class="d-flex justify-content-between">
                  <div>
                     <h5 class="card-title">${card.name}</h5>
                     
<p class="card-text"> <i class="fa-solid fa-calendar-days"></i> ${card.published_in}</p>
                  </div>
                  <div>

<button onclick="loadModelDetails('${card.id}')" type="button" class="btn btn-warning rounded-circle bg-opacity-50 " data-bs-toggle="modal" data-bs-target="#exampleModal">
<i class="fa-solid fa-arrow-right"></i>
</button>
            
                  </div>
            </div>
            `;
            cardContainer.appendChild(cardDiv);
         })
}

//loading function of extra card.
const button = document.getElementById('btn-show-all');
let isToggled = false;
button.addEventListener('click', function() {
isToggled = !isToggled;

  if (isToggled) {
    button.textContent = 'Loading.....';
  } else {
    button.textContent = 'Something Wrong';
  }
});


      const  ShowAllDataTogether =async()=>{
        const url =`https://openapi.programming-hero.com/api/ai/tools`
        const res = await fetch(url);
        const data =await res.json();
        displayCard(data.data.tools);
        buttonOf();
        }

    const buttonOf = ()=>{
            const showAllButton =document.getElementById('btn-show-all');
            showAllButton.classList.add('d-none');
    }
  

    loadPhone();

//modal part start

    const loadModelDetails= async id=>{
    const url=`https://openapi.programming-hero.com/api/ai/tool/${id}`;
        const res = await fetch(url);
        const data =await res.json();
        displayModelDetails(data.data);
    }
    const displayModelDetails =card =>{
        console.log(card);
   
        const allCardDetails =document.getElementById('modalBody');
        allCardDetails.innerHTML=`
       
        <div class="row row-cols-1 row-cols-md-2 g-4  ">
        <div class="col ">
          <div class="card p-3 bg-light bg-gradient border-5">
            <div>
            <h5 class="card-title">${card.description}</h5>
            </div>
            <div class="card-body d-flex justify-content-around text-center mb-2">
              <div class="bg-warning p-2 rounded-2">
              <p>${card.pricing[0].price?card.pricing[0].price:'Free of Cost'} <br> <span>${card.pricing[0].plan?card.pricing[0].plan:'No Plan'}</span></p>
              </div >
              <div class="bg-info p-2 rounded-2">
              <p>${card.pricing[1].price?card.pricing[1].price:'Free of Cost'} <br> <span>${card.pricing[1].plan?card.pricing[1].plan:'No Plan'}</span></p>
              </div>
              <div class="bg-danger p-2 rounded-2">
              <p>${card.pricing[2].price?card.pricing[2].price:'Free of Cost'} <br> <span>${card.pricing[2].plan?card.pricing[2].plan:'No Plan'}</span></p>
              </div>
              
            
            </div>
            <div class="d-flex "> 
                <div class="pe-5 col-6">
                 <h5>Features</h5>
                 <ul>
                 <li>${card.features[1].feature_name?card.features[1].feature_name:'No Data found'}</li>
                 <li>${card.features[2].feature_name?card.features[2].feature_name:'No Data found'}</li>
                 <li>${card.features[3].feature_name?card.features[3].feature_name:'No Data found'}</li>
                 </ul>
                </div>
                <div class="col-6">
                <h5>Integrations</h5>
                <ul>
                <li>${card.integrations[0]?card.integrations[0]:'No Data Found'}</li>
                <li>${card.integrations[1]?card.integrations[1]:'No Data Found'}</li>
                <li>${card.integrations[2]?card.integrations[2]:'No Data Found'}</li>
                </ul>
                </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card ">
            <img src="${card.image_link[0]}" class="card-img-top" alt="...">
<button type="button" class="btn btn-warning me-2 mt-2 w-25 position-absolute top-0 end-0">
${card.accuracy.score ? card.accuracy.score*100 + '% accuracy': ' '}</button>
            <div class="card-body">
              <h5 class="card-title">${card.input_output_examples[0].input}</h5>
              <p class="card-text">${card.input_output_examples[0].output?card.input_output_examples[0].output:'No data Found'} </p>
            </div>
          </div>
        </div>
      </div>
        
        `;
    }
const allDates=()=>{
    const dates = [
        {
          date: "11/1/2022"
        },
        {
          date: "12/1/2022"
        },
        {
          date: "2/1/2023"
        },
        {
          date: "6/1/2009"
        },
        {
          date: "12/1/2021"
        },
        {
          date: "12/1/2022"
        },  
      
        {
          date: "9/1/2021"
        },
      
        {
          date: "3/1/2021"
        },
      
        {
          date: "4/1/2022"
        },
      
        {
          date: "7/1/2022"
        },
      
        {
          date: "3/1/2018"
        },
        {
            date: "10/1/2022"
          }
      ];
      
      console.log(dates.sort((a, b) => Date.parse(a.date) - Date.parse(b.date)));
    } 
    allDates();