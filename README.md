# PsyCare
[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/PsyCare-org/psycare/blob/main/README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/PsyCare-org/psycare/blob/main/README.pt-br.md)

## About
PsyCare auxiliary repository, it has orchestration tools for other repositories, allowing, for example, to run both NodeJS servers at the same time. It basically uses [Concurrently](https://www.npmjs.com/package/concurrently) package to run multiples commands at the same time.

## Getting Started
### Prerequisites
You will need [NodeJS](https://nodejs.org/en/download/), and a package manager of your choice.

### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/PsyCare-org/psycare
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

OBS.: Make sure that all repositories(psycare-api, psycare-web and psycare) are inside the same root folder.

## Usage
It can be used in two different ways:

### 1. Using a terminal
In a terminal, run the scripts that are inside the `src/` folder. As an example, to run both front-end and back-end at the same time, you can execute `node src/start.js`.

### 2. Using VS Code tasks
In the Visual Studio Code you can access the menu ***Terminal > Run Task > Start***, by doing that a terminall will open with everything automated.

## License
Distributed under the MIT License. See `LICENSE.txt` for more information.