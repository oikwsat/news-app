import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ListItem = () => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Image style={{width: 100, height: 100,}} source={{uri: 'https://picsum.photos/id/10/200/200'}}/>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.text} numberOfLines={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text style={styles.subText}>React News</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: 'gray',
  }
});

export default ListItem;