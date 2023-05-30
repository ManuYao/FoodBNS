import React from 'react';
import { ScrollView } from 'react-native';
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
  Stack,
  Box,
  Text,
} from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';
import TopPage from './TopPage';

function AlphaZone() {
  const carouselItems = [
    {
      title: 'Title 1',
      price: 'Price 1',
      description: 'Description 1',
      imageUri: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=749&q=80',
    },
    {
      title: 'Title 2',
      price: 'Price 2',
      description: 'Description 2',
      imageUri: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    },
    {
      title: 'Title 3',
      price: 'Price 3',
      description: 'Description 3',
      imageUri: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80',
    },
  ];

  const renderItem = ({ item }) => (
    <ProductCard
      title={item.title}
      price={item.price}
      description={item.description}
      imageUri={item.imageUri}
    />
  );

  return (
    <NativeBaseProvider>
    <ScrollView>
      <TopPage />

      <Center>
        <Container mt={5}>
          <Flex direction='row-reverse' alignItems='center'>
            <Heading mr={10}>
              <Text>Titre Commercant</Text>
            </Heading>

            <Avatar
              mr={6}
              source={{
                uri: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
              }}
              size='lg'
            />
          </Flex>
        </Container>

        <Button size={200} height={65} width={185} backgroundColor="amber.600"
          leftIcon={<Icon as={FontAwesome5} name='map-marker-alt' size={10} color='black'/>}
          flexDir='row'
          alignItems='center'
          justifyContent='center'
          borderRadius='full'
          mt={8}
          ml={5}
        >
          Point de vente
        </Button>
      </Center>

      <Stack ml={5} space={3}>
      
        <Heading mt={8} mb={6}>
          <Text>Déjà goûté</Text>
        </Heading>

        <Carousel
          data={carouselItems}
          renderItem={renderItem}
          sliderWidth={300}
          itemWidth={150}
        />
        <Heading mt={8} mb={6}>
          <Text>Top</Text>
        </Heading>

        <Carousel
          data={carouselItems}
          renderItem={renderItem}
          sliderWidth={300}
          itemWidth={150}
        />
        <Heading mt={8} mb={6}>
          <Text>Nouveauté</Text>
        </Heading>

        <Carousel
          data={carouselItems}
          renderItem={renderItem}
          sliderWidth={300}
          itemWidth={150}
        />
        
      </Stack>
      {/* 
      <Box
          bg="white"
          shadow={4}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 30, // Hauteur de l'ombre
          }}
        />
      */}


      </ScrollView>
    </NativeBaseProvider>
  );
}


function ProductCard({ title, price, description, imageUri }) {
  return (
    <Box width={150} height={200} borderRadius='md' backgroundColor='white' p={2} shadow={2}>
      <Image source={{ uri: imageUri }} alt='Product Image' width={146} height={100} />
      <Text fontSize='sm' fontWeight='bold' mt={2}>
        {title}
      </Text>
      <Text fontSize='sm'>{price}</Text> 
      <Text fontSize='xs' color='gray.500'>
        {description}
      </Text>
    </Box>
  );
}

export default AlphaZone;

//Page temporaire 