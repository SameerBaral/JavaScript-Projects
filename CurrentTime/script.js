
function timing(){
    const timer = document.getElementById('root')
    const now = new Date();
    // console.log(now);

    // timer.append(now);

    const indianTime = now.toLocaleTimeString()

    timer.innerHTML = indianTime
}


// update time every second 

setInterval(timing,1000)




// const timer = document.getElementById('root')

// timer.style.fontSize = '200px';
// timer.style.display = "flex"
// timer.style.justifyContent = "center"
// timer.style.alignItems = "center"
// timer.style.height = "100vh"