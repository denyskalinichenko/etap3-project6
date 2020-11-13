const input = document.getElementById('pass');
const div = document.querySelector('.message')
const password = "admin";
const message = "Wyjechałem po wprowadzeniu hasła";

// -------"keyup"-------- kiedy klawisza jest naciśnięta i póżniej podniesiona do góry (zwykłe naciśnięcia)
// input.addEventListener("keyup", (e) =>{
//     console.log(e.target.value)
// }) 

// ------"change"-------- jak tylko wychodzimy z inputa - wtedy pokazuje wartość
// input.addEventListener("change", (e) =>{
//     console.log(e.target.value);
// })


// -------"input"------bardziej pasuje bo odpowiada za zmianę w inpucie
input.addEventListener("input", (e) =>{
    if(e.target.value == password){
        div.textContent = message;
        // jeżeli hasło wprowadzone - odrazu czyszczimy go:
        e.target.value = '';
    } else {
        div.textContent = '';
    }
})

// jezeli kliknę w input - doda klasę do input'a
input.addEventListener("focus", (e) => {
    e.target.classList.toggle("active");
})

// jezeli kliknę w input - zabierze klasę od input'a
input.addEventListener("blur", (e) => {
    e.target.classList.toggle("active");
})

