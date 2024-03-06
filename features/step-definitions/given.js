import {Given} from '@cucumber/cucumber';
import goToUrl from "../../support/actions/goToUrl";
Given("A Web browser at the Google search page", () => {
  goToUrl("/");
  });