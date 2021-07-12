exports.liveramp = async() => {
    const thegdprFRame = await page.$("div#gdpr-consent-tool-wrapper iframe");
    const insideframe = await thegdprFRame.contentFrame();
    await insideframe.waitForSelector("#save").then(() => console.log("BUTTON_found"));
    const thebuttontoagree = await insideframe.$("#save");
    thebuttontoagree.click(console.log("BUTTON_Clicked"));

}