Feature: Google searching
Scenario: search from the Search bar produces correct results 
Given A web broser at the Google search page
When A user enters 'cucumber'
Then Thing related to 'cucumber' are shown on result page