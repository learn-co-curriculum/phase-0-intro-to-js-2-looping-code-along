# Looping Lab

## Objectives

- Build a `for` loop.
- Build a `while` loop.
- Explain the purpose of a loop.
- Understand when to use each type of loop.

## Introduction

Sometimes, we need to do things repeatedly. Let's say we have a bunch of gifts
to wrap. They all happen to be the same size and shape, so for every gift, we
need to cut a similarly sized piece of wrapping paper, fold it up over the edges
of the gift, tape it together, and add a nice little card. Then we set the
wrapped gift aside and moved onto the next gift.

In programming terms, we can think of our **collection** of gifts as an
**array** and the act of wrapping them as a function. For example:

```js
const gifts = ["teddy bear", "drone", "doll"];

function wrapGift(gift) {
  console.log(`Wrapped ${gift} and added a bow!`);
}
```

We could then call `wrapGift()` on each gift individually:

```js
wrapGift(gifts[0]);
wrapGift(gifts[1]);
wrapGift(gifts[2]);
```

However, this isn't very efficient or extensible. It's a lot of repetitive code
to write out, and if we had more gifts we'd have to write a whole new line for
each.

This is where loops come in handy! With a loop, we can just write the repeated
action **once** and perform the action on **every item in the collection**.

Loops are used to execute the same block of code a specified number of times. In
JavaScript, loops come in a few different flavors, but the main two are `for`
and `while` loops.

This is a code-along, so follow along with the instructions in each section.
There are tests to make sure you're coding your solutions correctly.

## The `for` loop

Of the loops in JavaScript, the `for` loop is the most common. The `for` loop is
made up of four statements in the following structure:

```js
for ([initialization]; [condition]; [iteration]) {
  [loop body]
}
```

- Initialization
  - Typically used to initialize a **counter** variable.
- Condition
  - An expression evaluated before each pass through the loop. If this expression
    evaluates to `true`, the statements in the loop body are executed. If the
    expression evaluates to `false`, the loop exits.
- Iteration
  - A statement executed at the end of each iteration. Typically, this will involve
    incrementing or decrementing a counter, bringing the loop ever closer to
    completion.
  - Loop body
  - Code that runs on each pass through the loop.

**_Usage_**: Use a `for` loop when you know exactly how many times you want the
loop to run (for example, when you have an array of known size).

#### Examples

The code below will announce our next ten birthdays:

```js
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
}

// LOG: I'm 30 years old. Happy birthday to me!
// LOG: I'm 31 years old. Happy birthday to me!
// LOG: I'm 32 years old. Happy birthday to me!
// LOG: I'm 33 years old. Happy birthday to me!
// LOG: I'm 34 years old. Happy birthday to me!
// LOG: I'm 35 years old. Happy birthday to me!
// LOG: I'm 36 years old. Happy birthday to me!
// LOG: I'm 37 years old. Happy birthday to me!
// LOG: I'm 38 years old. Happy birthday to me!
// LOG: I'm 39 years old. Happy birthday to me!
```

In the above code, `let age = 30` is the **initialization**, as we create a
variable, `age`, that we'll use in the next three phases of the loop. Notice
that we use `let` instead of `const` because we need to increment the value of
`age`.

The **condition** for the above loop is `age < 40`, or, in other words, "Run the
code in the loop body until `age` is NOT less than `40`." As long as the
condition evaluates to `true`, execute the code in the loop body, increment the
value of `age`, and then reevaluate the condition. As soon as the condition
evaluates to `false`, exit the loop.

The **iteration** is `age++`, which increments the value of `age` by `1` after
every pass through the loop. We initialized `age` as `30`, and it retains that
value during the first pass through the loop. At the end of the first pass, we
increment `age` to `31`, check whether the condition still holds `true`, and,
since it does, run the loop body again with `age` as `31`. After that second
loop, we increment `age` to `32`, and so on.

The **loop body** is the set of statements that we want to run when the
condition evaluates to `true`.

The `for` loop is often used to iterate over every element in an array. Let's
rewrite our gift-wrapping action above as a `for` loop:

```js
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);
// LOG: Wrapped teddy bear and added a bow!
// LOG: Wrapped drone and added a bow!
// LOG: Wrapped doll and added a bow!
// => ["teddy bear", "drone", "doll"]
```

We started our counter, `i`, at `0` because arrays have zero-based indexes. Our
condition states that we should run the code in the loop body while `i` is less
than `gifts.length` (`3` in the above example). Our iteration, `i++`, increments
our counter by `1` at the end of each pass through the loop.

In our loop body, notice that we reference `gifts[i]`. Since `i` starts out as
`0`, during the first pass through the loop `gifts[i]` is `gifts[0]` is `'teddy bear'`. During the second pass through the loop, `gifts[i]` is `gifts[1]` is
`'drone'`. And during the final pass through the loop, `gifts[i]` is `gifts[2]`,
which is `'doll'`. After the third pass through the loop, we increment `i` to
`3`, which is no longer less than `gifts.length`. Our condition evaluates to
`false`, and we exit the loop.

We'll encounter `for` loops again when we learn about iterating through object
literals.

### Assignment

In the previous section, the `wrapGift()` function allowed us to take any array
of gifts and loop over them, logging our own message. Let's practice that with a
slightly different idea. To compliment our gift wrapping function, your task is
to create a thank you card creator.

In `index.js`, build a function named `writeCards()` that accepts two arguments:
an array of string names, and an event name. Create a `for` loop with a counter
that starts at `0` and increments at the end of each loop. The condition should
halt the `for` loop after the last name in the array is printed out in the loop
body.

Inside the loop, create a custom message for each name from the provided array,
thanking that person for their gift. Collect the messages in an array and
return this array. For example:

```js
writeCards(["Ada", "Brendan", "Ali"], "birthday");
```

Would produce the following array:

```js
[
  "Thank you, Ada, for the wonderful birthday gift.",
  "Thank you, Brendan, for the wonderful birthday gift.",
  "Thank you, Ali, for the wonderful birthday gift."
];
```

## The `while` loop

The `while` loop is similar to a `for` loop, repeating an action in a loop based
on a condition. Both will continue to loop until that condition evaluates to
`false`. Unlike `for`, `while` only requires condition and loop statements:

```js
while ([condition]) {
  [loop body]
}
```

The initialization and iteration statements of the `for` loop have not
disappeared, though. In fact, we could rewrite our original `for` loop gift
wrapping example using a `while` loop and achieve the exact same result:

```js
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  let i = 0; // the initialization moved OUTSIDE the body of the loop!
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++; // the iteration moves INSIDE the body of the loop!
  }

  return gifts;
}

wrapGifts(gifts);
// LOG: Wrapped teddy bear and added a bow!
// LOG: Wrapped drone and added a bow!
// LOG: Wrapped doll and added a bow!
// => ["teddy bear", "drone", "doll"]
```

Notice that we've just moved the initialization and iteration statements -
declaring the `i` variable outside the loop, and now incrementing it _inside_
the loop.

> **CAUTION**: When using `while` loops, it is easy to forget to involve iteration.
> Leaving iteration out can result in a condition that _always_ evaluate to
> `true`, causing an infinite loop!

Because of their design, `while` loops are sometimes used when we _want_
a loop to run an indeterminate amount of times. If we were pseudocoding out a
program for planting a garden, we could use `while` to organize the work:

```js
function plantGarden() {
  let keepWorking = true;
  while (keepWorking) {
    chooseSeedLocation();
    plantSeed();
    waterSeed();
    keepWorking = checkForMoreSeeds();
  }
}
```

We can imagine that _while_ we have seeds, we take the same steps over and over.
Choose a location for a seed; plant it; water it. Then, check if there are more
seeds. If _not_, do not keep working.

## When to Use `for` and `while`

JavaScript, like many programming languages, provides a variety of looping
options. Loops like `for` and `while` are actually just slight variations of the
same process. By providing a variety, we as programmers have a larger vocabulary
to work with.

Often, you will see `while` loops simply being used as an alternative to `for`
loops:

```js
let countup = 0;
while (countup < 10) {
  console.log(countup++);
}
```

This is perfectly fine as an alternative way to describe:

```js
for (let countup = 0; countup < 10; countup++) {
  console.log(countup);
}
```

If you're feeling a bit lost about when to use a `for` vs. a `while` loop, take
a deep breath. Most of the time, a regular `for` loop will suffice. It's by far
the most common looping construct in JavaScript. A general heuristic for
choosing which loop to use is to first try a `for` loop. If that doesn't serve
your purposes, then go ahead and try a `while` or [`do...while`][do...while]
loop. Also, remember that you can always refer to the
[documentation on these loops][loops and iteration] at any time.

Just don't forget - with `while`, make sure you are updating the condition on
each loop so that the loop eventually terminates!

## Assignment

To get more acquainted with `while`, your task is to write a function,
`countdown`, that takes in any positive integer and, starting from that number,
counts down to zero using `console.log()`. So, when written if you were to run

```js
countdown(10);
```

It would actually log _11_ times, including 10:

```text
10
9
8
7
6
5
4
3
2
1
0
```

## Conclusion

After some time programming in JavaScript, writing a `for` loop will come as
naturally to you as wrapping one gift after another. Just as you slowly become
comfortable using different words and vocabulary to better express yourself,
you will become more acquainted with concepts like `for` and `while` until you
are able to discern the nuanced usage between them.

## Resources

- Codecademy
  - [`for` loop](http://www.codecademy.com/glossary/javascript/loops#for-loops)
  - [`while` loop](http://www.codecademy.com/glossary/javascript/loops#while-loops)
- MDN
  - [`for` loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
  - [`while` loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
  - [Loops and iteration][loops and iteration]

[do...while]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#do...while_statement
[loops and iteration]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

<p class='util--hide'>View <a href='https://learn.co/lessons/js-looping-and-iteration-looping-code-along'>Looping Code-along</a> on Learn.co and start learning to code for free.</p>
