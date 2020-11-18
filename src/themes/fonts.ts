import { Platform } from 'react-native';

export default {
  font: Platform.OS === 'ios' ? 'Avenir-Book' : 'Open Sans',
};
