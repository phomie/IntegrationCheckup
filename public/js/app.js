console.log("i am an js file");
const weatherform = document.querySelector("#weather");
const urlcollectorform = document.querySelector("#urlcollectorform");

const urlsearch = document.querySelector("#urlcollector");
const search = document.querySelector("input");

const messageOne = document.querySelector("#messagone");
const messageTwo = document.querySelector("#messagtwo");

const jsonTwo8 = document.querySelector("#jsonmessage9");

const jsonOne = document.querySelector("#jsonmessage1");
const jsonTwo = document.querySelector("#jsonmessage2");
const jsonTwo2 = document.querySelector("#jsonmessage3");
const jsonTwo3 = document.querySelector("#jsonmessage4");
const jsonTwo4 = document.querySelector("#jsonmessage5");
const jsonTwo5 = document.querySelector("#jsonmessage6");
const jsonTwo6 = document.querySelector("#jsonmessage7");
const jsonTwo7 = document.querySelector("#jsonmessage8");


messageTwo.textContent = "";


document.querySelector("#collectorform").addEventListener('submit', (event) => {
    event.preventDefault();

    fetch(event.target.action, {
            method: 'POST',
            body: new URLSearchParams(new FormData(event.target)) // event.target is the form

        }).then(async(resp) => {
            console.log('resp', resp);
            return resp.json();

            /* if (resp !== "") {
                return resp.json();

            }
            if (resp == "") {
                await resp.json().then(async() => {
                    return resp.json()

                })

            } */


            // or resp.text() or whatever the server sends
        })
        .then(async(data) => {

            console.log('data', data);

            jsonTwo5.textContent = "The displayed data is from the past 2 min    "

            jsonOne.textContent = "atf-ContentTyp:" + JSON.stringify(data[0].contenttyp);
            jsonTwo2.textContent = "atf-Channel:" + JSON.stringify(data[0].atf_channel);
            jsonTwo3.textContent = "adslots:" + JSON.stringify(data[0].slots.Adslots);
            jsonTwo4.textContent = "time:" + data[0].created_at;
            jsonTwo6.textContent = "url:" + data[0].togetthehost;
            jsonTwo7.textContent = "random:" + data[0].findtheright;
            jsonTwo8.textContent = "atf_sdk is set:" + data[0].atf_sdk;
            console.log('data[0].togetthehost', data[0].togetthehost);

        })


    .catch((error) => {
        console.log('error', error);
        // TODO handle error
    });


})

const reloadtButton = document.querySelector("#reload");
reloadtButton.addEventListener("click", reload, false)

function reload() {
    reload = location.reload();

}