<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ docker-compose up --build
```

## Deployed api URL

```bash
https://eugenia-invitations-api.onrender.com
```

# Auth Endpoints

- [1. Signin (token)](#1-login)
- [2. Sign Up](#2-sign-up)
- [3. Recover Password](#3-recover-password)

<a name="1-login"></a>

## Signin (token)

- **Endpoint**: `/token`
- **Method**: POST
- **Description**: Signin to get auth token.
- **Request Body**:

  ```json
  {
      "email": "string";
      "password": "string";
  }
  ```

  example

  ```json
    https://eugenia-invitations-api.onrender.com/token
  {
  "email":  "jose.angel.pacheco9729@gmail.com",
  "password":  "password789"
  }
  ```

  <a name="2-sign-up"></a>

  ## Signup

- **Endpoint**: `/signup`
- **Method**: GET
- **Description**: Register new user.
- **Request Body**:
  ```json
  {
  "name":  "string";
  "email":  "string";
  "password":  "string";
  "departamentNumber":  "string";
  }
  ```
  example
  ```json
    https://eugenia-invitations-api.onrender.com/signup
  {
  "name":  "User 1",
  "email":  "user1@email.com",
  "password":  "password789",
  "departamentNumber":  "D003"
  }
  ```

<a name="3-recover-password"></a>

## Recover Password

- **Endpoint**: `/recover`
- **Method**: GET
- **Description**: Recover password using email.
- - **Request Body**:
  ```json
  {
  "email":  "string";
  }
  ```
  example
  ```json
    https://eugenia-invitations-api.onrender.com/recover
  {
  	"email":  "user1@email.com"
  }
  ```

# Invitations Endpoints

- [Create Invitation](#create-invitation) - `POST /invitations`
- [Get Invitations](#get-invitations) - `GET /invitations`
- [Get Invitation by ID](#get-invitation-by-id) - `GET /invitations/:id`
- [Delete Invitation by ID](#delete-invitation-by-id) - `DELETE /invitations/:id`
- [Update Invitation by ID](#update-invitation-by-id) - `PUT /invitations/:id`

<a name="create-invitation"></a>

## Create Invitation

- **Endpoint**: `/invitations`
- **Method**: POST
- **Description**: Create a new invitation.
- **Request Body**:

  ```json
  {
      "name": "string";
      "entraceDate": "Date";
      "entraceHour": "string";
      "expiresAt": "Date";
  }
  ```

  example

  ```json
    https://eugenia-invitations-api.onrender.com/invitations
  {
  "name":  "Guest 1",
  "entraceDate":  "2024-08-05",
  "entraceHour":  "08:00 AM",
  "expiresAt":  "2024-09-05"
  }
  ```

  <a name="get-invitations"></a>

  ## Get Invitations

- **Endpoint**: `/invitations`
- **Method**: GET
- **Description**: Get all invitations or use query params.
- **Query params allowed**: - name - entraceDate - entraceHour - expiresAt - limit - page
  example

  ```json
    https://eugenia-invitations-api.onrender.com/invitations?name=Guest 1&page=1&limit=10
  ```

  <a name="get-invitation-by-id"></a>

  ## Get Invitation

- **Endpoint**: `/invitations/:id`
- **Method**: GET
- **Description**: Get a invitation using id.
  example

  ```json
    https://eugenia-invitations-api.onrender.com/invitations/833a8bff-aadb-4d03-a17a-ba07db4db138
  ```

  <a name="delete-invitation-by-id"></a>

  ## Delete Invitation

- **Endpoint**: `/invitations/:id`
- **Method**: DELETE
- **Description**: Dlete a invitation using id.
  example

  ```json
    https://eugenia-invitations-api.onrender.com/invitations/833a8bff-aadb-4d03-a17a-ba07db4db138
  ```

  <a name="update-invitation-by-id"></a>

  ## Update Invitation

- **Endpoint**: `/invitations/:id`
- **Method**: PATCH
- **Description**: Update one or more properties of invitations using their id.
- **Request Body**:
  ```json
  {
  "name": "string";
  "entraceDate": "Date";
  "entraceHour": "string";
  "expiresAt": "Date";
  }
  ```
  example
  ```json
    https://eugenia-invitations-api.onrender.com/invitations
  {
  "name":  "Guest 2",
  "entraceDate":  "2024-08-05",
  "entraceHour":  "08:00 AM",
  "expiresAt":  "2024-09-05"
  }
  ```
