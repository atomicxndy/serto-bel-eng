import {NgModule} from "@angular/core";
import {NgcCookieConsentConfig, NgcCookieConsentModule} from "ngx-cookieconsent";

const cookieConfig: NgcCookieConsentConfig = {
    "cookie": {
        "domain": "tinesoft.github.io"
    },
    "position": "bottom",
    "theme": "classic",
    "palette": {
        "popup": {
            "background": "#0d2067",
            "text": "#ffffff",
            "link": "#ffffff"
        },
        "button": {
            "background": "#ffffff",
            "text": "#000000",
            "border": "transparent"
        }
    },
    "type": "opt-out",
    "content": {
        "message": "This website uses cookies to ensure you get the best experience on our website.",
        "allow": "Got it!",
        "deny": "Refuse cookies",
        "link": "",
        "href": "https://cookiesandyou.com",
        "policy": "Cookie Policy"
    }
}

@NgModule({
    imports: [NgcCookieConsentModule.forRoot(cookieConfig)]
})
export class AppModule {}