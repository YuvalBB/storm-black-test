# Storm Black React Test

> The following test requires heavy understanding of both the DOM and respective APIs, the Rendering pipeline, and a bit of React.
Please if at any stage you find yourself confused, feel free to contact us and ask for request / guidance.

Enjoy the task.

> You can use any tools or plugins you wish, as long as they dont implement the main functionality and are only "helpers" (e.g. lodash)
The project itself should be provided as a public repository, in a git cloud based repo (Github / Gitlab / BitBucket).

## The Task
You are asked to implement a Modal Form - residing inside a friendly iframe.

1. Implement 2 pages including the following items:
	a. Basic navigation bar - with logo and random company name
	b. Page title - dynamic based on current selected route
	c. Navigation item - a way to transition between pages

2. First page should include a welcome message and an action button pointing to the second page.

3. The second page should have a clickable button in the centre with the text "Subscribe to our channel".
	a. The button should animate an iframe expanding from the centre of the screen to match half of the screen's height and width and be presented to the user as a modal.
	b. The iframe modal should be centred regardless of the scrolling of the page.
	c. The iframe modal should transition (animate) between open and closed state.
	d. The iframe should include a basic html form, containing an input field(Dropdown) and a submit button below it:

		* The input field is a Dropdown with a textfield inside of it.
		* The dropdown's width is the size of the modal minus some padding. 
		* The dropdown in Resting state (not open or focused) should show all of the SelectedOptions - present them as "UI Chips" (https://i.stack.imgur.com/HPeTv.png) with a maximum height of 1 row (50px);
		* When clicked, the dropdown opens and expands its size to a maximum of 3 rows, without affected the submit button's position.
		* Typing into the input field should filter the options listed in the dropdown, and show another option on the top to create the option - clicking on that, or on the Enter key will create that option and add it into the list of options and into the list of SelectedOptions.
		* Selecting an option from the dropdown will add it to the SelectedOptions.
		* If The total number of chips in the row exceeds the size of the row, aggregate them into a "(5 more)" chip instead.

	e. On submitting the form, navigate the user back to the first page, and show a message instead of the Welcome message, stating the user's selected "numbers" (SelectedOptions) and a message saying "user subscribed"
	f. on refresh the page should remember the subscription and reload the welcome page the same way.

4. Use React and Typescript.

5. Bonus - style the application using material-ui / ant-design
6. Bonus 2 - use styled-components or emotion as Css-In-Js solution 


Good luck !
