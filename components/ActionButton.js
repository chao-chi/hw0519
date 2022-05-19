import React from 'react';
import { Center, Pressable, Actionsheet, useDisclose } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionScreen from '../screens/ActionScreen';

export default (props) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const { zoomRatio, site } = props;
  return (
    <>
      <Pressable onPress={onOpen}>
        <Center bg="#ffcc54" borderRadius={60} p={2 * zoomRatio} borderWidth={2 * zoomRatio} borderColor="white">
          <Icon name={"bicycle"} size={24 * zoomRatio} color="white" />
        </Center>
      </Pressable>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <ActionScreen onClose={onClose} site={site} />
      </Actionsheet>
    </>
  );
}
