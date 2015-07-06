It is worth mentioning how the machine code works wth branching.

Take a look at the code snippet below. 

![](.guides/img/crunch-branch-code.png)

On the highlighted line, we can see that the `BGT` instruction is located at memory address `1002` (re the `Addr` column in the code snippet).

You can also see that the machine code instruction for `BGT` is `42`.

When the CPU executes this instruction and the `>` flag is set, it knows to jump to the first instruciton after `Marker1` by what memory address is stored in its reference (circled in red). In this case the reference points to the instruction stored at memory address `1006`.

The Crunch Assembler has done the magic of working out what the memory address is. It used the `Marker1` label to calculate this address.

