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


//messageTwo.textContent = "";


document.querySelector("#collectorform").addEventListener('submit', (event) => {
    event.preventDefault();

    fetch(event.target.action, {
            method: 'POST',
            body: new URLSearchParams(new FormData(event.target)) // event.target is the form

        }).then(async(resp) => {
            console.log('resp', resp);
            return resp.json();
        })
        .then(async(data) => {

            console.log('data', data);
            theadslotstring = JSON.stringify(data[0].slots.Adslots);
            thesec = theadslotstring.replace(' "adslots:{"0":"" ', '');
            console.log('thesec', thesec);
            var slottys = thesec.split(',')

            slottys.forEach(function(item) {
                var li = document.createElement("li");
                var text = document.createTextNode(item);
                li.appendChild(text);
                document.getElementById("adslots").appendChild(li);
            });

            aduntistructure = JSON.stringify(data[0].adunitstructure)
            adunitsplit = aduntistructure.split(',')
            adunitsplit.forEach(function(item) {
                var li = document.createElement("li");
                var text = document.createTextNode(item);
                li.appendChild(text);
                document.getElementById("adunitstruc").appendChild(li);
            });

            jsonTwo5.textContent = "The displayed data is from the past 2 min    ";
            jsonOne.textContent = JSON.stringify(data[0].contenttyp);
            jsonTwo2.textContent = JSON.stringify(data[0].atf_channel);
            jsonTwo4.textContent = data[0].created_at;
            jsonTwo6.textContent = data[0].togetthehost;
            /*  jsonTwo7.textContent = data[0].findtheright; */
            jsonTwo8.textContent = data[0].atf_sdk;
            //console.log('data[0].togetthehost', data[0].togetthehost);
            //console.log('data[0].togetthehost', JSON.stringify(data[0].adcallnizer));

            const trytowork = data[0].adcallnizer.adcallnizer
            for (key of trytowork) {
                const objEntries = Object.entries(key);
                thekeys = Object.fromEntries(objEntries)
                values = Object.values(thekeys)
                valurstring = JSON.stringify(values)
                valurstring1 = valurstring.slice(1, -1)
                valurstring2 = valurstring1.replace(",", "    =    ")
                li = document.createElement("li");
                var text = document.createTextNode(valurstring2);
                li.appendChild(text);
                document.getElementById("adcallnizer").appendChild(li);


            }


            document.querySelector('.spinner-displayer').classList.add('loader');

        }).catch((error) => {
            console.log('error', error);
            // TODO handle error
        });
})

const reloadtButton = document.querySelector("#reload");
reloadtButton.addEventListener("click", reload, false)

function reload() {
    reload = location.reload();
}

function spinner() {
    const spinnerDisplayer = document.querySelector('.spinner-displayer');
    const btn = document.querySelector('#searchBTN');

    btn.addEventListener('click', () => {
        spinnerDisplayer.classList.add('loading');
    })
}
spinner();


/* function removespinner() {
    jsonmessage9 = document.querySelector("#jsonmessage9")
    jsonmessage9.addEventListener('load', function() {
        this.classList.remove("loading");
    });
}
removespinner() */