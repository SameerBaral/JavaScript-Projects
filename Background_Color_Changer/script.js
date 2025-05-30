// selectingroot elemet
// type-1

// const red = document.getElementById('red')
// const green = document.getElementById('green')
// const blue = document.getElementById('blue')
// const yellow = document.getElementById('yellow')


// red.addEventListener('click',()=>{
//     document.body.style.backgroundColor = 'red'
// })
// green.addEventListener('click',()=>{
//     document.body.style.backgroundColor = 'green'
// })
// blue.addEventListener('click',()=>{
//     document.body.style.backgroundColor = 'blue'
// })
// yellow.addEventListener('click',()=>{
//     document.body.style.backgroundColor = 'yellow'
// })


// /isme ye dikkat hai ki jitne bhi btn hoga sbke liye even lagate firoge


// -----------------------------------------------------------------



// type-2 

// const btn = document.querySelectorAll('button')
// console.log(btn);

// btn.forEach((buttons)=>{
//     // console.log(buttons);
//     // console.log(buttons.id);
//     buttons.addEventListener('click',()=>{

//         document.body.style.backgroundColor=buttons.id
//     })
// })


// isme bhi to event sabhi btns ke liye lag rah ahai


// /------------------------------------------------------------------------

// type-3.
// ye most optimise way hai

// sidhe root me eventlistener lagado event delegation se pata chal jaega ki kis child se btn click hua hai

const root = document.getElementById('root')

root.addEventListener('click',(e)=>{
    // console.log(e.target);
    // console.log(e.type);
    // console.log(e.target.tagName);

    if(e.target.tagName ==='BUTTON')
        document.body.style.backgroundColor = e.target.id
})

