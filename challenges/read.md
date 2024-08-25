# ccwc - Custom Word Count Utility

`ccwc` is a custom word count utility written in Python. It is designed to count the number of lines, words, characters, and bytes in text files or from standard input. This utility mimics some functionality of the Unix `wc` command with additional custom options.

## Project Structure

The repository contains the following files:

- **ccwc.py**: The main Python script that performs the word count operations. Users can modify this script to add more functionality as needed.
- **ccwc.1**: The manual (man) page file for `ccwc`. It provides detailed usage instructions and options for the command.
- **text.txt**: A sample text file to test the `ccwc` command. Users can replace this file with their own for testing purposes.

## Installation

1. **Make the Python script executable**:
   ```bash
   chmod +x ccwc.py
   ```

2. **Move the script to a directory in your PATH** (optional):
   ```bash
   sudo mv ccwc.py /usr/local/bin/ccwc
   ```

3. **Install the man page** (optional):
   ```bash
   sudo cp ccwc.1 /usr/local/share/man/man1/
   sudo mandb
   ```

## Usage

Below are some examples of how to use the `ccwc` command:

1. **Count all the lines, words, bytes in a file**:
   ```bash
   python3 ccwc.py text.txt
   ```
   This command reads `text.txt` and outputs the counts for lines, words, characters, and bytes.

2. **Count only the number of bytes in a file**:
   ```bash
   python3 ccwc.py -c text.txt
   ```
   The `-c` option specifies that only the number of bytes should be counted.

3. **Use standard input to count metrics**:
   ```bash
   cat text.txt | python3 ccwc.py
   ```
   This command uses a pipe to pass the content of `text.txt` to `ccwc.py` via standard input.

4. **Count the number of lines from standard input**:
   ```bash
   cat text.txt | python3 ccwc.py -l
   ```
   With the `-l` option, the command counts only the number of lines in the input.

## Options

- `-l`: Count the number of lines.
- `-w`: Count the number of words.
- `-m`: Count the number of characters.
- `-c`: Count the number of bytes.

## Examples

To count words in a file:

```bash
python3 ccwc.py -w text.txt
```

To count characters in a file:

```bash
python3 ccwc.py -m text.txt
```

To count lines, words, and characters from standard input:

```bash
cat text.txt | python3 ccwc.py -l -w -m
```

## Author

H.Uzair Raza (uzair120@outlook.com)

## Contributing

Feel free to submit issues, fork the repository and send pull requests if you have any suggestions for improvements.

## Acknowledgements

- Inspired by the Unix `wc` command.
