Feature: Google searching
Scenario: Search from the Search bar produces correct results 
Given A Web browser at the Google search page
When A user enters 'cucumber'
Then Things related to 'cucumber' are shown on result page