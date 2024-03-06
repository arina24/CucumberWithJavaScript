import { Then } from '@cucumber/cucumber';
import verifyLinksContain from "../../support/assertions/verifyLinksContain";

Then(/^Links related to "(.*)" are shown on the results page$/, async (keyword)=> {
    const links = $$((".LC20lb"));
    verifyLinksContain(links, keyword);
});



