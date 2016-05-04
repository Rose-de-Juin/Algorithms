##Joining objects

You have three arrays with objects inside them:

Each object in the `users` array looks like the following:

```js
{
  id: 'a unique number',
  first_name: 'a first name',
  last_name: 'a last name',
  created_at:'datetime',
  updated_at:'datetime'
}
```
A second `books` array has the following structure:

```js
{
  id: 'a unique number',
  book_title: 'a title',
  book_subject: 'a description',
  created_at:'datetime',
  updated_at:'datetime'
}
```

And a final `usersHaveBooks` array looks like so:

```js
{
  id:'a unique number',
  user_id:'a number that exists in the id column of the users array',
  book_id:'a number that exists in the id column of books array',
  created_at:'datetime',
  updated_at:'datetime'
}
```


##Your tasks:

* Write a function `innerJoin` that uses the three provided arrays to return a new array, where each element is also an array containing three objects, one each pulled from `users`, `books` and `usersHaveBooks`. Here's the catch: The user object's `id` property **must match** the `user_id` property of the `usersHaveBooks` object, and the book object's `id` property **must match** the `book_id` property of the `usersHaveBooks` object.
* Write a function called `leftJoin` that accepts three arrays. **All** the objects in whichever array is passed as the *first* argument should be represented in the final output array.

Feel free to copy the following dummy data:

```js
var users = [
  {
  id: 1,
  first_name: 'Johnny',
  last_name: 'Rotten',
  created_at:'2012-12-31 23:59:59',
  updated_at:'2012-12-31 23:59:59'
  },
  {
  id: 2,
  first_name: 'Amy',
  last_name: 'Brown',
  created_at:'2012-12-31 23:59:59',
  updated_at:'2012-12-31 23:59:59'
  },
  {
  id: 3,
  first_name: 'Alice',
  last_name: 'Roh',
  created_at:'2012-12-31 23:59:59',
  updated_at:'2012-12-31 23:59:59'
  },

]

var usersHaveBooks = [
  {
    id:1,
    user_id:1,
    book_id:1,
    created_at:'2012-12-31 23:59:59',
    updated_at:'2012-12-31 23:59:59'
  },
  {
    id:1,
    user_id:1,
    book_id:2,
    created_at:'2012-12-31 23:59:59',
    updated_at:'2012-12-31 23:59:59'
  },
  {
    id:1,
    user_id:1,
    book_id:3,
    created_at:'2012-12-31 23:59:59',
    updated_at:'2012-12-31 23:59:59'
  },
  {
    id:1,
    user_id:2,
    book_id:2,
    created_at:'2012-12-31 23:59:59',
    updated_at:'2012-12-31 23:59:59'
  },

]

var books = [
  {
  id: 1,
  book_title: 'Grapes of Wrath',
  book_subject: 'The hard life during the depression',
  created_at:'2012-12-31 23:59:59',
  updated_at:'2012-12-31 23:59:59'
  },
  {
  id: 2,
  book_title: 'Metamorphosis',
  book_subject: 'The degradation of humanity, reflected in a single man',
  created_at:'2015-01-12 23:59:59',
  updated_at:'2015-01-12 23:59:59'
  },
  {
  id: 3,
  book_title: 'The Coming Plague',
  book_subject: 'Infectious diseases',
  created_at:'2015-01-12 23:59:59',
  updated_at:'2015-01-12 23:59:59'
  },
]
```
