//const moment = require('moment');

let now = moment().format('MM DD YYYY');
console.log(now);
//document.querySelector("#todayDate").textContent = "test";
document.querySelector("#todayDate").textContent = now;

let data = [
    {
        time: '09:00am',
        schedule: ''
    },
    {
        time: '10:00am',
        schedule: ''
    },
    {
        time: '11:00am',
        schedule: ''
    },
    {
        time: '12:00pm',
        schedule: ''
    },
    {
        time: '01:00pm',
        schedule: ''
    },
    {
        time: '02:00pm',
        schedule: ''
    },
    {
        time: '03:00pm',
        schedule: ''
    },
    {
        time: '04:00pm',
        schedule: ''
    },
    {
        time: '05:00pm',
        schedule: ''
    }
]

$('.clear-button').on('click', function(){
    localStorage.removeItem('data')
    window.location.reload()
})

function initializeApp(){
    if(localStorage.getItem("data")){
        let store = JSON.parse(localStorage.getItem('data'))
        data = store
    }
}

initializeApp();

const saveInput = (i) => {
    data[i].schedule = $(`.task_${i}`).val()
    console.log(data)
    localStorage.setItem('data', JSON.stringify(data))
    alert('Data saved')
}


let blocks = data.map((block, i) => {
    return (
        `<div class="schedule-block">
        <div class="row">
            <div class="col-md-2 m-0 p-0">
                <div class="time text-right">
                    <p>${block.time}</p>
                </div>
            </div>
            <div class="col-md-8 m-0 p-0">
                <div class="task">
                
                    <input style="background: ${block.time.replace(':00', '') === moment().format('hha') ? 'grey' : moment(block.time.replace(':00', ''), 'hhA').isBefore(moment()) ? 'red' : 'green' };" class="task_${i}" value="${block.schedule}" />
                </div>
            </div>
            <div class="col-md-2 m-0 p-0">
                <div class="save" onclick="saveInput(${i})">
                    <i class="far fa-save" ></i>
                </div>
            </div>
        </div>
    </div>`
    )
})

let html = blocks.join(" ")

$('.schedule-container').html(html)

