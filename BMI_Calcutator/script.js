const btn = document.querySelector('button');

btn.addEventListener('click',()=>{
    const inp1 = parseFloat(document.getElementById('height').value);
    // console.log(inp1);

    const inp2 = parseFloat(document.getElementById('weight').value);

    // if nan height or weight
    if(isNaN(inp1)|| isNaN(inp2)){
        console.log('Enter a valid height or weight');
        return;
    }

    // change height meter to cm
    const heightM = inp1/100;

    const bmi = inp2/(heightM*heightM);

    let category ='';

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    const res = document.getElementById('result');
    res.innerText=`BMI is : ${bmi.toFixed(2)} (${category})`

})