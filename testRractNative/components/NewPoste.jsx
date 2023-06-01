import React, { useRef } from "react";
import { Popover, Button, Input, FormControl, Box, IconButton, Alert } from "native-base";
import { Ionicons } from '@expo/vector-icons';

export default function AddBtn() {
  //const btncheck = <Button mr={10}>Sauvegarder</Button>;
  const circleSharp = <Ionicons name="add-circle-sharp" size={24} />;
  const initialFocusRef = useRef(null);
  const prixInputRef = useRef(null);
  const descriptionInputRef = useRef(null);

  const handleButtonClick = () => {
    const nomInput = initialFocusRef.current?.value;
    const prixInput = prixInputRef.current?.value;
    const descriptionInput = descriptionInputRef.current?.value;

    if (!nomInput /*&& !prixInput && !descriptionInput*/ ) {
      console.log('Erreur : Tous les champs doivent être remplis');
    }
      else if (nomInput /*&& prixInput && descriptionInput*/ ) {
        console.log('Cela Fontionne :)');
      }
  };

  return (
    <Box w="100%" alignItems="center" mt={100}>
      <Popover initialFocusRef={initialFocusRef} trigger={(triggerProps) => (
        <IconButton variant="solid" _icon={{
          as: circleSharp,
          name: "search1"
        }} {...triggerProps}>Ajout Plat</IconButton>
      )}>
        <Popover.Content width="56">
          <Popover.Arrow />
          <Popover.CloseButton />
          <Popover.Header>Nouveau Plat</Popover.Header>
          <Popover.Body>
            <FormControl>
              <FormControl.Label _text={{
                fontSize: "xs",
                fontWeight: "medium"
              }}>
                Nom
              </FormControl.Label>
              <Input rounded="sm" fontSize="xs" ref={initialFocusRef} />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label _text={{
                fontSize: "xs",
                fontWeight: "medium"
              }}>
                Prix
              </FormControl.Label>
              <Input rounded="sm" fontSize="xs" keyboardType="numeric" ref={prixInputRef} />
            </FormControl>
            <FormControl>
              <FormControl.Label _text={{
                fontSize: "xs",
                fontWeight: "medium"
              }}>
                Description
              </FormControl.Label>
              <Input rounded="sm" fontSize="xs" h="100" ref={descriptionInputRef} />
            </FormControl>
          </Popover.Body>
          <Popover.Footer>
            <Button onPress={handleButtonClick} mr={10}>Sauvegarder</Button>
          </Popover.Footer>
        </Popover.Content>
      </Popover>
    </Box>
  );
}
