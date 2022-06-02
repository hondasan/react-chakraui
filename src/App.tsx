import { Button, ChakraProvider } from "@chakra-ui/react";
import theme from "./thema/theme";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme="teal">ボタン</Button>
      <p>あああああああ</p>
    </ChakraProvider>
  );
}
