import { Image, Text, View } from "react-native"

export function Human({firstName, lastName, age}) {
    return (
        <View>
            <Text>
                Mon nom est {firstName}, {firstName} {lastName}, {"\n"} j'ai {age} ans
            </Text>
            <Text>
                <Image source= {{uri: 'https://img.freepik.com/vecteurs-libre/belle-maison_24877-50819.jpg'}}/>
            </Text>
        </View>
    )
}