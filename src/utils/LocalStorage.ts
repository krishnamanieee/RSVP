import AsyncStorage from '@react-native-community/async-storage';

class LocalStorage {
  public get = async <T>(key: string): Promise<T | null> => {
    const value: string | null = await AsyncStorage.getItem(key);
    if (!value) {
      return null;
    }

    return JSON.parse(value) as T;
  };

  public set = async <T>(key: string, data: T): Promise<void> => {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  };

  public remove = async (key: string): Promise<void> => {
    await AsyncStorage.removeItem(key);
  };

  public reset = async (): Promise<void> => {
    await AsyncStorage.clear();
  };

  public clear = async (): Promise<void> => {
    // await AsyncStorage.multiRemove(keysToRemove);
  };

  public clearUserData = async (): Promise<void> => {
    // await AsyncStorage.multiRemove(keysToRemove);
  };
}

export const LocalStorageKeys = {
  USER_DATA: '@user_Data',
};

export type LocalStorageKeysName = keyof typeof LocalStorageKeys;

const localStorage = new LocalStorage();
export {localStorage as LocalStorage};
