"use strict";

// var webdriver = require("selenium-webdriver");
const { Builder, By, Key, until } = require("selenium-webdriver");

// const sleep = async () => {
//   setTimeout(() => {
//     console.log("Waiting...");
//   }, 2000);
// };

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function example() {
  let driver = await new Builder().forBrowser("firefox").build();
  // let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://goalsqa.jemstep.com/");
    await sleep(2000).then(() => console.log("Waiting..."));
    await driver.getTitle().then(function (title) {
      console.log("The title is: " + title);
    });

    await driver.findElement(By.name("emailAddress")).sendKeys("testgoals240201@jemstepqa.com");
    await driver.findElement(By.id("password")).sendKeys("House123", Key.RETURN).then(() => console.log("Logged in"));

    await sleep(2000).then(() => console.log("Waiting..."));

    await driver
      .wait(until.titleIs("NextGen - Goals"), 10000)
      .then(() => console.log("The title is correct"));
    
    await sleep(2000).then(() => console.log("Waiting..."));

    await driver.findElement(By.id("goals-nav--accounts")).click();

    await driver
      .wait(until.titleIs("NextGen - Portfolio"), 10000)
      .then(() => console.log("The title is correct"));

    await sleep(5000).then(() => console.log("Waiting..."));


  } finally {
    await driver.quit().then(() => console.log("Closed webdriver"));
  }
}
example();
console.log("DONE...");
function handleFailure(err, driver) {
  console.error("Something went wrong!\n", err.stack, "\n");
  driver.quit();
}


