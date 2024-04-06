import React, { useState } from "react";
import { Box, Button, Flex, Heading, Input, Text, VStack, useToast } from "@chakra-ui/react";

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

  const handleOptionClick = (option) => {
    setSelectedOption(option);
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
            {selectedOption === "pojazdy" && (
              <VStack spacing={4} mt={8} align="stretch">
                {/* ikonki */}
                <Button colorScheme="green" onClick={() => handleOptionClick("ciezarowe")}>
                  Ciężarowe
                </Button>
                {/* ikonki */}
                <Button colorScheme="green" onClick={() => handleOptionClick("siodlowe")}>
                  Siodłowe
                </Button>
                {/* ikonki */}
                <Button colorScheme="green" onClick={() => handleOptionClick("zabudowy")}>
                  Zabudowy
                </Button>
                {/* ikonki */}
                <Button colorScheme="green" onClick={() => handleOptionClick("przyczepy")}>
                  Przyczepy
                </Button>
                {/* ikonki */}
                <Button colorScheme="green" onClick={() => handleOptionClick("naczepy")}>
                  Naczepy
                </Button>
                {/* ikonki */}
                <Button colorScheme="green" onClick={() => handleOptionClick("wszystkie")}>
                  Wszystkie
                </Button>
              </VStack>
            )}
            {selectedOption === "wszystkie" && (
              <VStack spacing={4} mt={8} align="stretch">
                <Text>Wyświetlanie wszystkich pojazdów...</Text>
                {/* Tutaj wyświetl dane z tabel: Ciezarowe, Siodlowe, Zabudowy, Przyczepy, Naczepy */}
              </VStack>
            )}
          </>
        )}
      </Box>
      <Box bg="#F00000" py={4} color="white">
        <Text textAlign="center">&copy; 2023 U.T.D. Demianiuk</Text>
      </Box>
    </Flex>
  );
};

export default Index;
