import React from 'react';
import {
  NativeBaseProvider,
  Center,
  Image,
  Container,
  Heading,
  Avatar,
  Flex,
  Button,
  Icon,
  Divider,
  Stack,
} from 'native-base';
import { Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function AlphaZone() {
  return (
    <NativeBaseProvider>

        <TopPage />

        <Center>

            <Container mt={5}>

              <Flex direction='row-reverse' alignItems='center'>

                  <Heading mr={10}>
                    <Text>Titre Commercant</Text>
                  </Heading>

                  <Avatar mr={6}
                    source={{
                    uri: 'https://wallpaperaccess.com/full/317501.jpg',
                    }} size='lg'>
                  </Avatar>

              </Flex>

            </Container>    

                <Button leftIcon={<Icon as={<FontAwesome5 name="map-marker-alt" size={24} color="black" />}/>} 
                        flexDir="row" alignItems="center" justifyContent="center" borderRadius="full" mt={8} ml={5}
                >
                    Point de vente
                </Button>

        </Center>
        
        <Stack ml={5} space={3}>

          <Heading  mt={8} mb={6}>
            <Text>Déjà goûté</Text>
          </Heading>

          <Stack direction='row' alignItems='center' justifyContent="space-around">

            <Stack space={3}>
              <Text >Title</Text>
              <Text> Price</Text>
              <Text style={{color: "gray"}}>descripted</Text>
            </Stack>

          <Image source={{
          uri: "https://wallpaperaccess.com/full/317501.jpg"
          }} alt="Alternate Text" width={150} height={150}/>

          </Stack>

        </Stack>

    </NativeBaseProvider>
  )
}

function TopPage() {
    return <Center>
        <Image source={{
          uri: "https://wallpaperaccess.com/full/317501.jpg"
          }} alt="Alternate Text" size="10" width="450" height="200"/>
      </Center>;
  }
