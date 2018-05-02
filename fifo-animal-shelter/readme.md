## Project title
FIFO for Animal Shelter

## Motivation
White Board assignment for practice with Tech Interview questions

## Build status
This code base has dependencies for unique id `uuid`, creating a name `faker` & transpiling code `babel`


## Code style
If you're using any code style like xo, standard etc. That will help others while contributing to your project. Ex. -

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
 
## Screenshots

<b>Built with</b>
- [Animal Shelter]('./assets/animal-shelter.jpg)

## Features
This program creates an Animal Shelter class that has two methods `enqueue` and `dequeue`. When `enqueue` is called on the Animal Shelter class a new animal is created with a unique `id` and `name`. When the method `enqueue` is called an arguement of `type` must be passed in order to create a new animal. The type could be anything but semantically it should be named in such a way, `cat`, `dog`, `snake` etc.
When the `dequeue` method is called an arguement of `preferrence` should be passed. That arguement should be a `string` and should be similar to the arguement `type` that was passed into the `enqueue` method. This Animal Shelter is designed to help out `cats` and `dogs` so if you dont set the arguement of `dequeue` to `cat` or `dog` then the dequeue method will return the animal who has been in the Animal Shelter the longest. However if `cat` is preferenced then the `cat` who has been in the Shelter the longest will be returned. The same is true for `dog`.

## Code Example
Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## Installation
Using this Module requires you to have access to the repo. Then running `npm i` in the terminal. Then the module can be exported and used in any other project.


## Tests
The tests cover all lines of code. It runs multiple `enqueue` methods and then checks the array after mapping it to type property. The `dequeue` method is tested by creating a new Animal Shelter and `enqueue` new Animals and then run a `dequeue` and check the type against the expected.


## License
A short snippet describing the license (MIT, Apache etc)

MIT © [Sean Miller]()