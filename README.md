# Solid Components in React

This is a boilerplate for all the components that I would like to replicate from solid js over to react and use them without rewriting them
over again.

---

## Components

### For

Solid JS uses ```For``` component instead of using ```Array.prototype.map()```, to me it looks a bit cleaner to write it that way and it 
provides you a method to tackle cases and provide a fallback message or component easily while hiding away the unnecessary details.

``` typescript 
<For each={state.list} fallback={<div>Loading...</div>}>

  {(item) => <div>{item}</div>}

</For>
```

provide the data into the each component and the fallback value into the fallback.


## Note:
This might not be conventional approach or my code might be wrong.
