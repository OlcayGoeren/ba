import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'optin';
const guidethroughSlice = (set, get) => ({
  optin: false,
  readOptin: async () => {
    try {
      const result = await AsyncStorage.getItem(STORAGE_KEY);
      if (result !== null) {
        set(prev => ({optin: JSON.parse(result)}));
      }
    } catch (e) {
      alert('Failed to fetch the data from storage');
    }
  },
  updateoptin: async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, 'true');
      set(prev => ({optin: true}));
      console.log('saved');
    } catch (e) {
      console.log(e);
      alert('Failed to save the data to the storage');
    }
  },
});

export default guidethroughSlice;
