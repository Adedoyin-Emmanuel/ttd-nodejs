# Learning Test-Driven-Development In NodeJs

In this repo, I will be documenting my journey to learn how to write unit tests, integration tests and end-to-end tests.

## What I've Learned 😊

1. What TTD is
2. Differences between unit tests, integration tests and end-to-end tests
3. Libraries or Frameworks to write Unit tests

**Test Driven Development** is a practise in Software Developement which involves writng tests before the production codes.

**Unit Testing** can be defined as the act of writing small, scalable tests for functions and modules without any external data dependencies. Unit testing is an efficient way to test small components of your application without relying on any external data dependencies such as API requests, Database Queries etc.

**Integration Testing** can be defined as the act of writing tests for major aspects of an application. It involves relying on external data dependencies such as API requests, Database Queries etc. This adds more confidence to out application. Integration Tests takes time to write and are generally slower compared to Unit Test.

**End To End Testing** I'm still trying to understand how it works, but I would come back to this later 😀

For the tutorial I'm using to learn, I would be using **Jest** which is the most popular framework for writing unit tests, it comes with all the tools and features you need by default. While we have other frameworks like **Mocha, and Jasmine** some of them require external libraries and that's not what we want.

Jest was built by the Facebook open-source team so it is used at Facebook, Spotify, Airbnb, Twitter and other big companies.

I would also be using the **Jest Framework Documentation** to learn as well.

## Explanation ✍️

### Unit Testing 🧪

So far, I've learned **Unit Testing** and the best practices involved in unit testing.

1. **Unit Testing Numbers:**
   This involves writing Unit Tests for functions or modules that returns numbers. We have some **matchers** in **Jest** that we use for this. They include _toBeEqual, toBe, toBeCloseTo_ the special case is **toBeCloseTo** which is used for floating point numbers.

2. **Unit Testing Strings:**
   This involves writing Unit Tests for functions or modules that returns strings. We have some **matchers** in **Jest** that we use for this. They include _toMatch, toContain_ the **toMatch** method is used for regular expression matching for more complex checks. We can also use the **toContain** method which works like the

   ```js
   string.includes("string");
   ```

   in JavaScript;

3. **Unit Testing Arrays**
   This involves writing Unit Tests for functions or modules that return arrays. We have some **matchers** in **Jest** that we use for this. They include _expect(result).toBeEqual(expect.arrayContaining([element1, element2]))_
   That's like the most used matcher for unit testing arrays.

4. **Unit Testing Objects**
   This involves writing Unit Tests for functions or modules that return objects. We have some **matchers** in **Jest** that we use for this. They include _expect(result).toHaveProperty()_ then we can pass key value pairs as arguments. We also have the _toMatchObject()_ method which I love to use most times.
   That's like the most used matcher for unit testing arrays .

5. **Unit Testing Exceptions**
   This invlves writing Unit Tests for functions or modules that throws exceptions somewhere in the program.
   **Jest** that we use for this. They include _expect(result).toHaveProperty()_ then we can pass key value pairs as arguments. We also have the _toMatchObject()_ method which I love to use most times.
   That's like the most used matcher for unit testing arrays .

### Integration Testing 🧪

Integration testing can be defined as the act of writing tests for major parts of an application. It involves writing real time tests that actually interacts with our Database or our APIS. For intgration testing, we would be using a library called **Supertest** along side with **Jest** the **Supertest** was built on top of the super agent, we can use the **Supertest** to test our API's their response or errors and all. I can't wait to get started
