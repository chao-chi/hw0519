import React from 'react';
import {
   Box, VStack,
   Center,
   Text, Pressable,
} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { VictoryPie } from 'victory-native';

const ActionScreen = ({ onClose, site }) => {
   const {
      sna,
      sbi,
      sarea,
      mday,
      lat,
      lng,
      ar,
      bemp,
   } = site;

   const getTime = (m) => {
      const mday = String(m);
      const year = mday.slice(0, 4);
      const month = Number(mday.slice(5, 7));
      const date = Number(mday.slice(8, 10));
      const hour = Number(mday.slice(11, 13));
      const min = Number(mday.slice(14, 16));
      const sec = Number(mday.slice(17));
      const time = `${year}/${month}/${date} ${hour}:${min}:${sec}`;
      return time;
   }
   return (

      <VStack h="50%" w="100%" bg="blueGray.50" borderRadius={20} >
         <Pressable onPress={onClose} position="absolute" top={2} right={3}>
            <MaterialCommunityIcons name="close" color="gray" size={30} />
         </Pressable>
         <Box borderBottomColor={"white"} w={"15%"} h={1} borderRadius={3} bg="grey" mt={3} alignSelf="center"></Box>
         <Text fontSize="lg" fontWeight={'bold'} my={6} textAlign="center">{sna}{" "}站</Text>
         <Box px={6} >
            <Text><Text fontWeight={'bold'}>地址：</Text>{sarea}{" "}{ar}</Text>
            <Text mt={2}><Text fontWeight={'bold'}>經度/緯度：</Text>{Number(lng).toFixed(2)}/{Number(lat).toFixed(2)}</Text>
            <Text mt={2}><Text fontWeight={'bold'}>更新時間：</Text>{getTime(mday)}</Text>
            <Center>
               <VictoryPie
                  width={300}
                  height={250}
                  colorScale={["#ff9626", "#2d6cc4"]}
                  data={[
                     { x: 1, y: Number(sbi), label: `可借(${sbi})` },
                     { x: 2, y: Number(bemp), label: `可還(${bemp})` },
                  ]}
                  style={{
                     labels: {
                        fontSize: 14, fill: "black",
                        padding: 14,
                     }
                  }}
               />
            </Center>
         </Box>

      </VStack>
   );
};

export default ActionScreen;
