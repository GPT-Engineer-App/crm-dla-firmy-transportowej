# crm-dla-firmy-transportowej

Utwórz mi aplikację webową typu CRM dla firmy transportowej.
W kodzie i bazach danych używaj polskich nazw takie jak podam.
Stronę twórz w kolorystyce :
Górny pasek (header) 15% wysokości strony -  w kolorze #006600
środek (content) - w kolorze #A0A0A0
Dolny pasek (footer) - w kolorze #F00000
Na całej stronie w sekcji header wyświetlaj czarny poogrubiony napis "U.T.D. Demianiuk" 
Zacznij od strony logowania do systemu 
- Login 
- Hasło 
Utwórz bazę danych "uzytkownicy" z danymi do logowania
Jeżeli Login lub hasło będą nie poprawne wyświetl komunikat że wpisane hasło jest nie poprawne lub wpisany login nie istnieje.

Następnie po poprawnym zalogowaniu w sekcji header, a także wyświetl menu w sekcji content:
- Pojazdy
- Kierowcy 
- Zmienne 
- Kalkulator trasy

Po wybraniu w menu "Pojazdy"
Wyświetl opcje do wyboru:
nad napisami wstaw pola na ikonki, które zostaną później uzupełnione zaznacz te miejsca komentarzem "ikonki" w kodzie
- Ciężarowe
- Siodłowe
- Zabudowy
- Przyczepy
- Naczepy
- Wszystkie 

Utwórz w bazie danych tabele: 
- Ciezarowe
- Siodlowe
- Zabudowy
- Przyczepy
- Naczepy
i je przypisz do danych ikonek i tekstów.
Po kliknięciu "Wszystkie" wyświetlaj wszystkie te tabele 


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/crm-dla-firmy-transportowej.git
cd crm-dla-firmy-transportowej
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
