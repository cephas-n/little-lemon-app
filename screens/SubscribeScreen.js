import * as React from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import WelcomeScreen from "./WelcomeScreen";
import { validateEmail } from "../utils/index";

const SubscribeScreen = () => {
  // Add subscribe screen code here
  const [email, onChangeEmail] = React.useState("");
  const emailIsValid = validateEmail(email);

  const subscribe = () => {
    console.log(email);
    Alert.alert(null, "Thanks for subscribing, stay tuned!");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "height" : "padding"}
    >
      <ScrollView style={styles.container} keyboardDismissMode="on-drag">
        <View style={styles.innerContainer}>
          <Image
            style={styles.image}
            source={require("../assets/little-lemon-logo-grey.png")}
          />
          <Text style={styles.regularText}>
            Subscribe to our newsletter for our latest delocious recipes!
          </Text>
          <TextInput
            onChangeText={onChangeEmail}
            keyboardType="email-address"
            style={styles.input}
            maxLength={50}
            placeholder="Type your email"
          />
          <Pressable
            onPress={subscribe}
            disabled={!emailIsValid}
            style={emailIsValid ? styles.button : styles.buttonInvalid}
          >
            <Text style={styles.buttonText}>Subscribe</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    padding: 30,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  regularText: {
    paddingVertical: 20,
    fontSize: 20,
    textAlign: "center",
  },
  input: {
    borderColor: "#333",
    borderWidth: 2,
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#146356",
    paddingVertical: 6,
    width: "100%",
    borderRadius: 8,
  },
  buttonInvalid: {
    backgroundColor: "#bbb",
    paddingVertical: 6,
    width: "100%",
    borderRadius: 8,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
  },
});
