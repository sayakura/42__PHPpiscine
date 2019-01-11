package main

import (
	"fmt"
	"os"
	"strings"
)

func main() {
	arg1 := (os.Args[1:])[0]
	ret := strings.Fields(arg1)
	for i := 0; i < len(ret); i++ {
		fmt.Printf("%s", ret[i])
		if (i + 1) != len(ret) {
			fmt.Printf(" ")
		}
	}
	fmt.Printf("\n")
}
