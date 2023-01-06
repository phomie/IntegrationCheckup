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
    try {
        const insideframe = await thegdprFRame.contentFrame();
        console.log('insideframe', insideframe);
        const thebuttontoagree = await insideframe.$("[class*='message-component message-button no-children focusable sp_choice_type_11']");
        console.log('thebuttontoagree', thebuttontoagree);
        await thebuttontoagree.click({ force: true }).then(() => console.log("BUTTON_found"));
    } catch (error) {
        console.log('error', error);

    }

}

exports.didomi = async(thfounbut) => {

    thfounbut.click(console.log("BUTTON_Clicked"));
}