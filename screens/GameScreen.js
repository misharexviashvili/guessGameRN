import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import Title from "../components/Title";
function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>
      <View>
        <Text>Higher or lower?</Text>
        {/* + - */}
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}
export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // I changed paddings, so they differ from one on lecture
    paddingVertical: 40,
    paddingHorizontal: 24,
  },

});
