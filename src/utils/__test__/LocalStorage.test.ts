import { LocalStorage } from '../LocalStorage';

interface ICustomType {
  name: string;
  address: {
    streetName: string;
    pinCode: number;
  };
}

type CustomType = ICustomType;

describe('LocalStorage', () => {
  beforeEach(() => {
    jest.mock('@react-native-community/async-storage');
  });

  it('should be able to store a number', async () => {
    const key = 'number';
    const expectedValue = 42;
    await LocalStorage.set(key, expectedValue);

    const actualValue = await LocalStorage.get(key);

    expect(actualValue).toStrictEqual(expectedValue);
  });

  it('should be able to store a string', async () => {
    const key = 'string';
    const expectedValue = 'test string';
    await LocalStorage.set(key, expectedValue);

    const actualValue = await LocalStorage.get(key);

    expect(actualValue).toStrictEqual(expectedValue);
  });

  it('should be able to store an array', async () => {
    const key = 'array';
    const expectedValue = [1, 2, 3];
    await LocalStorage.set<number[]>(key, expectedValue);

    const actualValue = await LocalStorage.get<number[]>(key);

    expect(actualValue).toStrictEqual(expectedValue);
  });

  it('should be able to store a custom type', async () => {
    const key = 'custom';
    const expectedValue: CustomType = {
      name: 'Some name',
      address: {
        streetName: 'Some street',
        pinCode: 12345,
      },
    };

    await LocalStorage.set<ICustomType>(key, expectedValue);

    const actualValue = await LocalStorage.get<ICustomType>(key);

    expect(actualValue).toStrictEqual(expectedValue);
  });

  it('should return null for a missing key', async () => {
    const key = 'someKey';
    const someOtherKey = 'someOtherKey';
    const expectedValue = 'some value';

    await LocalStorage.set(key, expectedValue);

    const actualValue = await LocalStorage.get(someOtherKey);

    expect(actualValue).toBeNull();
  });

  it('should remove the key and value for a given key', async () => {
    const key = 'someKey';
    const expectedValue = ['a', 'b', 'c'];

    await LocalStorage.set(key, expectedValue);
    const actualValueBeforeRemoval = await LocalStorage.get(key);

    await LocalStorage.remove(key);
    const actualValueAfterRemoval = await LocalStorage.get(key);

    expect(actualValueBeforeRemoval).toStrictEqual(expectedValue);
    expect(actualValueAfterRemoval).toBeNull();
  });

  it('should do nothing when trying to remove a missing key', async () => {
    const key = 'someKey';

    await LocalStorage.remove(key);
    const actualValue = await LocalStorage.get(key);

    expect(actualValue).toBeNull();
  });

  it('should clear all keys in storage', async () => {
    const key = 'someKey';
    const someOtherKey = 'someOtherKey';
    const expectedValue = 'some value';
    const someOtherExpectedValue = 'some other value';

    await LocalStorage.set(key, expectedValue);
    await LocalStorage.set(someOtherKey, someOtherExpectedValue);

    const actualValue = await LocalStorage.get(key);
    const someOtherActualValue = await LocalStorage.get(someOtherKey);

    expect(actualValue).toStrictEqual(expectedValue);
    expect(someOtherActualValue).toStrictEqual(someOtherExpectedValue);

    // reset the storage
    await LocalStorage.reset();

    const actualValueAfterClear = await LocalStorage.get(key);
    const someOtherActualValueAfterClear = await LocalStorage.get(someOtherKey);

    expect(actualValueAfterClear).toBeNull();
    expect(someOtherActualValueAfterClear).toBeNull();
  });
});
