import { Dimensions, FlatList, Image, Text, View } from "react-native";
import { DataProp } from "../types/data";
function Homescreen() {
  const data: DataProp[] = [
    {
      id: "1",
      title: "holly",
      img: require("../assets/images/IMG_5695.jpeg"),
    },
    {
      id: "2",
      title: "design",
      img: require("../assets/images/design_your_app.png"),
    },
  ];

  const { width: SreenWidth } = Dimensions.get("window");

  return (
    <View style={{ backgroundColor: "#79BCFF", flex: 1 }}>
      {/* <View
        style={{ height: 400, width: "100%", backgroundColor: "black" }}
      ></View> */}
      <FlatList
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={(each) => {
          //   console.log(each);

          return (
            <View>
              <Image
                source={each.item.img}
                style={{ width: SreenWidth, height: "100%" }}
              />
              <Text>{each.item.title}</Text>
            </View>
          );
        }}
        keyExtractor={(each) => `${each.id}`}
      />
    </View>
  );
}

export default Homescreen;
