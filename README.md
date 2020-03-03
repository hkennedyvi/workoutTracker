# Fitness Tracker

A fitness application to keep track of exercise statistics. A user can create new workouts or resume existing ones to log their progress. 

## Getting Started

Upon opening, the application's workout database is seeded with default exercise entries. New exercises can be added or existing ones can be continued. Using the dashboard feature, a set of charts display the user's workout history. 

### Prerequisites

Express
Mongoose
Morgan

### Installing

First:

```
npm install
```

Then:

```
npm run seed
```

## Deployment

This application was deployed through Heroku.

## Links

* [Site](https://shielded-ridge-00032.herokuapp.com/)
* [Repo](https://github.com/hkennedyvi/workoutTracker)











# Unit 17 Nosql Homework: Workout Tracker

For this assignment, you'll create a workout tracker. You have already been provided with the front end code in the `Develop` folder. This assignment will require you to create Mongo database with a Mongoose schema and handle routes with Express.

## User Story

* As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

## Business Context

A consumer will reach their fitness goals quicker when they track their workout progress.

## Acceptance Criteria

When the user loads the page, they should be given the option to create a new workout, or continue with their last workout.

The user should be able to:

  * Add exercises to a previous workout plan.

  * Add new exercises to a new workout plan.