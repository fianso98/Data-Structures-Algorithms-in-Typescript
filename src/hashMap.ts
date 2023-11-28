import crypto from 'crypto'

/**
 * HashMap class for key-value pair storage using a hash table.
 * @template T - Type of data to be stored
 */
export default class HashMap <T> {
    private table : Array<T>;
    /**
     * Constructs a HashMap with an optional size (default: 137).
     * @param {number} size - Size of the HashMap (must be a prime number > 100)
     * @throws Error if size is not a prime number or less than 100
     */
    constructor(size : number = 137) {
        if(!this.isPrimeAndGreaterThan100(size)){
            throw Error('The size of the HashMap must be a prime number and gratter than 100')
        }
        this.table = Array(size);
    }

    /**
     * Displays the key-value pairs stored in the HashMap.
     */
    display(){
        for (var i = 0; i < this.table.length; i++) {
            if (this.table[i] != undefined) {
                console.log(`${i}: ${this.table[i]}`);
            }
        }
    }

    /**
     * Inserts a key-value pair into the HashMap.
     * @param {string} key - Key to be inserted
     * @param {T} data - Data to be associated with the key
     */
    put(key : string, data : T){
        let pos = 0;
        const hashNumber = this.hash(key);
        pos = this.getPosFromHash(hashNumber);
        this.table[pos] = data;
    }

    /**
     * Retrieves the value associated with the given key.
     * @param {string} key - Key to search for
     * @returns {T | undefined} - Value associated with the key, undefined if not found
     */
    get(key : string) : T | null {
        return this.table[this.getPosFromHash(this.hash(key))] ?? null;
    }

    private getPosFromHash(hashNumber : bigint) : number {
        return Number(hashNumber % BigInt(this.table.length));
    }


    private hash(key : string) : bigint{
        const hash = crypto.createHash('sha256'); // You can choose a different hashing algorithm (e.g., sha256, sha512, etc.)
        hash.update(key);
        const hashedString = hash.digest('hex');
        // Convert hexadecimal hash to a decimal number
        const hashedNumber = BigInt(`0x${hashedString.slice(0, 8)}`); // Using only the first 8 characters for efficiency
        return hashedNumber;
    }

    private isPrimeAndGreaterThan100(num: number): boolean {
        if (num <= 1) {
          return false;
        }
      
        // Check for prime number
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            return false;
          }
        }
      
        // Check if greater than 100
        return num > 100;
      }
}