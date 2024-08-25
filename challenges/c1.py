#!/usr/bin/env python3

import sys
import os

def split(line, delimiter=" "):
    """Split the line into words based on the delimiter."""
    return line.strip().replace('\t', ' ').split(delimiter)

def main():

    if(sys.argv.count <= 1):
        return ""
    bytes_len = 0
    num_of_lines = 0
    num_of_words = 0
    num_of_chars = 0
    bytes_flag = False
    lines_flag = False
    words_flag = False
    characters_flag = False

    file_name = ""
    file_data = ""
    output = ""

    for arg in sys.argv[1:]:
        if arg == "-c":
            bytes_flag = True
        elif arg == "-l":
            lines_flag = True
        elif arg == "-w":
            words_flag = True
        elif arg == "-m":
            characters_flag = True
        else:
            file_name = arg

    if not (bytes_flag or lines_flag or words_flag or characters_flag):
        bytes_flag = True
        lines_flag = True
        words_flag = True
        # characters_flag = True

    if(not file_name):
        for temp in sys.stdin:
            file_data += temp
            bytes_len += (len(temp.encode('utf8')))
            num_of_lines += 1
            num_of_chars += (len(temp)+1)
            if(temp.strip() == ""):
                continue
            num_of_words += len(split(temp))

    elif os.path.exists(file_name):
        with open(file_name, 'r') as myfile:
            for temp in myfile:
                file_data += temp
                bytes_len += (len(temp.encode('utf-8')) + 1)
                num_of_lines += 1
                num_of_chars += (len(temp)+1)
                if(temp.strip() == ""):
                    continue
                num_of_words += len(split(temp))


    if lines_flag:
        output += str(num_of_lines)
        output += "\t"
    if words_flag:
        output += str(num_of_words)
        output += "\t"
    if bytes_flag:
        output += str(bytes_len)
        output += "\t"
    if characters_flag:
        output += str(num_of_chars)
        output += "\t"
    output += file_name
    
    print(output)
    return

if __name__ == "__main__":
    main()