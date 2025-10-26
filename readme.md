# @skidy89/lang - simple language loader (SLL)

![npm](https://img.shields.io/npm/v/@skidy89/lang) ![License](https://img.shields.io/npm/l/@skidy89/lang) ![Build Status](https://img.shields.io/badge/build-passing-brightgreen)

A lightweight Node.js package that provides a native N-API addon built with Rust and TypeScript type definitions for loading and parsing `.lang` files.

This module enables developers to manage multilingual applications by loading key-value pairs from `.lang` files stored in a specified directory.

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Node.js](#nodejs)
  - [TypeScript](#typescript)
- [Example .lang File](#example-lang-file)
- [Building the Package](#building-the-package)
- [Publishing to npm](#publishing-to-npm)
- [Package Contents](#package-contents)
- [Troubleshooting](#troubleshooting)
- [License](#license)
- [Notes](#notes)

---

## Installation

Install the package via npm:

```bash
npm install @skidy89/lang
```

Ensure you have Node.js (version 12 or higher) installed, as this package relies on N-API for native module support.

## usage
Load and parse .lang files using the native SSL class:
```typescript
import { SSL } from '@skidy89/lang';

const cli = new SSL('./languages');
async function loadLanguages() {
  try {
    const langData = await cli.load();
    console.log(langData['es']['hello-world']); // Outputs: "hello world!!"
  } catch (err) {
    console.error('Error loading languages:', err);
  }
}
loadLanguages();
```

## example lang file! 
Create .lang files in your specified directory (e.g., ./languages/es.lang). The format supports key-value pairs with # for comments!
```lang
# this is ignored, write whatever you want!!
hello-world = "¡Hola mundo!"
welcome = "Bienvenido"
```
Files must have the .lang extension.
Keys and values are separated by =.
Comments start with #.

## Building the Package and benchmarks
> [!WARNING]
> *work in progress*