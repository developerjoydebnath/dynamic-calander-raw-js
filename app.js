

const yearElement = document.getElementById('year');
const monthElement = document.getElementById('month');
const dateElement = document.querySelector('.dates')
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');



const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();
let currentDate = date.getDate();


const renderCalender = () => {
    const lastDateOfMonth = new Date(currentYear,currentMonth + 1, 0).getDate();
    const lastDateOfPreviousMonth = new Date(currentYear,currentMonth , 0).getDate();
    const firstWeekDayOfMonth = new Date(currentYear,currentMonth , 1).getDay();
    const lastWeekDayOfMonth = new Date(currentYear,currentMonth , lastDateOfMonth).getDay();
    
    let liTag = ''

    if(currentMonth > 11) {
        currentMonth = 0;
        currentYear = currentYear + 1;
    }

    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear = currentYear - 1;
    }

    for (let i = firstWeekDayOfMonth; i > 0; i--) {
        liTag +=  `<li class="inactive-days month-day"> ${lastDateOfPreviousMonth + 1 - i} </li>`;
        dateElement.innerHTML = liTag;
    }

    for ( let i = 1; i <= lastDateOfMonth; i++ ) {
        liTag +=  `${i === currentDate && currentMonth === date.getMonth() && currentYear === date.getFullYear() ? `<li class="current-day month-day"> ${i} </li>` : `<li class="month-day"> ${i} </li>`}`;
        dateElement.innerHTML = liTag;
    }

    for (let i = 1; i < 7 - lastWeekDayOfMonth; i++) {
        liTag +=  `<li class="inactive-days month-day"> ${i} </li>`;
        dateElement.innerHTML = liTag;
    }

    monthElement.innerText = months[currentMonth];
    yearElement.innerText = currentYear;
}
renderCalender()

prevBtn.addEventListener('click' , () => {
    currentMonth = currentMonth - 1
    renderCalender();
})

nextBtn.addEventListener('click' , () => {
    currentMonth = currentMonth + 1
    renderCalender();
})


