##Navigating objects in an array

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

 
