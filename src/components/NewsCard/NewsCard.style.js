import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 8,
    borderRadius: 9,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
  },
  inner_container: {
    padding: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    marginVertical: 4,
  },
  author: {
    textAlign: 'right',
    fontStyle: 'italic',
    color: '#999',
  },
});
