# Parking lot

## Problem Statement
I own a parking lot that can hold up to 'n' cars at any given point in time. Each slot is given a number starting at 1 increasing with increasing distance from the entry point in steps of one. I want to create an automated ticketing system that allows my customers to use my parking lot without human intervention. 
 
When a car enters my parking lot, I want to have a ticket issued to the driver. The ticket issuing process includes us documenting the registration number (number plate) and the colour of the car and allocating an available parking slot to the car before actually handing over a ticket to the driver (we assume that our customers are nice enough to always park in the slots allocated to them). The customer should be allocated a parking slot which is nearest to the entry. At the exit the customer returns the ticket with the time the car was parked in the lot, which then marks the slot they were using as being available. Total parking charge should be calculated as per the parking time. Charge applicable is $10 for first 2 hours and $10 for every additional hour. 
 
We interact with the system via a simple set of commands which produce a specific output. Please take a look at the example below, which includes all the commands 
you need to support - they're self explanatory. The system should accept a filename as a parameter at the command prompt and read the commands from that file. 

## Specification

This program built using node.js and tested with jasmine.

### Directory
- bin `unix executable`
  - parking_lot
  - setup
- spec `spec for unit testing`
  - createParking.spec.js
  - leave.spec.js
  - park.spec.js
  - status.spec.js
- input `text file input directory`
  - file_input.txt
- index.js `entry point`
- parkingLot.js `function`

### List of function
- create_parking_lot `<number of parking space>`
- park `<Registry No>`
- leave `<Registry No> <Hour>`
- Status


## Installation and Excecution

### Pre-Installation

Make sure Nodejs and NPM already installed.

### Instalation
Before running the program, download all dependencies and run the unit test by executing this command on terminal

`bin/setup`

### Execution
There are 2 different way to run the program. User input via terminal and via text file.
To run program with user input, execute this command on terminal :
`bin/parking_lot`

To run program with text file, execute this command on terminal :
`bin/parking_lot file_input.txt`
file_input.txt are the name of the file located at input directory. you can add or modify text input in the input directory
