import navigationStrings from "./navigationStrings";

export default [
  {
    title: 'Account',
    box: [
      {
        tag: 'Ionicons',
        name: 'person-outline',
        text: 'Edit Account',
        navigation:navigationStrings.EditProfile,
      },
      {
        tag: 'Entypo',
        name: 'key',
        text: 'Change Password',
        navigation:navigationStrings.ChangePassword,
      },
    ],
  },
  {
    title: 'Rewards',
    box: [
      {
        tag: 'MaterialCommunityIcons',
        name: 'gift-outline',
        text: 'Redeem code',
      },
      {
        tag: 'MaterialCommunityIcons',
        name: 'cards-outline',
        text: 'Vouchers',
      },
    ],
  },
  {
    title: 'Contact Us',
    box: [
      {
        tag: 'Ionicons',
        name: 'ios-mail-open-outline',
        text: 'Send Feedback',
        navigation:navigationStrings.FeedbackAndSupport,
        data:{
          header:'feedback', email:'cutit@feedback.co', placeholder:'Feedback'
        }
      },
      {
        tag: 'MaterialIcons',
        name: 'support-agent',
        text: 'Support',
        navigation:navigationStrings.FeedbackAndSupport,
        data:{
          header:'support', email:'cutit@support.co', placeholder:'Support'
        }
      },
    ],
  },
  {
    title: 'Payment',
    box: [
      {
        tag: 'AntDesign',
        name: 'creditcard',
        text: 'Payment Method',
        navigation:navigationStrings.PaymentMethod,
      },
    ],
  },
  {
    title: 'Share',
    box: [
      {
        tag: 'MaterialIcons',
        name: 'recommend',
        text: 'Recommend',
      },
      {
        tag: 'Entypo',
        name: 'slideshare',
        text: 'Invite Your Barber',
      },
    ],
  },
  {
    title: 'Follow Us',
    box: [
      {
        tag: 'Feather',
        name: 'facebook',
        text: 'facebook',
      },
      {
        tag: 'Feather',
        name: 'twitter',
        text: 'twitter',
      },
      {
        tag: 'Feather',
        name: 'instagram',
        text: 'instagram',
      },
    ],
  },
  {
    title: 'About',
    box: [
      {
        tag: 'MaterialCommunityIcons',
        name: 'web',
        text: 'Website',
      },
      {
        tag: 'FontAwesome5',
        name: 'clipboard-list',
        text: 'Terms and conditions',
      },
      {
        tag: 'Fontisto',
        name: 'locked',
        text: 'Privacy policy',
      },
    ],
  },
];
