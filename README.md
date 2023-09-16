# Learning Test-Driven-Development In NodeJs

In this repo, I will be documenting my journey to learn how to write unit tests, integration tests and end-to-end tests.

## What I've Learned 😊

1. What TTD is
2. Differences between unit tests, integration tests and end-to-end tests
3. Libraries or Frameworks to write Unit tests

**Test Driven Development** is a practise in Software Developement which involves writng tests before the production codes. 

**Unit Testing** can be defined as the act of writing small, scalable tests for functions and modules without any external data dependencies. Unit testing is an efficient way to test small components of your application without relying on any external data dependencies such as API requests, Database Queries etc.

**Integration Testing** can be defined as the act of writing tests for major aspects of an application. It involves relying on external data dependencies such as API requests, Database Queries etc. This adds more confidence to out application. Integration Tests takes time to write and are generally slower compared to Unit Test.


**End To End Testing** can be defined as the act of w


For the tutorial I'm using to learn, I would be using **Jest** which is the most popular framework for writing unit tests, it comes with all the tools and features you need by default. While we have other frameworks like **Mocha, and Jasmine** some of them require external libraries and that's not what we want.

Jest was built by the Facebook open-source team so it is used at Facebook, Spotify, Airbnb, Twitter and other big companies.

I would also be using the **Jest Framework Documentation** to learn as well.

## Explanation ✍️

So far, I've learned **Unit Testing** and the best practices involved in unit testing.

1. **Unit Testing Numbers:**
   This involves writing Unit Tests for functions or modules that returns numbers. We have some **matchers** in **Jest** that we use for this. they include _toBeEqual, toBe, toBeCloseTo_ the special case is **toBeCloseTo** which is used for floating point numbers.

2. **Unit Testing Strings:**
   This involves writing Unit Tests for functions or modules that returns strings. We have some **matchers** in **Jest** that we use for this. they include _toMatch, toContain_ the **toMatch** method is used for regular expression matching for more complex checks. We can also use the **toContain** method which works like the
   ```js
   string.includes("string");
   ```
   in JavaScript;
