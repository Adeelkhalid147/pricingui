import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    // base mobile k liye,md medium device or lg tablet k liye or hai likn
    // filhal abi yhi use krne hai
    // pading left k liye pl
    <Box
      textAlign={{ base: "left", md: "left", lg: "center" }}
      pl="10px"
      bg="#6B46c1"
      pt="70px"
      pb="100"
      color="white"
    >
        <Text color={"ThreeDShadow"} >Adeel Khalid</Text>
        <Text color={"ThreeDShadow"} >+923214260147</Text>
      <Heading pb="5">Simple pricing for your business</Heading>
      <Text>Plans that are carefully created to suit your business.</Text>
    </Box>
  );
}
