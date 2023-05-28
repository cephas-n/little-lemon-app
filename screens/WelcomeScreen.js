import * as React from "react";
import { StyleSheet } from "react-native";
import { Image, Pressable, Text, View } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={require("../assets/little-lemon-logo.png")}
        />
        <Text style={styles.regularText}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Subscribe")}
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  regularText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 40,
    textAlign: "center",
  },
  button: {
    paddingVertical: 6,
    backgroundColor: "#146356",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fafafa",
    fontSize: 20,
    textAlign: "center",
  },
});
