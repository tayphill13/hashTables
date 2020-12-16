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
}