// adding in structure:

// get elem in const to use later
const slider = document.getElementById('slider');

// create extandable data array of objects
const slidesData = [
  {
    title: 'Title1',
    src: 'imgs/Untitled 16 (2)-pdf.png'
  },
  {
    title: 'Title2',
    src: 'imgs/Untitled 15-pdf.png'
  },
  {
    title: 'Title3',
    src: 'imgs/Untitled 14-pdf.png'
  },
]

// creating func to generate content inside -> const slider
function generateSlides () {
  // creating parent element ul for use just after creating
  // every li to every slidesData array`s object
  // thats why it is outside of cicle
  const ulElement = document.createElement('ul');

  // start cicle for every every slidesData array`s object
  slidesData.forEach(i => { 
    // lets name every slidesData array`s object as i
    // console.log('i', i) === { title: 'Title1', src: 'imgs/Untitled 16 (2)-pdf.png'}

    // creating li tags for every slidesData array`s object (i)
    const liElement = document.createElement('li');
    
    // creating img tags every slidesData array`s object (i)
    const imgItem = document.createElement('img');
    
    imgItem.classList.add('my-img'); // set styles to every imgItem
    imgItem.src = i.src; // set src to every imgItem

    liElement.appendChild(imgItem); // placing imgItem inside li
    ulElement.appendChild(liElement); // placing liElement inside ulElement
    slider.appendChild(ulElement); // placing ulElement inside slider
  })
}

generateSlides()



// ===============================================
// animation


// after generateSlides there are full ul-li-img structure and styles, now it can be used below
// if this line whould be upstairs it whould be empty - it can be received only after func generateSlides finish
const slides = slider.querySelectorAll('li');
const slideCount = slides.length;
let activeSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {  
    slide.style.display = i === index? 'block' : 'none';
  });
}


setInterval(() => {
  slides[activeSlide].classList.remove('active'); 
  activeSlide++; 
  
  if (activeSlide === slideCount) { 
    activeSlide = 0;
  }
  
  slides[activeSlide].classList.add('active');
  showSlide(activeSlide); 
}, 5000);