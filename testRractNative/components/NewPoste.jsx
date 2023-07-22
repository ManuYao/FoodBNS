import React, { useRef, useState } from "react";
import { Popover, Button, Input, FormControl, Box, IconButton, Alert } from "native-base";
import { Ionicons } from '@expo/vector-icons';

export default function AddBtn() {
  const circleSharp = <Ionicons name="add-circle-sharp" size={24} />;
  const initialFocusRef = useRef(null);
  //const prixInputRef = useRef(null);
  //const descriptionInputRef = useRef(null);

  const [nomInputValue, setNomInputValue] = useState("");
  const [prixInputValue, setPrixInputValue] = useState("");
  const [descriptionInputValue, setDescriptionInputValue] = useState("");

  const handleButtonClick = () => {
    if (nomInputValue.trim().length > 0) {
      console.log("Texte ajouté dans le champ Nom :", nomInputValue);
      console.log("Prix :", prixInputValue);
      console.log("Description :", descriptionInputValue);
    } else {
      console.log("Le champ Nom est vide.");
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
              <Input
                rounded="sm"
                fontSize="xs"
                onChangeText={(text) => setNomInputValue(text)}
                value={nomInputValue}
              />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label _text={{
                fontSize: "xs",
                fontWeight: "medium"
              }}>
                Prix
              </FormControl.Label>
              <Input
                rounded="sm"
                fontSize="xs"
                keyboardType="numeric"
                onChangeText={(text) => setPrixInputValue(text)}
                value={prixInputValue}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label _text={{
                fontSize: "xs",
                fontWeight: "medium"
              }}>
                Description
              </FormControl.Label>
              <Input
                rounded="sm"
                fontSize="xs"
                h="100"
                onChangeText={(text) => setDescriptionInputValue(text)}
                value={descriptionInputValue}
              />
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
