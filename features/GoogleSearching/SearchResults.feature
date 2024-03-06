Feature: Google searching
Scenario: Search from the Search bar produces correct results 
Given A Web browser at the Google search page
When The user enters "cucumber" into the search bar
Then Links related to "cucumber" are shown on the results page