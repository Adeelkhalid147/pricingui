import React from "react";
import {
  Box,
  Flex,
  Text,
  HStack,
  Icon,
  Heading,
  Button,
} from "@chakra-ui/react";
import CheckMarkICon from "./ICons/CheckMarkICon";

export default function pricing() {
  return (
    // box ko center mai krne k liye m mean margen width
    // updr push krne k liye mt (negative sign k sth)
    // boder round krne k liye borderRadius
    // charo (4) kone round krne k liye overflow
    // box ko shadow dene k liye boxShadow
    <Box
      // mobile or laptop pe chlne k liye maxW use hti h.
      // akle laptop k liye width
      // ml and mr margen left or right mtlb mble pe side spacing
      // margen x (mx) mobile mai show jb ho ga to spacing
      // gey dono trf. mx mai jo likha h or ml or mr mai dono ka ak he mtlb h as liye ak ko comment kr dia h.
      maxW="700px"
      //mx={{base:"10px",lg:"auto"}}
      ml={{base:"10px",lg:"auto"}}
      mr={{base:"10px",lg:"auto"}}
      mt="-75px"
      bg={"white"}
      borderRadius={"15px"}
      overflow={"hidden"}
      boxShadow={"0px 2px 6px rgba(0, 0, 0, 0.1)"}
    >
      {/* sb ko brabar krne k liye Flex.
        direction mai base mtlb mobile mai column md medium device
        mai b column or lg large device mai row
        */}
      <Flex direction={{ base: "column", md: "column", lg: "row" }}>
        <Box bg="#cbb8ee" p="30px" textAlign={"center"}>
          <Text fontWeight={"bold"} fontSize={"24px"}>
            Premium PRO
          </Text>
          <Heading fontSize="60px">$329</Heading>
          <Text>billed just once</Text>
          <Button mt={"20px"} w={"200px"} bg={"#805AD5"} color="white">
            Get Started
          </Button>
        </Box>
        {/* pading right (pr) pading left (pl) sido se space chorne k liye */}
        {/* pading top (pt) and pading bottom (pb) top se kitni space chorni h */}
        <Box pt="30px" pl="15px" pr="15px">
          <Text mb="10px">
            Access these features when you get this pricing package for your
            business.
          </Text>

          {/* HStack or Horizontal Stack icon or text ko ak sth ak line mai krne k liye*/}
          {/* mb line mai botem space k liye */}

          <HStack mb={"12px"}>
            <Icon as={CheckMarkICon} />
            <Text>International calling and messaging API</Text>
          </HStack>
          <HStack mb={"12px"}>
            <Icon as={CheckMarkICon} />
            <Text>Aditional phone numbers</Text>
          </HStack>
          <HStack mb={"12px"}>
            <Icon as={CheckMarkICon} />
            <Text>Automated messages via Zapier</Text>
          </HStack>
          <HStack mb={"12px"}>
            <Icon as={CheckMarkICon} />
            <Text>24/7 support and consulting</Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
