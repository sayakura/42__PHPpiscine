package main

import (
	"bufio"
	"fmt"
	"io"
	"log"
	"os"
	"regexp"
)

// func RegSplit(text string, delimeter string) []string {
// 	reg := regexp.MustCompile(delimeter)
// 	indexes := reg.FindAllStringIndex(text, -1)
// 	laststart := 0
// 	result := make([]string, len(indexes)+1)
// 	for i, element := range indexes {
// 		result[i] = text[laststart:element[0]]
// 		laststart = element[1]
// 	}
// 	result[len(indexes)] = text[laststart:len(text)]
// 	return result
// }

func main() {
	var reATag = regexp.MustCompile(`/<a.*?>.*?<\/a>/s`)
	// var reTitle = regexp.MustCompile(`/(title=\")(.*?)(\")/s`)
	// var reBetween = regexp.MustCompile(`/(>)(.*?)(<)/s`)

	if len(os.Args) != 2 {
		fmt.Printf("No parameter :)\n")
		os.Exit(0)
	}
	file, err := os.Open(os.Args[1])
	defer file.Close()
	if err != nil {
		log.Fatal(err)
	}
	rd := bufio.NewReader(file)
	var ret string
	for {
		line, err := rd.ReadString('\n')
		if err == io.EOF {
			fmt.Print(line)
			break
		}
		if err != nil {
			log.Fatal(err)
		}
		ret += line
	}
	matched := reATag.MatchString(ret)
	if matched {
		fmt.Printf("matched!")
	}
}
