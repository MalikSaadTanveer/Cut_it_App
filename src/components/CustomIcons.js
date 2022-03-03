import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Zocial from 'react-native-vector-icons/Zocial'

const CustomIcons = ({tag,name,style,onPress}) => {
    let Icon;
    if(tag == "AntDesign"){
        Icon = <AntDesign name={name} style={style} />
    }
    else if(tag == "Entypo"){
        Icon = <Entypo name={name} style={style} />
    }
    else if(tag == "EvilIcons"){
        Icon = <EvilIcons name={name} style={style} />
    }
    else if(tag == "Feather"){
        Icon = <Feather name={name} style={style} />
    }
    else if(tag == "FontAwesome"){
        Icon = <FontAwesome name={name} style={style} />
    }
    else if(tag == "FontAwesome5"){
        Icon = <FontAwesome5 name={name} style={style} />
    }
    else if(tag == "FontAwesome5Pro"){
        Icon = <FontAwesome5Pro name={name} style={style} />
    }
    else if(tag == "Fontisto"){
        Icon = <Fontisto name={name} style={style} />
    }
    else if(tag == "Foundation"){
        Icon = <Foundation name={name} style={style} />
    }
    else if(tag == "Ionicons"){
        Icon = <Ionicons name={name} style={style} onPress={onPress && onPress}/>
    }
    else if(tag == "MaterialCommunityIcons"){
        Icon = <MaterialCommunityIcons name={name} style={style} />
    }
    else if(tag == "MaterialIcons"){
        Icon = <MaterialIcons name={name} style={style} />
    }
    else if(tag == "Octicons"){
        Icon = <Octicons name={name} style={style} />
    }
    else if(tag == "SimpleLineIcons"){
        Icon = <SimpleLineIcons name={name} style={style} />
    }
    else if(tag == "Zocial"){
        Icon = <Zocial name={name} style={style} />
    }

    return Icon;
};

export default CustomIcons;
