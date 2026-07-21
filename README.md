# 🌱 Env Checker CLI

**Project URL:** https://roadmap.sh/projects/nodejs-env-checker

A lightweight command-line tool built with **Node.js** that validates whether required environment variables are defined in a `.env` file.

This project was developed as an implementation of the Env Checker CLI project from roadmap.sh, focusing on command-line arguments, file system operations, environment variable parsing, and secure validation without exposing sensitive values.

---

## 🚀 Features

- Validate one or more required environment variables
- Read variables from a `.env` file
- Parse environment variable names and values
- Report missing environment variables
- Never print secret values to the terminal
- Friendly error messages for invalid input or missing files
- Proper CLI exit codes on failure

---

## 🛠️ Technologies Used

- Node.js
- JavaScript (ES Modules)
- Node.js File System (`fs/promises`)
- Node.js Path (`path`)

---

## 📂 Project Structure

```text
env-checker-cli/
├── env-checker.js      # CLI entry point
├── .env                # Sample environment file
└── README.md
```

---

## ▶️ Installation

Clone the repository:

```bash
git clone https://github.com/tommycontreras11/env-checker-cli.git
cd env-checker-cli
```

---

## 🚀 Usage

Validate a single environment variable:

```bash
node env-checker.js .env PATH
```

Validate multiple environment variables:

```bash
node env-checker.js .env PATH API_KEY DATABASE_URL
```

---

## 📋 Example Output

If all required variables are present:

```text
Set: /path/to/.env
All required environment variables are set.
```

---

## ❌ Error Handling

If no environment variable names are provided:

```bash
node env-checker.js .env
```

Output:

```text
error: please provide at least one environment variable name
```

If one or more variables are missing:

```bash
node env-checker.js .env API_KEY DATABASE_URL
```

Output:

```text
error: missing environment variables: API_KEY, DATABASE_URL
```

If the specified file does not exist:

```bash
node env-checker.js missing.env PATH
```

Output:

```text
error: the file missing.env doesn't exist in the folder
```

Errors are written to **stderr**, and the CLI exits with a non-zero exit code.

---

## ⚙️ How It Works

The CLI:

1. Reads the `.env` file path and required variable names from the command-line arguments.
2. Resolves the file path to an absolute path.
3. Loads the `.env` file using `fs.promises.readFile()`.
4. Parses the file into key-value pairs.
5. Checks whether each required environment variable exists.
6. Reports any missing variables without exposing their values.

---

## 🔒 Security

To avoid accidentally exposing sensitive information, the CLI **never prints environment variable values**. It only validates whether the specified variable names are present in the provided `.env` file.

---

## 💡 Future Improvements

- Support comments and blank lines in `.env` files
- Validate variables against a `.env.example` file
- Display optional and required variables separately
- Support custom output formats (JSON)
- Detect duplicate environment variable names
- Add automated tests
- Support recursive project scanning
- Add colored terminal output

---

## 🧑‍💻 Author

Tommy Contreras

---

## 📄 License

MIT
