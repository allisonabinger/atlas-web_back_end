  <h1 align="center">
  <img src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png?f=webp" align="left" width="50">
  Node.js Basics
  <img src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png?f=webp" align="right" width="50"></h1>


## Intro
 This project aims to provide practical experience and understanding of Node.js and related tools like Express.js, Mocha, and Nodemon.
 
## Learning Objectives

1. **How to run JavaScript applications using Node.js**

2. **Utilization of Node.js modules effectively**

3. **Reading files using specific Node.js modules**

4. **Accessing command-line arguments and environment variables using the Process API**

5. **Creating basic and advanced HTTP servers using Node.js and Express.js**

6. **Implementing advanced routing techniques with Express.js**

7. **Leveraging ES6 features in Node.js using Babel-node**

8. **Enhancing development productivity with Nodemon**

---
---
&nbsp;
&nbsp;
&nbsp;

# Concepts:

[**Node.js Fundamentals**](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
Setting up Node.js environment, running scripts, and using built-in modules

[**Express.js**](https://expressjs.com/en/starter/installing.html)
Building web applications with routes, middleware, and handling HTTP requests.



&nbsp;
---
&nbsp;

# Highlighted Tasks

## [Task 3: Reading a file asynchronously with Node JS](./3-read_file_async.js)
Using the database [database.csv](./database.csv), create a function countStudents:
    - Create a function named countStudents. It should accept a path in argument (same as in 2-read_file.js)
    - The script should attempt to read the database file asynchronously
    - The function should return a Promise
    - If the database is not available, it should throw an error with the text Cannot load the database
    - If the database is available, it should log the following message to the console Number of students: NUMBER_OF_STUDENTS
    - It should log the number of students in each field, and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
    - CSV file can contain empty lines (at the end) - and they are not a valid student!


&nbsp;
---
&nbsp;

## Authors/Contributors to this project
This README was made with :heart: by Allison Binger, student at Atlas School Tulsa. Find me on [GitHub](https://github.com/allisonabinger) or [LinkedIn](https://linkedin.com/in/allisonbinger)! :smile_cat:
