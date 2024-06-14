import { Animated, Image, Text, View } from "react-native";
import Label from "../../atoms/label/label.component";
import Carousel from "react-native-reanimated-carousel";
import CreditCard, { ICreditCard } from "../../molecules/creditCard/creditCard.component";
import Button from "../../atoms/button/button.component";
import { CommonTheme } from "../../theme";

const color = CommonTheme.color

const CardViewer = ({ heightAnim, customData, carouselIndex, blockedCards, handleSnapToItem, expanded }: any) => {

  return (
    <Animated.View style={{ width: '100%', alignItems: 'center', paddingHorizontal: 20, height: heightAnim, backgroundColor: color.graySuperLight }}>

      <Label style={{ marginTop: 25 }} variant={"p1"}>
        Mastercard <Text style={{ fontWeight: 'bold', fontSize: 18 }}>••••</Text> {customData[carouselIndex]?.cardNumber.slice(-4)}
      </Label>
      <Carousel
        data={customData}
        width={290}
        height={180}
        renderItem={({ item }) => <CreditCard isLocked={blockedCards} item={item as ICreditCard} />}
        onSnapToItem={handleSnapToItem}
        pagingEnabled={true}
        autoPlay={false}
        scrollAnimationDuration={1000}
        style={{ width: '198%', alignContent: 'center', alignSelf: 'center', justifyContent: 'center', marginTop: 12 }}
      />
      {
        expanded && <>

          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 22 }}>
            <Image source={require('../../../assets/images/AppleWallet.png')} style={{ height: 42, width: 136, marginBottom: 20, marginTop: 10 }} />
            <Label style={{ color: color.mainOrange }} variant={"p1"}>
              Card Number
            </Label>
            <Label style={{ color: color.grayBlack, marginTop: 5 }} variant={"h5"}>
              {customData[carouselIndex]?.cardNumber}
            </Label>
          </View>
          <View style={{ height: 1, width: "100%", backgroundColor: color.gray400, marginVertical: 25 }} />

          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Label style={{ color: color.mainOrange }} variant={"p1"}>
                Expiration Date
              </Label>
              <Label style={{ color: color.grayBlack, marginTop: 5 }} variant={"h5"}>
                {customData[carouselIndex]?.expMonth}/{customData[carouselIndex]?.expYear}
              </Label>
            </View>
            <View style={{ height: 40, width: 1, backgroundColor: color.gray400, marginHorizontal: 25 }} />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Label style={{ color: color.mainOrange }} variant={"p1"}>
                CVC
              </Label>
              <Label style={{ color: color.grayBlack, marginTop: 5 }} variant={"h5"}>
                {customData[carouselIndex]?.cvc}
              </Label>
            </View>
          </View>
          <Button title={"Copy Card Number"} variant={"activeWithBorder"} style={{ width: '100%', marginTop: 25 }} />

        </>
      }
    </Animated.View>
  )
}

export default CardViewer