import { Link, Redirect } from "expo-router";
import { View, Text, SafeAreaView } from "react-native";
//import React from "react";

const index = () => {
  return <Redirect href="/(stack)/home" />;

  /* return (
     <SafeAreaView>
      <View className="mt-6 mx-2.5">
        <Text
          className="text-5xl text-primary"
          style={{ fontFamily: "WorkSans-Black" }}
        >
          Hola mundo
        </Text>
        <Text className="text-4xl font-work-black text-secondary-200">
          Hola mundo
        </Text>
        <Text className="text-3xl text-secondary-100 font-work-medium ">
          Hola mundo
        </Text>
        <Text className="text-2xl text-secondary font-work-light">
          Hola mundo
        </Text>
        <Text className="text-xl text-tertiary">Hola mundo</Text>

        <Link href="/products">Productos</Link>
      </View>
    </SafeAreaView> 
  ); */
};

export default index;
