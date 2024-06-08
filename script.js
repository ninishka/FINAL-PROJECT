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
    src: 'imgs/Untitled 16 (2)-pdf.png'
  },
  {
    title: 'Title3',
    src: 'imgs/Untitled 16 (2)-pdf.png'
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




//
// animation of imgs//


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



function changeSlide (movingForward = true) { // here movingForward is true by default, unless i send other value instead
  slides[activeSlide].classList.remove('active');

  if (movingForward) {
    activeSlide++;
    if (activeSlide === slideCount) {
      activeSlide = 0;
    }
  } else {
    activeSlide--;
    if (activeSlide < 0) {
      activeSlide = slideCount - 1; 
    }
  }

  slides[activeSlide].classList.add('active');
  showSlide(activeSlide);
};

setInterval(() => {
  changeSlide()
}, 5000);

// Next button click event
document.getElementById('next').addEventListener('click', function() {
  changeSlide()
});

// Previous button click event
document.getElementById('prev').addEventListener('click', function() {
  changeSlide(false) // so here i send false, and thats mean movingForward will be false
});





///progressbar///=========

const progressBarData = [
  { id: "myBar1", finalWidth: 90,  width: 10  },
  { id: "myBar2", finalWidth: 85,  width: 10 },
  { id: "myBar3", finalWidth: 45,  width: 10  },
  { id: "myBar4", finalWidth: 20, width: 10 },
];



//observer 

function move() {
  let width = 10;

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = setInterval(frame, 50);

        function frame() {
          const targetWidth = progressBarData.find(bar => bar?.id === entry?.target?.id)?.finalWidth || 20; //not 100
          // const targetStartWidth = progressBarData.find(bar => bar?.width === entry?.target?.width)?.finalWidth || 20; //not 100
          // if (targetWidth === 100) console.log('targetWidth 100', targetWidth)
            // console.log('targetWidth', targetWidth)

          if (width >= targetWidth) {
            // console.log('width >= targetWidth', width, width >= targetWidth)
            clearInterval(id);
          } else {
            width++;
            // console.log('width', width)
            progressBarData.forEach(bar => {
              // if (width%5) console.log('bar', bar)
              //   console.log('entry.target.id', entry.target.id)

              if (bar.id === entry?.target?.id) {
                entry.target.style.width = width + '%';
              }
            });
          }
        }
      }
    });
  });

  progressBarData.forEach(data => {
    observer.observe(document.getElementById(data.id));
  });
}

document.addEventListener('DOMContentLoaded', move);







// GENERATEBOX func
// 1 create div BOX
// 2 inside create div img-container
// 3 inside create img-itself
// 4 inside create p label-box
// 5 inside create p description-box
// 6 apendChild img-itself to img-container
// 7 apendChild img-container to BOX
// 8 apendChild label-box
// 9 apendChild description-box


// created extandable data array of objects
const flexCont = document.getElementById('flexCont');
const boxesData = [
  {
    title: 'Front End Development',
    description: 'Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor',
    src: 'imgs2/design.svg'
  },
  {
    title: 'Best Service',
    description: 'Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor',
    src: 'imgs2/service.svg'
  },
  {
    title: 'Unique Ideas',
    description: 'Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor',
    src: 'imgs2/ideas.svg'
  },
  {
    title: 'Pixel Perfect',
    description: 'Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor',
    src: 'imgs2/pixel.svg'
  },
  {
    title: 'Unique Ideas',
    description: 'Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor',
    src: 'imgs2/ideas.svg'
  },
  {
    title: 'Design Analysis',
    description: 'Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor',
    src: 'imgs2/analysis.svg'
  },
  {
    title: 'Fully Managed',
    description: 'Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor',
    src: 'imgs2/chart.svg'
  },
  {
    title: 'Helpful Support',
    description: 'Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor',
    src: 'imgs2/support.svg'
  },
]

function flexBoxes () {
  boxesData.forEach(i => { 
    const box = document.createElement('div');
    box.classList.add('box');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const imgitself = document.createElement('img');
    imgitself.classList.add('img-itself');
    imgitself.src = i.src;
    
    const labelBox = document.createElement('h5');
    labelBox.classList.add('label-box');
    labelBox.textContent = i.title;

    const descriptionBox = document.createElement('p');
    descriptionBox.classList.add('description-box');
    descriptionBox.textContent = i.description;

    imgContainer.appendChild(imgitself);
    box.appendChild(imgContainer);
    box.appendChild(labelBox);
    box.appendChild(descriptionBox); 

    flexCont.appendChild(box)
  })

}

flexBoxes()


//==================
///recommendations///

const changedContentForCheckboxes = [
  {
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repudiandae ex officiis molestiae soluta harum',
    srcPerson: 'imgs2/d3.svg',
    srcQuote: 'imgs2/quote.svg',
    role: 'Junior front end Developer',
    name: 'Sarah Sharashidze',
  },
  {
    description: 'Esse repudiandae ex officiis molestiae soluta harum. Esse repudiandae ex officiis molestiae soluta harum. Esse repudiandae ex officiis molestiae soluta harum',
    srcPerson: 'imgs2/d4.svg',
    srcQuote: 'imgs2/quote.svg',
    role: 'Middle front end Developer',
    name: 'Sarah Sharashidze'
  },
  {
    description: 'Esse repudiandae ex officiis molestiae soluta harum. Esse repudiandae ex officiis molestiae soluta harum',
    srcPerson: 'imgs2/d5.svg',
    srcQuote: 'imgs2/quote.svg',
    role: 'Senior front end Developer',
    name: 'Sarah Sharashidze'
  }
]


function updateContent(contentData) {
  const overlayText = document.querySelector('.overlay-text');
  const personIcon = document.querySelector('.person-icon');
  const quoteItself = document.querySelector('.quote-itself');
  const ptext = document.querySelector('.ptext');
  const namename = document.querySelector('.namename');

  overlayText.textContent = contentData.description;
  personIcon.src = contentData.srcPerson;
  quoteItself.src = contentData.srcQuote;
  ptext.textContent = contentData.role;
  namename.textContent = contentData.name;
}

// Initialize content with the first item
updateContent(changedContentForCheckboxes[0]);

document.addEventListener('DOMContentLoaded', function() {
  // SO HERE WE JUST FILL STRUCTURE BY CONTENT, BUT NOT CREATE STRUCTURE

  // Select all checkboxes within the group
  const checkboxes = document.querySelectorAll('.rectangle-button1');

  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      // Get the name of the current checkbox group
      
      const groupName = this.name;

      // Iterate over all checkboxes in the group
      checkboxes.forEach(function(otherCheckbox) {
        // Uncheck other checkboxes if they belong to the same group and are not the target of the change
        if (otherCheckbox!== checkbox && otherCheckbox.name === groupName) {
          otherCheckbox.checked = false;
        }
      });

      const currentIndex = Array.from(checkboxes).findIndex(cb => cb.checked);

      // Update the content based on the found index
      if (currentIndex!== -1) {
        updateContent(changedContentForCheckboxes[currentIndex]);
      } else {
        // Reset to the first item if no checkbox is checked
        updateContent(changedContentForCheckboxes[0]);
      }
    });
  });
});


///===========
///latest projects///

const myProjectsData = [
  {
    id: '1',
    src: "imgs2/heart.svg",
    time: "2 MONTH AGO",
    title: "middle",
    color: '#555555',
    link: "https://ninishka.github.io/middle/",

  },
  {
    id: '2',
    src: "imgs2/heart.svg",
    time: "2 WEEKS AGO",
    title: "Validations",
    color: "#848484",
    link: "https://ninishka.github.io/js-assignment-18/",
  },
  {
    id: '3',
    src: "imgs2/heart.svg",
    time: "2 MONTH AGO",
    title: "Groupwork",
    color: '#555555',
    link: "https://ninishka.github.io/groupwork2/",
  },
  {
    id: '4',
    src: "imgs2/heart.svg",
    time: "2 MONTH AGO",
    title: "Grid",
    color: '#848484',
    link: "https://ninishka.github.io/assignment-10/",
  },
  {
    id: '5',
    src: "imgs2/heart.svg",
    time: "2 month Ago",
    title: "mozilla",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox",
    color: '#555555'
  },
  {
    id: '6',
    src: "imgs2/heart.svg",
    time: "2 month Ago",
    title: "mozila2",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox",
    color: '#848484',
  },
]



const latestProjects = document.getElementById('latestProjects');

function generadingMyProjects () {
  myProjectsData.forEach(({color, src, time, title, link, id}) => { 
    const projectBox = document.createElement('div');
    projectBox.classList.add('project-box');

    projectBox.style.backgroundColor = color 

    const imgProjContainer = document.createElement('div');
    imgProjContainer.classList.add('img-proj-container');


    const imgitself = document.createElement('img');
    imgitself.classList.add('img-itself');
    imgitself.src = src;
    
    const monthAgo = document.createElement('h5');
    monthAgo.classList.add('month-ago');
    monthAgo.textContent = time;

    const titleBox = document.createElement('a');
    titleBox.classList.add('title-box');
    titleBox.textContent = title;
    titleBox.href = link;
    titleBox.setAttribute('target', '_blank');

    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('content-wrapper');
    contentWrapper.id = id;0

    contentWrapper.style.visibility = 'hidden' 




    imgProjContainer.appendChild(imgitself);
    contentWrapper.appendChild(imgProjContainer);
    contentWrapper.appendChild(monthAgo);
    contentWrapper.appendChild(titleBox); 
    projectBox.appendChild(contentWrapper);

    latestProjects.appendChild(projectBox)
  })  
}
generadingMyProjects()


const navBox = document.getElementById('navBox');





function generadingNavigations () {
  const newArr = [{ id: '0', title: 'All' }, ...myProjectsData] 
  // here i created new array
  // add new object { title: 'All' } as new element in there so now it is [{ id: '0', title: 'All' }]
  // after spreading all elements from myProjectsData by '...'-operator and now it is [{ id: '0', title: 'All' }, {otherobject}, {otherobject}, {otherobject} .........]

  const navBtnWrapper = document.createElement('div')
  navBtnWrapper.classList.add('nav-btn-wrap')


  newArr.forEach(({ id, title }) => {
    // console.log('id', id, title) this how i can receive i.id and i.title 

    const navProjectBtn = document.createElement('button');
    navProjectBtn.classList.add('nav-button');
    navProjectBtn.textContent = title;


    // here i create event if click - call func inside 
function toggleVisibility(hui, targetId) {
  hui.forEach(each => {
    if (each.id === targetId) {
      each.style.visibility = 'visible';
      each.style.backgroundColor = '#000000';
    } 

    if (each.id !== targetId) {
      each.style.visibility = 'hidden';
    }


    if (id === "0") {
      each.style.visibility = 'visible';
      each.style.backgroundColor = '#000000';

    }
  });
}

// Then, in your event listener:
navProjectBtn.addEventListener('click', function() {
  const hui = latestProjects.querySelectorAll('.content-wrapper');
  toggleVisibility(hui, id);
});
    

    navBtnWrapper.appendChild(navProjectBtn)
  })

  navBox.appendChild(navBtnWrapper)
}

generadingNavigations()



//latest articles//

const articlessData = [
  {
    id: '1',
    imgsrc: "imgs2/designer.svg",
    company: "IN FREELANCING COMPANY",
    occupation: "FRONT END DEVELOPER",
    someText: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est dolor sit amet.",
    date: "2011 - 2012"
  },
  {
    id: '2',
    imgsrc: "imgs2/aplication.svg",
    company: "IN FREELANCING COMPANY",
    occupation: "FRONT END DEVELOPER",
    someText: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est dolor sit amet.",
    date: "2011 - 2012"
  },
  {
    id: '3',
    imgsrc: "imgs2/adviser.svg",
    company: "IN FREELANCING COMPANY",
    occupation: "FRONT END DEVELOPER",
    someText: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est dolor sit amet.",
    date: "2011 - 2012"
  }

]

const latestArticles = document.getElementById('latestArticles');

function flexBoxes2 () {
  articlessData.forEach(i => { 
    const divBox = document.createElement('div');
    divBox.classList.add('div-box');

    const divForFirstCont = document.createElement('div');
    divForFirstCont.classList.add('div-for-cont');

    const imgWrap = document.createElement('div');
    imgWrap.classList.add('img-wrap');

    
    const imgItem = document.createElement('img');
    imgItem.classList.add('icon');
    imgItem.src = i.imgsrc;

    const textWrapper = document.createElement('div');
    textWrapper.classList.add('text-wrap');
    
    const labelBox = document.createElement('h6');
    labelBox.classList.add('company');
    labelBox.textContent = i.company;

    
    const occupation = document.createElement('h2');
    occupation.classList.add('occupation');
    occupation.textContent = i.occupation;

    const someText = document.createElement('p');
    someText.classList.add('some-text');
    someText.textContent = i.someText;

    const someLink = document.createElement('a');
    someLink.classList.add('some-link');
    someLink.textContent = 'READ MORE';
    someLink.href = 'index.html';

    const numberWrap = document.createElement('div');
    numberWrap.classList.add('number-wrap');

    const year = document.createElement('h2');
    year.classList.add('year-wrap');
    year.textContent = i.date;

    const coloredEmpty = document.createElement('div');
    coloredEmpty.classList.add('empty')
    

    if(i.id === '2') {
      divBox.style.flexDirection = 'row-reverse'
      divForFirstCont.style.minWidth = '40%'
    }

    divBox.appendChild(divForFirstCont);
    textWrapper.appendChild(imgWrap);
    imgWrap.appendChild(imgItem);
    divForFirstCont.appendChild(textWrapper);
    textWrapper.appendChild(labelBox);
    textWrapper.appendChild(occupation);
    textWrapper.appendChild(someText);
    textWrapper.appendChild(someLink);
    
    divBox.appendChild(numberWrap);
    numberWrap.appendChild(year);

    divBox.appendChild(coloredEmpty);

    latestArticles.appendChild(divBox)
  })

}

flexBoxes2()



//rosa team//


const teamClients = [
  {
    id: '1',
    title: 'CLIENT 2',
    text: 'Lorm ipm dolr amt consect mag maiores.Ipsa dolor sit magnam maores.'
  },
  {
    id: '1',
    title: 'CLIENT 2',
    text: 'Lorm ipm dolr amt consect mag maiores.Ipsa dolor sit magnam maores.'
  },
  {
    id: '1',
    title: 'CLIENT 2',
    text: 'Lorm ipm dolr amt consect mag maiores.Ipsa dolor sit magnam maores.'
  },
  {
    id: '1',
    title: 'CLIENT 2',
    text: 'Lorm ipm dolr amt consect mag maiores.Ipsa dolor sit magnam maores.'
  },
  {
    id: '1',
    title: 'CLIENT 2',
    text: 'Lorm ipm dolr amt consect mag maiores.Ipsa dolor sit magnam maores.'
  },
]

const rosaTeam = document.getElementById('rosaTeam');

function rosafunc () {
  teamClients.forEach(i => {
    const kubiksWrap = document.createElement('div');
    kubiksWrap.classList.add('kubiks-wrap');

    const text = document.createElement('p');
    text.textContent = i.title;




    kubiksWrap.appendChild(text);
    rosaTeam.appendChild(kubiksWrap);
  })
}
rosafunc()



