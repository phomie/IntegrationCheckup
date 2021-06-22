console.log("i am an js file");
const weatherform = document.querySelector("#weather");
const urlcollectorform = document.querySelector("#urlcollectorform");

const urlsearch = document.querySelector("#urlcollector");
const search = document.querySelector("input");

const messageOne = document.querySelector("#messagone");
const messageTwo = document.querySelector("#messagtwo");

const jsonOne = document.querySelector("#jsonmessage1");

const jsonTwo = document.querySelector("#jsonmessage2");
const jsonTwo2 = document.querySelector("#jsonmessage3");
const jsonTwo3 = document.querySelector("#jsonmessage4");
const jsonTwo4 = document.querySelector("#jsonmessage5");
const jsonTwo5 = document.querySelector("#jsonmessage6");
const jsonTwo6 = document.querySelector("#jsonmessage7");

//Overgive the json object i collected
messageOne.textContent = "i am loading ";
messageTwo.textContent = "";
/*
urlcollectorform.addEventListener("submit", (e) => {
  e.preventDefault();

  const lookfor = urlsearch.value;
  console.log("lookfor", lookfor);

});
*/

//try
setTimeout(function() {
    fetch("http://localhost:3002/resultsofScrap").then(async response => {
        try {
            const data = await response.json()
            var utctocet = new Date(data[0].created_at)
            console.log('utctocet', utctocet);
            var localDate = new Date();
            var diffInMs = localDate - utctocet;
            var msInmin = Math.floor(diffInMs / 1000 / 60)

            if (msInmin < 5) {
                alert("itfits and i can proceed with the rest");
            } else {
                alert("do it again")
            }


            // const anyTime = new Date(thedateofscraepe).getTime();
            //const currentTime = new Date().getTime() + 180000;
            //if (currentTime > anyTime) {
            //    console.log("tooold")
            // }


            console.log('response data?', data)
            console.log('response data?', data[0])
                //console.log('response dataaSAdslots?', data[0].created_at)
                //console.log('data[0].created_at', typeof(data[0].created_at));


            console.log('data[0].slots[0]', data[0].slots.Adslots)
            console.log('response dataaSAdslots?', data[0].atf_channel)
            console.log('response dataaSAdslots?', data[0].contenttyp)
            console.log('response dataaSAdslots?', data[0].adunitstructure)
            objective = data[0];

            jsonOne.textContent = "atf-ContentTyp:" + JSON.stringify(data[0].contenttyp);
            jsonTwo2.textContent = "atf-Channel:" + JSON.stringify(data[0].atf_channel);

            jsonTwo3.textContent = "adslots:" + JSON.stringify(data[0].slots.Adslots);
            jsonTwo4.textContent = "time:" + data[0].created_at;
            console.log('JSON.stringify(localDate)', );
        } catch (error) {
            console.log('Error happened here!')
            console.error(error)
        }

    })
}, 3000);