import React from "react";
import { Box, HStack, Icon, Text, Flex } from "@chakra-ui/react";
import { MoneyBackGuaranteeIcon } from "./moneyBackIcon";
import { HassleFreeIcon } from "./HassleFreeIcon";
import { MonthlySubscriptionIcon } from "./MonthlySubscriptionIcon";

export default function Features() {
  return (
    //  pore component ko center ya khe utha k le k jna ho to 
    //  width or margen
    // yha b mble or laptop k liye maxW or akele
    // laptop k liye width
    // px molibe k liye dia h.
    <Box maxW={"800px"} m="auto" mt="25" px="50px">
      <Flex direction={{base:"column",lg:"row"}} >
       
        {/* mb mobile mai show jb ho to spacing k liye dia h */}
       
        <HStack mb="10px">
          <Icon as={MoneyBackGuaranteeIcon} />
          <Text> 30 days money back Gurantee</Text>
        </HStack>
        <HStack mb="10px">
          <Icon as={HassleFreeIcon} />
          <Text> No setup fees 100% hassle-free</Text>
        </HStack>
        <HStack mb="10px">
          <Icon as={MonthlySubscriptionIcon} />
          <Text> No monthly subscription pay once and for all</Text>
        </HStack>
      </Flex>
    </Box>
  );
}
