import React from 'react';
import { ScrollView } from 'react-native';
import {
  NativeBaseProvider,
  Center,
  Container,
  Heading,
  Avatar,
  Flex,
  Button,
  Icon,
  Stack,
  Box,
  Text,
  Image,
  Divider
} from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';
import TopPage from '../components/TopPage';

function ProductCard({ title, price, description, imageUri }) {
  return (
    <Box width={150} height={250} borderRadius='md' backgroundColor='white' p={2} shadow={2} justifyContent="center" alignItems='center'>
      <Image source={{ uri: imageUri }} alt='Product Image' width={135} height={150} />
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

          <Button
            size={200}
            height={60}
            width={165}
            backgroundColor="amber.600"
            leftIcon={<Icon as={FontAwesome5} name='map-marker-alt' size={10} color='white' />}
            flexDir='row'
            alignItems='center'
            justifyContent='center'
            borderRadius='full'
            mt={8}
            ml={5}
          >
            Point de vente
          </Button>
        <Divider mt={5}/>
        </Center>


        <Stack ml={0} space={5}>
          <Heading mt={8} mb={6}>
            <Text>Déjà goûté</Text>
          </Heading>

          <Carousel
            data={carouselItems}
            renderItem={renderItem}
            sliderWidth={412}
            itemWidth={150}
          />

          <Heading mt={8} mb={6}>
            <Text>Top</Text>
          </Heading>

          <Carousel
            data={carouselItems}
            renderItem={renderItem}
            sliderWidth={412}
            itemWidth={150}
          />

          <Heading mt={8} mb={6}>
            <Text>Nouveauté</Text>
          </Heading>

          <Carousel
            data={carouselItems}
            renderItem={renderItem}
            sliderWidth={412}
            itemWidth={150}
          />
        </Stack>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default AlphaZone;
