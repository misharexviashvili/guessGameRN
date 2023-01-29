import { Text, StyleSheet, useWindowDimensions } from "react-native";
function Title({ children }) {
  const { width, height } = useWindowDimensions();
  let marginTop = 50;
  if (height < 400) {
    marginTop = 15;
  }
  return (
    <Text style={[styles.title, { marginTop }]}>{children}</Text>
  );
}
export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "Open-sans-bold",
    fontSize: 24,
    // fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    // marginTop:50,
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
