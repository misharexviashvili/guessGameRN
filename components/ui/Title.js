import { Text, StyleSheet, useWindowDimensions, Platform } from "react-native";
function Title({ children }) {
  const { width, height } = useWindowDimensions();
  let marginTop = 50;
  if (height < 400) {
    marginTop = 15;
  }
  return <Text style={[styles.title, { marginTop }]}>{children}</Text>;
}
export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "Open-sans-bold",
    fontSize: 24,
    // fontWeight: "bold",
    color: "white",
    textAlign: "center",

    /*This is one way of doing it (ternary operator)
    borderWidth: Platform.OS === "android" ? 0 : 2,*/

    // This is second way
    borderWidth: Platform.select({ ios: 2, android: 2 }),
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
