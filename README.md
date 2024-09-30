# AnythingLLM Custom Agent Skill: Get Timestamp

This repository contains a custom agent skill for AnythingLLM that returns the current timestamp from the operating system.

## Description

This custom agent skill allows AnythingLLM to provide the current date and time when queried. It's a simple yet useful extension that demonstrates how to create custom skills for AnythingLLM.

## Features

- Returns the current timestamp in ISO 8601 format
- Handles various time-related queries
- Demonstrates error handling and logging in custom agent skills

## Requirements

- AnythingLLM Docker image (commit d1103e or release v1.2.2 and later)
- AnythingLLM Desktop version 1.6.5 and later
- NodeJS programming experience

## Installation

1. Clone this repository or download the files.
2. Place the following files in the appropriate custom agent skills directory for your AnythingLLM setup:
   - `handler.js`
   - `plugin.json`

## Usage

Once installed, you can invoke this skill in AnythingLLM using the @agent command. For example:

```
@agent What is the current time?
```

The skill will return the current timestamp in ISO 8601 format.

## File Structure

- `handler.js`: Contains the main logic for the skill, including the handler function and the timestamp generation.
- `plugin.json`: Defines the metadata for the skill, including name, version, description, and example prompts.
- `run.js`: A utility script for testing the skill locally (not required for deployment).

## Development and Testing

To test the skill locally:

1. Ensure you have Node.js installed on your system.
2. Run the following command in the project directory:

```
node run.js
```

This will simulate the execution of the skill and output the result.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the `plugin.json` file for details.

## Author

@rmrfslashbin

## Links

- [Author's GitHub](https://github.com/rmrfslashbin)
- [AnythingLLM Repository](https://github.com/Mintplex-Labs/anything-llm)

## Notes

- This skill is not available in the AnythingLLM Cloud offering.
- Ensure you're familiar with the AnythingLLM custom agent skills documentation before deployment.
- Report any bugs or feature requests to the AnythingLLM GitHub repository.