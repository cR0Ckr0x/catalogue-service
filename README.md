# About

A simple implementation of a catalogue service and a product selection web page.
Built with Node and Javascript, it makes uses of react/redux to manage the state of the
current logged in users and available products.

## Getting Started

To run this example you need to checkout this repo, install dependencies with npm, and
start the service using the following commands:

```
> git clone [GitHub_URL]
> cd catalogue-service
> npm install
> npm start
```

### Running tests

```
npm run test
```

# Authentication

When the users visits the home page, he is provided with a simple navigation and a
login button.

Once the user has been correctly logged in, the app presents 2 new pages: profile and
catalogue.

# Profile view

On the profile page, a user can change its location which will be used in other views.

# Catalogue view

The catalogue view takes the user-logged data and shows him the products available for
his account and location.

Upon choosing new products, the user will be taken to a confirmation page, which
serves either as a revision and a final confirm before changing his subscription.
