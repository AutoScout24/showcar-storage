# showcar-storage

This module provides an abstraction layer for storing information on the client-side.


## usage

How to use:

### instantiation

```javascript
    const Storage = require("showcar-storage");
    
    const localStore = new Storage("local");
    const sessionStore = new Storage("session");
    const cookieStore = new Storage("cookie");
```

### use the following api

#### `someStore.set(key, value);`

  Sets the given value for the specified key in the respective store.

  Returns the reference to the respective store, i.e. `someStore`.

#### `someStore.get(key[, default = null]);`

  Gets the value for the specified key from the respective store. If a second argument is given and
  a value for the specified key is not found in the respective store, the second argument is returned.

  Returns the stored value or the value of `default`.

#### `someStore.has(key);`

  Checks whether the respective store knows about the key and whether the value for this key is not null.
  This method is synonymous to `null !== someStore.get(key, null);`

  Returns boolean `true` if the given key exists and is not null and not undefined, `false` otherwise.
  
#### `someStore.remove(key);`

  Deletes the key and the associated value from the respective store.

  Returns the reference to the respective store, i.e. `someStore`.


## installation

### How to install:

  To install showcar-icons within your project use bower.
  
  `bower install --save git@github.com:AutoScout24/showcar-storage.git`

## contributing

### How to contribute:

  Fork this repository and `git clone` your fork. Then `npm install` the required dependencies.

  Note: If you do not have `grunt` installed globally, use `./node_modules/.bin/grunt` instead.

#### Run the tests

  Run `grunt test` (or `./node_modules/.bin/grunt test`).

#### Build for dev

  Run `grunt build` (or `./node_modules/.bin/grunt build`). Find the generated files in _./dist/_ next to it's sourcemap.

#### Build minified for distribution

  Run `grunt dist` (or `./node_modules/.bin/grunt dist`). Find the generated file _./dist/storage.min.js_ next to it's sourcemap.

#### Contribute

  Save your changes and run `grunt dist` (or `./node_modules/.bin/grunt dist`).

  Commit your code _and_ the compiled libraries in _./dist_. Then create a pull-request.


## license

MIT License
