import React from "react";
import { Popover, Button, Input, FormControl, Box, IconButton, Center} from "native-base";
import { Ionicons } from '@expo/vector-icons';

export default function AddBtn() {
    const btncheck = <Button mr={10}>Sauvegarder</Button>
    const circleSharp = <Ionicons name="add-circle-sharp" size={24} />;
    const initialFocusRef = React.useRef(null);
    return <Box w="100%" alignItems="center">
        <Popover initialFocusRef={initialFocusRef} trigger={triggerProps => {
        return <IconButton variant="solid" _icon={{
        as: circleSharp,
        name: "search1"
      }} {...triggerProps}>Ajout Plat</IconButton>;
      }}>
          <Popover.Content width="56">
            <Popover.Arrow />
            <Popover.CloseButton />
            {
          }
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
                <Input rounded="sm" fontSize="xs" />
              </FormControl>
              <FormControl>
                <FormControl.Label _text={{
                fontSize: "xs",
                fontWeight: "medium"
              }}>
                  Description 
                </FormControl.Label> 
                <Input rounded="sm" fontSize="xs" h="100" ref={initialFocusRef} />
              </FormControl>
            </Popover.Body>
            <Popover.Footer>      
              {btncheck}
            </Popover.Footer>
          </Popover.Content>
        </Popover>
      </Box>;
  }