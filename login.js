import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Login extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="871637b1-da07-4629-b126-15d49c40d9f0" style={styles.login}>
        <View data-layer="528e50ed-87fb-4582-abb2-2455a8b558f8" style={styles.login_group1}>
            <View data-layer="b7677739-0c9e-4c3f-b364-47f5863dbc07" style={styles.login_group1_shadow0675119b}>
                <Svg data-layer="92871ff6-de04-401c-9c1a-e23f77538a95" style={styles.login_group1_shadow0675119b_path172c2c606} preserveAspectRatio="none" viewBox="393.717529296875 344.36541748046875 162.86810302734375 161.74771118164062" fill="transparent"><SvgPath d="M 416.2965698242188 372.545166015625 C 404.4398498535156 387.6610412597656 397.2643737792969 408.8195495605469 395.5463562011719 433.7329711914063 C 394.8034057617188 444.5072937011719 394.6896057128906 464.8316345214844 402.2757568359375 479.8994140625 C 412.6997375488281 500.6041259765625 437.7525329589844 502.3586730957031 457.8824768066406 503.7681884765625 C 478.8588256835938 505.2350769042969 496.9934997558594 502.0186767578125 511.8556213378906 494.2111206054688 C 541.512939453125 478.62744140625 553.3351440429688 440.7325134277344 554.510498046875 410.4644775390625 C 555.0064697265625 397.6859130859375 553.4480590820313 374.192138671875 537.4346923828125 360.417724609375 C 533.1513671875 356.7332763671875 527.8861694335938 353.7982788085938 521.3378295898438 351.4431457519531 C 505.0370483398438 345.5805969238281 486.826904296875 345.5805969238281 471.0429077148438 346.0492553710938 C 454.8321838378906 346.5253601074219 440.7635803222656 351.1554565429688 429.2293395996094 359.8109130859375 C 429.2293395996094 359.8109130859375 423.2901306152344 364.3574829101563 416.2965698242188 372.545166015625 Z"  /></Svg>
            </View>
            <View data-layer="bf2ee328-aa0c-48e9-91ff-0eb4bc763585" style={styles.login_group1_shadow}>
                <Svg data-layer="25b66dad-7777-4b0c-8ee0-f66dfb4b117c" style={styles.login_group1_shadow_path1} preserveAspectRatio="none" viewBox="394.467529296875 345.11541748046875 160.86810302734375 159.74771118164062" fill="rgba(255, 186, 158, 1)"><SvgPath d="M 416.2965698242188 372.545166015625 C 404.4398498535156 387.6610412597656 397.2643737792969 408.8195495605469 395.5463562011719 433.7329711914063 C 394.8034057617188 444.5072937011719 394.6896057128906 464.8316345214844 402.2757568359375 479.8994140625 C 412.6997375488281 500.6041259765625 437.7525329589844 502.3586730957031 457.8824768066406 503.7681884765625 C 478.8588256835938 505.2350769042969 496.9934997558594 502.0186767578125 511.8556213378906 494.2111206054688 C 541.512939453125 478.62744140625 553.3351440429688 440.7325134277344 554.510498046875 410.4644775390625 C 555.0064697265625 397.6859130859375 553.4480590820313 374.192138671875 537.4346923828125 360.417724609375 C 533.1513671875 356.7332763671875 527.8861694335938 353.7982788085938 521.3378295898438 351.4431457519531 C 505.0370483398438 345.5805969238281 486.826904296875 345.5805969238281 471.0429077148438 346.0492553710938 C 454.8321838378906 346.5253601074219 440.7635803222656 351.1554565429688 429.2293395996094 359.8109130859375 C 429.2293395996094 359.8109130859375 423.2901306152344 364.3574829101563 416.2965698242188 372.545166015625 Z"  /></Svg>
            </View>
            <Text data-layer="49edca86-1c9d-477f-9896-e8ca36115109" style={styles.login_group1_peach}>peach</Text>
            <Text data-layer="31bb5536-034b-4a6f-a07d-5f376ec57f71" style={styles.login_group1_health}>health</Text>
        </View>
        <View data-layer="b7b9fd7b-2a39-4743-aa4a-79ddcc061a3a" style={styles.login_iphoneXstatusBarsstatusBarBlack}>
            <View data-layer="b27f2be5-fd79-4ec7-89ef-ef3080719a95" style={styles.login_iphoneXstatusBarsstatusBarBlack_rectanglefe02d9ba}></View>
            <View data-layer="6cbf8241-ef71-4f2e-847f-26a571c9b8c4" style={styles.login_iphoneXstatusBarsstatusBarBlack_group5}>
                <View data-layer="26d6dea4-2f57-4a6b-a60a-9ead6a6053ed" style={styles.login_iphoneXstatusBarsstatusBarBlack_group5_battery}>
                    <View data-layer="db983fd2-e495-40fe-8ec9-b88c77027115" style={styles.login_iphoneXstatusBarsstatusBarBlack_group5_battery_border}></View>
                    <Svg data-layer="aa75f51b-5cf8-4740-8e60-7b90f7022b52" style={styles.login_iphoneXstatusBarsstatusBarBlack_group5_battery_cap} preserveAspectRatio="none" viewBox="-0.75 -0.75 2.828033447265625 5.5" fill="rgba(0, 0, 0, 1)"><SvgPath d="M 0 0 L 0 4 C 0.8047311305999756 3.661223411560059 1.328037977218628 2.873133182525635 1.328037977218628 2 C 1.328037977218628 1.126866698265076 0.8047311305999756 0.3387765288352966 0 0"  /></Svg>
                    <View data-layer="54a4d253-d774-44c1-80a3-096e9cbb15b6" style={styles.login_iphoneXstatusBarsstatusBarBlack_group5_battery_capacity}></View>
                </View>
                <Svg data-layer="493a4328-3876-4a1f-8b9f-e8ce33be712a" style={styles.login_iphoneXstatusBarsstatusBarBlack_group5_wifi} preserveAspectRatio="none" viewBox="-0.75 -0.75 16.772125244140625 12.465599060058594" fill="rgba(0, 0, 0, 1)"><SvgPath d="M 7.636517524719238 10.96560001373291 C 7.553837299346924 10.96560001373291 7.473147392272949 10.93181037902832 7.415117263793945 10.87290000915527 L 5.417117595672607 8.856900215148926 C 5.355837345123291 8.796520233154297 5.321717262268066 8.712539672851563 5.323517322540283 8.626500129699707 C 5.325307369232178 8.540619850158691 5.363027572631836 8.458290100097656 5.427017211914063 8.400600433349609 C 6.043807506561279 7.878690242767334 6.828487396240234 7.591279983520508 7.636517524719238 7.591279983520508 C 8.444547653198242 7.591279983520508 9.229227066040039 7.878699779510498 9.846017837524414 8.400600433349609 C 9.909987449645996 8.457460403442383 9.947707176208496 8.539790153503418 9.949517250061035 8.626500129699707 C 9.95131778717041 8.712539672851563 9.917197227478027 8.796520233154297 9.855916976928711 8.856900215148926 L 7.857917308807373 10.87290000915527 C 7.799037456512451 10.93268013000488 7.720407485961914 10.96560001373291 7.636517524719238 10.96560001373291 Z M 11.1447172164917 7.427700042724609 C 11.06472778320313 7.427700042724609 10.9886474609375 7.397650241851807 10.93051719665527 7.343100070953369 C 10.02612781524658 6.524199962615967 8.856297492980957 6.073200225830078 7.636517524719238 6.073200225830078 C 6.417577266693115 6.073200225830078 5.248707294464111 6.524189949035645 4.345217227935791 7.343100070953369 C 4.287087440490723 7.397650241851807 4.211007595062256 7.427700042724609 4.131017208099365 7.427700042724609 C 4.048027515411377 7.427700042724609 3.970037460327148 7.395420074462891 3.911417484283447 7.336800098419189 L 2.757617473602295 6.170400142669678 C 2.695777416229248 6.108550071716309 2.662217378616333 6.026730060577393 2.663117408752441 5.940000057220459 C 2.664007425308228 5.853139877319336 2.69884729385376 5.771959781646729 2.761217355728149 5.711400032043457 C 4.090717315673828 4.47461986541748 5.822447299957275 3.793499946594238 7.637417316436768 3.793499946594238 C 9.452387809753418 3.793499946594238 11.18411731719971 4.47461986541748 12.51361751556396 5.711400032043457 C 12.57655715942383 5.772540092468262 12.61171722412109 5.853720188140869 12.61261749267578 5.940000057220459 C 12.61350727081299 6.025139808654785 12.57939720153809 6.109109878540039 12.51901721954346 6.170400142669678 L 11.36431694030762 7.336800098419189 C 11.30568695068359 7.395420074462891 11.227707862854 7.427700042724609 11.1447172164917 7.427700042724609 Z M 13.80421733856201 4.743000030517578 C 13.72327709197998 4.743000030517578 13.64720726013184 4.711999893188477 13.59001731872559 4.655700206756592 C 11.97507762908936 3.121779918670654 9.860747337341309 2.276999950408936 7.636517524719238 2.276999950408936 C 5.41138744354248 2.276999950408936 3.297057390213013 3.121769905090332 1.683017373085022 4.655700206756592 C 1.625837445259094 4.711989879608154 1.549757361412048 4.743000030517578 1.468817353248596 4.743000030517578 C 1.385827422142029 4.743000030517578 1.3078373670578 4.710720062255859 1.249217391014099 4.652100086212158 L 0.09361741691827774 3.485699892044067 C 0.03236741945147514 3.423549890518188 -0.0008725797524675727 3.342360019683838 1.742024505801965e-05 3.257100105285645 C 0.000917420256882906 3.170560121536255 0.03511742129921913 3.089689970016479 0.09631741791963577 3.029400110244751 C 2.134447336196899 1.075860023498535 4.812267303466797 0 7.636517524719238 0 C 10.46076774597168 0 13.13859748840332 1.075860023498535 15.17671775817871 3.029400110244751 C 15.23734760284424 3.090039968490601 15.27211761474609 3.173029899597168 15.27211761474609 3.257100105285645 C 15.2730073928833 3.342360019683838 15.23976707458496 3.423549890518188 15.17851734161377 3.485699892044067 L 14.02291774749756 4.652100086212158 C 13.96428775787354 4.710720062255859 13.88662719726563 4.743000030517578 13.80421733856201 4.743000030517578 Z"  /></Svg>
                <Svg data-layer="bc0dd68c-8696-4f55-a5a9-7eecb3587373" style={styles.login_iphoneXstatusBarsstatusBarBlack_group5_cellularConnection} preserveAspectRatio="none" viewBox="-0.75 -0.7499999293327448 18.500091552734375 12.166801452636719" fill="rgba(0, 0, 0, 1)"><SvgPath d="M 16.00020027160645 10.6668004989624 L 15.00029945373535 10.6668004989624 C 14.44894981384277 10.6668004989624 14.00039958953857 10.2182502746582 14.00039958953857 9.666900634765625 L 14.00039958953857 0.9999000430107117 C 14.00039958953857 0.4485500752925873 14.44894981384277 7.066725515869621e-08 15.00029945373535 7.066725515869621e-08 L 16.00020027160645 7.066725515869621e-08 C 16.55154991149902 7.066725515869621e-08 17.00010108947754 0.4485500752925873 17.00010108947754 0.9999000430107117 L 17.00010108947754 9.666900634765625 C 17.00010108947754 10.2182502746582 16.55154991149902 10.6668004989624 16.00020027160645 10.6668004989624 Z M 11.33369922637939 10.6668004989624 L 10.33290004730225 10.6668004989624 C 9.781549453735352 10.6668004989624 9.332999229431152 10.2182502746582 9.332999229431152 9.666900634765625 L 9.332999229431152 3.333600044250488 C 9.332999229431152 2.782249927520752 9.781549453735352 2.333699941635132 10.33290004730225 2.333699941635132 L 11.33369922637939 2.333699941635132 C 11.88504981994629 2.333699941635132 12.33360004425049 2.782249927520752 12.33360004425049 3.333600044250488 L 12.33360004425049 9.666900634765625 C 12.33360004425049 10.2182502746582 11.88504981994629 10.6668004989624 11.33369922637939 10.6668004989624 Z M 6.666300296783447 10.6668004989624 L 5.666399955749512 10.6668004989624 C 5.115049839019775 10.6668004989624 4.666500091552734 10.2182502746582 4.666500091552734 9.666900634765625 L 4.666500091552734 5.66640043258667 C 4.666500091552734 5.115050315856934 5.115049839019775 4.666500091552734 5.666399955749512 4.666500091552734 L 6.666300296783447 4.666500091552734 C 7.218140125274658 4.666500091552734 7.667099952697754 5.115050315856934 7.667099952697754 5.66640043258667 L 7.667099952697754 9.666900634765625 C 7.667099952697754 10.2182502746582 7.218140125274658 10.6668004989624 6.666300296783447 10.6668004989624 Z M 1.999799966812134 10.6668004989624 L 0.9998999834060669 10.6668004989624 C 0.4485500156879425 10.6668004989624 0 10.2182502746582 0 9.666900634765625 L 0 7.667100429534912 C 0 7.115260124206543 0.4485500156879425 6.666300296783447 0.9998999834060669 6.666300296783447 L 1.999799966812134 6.666300296783447 C 2.55115008354187 6.666300296783447 2.99970006942749 7.115260124206543 2.99970006942749 7.667100429534912 L 2.99970006942749 9.666900634765625 C 2.99970006942749 10.2182502746582 2.55115008354187 10.6668004989624 1.999799966812134 10.6668004989624 Z"  /></Svg>
            </View>
            <View data-layer="6fdfe16e-9868-41f5-8ed1-03ae0a2ec2bb" style={styles.login_iphoneXstatusBarsstatusBarBlack_timeStyle}>
                <View data-layer="5d93fa97-c148-4e2f-904b-5d84ff10e0f3" style={styles.login_iphoneXstatusBarsstatusBarBlack_timeStyle_timeStyleBackground}></View>
                <Text data-layer="2c6c6fe7-64ac-4084-95ab-5c0b488a8568" style={styles.login_iphoneXstatusBarsstatusBarBlack_timeStyle_xTime}>9:41</Text>
            </View>
        </View>
        <View data-layer="5d4b3d25-88fa-404f-bc6c-174b9eecfb80" style={styles.login_group3}>
            <Text data-layer="fa63a7f0-6164-46bb-871e-b78b4f14f4ea" style={styles.login_group3_byCreatingAnAccountYouAgreeToOurTermsOfServiceAndPrivacyPolicy}>By creating an account, you agree to our 
Terms of Service and Privacy Policy</Text>
            <View data-layer="ea71ad93-ad70-457f-aa88-e55eea85d577" style={styles.login_group3_signup968053a9}>
                <Text data-layer="d9819c12-a982-425b-b223-4a8f8c5116ed" style={styles.login_group3_signup968053a9_newUser}>New user?</Text>
                <Text data-layer="6a1b2b0c-d4cc-46c0-8717-0fa64456dd6a" style={styles.login_group3_signup968053a9_signup}>Sign up</Text>
                <Text data-layer="27083c7f-b863-4496-a148-1718d72dcdef" style={styles.login_group3_signup968053a9_here}>here</Text>
            </View>
        </View>
        <Text data-layer="78b80292-b7d9-45e3-986e-cb29cb867aa4" style={styles.login_forgotPassword}>Forgot password?</Text>
        <View data-layer="61fed30b-016c-45d5-b0f2-ad78fd394919" style={styles.login_group2}>
            <View data-layer="5428798b-81bb-48c8-9462-b8cc282e99c0" style={styles.login_group2_button}>
                <View data-layer="50c54e37-24f2-4e4d-8366-daa5f19fa594" style={styles.login_group2_button_rectangle44dbb318}></View>
                <Text data-layer="ffb20964-218d-476f-ade6-ad83f6cfaebb" style={styles.login_group2_button_getStarted}>Sign In</Text>
            </View>
            <View data-layer="5a1e9df0-eb03-4c0d-b576-a8453cb6f616" style={styles.login_group2_password6d9e99c0}>
                <View data-layer="219376a0-a0d6-4e0b-bdf7-996baf2ac402" style={styles.login_group2_password6d9e99c0_line5b514955}>
                    <View data-layer="8c8fa357-f2ab-40b5-872e-4bf279ea8375" style={styles.login_group2_password6d9e99c0_line5b514955_rectangledbf8a738}></View>
                    <View data-layer="8c7facfd-ac70-49aa-b51b-e7a174c75058" style={styles.login_group2_password6d9e99c0_line5b514955_rectanglebb9f769f}></View>
                </View>
                <Text data-layer="c37d2c49-8f35-40b4-91f3-0441f633c8c6" style={styles.login_group2_password6d9e99c0_password}>Password</Text>
            </View>
            <View data-layer="5760b1aa-ceb0-43bd-afd7-bd389a54d27d" style={styles.login_group2_email}>
                <View data-layer="4297872f-a98a-4aad-a58d-97aabb45bf96" style={styles.login_group2_email_line}>
                    <View data-layer="5a9c5a31-055b-4cdb-acc3-657a50606829" style={styles.login_group2_email_line_rectangle143768f8}></View>
                    <View data-layer="79529ba5-38f5-481c-b202-f7643023b31d" style={styles.login_group2_email_line_rectangle}></View>
                </View>
                <Text data-layer="3ed79b4a-a2f9-4217-8e62-0a99fa12939a" style={styles.login_group2_email_janedoe}>janedoe@email.com</Text>
                <Text data-layer="0150807d-01e3-48a2-bb1d-f4f06dab3fd2" style={styles.login_group2_email_username}>Email address</Text>
            </View>
        </View>
    </ScrollView>
    );
  }
}

Login.propTypes = {

}

Login.defaultProps = {

}


const styles = StyleSheet.create({
  "login": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 375,
    "height": 812,
    "left": 0,
    "top": 0
  },
  "login_group1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 175.86,
    "height": 161.24,
    "left": 99.14,
    "top": 119.36
  },
  "login_group1_shadow0675119b": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 159.37,
    "height": 158.25,
    "left": 0,
    "top": 0
  },
  "login_group1_shadow0675119b_path172c2c606": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 166.37,
    "height": 165.25,
    "left": -3,
    "top": -3
  },
  "login_group1_shadow": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 159.37,
    "height": 158.25,
    "left": 2.99,
    "top": 2.99
  },
  "login_group1_shadow_path1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 161.37,
    "height": 160.25,
    "left": -1,
    "top": -1
  },
  "login_group1_peach": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(47, 75, 107, 1)",
    "fontSize": 40,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 157,
    "height": 53,
    "left": 18.86,
    "top": 41.64
  },
  "login_group1_health": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(47, 75, 107, 1)",
    "fontSize": 20,
    "fontWeight": "300",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 54,
    "height": 26,
    "left": 19.86,
    "top": 91.64
  },
  "login_iphoneXstatusBarsstatusBarBlack": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 375,
    "height": 33,
    "left": 0,
    "top": 0
  },
  "login_iphoneXstatusBarsstatusBarBlack_rectanglefe02d9ba": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 374,
    "height": 32,
    "left": -0.5,
    "top": -0.5
  },
  "login_iphoneXstatusBarsstatusBarBlack_group5": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 66.33,
    "height": 11.67,
    "left": 284,
    "top": 11
  },
  "login_iphoneXstatusBarsstatusBarBlack_group5_battery": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 24.33,
    "height": 11.33,
    "left": 42,
    "top": 0.33
  },
  "login_iphoneXstatusBarsstatusBarBlack_group5_battery_border": {
    "opacity": 0.3499999940395355,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 1)",
    "borderTopLeftRadius": 2.67,
    "borderTopRightRadius": 2.67,
    "borderBottomLeftRadius": 2.67,
    "borderBottomRightRadius": 2.67,
    "width": 22,
    "height": 11.33,
    "left": 0,
    "top": 0
  },
  "login_iphoneXstatusBarsstatusBarBlack_group5_battery_cap": {
    "opacity": 0.4000000059604645,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 3.33,
    "height": 6,
    "left": 22,
    "top": 2.67
  },
  "login_iphoneXstatusBarsstatusBarBlack_group5_battery_capacity": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(0, 0, 0, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 1.33,
    "borderTopRightRadius": 1.33,
    "borderBottomLeftRadius": 1.33,
    "borderBottomRightRadius": 1.33,
    "width": 17,
    "height": 6.33,
    "left": 1.5,
    "top": 1.5
  },
  "login_iphoneXstatusBarsstatusBarBlack_group5_wifi": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 17.27,
    "height": 12.97,
    "left": 21,
    "top": -1
  },
  "login_iphoneXstatusBarsstatusBarBlack_group5_cellularConnection": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 19,
    "height": 12.67,
    "left": -1,
    "top": 0
  },
  "login_iphoneXstatusBarsstatusBarBlack_timeStyle": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 54,
    "height": 21,
    "left": 21,
    "top": 6
  },
  "login_iphoneXstatusBarsstatusBarBlack_timeStyle_timeStyleBackground": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(0, 0, 0, 0)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 53,
    "height": 20,
    "left": -0.5,
    "top": -0.5
  },
  "login_iphoneXstatusBarsstatusBarBlack_timeStyle_xTime": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Poppins",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 27,
    "height": 19,
    "left": 0,
    "top": 2
  },
  "login_group3": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 188,
    "height": 102,
    "left": 93,
    "top": 672
  },
  "login_group3_byCreatingAnAccountYouAgreeToOurTermsOfServiceAndPrivacyPolicy": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(47, 75, 107, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Product Sans",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 182,
    "height": 28,
    "left": 3.5,
    "top": 74
  },
  "login_group3_signup968053a9": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 188,
    "height": 22,
    "left": 0,
    "top": 0
  },
  "login_group3_signup968053a9_newUser": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(96, 96, 96, 1)",
    "fontSize": 17,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Product Sans",
    "textAlign": "left",
    "lineHeight": 22,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 78,
    "height": 27,
    "left": 0,
    "top": 0
  },
  "login_group3_signup968053a9_signup": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(236, 116, 104, 1)",
    "fontSize": 17,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Product Sans",
    "textAlign": "left",
    "lineHeight": 22,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 61,
    "height": 27,
    "left": 90,
    "top": 0
  },
  "login_group3_signup968053a9_here": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(96, 96, 96, 1)",
    "fontSize": 17,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Product Sans",
    "textAlign": "left",
    "lineHeight": 22,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 33,
    "height": 27,
    "left": 155,
    "top": 0
  },
  "login_forgotPassword": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(236, 116, 104, 1)",
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Product Sans",
    "textAlign": "right",
    "lineHeight": 23,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 94,
    "height": 27,
    "left": 255,
    "top": 502.5
  },
  "login_group2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 326,
    "height": 245,
    "left": 24,
    "top": 356
  },
  "login_group2_button": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 325,
    "height": 46.54,
    "left": 1,
    "top": 198.46
  },
  "login_group2_button_rectangle44dbb318": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 186, 158, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 5,
    "borderTopRightRadius": 5,
    "borderBottomLeftRadius": 5,
    "borderBottomRightRadius": 5,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 325,
    "height": 46.54,
    "left": 0,
    "top": 0
  },
  "login_group2_button_getStarted": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(254, 254, 254, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Product Sans",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 48,
    "height": 19,
    "left": 138.82,
    "top": 13.87
  },
  "login_group2_password6d9e99c0": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 325,
    "height": 33,
    "left": 0,
    "top": 100
  },
  "login_group2_password6d9e99c0_line5b514955": {
    "opacity": 0.5,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 325,
    "height": 1,
    "left": 0,
    "top": 32
  },
  "login_group2_password6d9e99c0_line5b514955_rectangledbf8a738": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 325,
    "height": 1,
    "left": 0,
    "top": 0
  },
  "login_group2_password6d9e99c0_line5b514955_rectanglebb9f769f": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(47, 75, 107, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 325,
    "height": 0.5,
    "left": 0,
    "top": 0
  },
  "login_group2_password6d9e99c0_password": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(47, 75, 107, 1)",
    "fontSize": 11,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Product Sans",
    "textAlign": "left",
    "lineHeight": 14,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 45,
    "height": 18,
    "left": 0,
    "top": 0.5
  },
  "login_group2_email": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 325,
    "height": 62,
    "left": 0,
    "top": 0
  },
  "login_group2_email_line": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 325,
    "height": 2,
    "left": 0,
    "top": 60
  },
  "login_group2_email_line_rectangle143768f8": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 325,
    "height": 2,
    "left": 0,
    "top": 0
  },
  "login_group2_email_line_rectangle": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(47, 75, 107, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 325,
    "height": 2,
    "left": 0,
    "top": 0
  },
  "login_group2_email_janedoe": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(96, 96, 96, 1)",
    "fontSize": 16,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Product Sans",
    "textAlign": "left",
    "lineHeight": 20,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 146,
    "height": 25,
    "left": 0,
    "top": 35.5
  },
  "login_group2_email_username": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(47, 75, 107, 1)",
    "fontSize": 11,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Product Sans",
    "textAlign": "left",
    "lineHeight": 14,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 66,
    "height": 18,
    "left": 2,
    "top": 0.5
  }
});