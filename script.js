var name = "";


function showPopup(){
    document.getElementById('popUp').style.display = "block";
}

function getValue(){
    // console.log(document.getElementById('inputField').value);
    var taskName = document.getElementById('inputField').value;
    if(taskName.length == 0){
        alert("The name of the task needs to be more then 0");
    }
    else{
        addTask(taskName);
        document.getElementById('popUp').style.display = "none";
    }
    
}

function addTask(name){
    var newTask = document.createElement('button');
    newTask.className = 'Task';
    newTask.id = 'TaskID'
    newTask.onclick = function(){
        // get the screen container
        // get the name of the task
        // set as title
        var p = document.getElementById('textID');
        p.textContent += name;
        document.getElementById('list-containerID').style.display = 'none';
        document.getElementById('task-containerID').style.display = 'block';
        document.getElementById('TaskID').style.display = 'none';
        document.body.style.overflow = 'hidden';
    }
    var newTaskText = document.createElement('p');
    newTaskText.textContent = name;
    newTaskText.className = 'text';
    newTask.appendChild(newTaskText);
    var currDiv = document.getElementById('create-task-button');
    document.body.append(newTask);
}



function closePopup(){
    document.getElementById('popUp').style.display = "none";
}

function clearTextArea(){
    document.getElementById('des-textID').value = "";
}

function goBack(){
    document.getElementById('task-containerID').style.display = "none";
    document.getElementById('list-containerID').style.display = "block";
}


//what I need to do is to create a popup that request the time for the timer and then put these values into the correct places in the timer UI and then I could use fixed values.

// function startCountdown(){
//     var startingMinutes = document.getElementById('minutesID').value;
//     let time = startingMinutes *60;
//     var Seconds = document.getElementById('secondsID').value;
//     setInterval(updateCountDown, 1000);
//     function updateCountDown(){
//         sec = Seconds.value--;
//         console.log(Seconds.value);
//     }
// }

function startTimerBtnFunc(){
    var minutes = document.getElementById('minutesID');
    var seconds = document.getElementById('secondsID');
    minutes.innerHTML = '10';
}


function showTimerPopup(){
    document.getElementById('timerPopUp').style.display = "block";
}

function closeTimerPopup(){
    document.getElementById('timerPopUp').style.display = "none";
}

function startTimer(){
    var finishCountdown  = false;
    let minutesInput = document.getElementById('minutesFormID').value;
    let secondsInput = document.getElementById('secondsFormID').value;

    let minutes = document.getElementById('minutesID');
    let seconds = document.getElementById('secondsID');

    //setting the value of the minutes and seconds

    if (secondsInput.length && minutesInput.length === 0){
        alert("You need to have at least one number to start the timer");
    }else{     
        minutes.innerHTML = minutesInput;
        if(secondsInput.length === 1){
            seconds.innerHTML = "0" + secondsInput;
        }else{
            seconds.innerHTML = secondsInput;
        }

        document.getElementById('timerPopUp').style.display = "none";

        var interval = setInterval(countdown, 1000);
        

        function countdown(){
            // seconds--;
            // if (seconds.innerHTML === 0 && minutes.innerHTML === 0){
            //     alert("Timer is up");
            // }else{
            //     console.log(seconds.innerHTML);
            //     if(seconds.innerHTML === 0 && minutes.innerHTML > 0){
            //         minutes.innerHTML = minutes.innerHTML - 1;
            //     }else{
            //         seconds.innerHTML = seconds.innerHTML - 1;
            //     } 
            // }
            if (seconds.innerHTML == 0 && minutes.innerHTML == 0){
                seconds.innerHTML = "0" + seconds.innerHTML;
                alert("Timer is over");
                clearInterval(interval);
            }else{
                if(minutes.innerHTML > 0 && seconds.innerHTML == 0){
                    seconds.innerHTML = 59;
                    minutes.innerHTML = minutes.innerHTML - 1;
                }else{
                    if(seconds.innerHTML.length == 1){
                        seconds.innerHTML = seconds.innerHTML - 1;
                    }
                    else{
                        seconds.innerHTML = seconds.innerHTML - 1;
                    }
                }
            }
        }  
    }

}

function create_html_file(){
    const fs = require('fs')
    var data = `
        <html>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="stylesheet" href="styles.css"/>
                <script src="script.js"></script>
            <div class="timer-popup-container" id="timerPopUp">
            <lable for="timer" class="time">Timer</lable>
                <br/>
                <div class="form-container">
                    <input type="number" class="minutesForm" id="minutesFormID" placeholder="MM" value="0"/>
                    <div class="sep">:</div>
                    <input type="number" class="secondsForm" id="secondsFormID" placeholder="SS" value="00"/>
                </div>
                <br/>    
                <div class="button-container-sub">
                    <button class="submit" onclick="startTimer()">Start timer</button>
                </div>
                <div class="button-container-can">
                    <button class="cancel" onclick="closeTimerPopup()">Cancel</button>
                </div>
            </div>

            <div class="task-container" id="task-containerID">
            <div class="header" id="headerID">
            <div class="title-continer" id="title-containerID">
                <p class="text" id="textID"></p>
            </div>
        </div>
            <div class="description-container">
                <p class="title">description</p>
                <textarea type="text" placeholder="Type something that describes the task. like: homework, list of product, the assignment ect.." class="des-text" id="des-textID">
                </textarea>
            </div>
            <div class="timer-container" id="timer-containerID">
                <div class="nums-container">
                    <div class="minute-num" id="minutesID">0</div>
                    <div class="seprerator">
                        <div class="sep1"></div>
                        <div class="sep2"></div>
                    </div>
                    <div class="second-num" id="secondsID">00</div>
                </div>
            </div>
            <div class="start-timer-button-container">
                <button class="start-timer-btn" id="start-timer-btnID" onclick="showTimerPopup()">
                    <div class="text">
                        Start timer
                    </div>
                </button>
            </div>

            <div class="back-button-container">
                <button class="back-btn" id="back-btnID" onclick="goBack()">
                    <div class="text">
                        Go back
                    </div>
                </button>
            </div>
            </div>
        </html>`
        fs.writeFile('test.html', data, (err) => {
            if (err) throw err;
        })
}