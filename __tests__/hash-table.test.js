import HashTable from '../src/hash-table.js';

describe('HashTable', () => {
  let hashTable = new HashTable();
    
    afterEach(() => {
      hashTable = new HashTable();
    });
    test('should instantiate a hash with an empty array', () => {
      expect(hashTable.array).toEqual([]);
    });
    test('should return a number respresentation of a letter', () => {
      expect(hashTable.hash("Alaric")).toEqual(0);
      expect(hashTable.hash("zygorth")).toEqual(25);
    });
    test('should correctly set a key-value pair in a hash table', () => {
      hashTable.set("John", "Lead Singer");
      expect(hashTable.array[9]).toEqual([["John", "Lead Singer"]]);
    });
});