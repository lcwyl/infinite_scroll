let preloading = false; //przed zaladowaniem się danych
const showLoader = () => {
    let loader = document.querySelector(".donut");
    loader.style.display = "block";
    preloading = true; //jest donut
}
const hideLoader = () => {
    let loader = document.querySelector(".donut");
    loader.style.display = "none";
    preloading = false; //brak donut
}

const getData = () => {
    console.log('koniec strony')
    if (!preloading) { //ładujemy donut to fetch - nie jestem w trakcie prealoafingu
        showLoader()
        fetch('https://akademia108.pl/api/ajax/get-users.php')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                for (let user of data) {
                    let pOne = document.createElement("p");

                    let pTwo = document.createElement("p");

                    let pThree = document.createElement("p");



                    pOne.innerText = 'User ID: ' + user.id;
                    pTwo.innerText = 'User Name: ' + user.name;
                    pThree.innerHTML = 'User Name: ' + user.website + "<br>------------";
                    document.body.appendChild(pOne)
                    document.body.appendChild(pTwo)
                    document.body.appendChild(pThree)



                }

                document.body.appendChild(document.createElement("hr"))
                hideLoader()

            })
            .catch(error => {
                console.error(error)
            })
    }
}



const scrollToEndOfPage = () => {
    let d = document.documentElement; //to jest html czy pozycja od htmlu słuzy do codczytywanie np: pozycji
    console.log(d)

    /// wysokość przeskrolowana
    //aby sprawdzic czy jesteśmy na dole musimy dodać wyokość przeskrolowaną + wysokość 

    let s = d.scrollTop; //przeskrolowana wysokość
    let ch = d.clientHeight; //wew.wysokośc przeglądarki
    let sh = d.scrollHeight; //wysokość całej strony
    console.log(`wysokość przeskrolowana ${s} / wysokość wewnętrzna okna przeglądarki ${ch}/  długość całej strony od góry do dołu ${sh} czyli ${s + ch === sh}`);


    if (s + ch >= sh) {

        getData()
    }



}
window.addEventListener("scroll", scrollToEndOfPage)