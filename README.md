# Looping Code-along

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
const gifts = ['teddy bear', 'drone', 'doll'];

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
    completion. - Loop body
  - Code that runs on each pass through the loop.

**_Usage_**: Use a `for` loop when you know exactly how many times you want the loop to run
(for example, when you have an array of known size).

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

`for` loops are often used to iterate over every element in an array. Let's
rewrite our gift-wrapping action above as a `for` loop:

```js
const gifts = ['teddy bear', 'drone', 'doll'];

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
our counter by `1` at the end of each pass through the loop. In our loop body,
notice that we reference `gifts[i]`. Since `i` starts out as `0`, during the
first pass through the loop `gifts[i]` is `gifts[0]` is `'teddy bear'`. During
the second pass through the loop, `gifts[i]` is `gifts[1]` is `'drone'`. And
during the final pass through the loop, `gifts[i]` is `gifts[2]` is `'doll'`.
After the third pass through the loop, we increment `i` to `3`, which is no
longer less than `gifts.length`. Our condition evaluates to `false`, and we exit
the loop.

We'll encounter `for` loops again when we learn about iterating through object
literals.

### Assignment

We're going to print out some welcome badges for new Flatbook employees. Build a
function named `printBadges()` that accepts one argument, an array of employee
names. Create a `for` loop with a counter that starts at `0` and increments at
the end of each loop. The condition should halt the `for` loop after the last
name in the array is printed out in the loop body.

Inside the loop, use `console.log()` to print out a badge for each employee, as
follows:

```js
printBadges(['Ada', 'Brendan', 'Ali']);
// LOG: Welcome Ada! You are employee #1.
// LOG: Welcome Brendan! You are employee #2.
// LOG: Welcome Ali! You are employee #3.
// => ["Ada", "Brendan", "Ali"]
```

After the loop completes, have the function return the original array.

## The `while` loop

The `while` loop is similar to a `for` loop in that it will keep looping as long
as the condition evaluates to `true`. However, the idea behind a `for` loop is
that it should loop a set number of times (e.g., start with `i = 0` and loop
while `i < 25`). A `while` loop, on the other hand, is designed to loop an
indefinite amount of times — it should keep looping **while** the condition is
`true` or, said differently, **until** the condition is `false`. There isn't a
definite limit like "25 times" placed upon it.

A `while` loop has the following structure:

```js
while ([condition]) {
  [loop body]
}
```

**_Usage_**: A `while` loop is best used when we don't know how many times a loop needs to
run. Often, this is because the condition depends on a dynamic value.

#### Example

```js
function maybeTrue() {
	return Math.random() >= 0.5;
}

while (maybeTrue()) {
	console.log('And I ran... I ran so far away!');
}
```

In this example, `maybeTrue()` returns `true` half the time and `false` half the
time. Our loop runs until `maybeTrue()` returns `false`, so, theoretically, the
body of the loop might **never** run (if the first evaluation of `maybeTrue()`
returns `false`) or it might run forever (if `maybeTrue()` goes on an incredible
streak with `Math.random()` never returning anything below `0.5`). We've used a
`while` loop because we don't have any specific number to count up or down to in
our loop; we just want it to run until the condition is no longer met.

We can also use a `while` loop in place of a `for` loop. We just have to
remember to make sure the condition updates with each pass through the loop so
that the loop eventually terminates. Otherwise, it'll run forever, and we'll
have to throw our overheating computer out the window and buy a new one. Here's
an example of a `while` loop with a defined exit strategy:

```js
let countdown = 10;

while (countdown > 0) {
	console.log(--countdown);
}
```

### Assignment

We're going to create a little game for our Flatbook users to play when they're
bored. Create a function named `tailsNeverFails()` that takes no arguments. In
the function body, use a `while` loop with a condition that simulates a coin
flip (two equally likely outcomes). For inspiration, check out the `maybeTrue()`
example above.

If the `Math.random()` evaluates to greater than or equal to `0.5`, the coin
landed on 'Tails' and is flipped again. If the `Math.random()` evaluates to less
than `0.5`, the coin landed on 'Heads', and the 'Tails' streak is broken. At the
end of the function, `return` a message to the user indicating how many times
the coin landed on 'Tails' in a row, e.g.:

```js
tailsNeverFails();
// => "You got 3 tails in a row!"

tailsNeverFails();
// => "You got 0 tails in a row!"

tailsNeverFails();
// => "You got 5 tails in a row!"
```

## Conclusion

If you're feeling a bit lost about when to use a `for` vs. a `while` loop, take
a deep breath. Most of the time, a regular `for` loop will suffice. It's by far
the most common looping construct in JavaScript. A general heuristic for
choosing which loop to use is to first try a `for` loop. If that doesn't serve
your purposes, then go ahead and try a `while` or [`do...while`][do...while]
loop. Also, remember that you can always refer to the [documentation on these
loops][loops and iteration] at any time. After some time programming in
JavaScript, writing a `for` loop will come as naturally to you as wrapping one
gift after another.

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
