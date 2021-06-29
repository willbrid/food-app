import React, { useContext } from "react";
import styled from "styled-components/native";
import { View, Text, Image, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import Spacer from "../../../components/spacer/spacer.component";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

import { ThemeContext } from "../../../providers/theme/theme.provider";

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Open = styled(SvgXml)`
  flex-direction: row;
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const theme = useContext(ThemeContext);

  const {
    name = "Some restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches-819x1024.jpg.webp",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Card elevation={5} style={styles(theme).restaurantCard}>
      <Card.Cover key={name} source={{ uri: photos[0] }} style={styles(theme).restaurantCardCover} />
      <View style={styles(theme).info}>
        <Text style={styles(theme).title}>{name}</Text>
        <View style={styles(theme).section}>
          <View style={styles(theme).rating}>
            {ratingArray.map((item, index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </View>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow === true && <Open xml={open} width={20} height={20} />}
            </Spacer> 
            <Spacer position="left" size="large">
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </View>
        <Text style={styles(theme).address}>{address}</Text>
      </View> 
    </Card>
  );
};

const styles = (theme) => StyleSheet.create({
  restaurantCard: {
    backgroundColor: theme?.colors.bg.primary
  },
  restaurantCardCover: {
    padding: theme?.space[3],
    backgroundColor: theme?.colors.bg.primary,
  },
  address: {
    fontFamily: theme?.fonts.body,
    fontSize: theme?.fontSizes.caption,
  },
  title: {
    fontFamily: theme?.fonts.heading,
    fontSize: theme?.fontSizes.body,
    color: theme?.colors.ui.primary,
  },
  info: {
    padding: theme?.space[3]
  },
  rating: {
    flexDirection: "row",
    paddingTop: theme?.space[2],
    paddingBottom: theme?.space[2]
  },
  section: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default RestaurantInfoCard;
