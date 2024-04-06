import React, { useState } from "react";
import { Box, Button, Flex, Heading, Input, Text, VStack, useToast, Fade } from "@chakra-ui/react";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const toast = useToast();

  const handleLogin = () => {
    // Sprawdź dane logowania w bazie danych "uzytkownicy"
    const users = [
      { username: "admin", password: "admin123" },
      { username: "user", password: "user123" },
    ];

    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
      setIsLoggedIn(true);
    } else {
      toast({
        title: "Błąd logowania",
        description: "Niepoprawny login lub hasło",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [previousOption, setPreviousOption] = useState("");

  const handleOptionClick = (option) => {
    setPreviousOption(selectedOption);
    setIsMenuVisible(false);
    setTimeout(() => {
      setSelectedOption(option);
    }, 500);
  };

  const handleBack = () => {
    setSelectedOption(previousOption);
    setIsMenuVisible(true);
  };

  return (
    <Flex direction="column" minHeight="100vh">
      <Box bg="#006600" py={4} color="white">
        <Heading as="h1" size="xl" textAlign="center" fontWeight="bold">
          U.T.D. Demianiuk
        </Heading>
      </Box>
      <Box flex={1} bg="#A0A0A0" p={8}>
        {!isLoggedIn ? (
          <VStack spacing={4} align="stretch">
            <Input placeholder="Login" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Input placeholder="Hasło" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button colorScheme="green" onClick={handleLogin}>
              Zaloguj
            </Button>
          </VStack>
        ) : (
          <>
            <Fade in={isMenuVisible}>
              <VStack spacing={4} align="stretch">
                <Button colorScheme="green" onClick={() => handleOptionClick("pojazdy")}>
                  Pojazdy
                </Button>
                <Button colorScheme="green" onClick={() => handleOptionClick("kierowcy")}>
                  Kierowcy
                </Button>
                <Button colorScheme="green" onClick={() => handleOptionClick("zmienne")}>
                  Zmienne
                </Button>
                <Button colorScheme="green" onClick={() => handleOptionClick("kalkulator")}>
                  Kalkulator trasy
                </Button>
              </VStack>
            </Fade>
            <Fade in={!isMenuVisible}>
              {selectedOption === "pojazdy" && (
                <VStack spacing={4} mt={8} align="stretch">
                  {}
                  <Button colorScheme="green" onClick={() => handleOptionClick("ciezarowe")}>
                    Ciężarowe
                  </Button>
                  {}
                  <Button colorScheme="green" onClick={() => handleOptionClick("siodlowe")}>
                    Siodłowe
                  </Button>
                  {}
                  <Button colorScheme="green" onClick={() => handleOptionClick("zabudowy")}>
                    Zabudowy
                  </Button>
                  {}
                  <Button colorScheme="green" onClick={() => handleOptionClick("przyczepy")}>
                    Przyczepy
                  </Button>
                  {}
                  <Button colorScheme="green" onClick={() => handleOptionClick("naczepy")}>
                    Naczepy
                  </Button>
                  {}
                  <Button colorScheme="green" onClick={() => handleOptionClick("wszystkie")}>
                    Wszystkie
                  </Button>
                </VStack>
              )}
              {selectedOption === "wszystkie" && (
                <VStack spacing={4} mt={8} align="stretch">
                  <Text>Wyświetlanie wszystkich pojazdów...</Text>
                  {}
                </VStack>
              )}
            </Fade>
          </>
        )}
      </Box>
      <Box bg="#F00000" py={4} color="white">
        <Flex justify="space-between" align="center">
          {isLoggedIn && (
            <Button colorScheme="red" onClick={handleBack} ml={4}>
              Cofnij
            </Button>
          )}
          <Text textAlign="center" flex={1}>
            &copy; 2023 U.T.D. Demianiuk
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Index;
