// A good hash table needs to have enough buckets, but not too many.  A hash table should be about 80% full
//A good hashing algorithm needs to evenly distribute key-value pairs into buckets, resulting in as few collisions as possible.

export default class HashTable {
  constructor() {
    this.array = [];
  }

  hash(key) {
    return key.charAt(0).toLowerCase().charCodeAt(0) - 97;
  }
  set(key, value) {
    const index = this.hash(key);
    if(this.array[index] === undefined) {
      this.array[index] = []
    }
    this.array[index].push([key, value]);
  };
  get(key, remove = false) {
    const index = this.hash(key);
    const bucket = this.array[index];
    if  (bucket != undefined) {
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        if (remove) {
          bucket.splice(i, 1);
          return true;
        }
        return bucket[i][1];
      }
    }
  }
  return null;
}

  remove(key) {
    this.get(key, true);
  }
}