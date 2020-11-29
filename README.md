# Sedex Connect - Fullstack Tech Test

## Notes
The endpoint provided has CORS headers on. I developed using a [Chrome Extension](https://chrome.google.com/webstore/detail/cross-domain-cors/mjhpgnbimicffchbodmgfnemoghjakai) to circumvent this.

I only show the id from the response. I didn't see much value in displaying the rest of the data given it's all mocked.

I used this as an opportunity to try out 2 libraries I'd not used before, [React Query](https://github.com/tannerlinsley/react-query) and [React Hook Form](https://react-hook-form.com/)


## To run
```
	cd frontend/company
	npm i
	npm start
```

Remember to make sure the cors is off!
## Things I'd do if I had more time:

- Non trivial validation.
- Better mobile layout.
- CORS could theoretically be avoided using `no-cors` mode, but we wouldn't be able to see the response data from the server.
- Typescript or PropTypes.
- Eject CRA, and sort Babel out so Emotion gives nicer ClassNames.
- Browser test. I only used Mac Chrome.
- Better tests. I test more elements and journeys in the form, and unit test the service.

<!--


This is an example technical test for a full stack developer. 💻

It aims to give the interviewee the opportunity to show their knowledge by implementing the `POST /company`
method of the [open api spec](./companies-openapi3.yaml) in either the frontend OR the backend.

### Frontend
If you choose the to implement frontend please do so in React, feel free to use whatever libs to assist your
implementation but please include the dependencies in the build tool:

- Create a page that will allow a user to submit a company via a form and display the response.
- You can use the following endpoint to implement against: https://sedex-apim-gateway.cloud.gravitee.io/interview/v0/...


### Backend
If you choose to implement the backend please do Kotlin, feel free to use whatever libs to assist your implementation
but please include the dependencies in the build tool.

- Expose the endpoint as a Restful HTTP service consuming and returning a JSON response as per the api spec.

### Solution structure

To start please fork this repository, make publicly accessible so that we can review at the end.

We are looking for clean and tested code. Please provide a courteous notes appended to this README on tools and libs
you might have used and with instructions on how to test and run the application locally.

The project can be organised you see fit, in this repo are some example front and backend projects to point you in the
 right direction, but feel free to throw away and implement your version as you see fit, however we do ask that all the
 code required to run the solution is submitted to a to your public fork of this repo.

Please time box the exercise to  a hour and a half maximum. Git commits would be appreciated to show the solutions
evolution.

If you cant implement the full POST company specification in an hour and a half, dont worry, just put down a few steps
that you would go on to implement to complete the spec and the time you estimate that it would take to complete.

Thanks! 😃 -->