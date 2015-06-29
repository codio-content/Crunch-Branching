In the challenge coming up, you will need to deal with some conditional logic. It's easy to do this using high level languages but it can be a bit tricky with Assembly language.

Consider the following problem

> Let's test for someone being middle-aged. 
>
> Input someone's age and if that age is between 40 and 65 output `1` otherwise `0`.

In Javascript if would look like this

```javascript
if (age >= 40 && age <=65) {
  display(1)
}
else {
  display(0)
}
```

Look at the code on the left to see how we would handle this in Assembler.

