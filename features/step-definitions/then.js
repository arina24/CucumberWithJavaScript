import { Then } from '@cucumber/cucumber';
import assert from "assert";

Then(/^Links related to "(.*)" are shown on the results page$/, async (keyword)=> {
  const links = $$(".LC20lb");
  links.forEach(link => {
    const linkText = link.getText().toLowerCase();

    if (linkText) {
      assert(
        linkText.includes(keyword),
        `Link text does not include ${keyword}`
      );
    }
  });
});



