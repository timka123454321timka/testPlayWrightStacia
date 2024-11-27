class LoginPage {

    constructor (page) {

        this.page = page;
        this.emailField = page.locator("input[autocomplete='username']");
        this.continueButton =page.locator(".ButtonThemeablePresentation--isEnabled.ButtonThemeablePresentation.ButtonThemeablePresentation--large.LoginButton.LoginEmailForm-continueButton.Stack.Stack--align-center.Stack--direction-row.Stack--display-inline.Stack--justify-center");
        this.passwordField = page.locator("input[class='TextInputBase SizedTextInput SizedTextInput--medium HighlightSol TextInput TextInput--medium TextInputIconContainer-input LoginPasswordForm-passwordInput']")
        this.loginButton = page.locator("//div[text()='Log in']");
    }

    async LoginInit(url, emailField, passwordField){
        await this.page.goto(url);
        await this.emailField.fill(emailField);
        await this.continueButton.click();
        await this.passwordField.fill(passwordField);
        await this.loginButton.click();
    }
}
module.exports={LoginPage};