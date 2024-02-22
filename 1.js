const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()


    const height = parseInt(document.querySelector("#height").value)

    const weight = parseInt(document.querySelector("#weight").value)

    const results = document.querySelector('#results')

    if(height === " " || height< 0 || isNaN(height)){
    results.innerHTML = `please give valid height ${height}`;

    }else if(weight === " " || weight<0 || isNaN(weight)){
        results.innerHTML = `please give valid height ${weight}`;
    } else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        results.innerHTML = ` Your BMI IS :- ${bmi}`
    }


})


// pahle form ko select kro phir uspe event lagao kon sa toh submit pai jo v data rahta wo url mai jane se prevent ho phle ye lgayenge. phir select karenge height or weight ko or uska value lenge .value lga ke phir result ko select karenge or sbko variable mai store karenge.

// ab validation lgayenge sbpe or sara validation match huwa toh results mai bmi k value print hoga.