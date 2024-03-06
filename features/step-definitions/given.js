import {Given} from '@cucumber/cucumber';
Given("A Web browser at the Google search page", () => {
    browser.url("/");
  });