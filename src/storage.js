"use strict";

const stores = {
    local: require('./stores/local.js'),
    session: require('./stores/session.js'),
    cookie: require('./stores/cookie.js')
};

class Storage {
    /**
     * @constructor
     * @param {string} type The store backend to use
     * @param {boolean} [silent=true] Whether to throw exceptions or fail silently returning false
     */
    constructor (type, { silent = true } = {}) {
        if (!(type in stores)) {
            this.fail(`Storage: Unsupported type ${type}`);
        }

        this.silent = !!silent;
        this.store = new (stores[type])();
    }

    /**
     * Gets the stored value for a specified key
     * @param {string} key The key to look up
     * @param defaultValue Return this if no value has been found
     * @throws {Error} If not silent
     * @returns {string} The stored value or defaultValue
     */
    get (key, defaultValue = null) {
        try {
            const result = this.store.get(key);

            if (null === result) {
                return defaultValue;
            }
            return result;
        } catch (e) {
            return this.fail(e);
        }
    }

    /**
     * Writes a value to the store under the specified key
     * @param {string} key The key to use when storing
     * @param {string} value The value to store
     * @param {object} [options] A map of options. See the respective backends.
     * @throws {Error} If not silent
     * @returns {Storage|boolean} If silent, returns false on error. Returns this on success.
     */
    set (key, value, options) {
        try {
            this.store.set(key, value, options);
            return this;
        } catch (e) {
            return this.fail(e);
        }

    }

    /**
     * Checks whether the store knows about the specified key
     * @param {string} key The key to check for existance
     * @throws {Error} If not silent
     * @returns {boolean} If silent, returns false on error (!!)
     */
    has (key) {
        try {
            return this.store.has(key);
        } catch (e) {
            return this.fail(e);
        }
    }

    /**
     * Deletes the specified key and its value from the store
     * @param {string} key The key to delete
     * @returns {Storage|boolean} If silent, returns false on error
     */
    remove (key) {
        try {
            this.store.remove(key);
            return this;
        } catch (e) {
            return this.fail(e);
        }
    }

    /**
     * Wrapper for error handling
     * @private
     * @param {Error|string} reason What is happening?
     * @returns {boolean}
     */
    fail (reason) {
        if (this.silent) {
            return false;
        }

        if (!reason instanceof Error) {
            reason = new Error(reason);
        }

        throw reason;
    }
}

module.exports = Storage;
export default Storage;