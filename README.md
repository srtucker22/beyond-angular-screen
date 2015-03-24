# angular-screen

This is sample project to test familiarity with AngularJS

## Installation

	$ npm install
	$ bower install

	To run server
	$ grunt serve


### Tasks
	To complete the screening, complete the following tasks, we want to see your approach so guidence is intentionally vague.

	1. Create a directive for the header.
		- In app > scripts > directives : update header.js so the code in app > views > main.html works.
		- Pass a parameter through so the directive knows which page the user is on.
		- The class "active" should appear on the appropriate navigaion elelemt depending on the page.

	2. Create a Service that loads a local json file and returns the result as a promise.
		- json file is located in app > scripts > json

	3. On the news page, loop through the json results created in step 2
		- The output should just show the "title" and "exert"
		- The initial loads should be limited to 3.
		- Only published Articles should be displayed.
		- A "show more" button should appear below
		- When the "show more" button is clicked the remaiming articles should be displayed.
