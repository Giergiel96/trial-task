Trial day task
---

### Installation
```
yarn install

yarn serve
```

### Run unit tests
```
yarn test:unit
```

### Files of interest
```
src/components/DisplayTitle.vue
tests/unit/example.spec.js
```

Task
---
When running `yarn test:unit` you will notice that the test is failing. Imported constants are *undefined* during test runtime. Your goal is to find out why it happens, and to fix it *without* changing the component itself in any way.

*HINT 1:* take a close look at the import path in the DisplayTitle.vue file

*HINT 2:* the error is present only during unit tests

*HINT 3:* using a debugger is highly encouraged :)


