exports.liveramp = async(thegdprFRame) => {
    try {
        const insideframe = await thegdprFRame.contentFrame();
        await insideframe.waitForSelector("#save").then(() => console.log("BUTTON_found"));
        const thebuttontoagree = await insideframe.$("#save");
        thebuttontoagree.click(console.log("BUTTON_Clicked"));

    } catch (error) {
        console.log('error', error);

    }
}

exports.mgmt = async(thegdprFRame) => {

    const insideframe = await thegdprFRame.contentFrame();
    const thebuttontoagree = await insideframe.$$("div[class^='message-component ']  > button  ");
    await thebuttontoagree[1].click();
}

exports.didomi = async(thfounbut) => {

    thfounbut.click(console.log("BUTTON_Clicked"));
}