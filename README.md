This repository contains the implementation of the String Calculator using Next.js. The project demonstrates Test-Driven Development (TDD) principles by developing a simple string calculator incrementally.

# Getting Started
Follow these instructions to set up the project locally and run it.

# Prerequisites
Ensure you have the following installed on your system:

Node.js (version 14.x or later)
npm (version 6.x or later) or yarn (version 1.22.x or later)

# Installation

## Clone the repository:
git clone https://github.com/your-username/incubyte-assignment.git
cd incubyte-assignment

## Install dependencies:
npm install

## Running the Development Server
npm run dev
Redirect to localHost 3000 and the user can test

## To run tests in watch mode:
npm run test:watch


# String Calculator Requirements

1.The method add(numbers) should take a string of comma-separated numbers and return their sum.
2.Handle an empty string, returning 0.
3.Handle a single number, returning the number itself.
4.Handle two numbers, returning their sum.
5.Handle multiple numbers, returning their sum.
6.Handle new lines as delimiters.
7.Support different delimiters specified at the start of the string in the format //[delimiter]\n[numbers...].
8.Throw an exception for negative numbers, showing all negative numbers in the exception message.


## User Interface
The user interface allows you to input a string of numbers and get the sum. It displays the result or any errors (such as negative numbers) below the form.