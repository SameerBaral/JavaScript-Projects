// body ya document kisi ke upar bhi laga skte ho event listener
// body is present inside document

document.body.addEventListener('click',(ev)=>{

    const circle = document.createElement('div');   //div element bana diya 
    circle.className='circle';      //yha pr class assign kar diya
    // circle.classList.add('circle');      //isse bhi class de skte ho ya setattribute se bhi de skte ho

    circle.textContent='Hi'

    const x = ev.clientX;       //x direction ki position nikalega
    const y = ev.clientY;       //y direction ki position nikalega

    circle.style.left=`${x-25}px`  //x ki jo value aya th utna 
    circle.style.top=`${y-25}px`   //top se position kitni hogi css me jo circle ko position diye hai vo

    // 25 ghtaya kyu?
    // kyuki hum jha se click kar rahe hai vahi se to start ho raha na box create hona to hum circle ka center jha chte hai na jha pe click kara hai isliye -25 kara 


    // random background color
    const color=['red','blue','orange','green','purple','#F5FF33','yellow','#A133FF','pink','skyblue','voilet']
    circle.style.backgroundColor = color[Math.floor(Math.random()*color.length)]

    document.body.appendChild(circle);

    // jo div add karte ja rahe hai usko remove bhi to katna hai
    setTimeout(()=>{
        circle.remove();
    },5000)
})
