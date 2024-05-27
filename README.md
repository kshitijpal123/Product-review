
# Poduct Reviews with summary

This application has several features including signup and login of the user product listing, and reviewing the product by providing rating and text review it also include feature rating which means the product can be rate according to their features and summary includes the average rating provided by the users and the total users rated till now and the average individual feature rating


## Roadmap

- User signup on the platform

- Login using email and password

- After login redirect to the single product

- User can rate the product and write the review

- User can see the summary of total average rating and the ratings given by all users

- User can also see the average rating of features respectively


## API Reference

#### SIGNUP

```http
  POST /api/signup
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required** |
| `password` | `string` | **Required** |
| `first_name` | `string` | **Required** |
| `last_name` | `string` | **Required** |
| `mobile_number` | `string` | **Not Required** |

#### LOGIN

```http
  GET /api/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email` | `string` | **Required** |
| `password` | `string` | **Required** |

#### POST REVIEW

```http
  POST /api/review
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `product_id` | `number` | **Required** |
| `review` | `string` | **Required** |
| `overall_rating` | `number` | **Required** |
| `accuracy` | `number` | **Not Required** |
| `communication` | `number` | **Not Required** |
| `location` | `number` | **Not Required** |
| `check_in` | `number` | **Not Required** |
| `value` | `number` | **Not Required** |
| `user_id` | `number` | **Not Required** |

#### REVIEW SUMMARY (Response of review summary)

```http
  GET /api/review
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `average_rating` | `number` | **Required** |
| `total_ratings_on_product` | `number` | **Required** |
| `accuracy` | `number` | **Required** |
| `communication` | `number` | **Required** |
| `location` | `number` | **Required** |
| `check_in` | `number` | **Required** |
| `cleanliness` | `number` | **Required** |
| `value` | `number` | **Required** |


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Appendix

This is the first version of the web application in this itself there is much scope to make it better which try to explain in the given points.

- Like we can introduce the jwt for more security .

- We can make a landing page where all the product are shown.

- And then by clicking one we can redirect to the individual product where we can rate and review it.

- We can go for the caching approach.

- Or can introduce the swagger for api-documentation.

- Like these many more according to the requirements.


## Tech Stack

**Server:** Node, Express, MySQL, Knex

