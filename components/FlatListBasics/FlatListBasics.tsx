import React, { useState } from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import { useStudenData } from "../../hooks/useStudentData";

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   color: "red"
  },
  item: {
    padding: 10,
    fontSize: 12,
    height: 44,
  },
});

const FlatListBasics = () => {
  const student = useStudenData()
    return (
      <View style={styles.container}>
        <FlatList
          data={student}
          renderItem={({item}) => 
            {
                  return <>
                      <Text  style={styles.item}>{item.key}</Text>
                      {/* <CheckBox value={item.selected} onValueChange={() => { } } /> */}
                  </>;
              }
          }             
        />
      </View>
    );
  }
  

  export default FlatListBasics