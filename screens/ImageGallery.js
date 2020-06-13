import React, {Component} from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Image,
    ImageBackground,
    ScrollView
} from "react-native";
import { Permissions, Camera, FaceDetector, } from "expo";
import HeaderHome from "../components/HeaderHome";
function ImageGallery(props)
{
    return (
    <View style={styles.container}>
    <ScrollView>
      <View style={styles.categories}>
        <View style={styles.button2RowColumn}>
          <View style={styles.button2Row}>
            <TouchableOpacity style={styles.button2}>
              <ImageBackground
                source={require("../assets/images/image1.jpg")}
                resizeMode="cover"
                style={styles.image}
              >
                <View style={styles.rect8Filler}></View>
              </ImageBackground>
            </TouchableOpacity>
            <View style={styles.button2Filler}></View>
            <TouchableOpacity style={styles.button3}>
              <View style={styles.image2Stack}>
                <Image
                  source={require("../assets/images/image2.jpg")}
                  resizeMode="cover"
                  style={styles.image2}
                ></Image>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.button4Row}>
            <TouchableOpacity style={styles.button4}>
              <ImageBackground
                source={require("../assets/images/image4.jpg")}
                resizeMode="cover"
                style={styles.image3}
                imageStyle={styles.image3_imageStyle}
              >
                <View style={styles.rect83Filler}></View>
              </ImageBackground>
            </TouchableOpacity>
            <View style={styles.button4Filler}></View>
            <TouchableOpacity style={styles.button5}>
              <ImageBackground
                source={require("../assets/images/image3.jpg")}
                resizeMode="cover"
                style={styles.image4}
              >
              </ImageBackground>
            </TouchableOpacity>
          </View>
        <View style={styles.button7Row}>
          <TouchableOpacity style={styles.button7}>
            <ImageBackground
              source={require("../assets/images/image5.jpg")}
              resizeMode="cover"
              style={styles.image22}
            >
              <View style={styles.rect85Filler}></View>
            </ImageBackground>
          </TouchableOpacity>
          <View style={styles.button7Filler}></View>
          <TouchableOpacity style={styles.button6}>
            <ImageBackground
              source={require("../assets/images/image6.jpg")}
              resizeMode="cover"
              style={styles.image32}
              imageStyle={styles.image32_imageStyle}
            >
              <View style={styles.rect86Filler}></View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </ScrollView>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
    width: 360,
    height: 660
  },

  text: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  text2: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  button: {
    width: 100,
    height: 38,
    backgroundColor: "rgba(247,247,247,0)",
    alignSelf: "center",
    opacity: 1,
    borderRadius: 100,
    justifyContent: "center"
  },
  text3: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  categories: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  button2: {
    width: 150,
    height: 150,
    backgroundColor: "rgba(230, 230, 230,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden"
  },
  image: {
    flex: 1
  },
  image_imageStyle: {},
  rect8Filler: {
    flex: 1
  },
  rect8: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)",
    justifyContent: "center"
  },
  text22: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    alignSelf: "center"
  },
  button2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  button3: {
    width: 150,
    height: 150,
    backgroundColor: "rgba(230, 230, 230,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden"
  },
  image2: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 1
  },
  rect82: {
    left: 0,
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)",
    position: "absolute",
    right: 0,
    bottom: 0,
    justifyContent: "center"
  },
  text23: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    alignSelf: "center"
  },
  image2Stack: {
    flex: 1,
    marginBottom: -1
  },
  button2Row: {
    height: 150,
    flexDirection: "row"
  },
  button4: {
    width: 150,
    height: 150,
    backgroundColor: "rgba(230, 230, 230,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden"
  },
  image3: {
    flex: 1
  },
  image3_imageStyle: {},
  rect83Filler: {
    flex: 1
  },
  rect83: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)",
    justifyContent: "center"
  },
  text24: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    alignSelf: "center"
  },
  button4Filler: {
    flex: 1,
    flexDirection: "row"
  },
  button5: {
    width: 150,
    height: 150,
    backgroundColor: "rgba(230, 230, 230,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden"
  },
  image4: {
    flex: 1
  },
  image4_imageStyle: {},
  rect84Filler: {
    flex: 1
  },
  rect84: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)"
  },
  text25: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    marginTop: 7,
    alignSelf: "center"
  },
  button4Row: {
    height: 150,
    flexDirection: "row",
    marginTop: 40
  },
  button2RowColumn: {
    marginTop: 20,
    marginLeft: 25,
  },
  button2RowColumnFiller: {
    flex: 1
  },
  button7: {
    width: 150,
    height: 150,
    backgroundColor: "rgba(230, 230, 230,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden",
    alignSelf: "flex-end"
  },
  image22: {
    flex: 1,
    marginBottom: -1,
    marginTop: 1
  },
  image22_imageStyle: {},
  rect85Filler: {
    flex: 1
  },
  rect85: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)",
    marginBottom: 1
  },
  text26: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    marginTop: 7,
    alignSelf: "center"
  },
  button7Filler: {
    flex: 1,
    flexDirection: "row"
  },
  button6: {
    width: 150,
    height: 150,
    backgroundColor: "rgba(230, 230, 230,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden",
    alignSelf: "flex-end"
  },
  image32: {
    flex: 1,
    marginBottom: -1,
    marginTop: 1
  },
  image32_imageStyle: {},
  rect86Filler: {
    flex: 1
  },
  rect86: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)"
  },
  text27: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    marginTop: 6,
    alignSelf: "center"
  },
  button7Row: {
    height: 150,
    flexDirection: "row",
    marginTop:40,
  }
});
export default ImageGallery;