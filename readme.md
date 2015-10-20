# showcar-storage

This module provides an abstraction layer for storing information on the client-side.


## usage

How to use:

### require the module

    var storage = require("showcar-storage");

### find the exposed objects

    var localStore = storage.local;
    var sessionStore = storage.session;
    var cookieStore = storage.cookie;

### use the following api for each exposed object

#### `someStore.set(key, value);`

  Sets the given value for the specified key in the respective store.

  Returns the reference to the respective store, i.e. `someStore`.

#### `someStore.get(key[, defaultOrFunction]);`

  Gets the value for the specified key from the respective store. If a second argument is given and
  a value for the specified key is not found in the respective store, the second argument is returned.
  If the second argument is a function, the function is invoked in the context of the respective store
  synonymous to `defaultOrFunction.call(someStore, key, value);` with `value` being `null` if a value
  for the specified key is not found in the respective store.

  Returns the stored value, `null`, or the result of the provided function.

#### `someStore.has(key);`

  Checks whether the respective store knows about the key and whether the value for this key is not null.
  This method is synonymous to `null !== someStore.get(key, null);`

  Returns boolean `true` if the given key exists and is not null and not undefined, `false` otherwise.
  
#### `someStore.remove(key);`

  Deletes the key and the associated value from the respective store.
  This method is synonymous to `someStore.set(key, null);`.

  Returns the reference to the respective store, i.e. `someStore`.


## installation

### How to install:

here be instructions


## contributing

### How to contribute:

here be instructions


## license

MIT License
