const input = document.getElementById('pass');
const div = document.querySelector('.message')
const password = ["admin", "denis", "olga"];
const message = ["ADMIN", "DENIS", "Olha"];

// wprowadzenia hasła (jednego z tablicy "password" - pokazuje wiadomość("message") która pasuję do indeksu "password")
input.addEventListener("input", (e) => {
    div.textContent = '';
    const text = e.target.value;
    password.forEach((pswrd, index) => {
        if (pswrd === text) {
            div.textContent = message[index];
            e.target.value = '';
        }
    })
})

input.addEventListener("focus", (e) => {
    e.target.classList.toggle("active");
})

input.addEventListener("blur", (e) => {
    e.target.classList.toggle("active");
})