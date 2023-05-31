import { Center, Image} from "native-base";
function TopPage() {
  
    return (
      <Center>{/*Futur compo dynamique */}
        <Image 
          source={{
            uri: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=780&q=80',
          }} 
          alt='Alternate Text'
          size='10'
          width='450'
          height='200'
        />
      </Center>
    );
  }

export default  TopPage;