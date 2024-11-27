class HomePage {

    constructor (page) {
        this.page = page;
        this.crossFunctionalSection = page.getByLabel('Cross-functional project plan')
       // this.crossFunctionalSection = page.locator("//a[@aria-label='Cross-functional project plan, Project, Project']");
    }

    async Verification(){
        await this.crossFunctionalSection.click();
    }

}
module.exports={HomePage};