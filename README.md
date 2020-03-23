# Amazon Product Search

This project shows how is possible to search products at amazon.com using a scraping technique.
To make this possible, I've used the `puppeteer` package to simulate a user browsing the website and then using the web API to query the correct selectors.
The data is then saved to a document database that acts like a cache to following queries.

The frontend uses the apollo client to query the backend results (either cache or scrape) through the GraphQL server and cache it on the frontend. 

## Getting started

*Make sure you have docker installed*

1. `yarn run docker:up`
2. `cd ./backend && yarn start:dev`
3. `cd ./frontend && yarn start`

## Tests

1. `cd ./backend && yarn test`
2. `cd ./frontend && yarn test`
