package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

func getMonth(month string) int {
	table := map[string]int{
		"janvier":   1,
		"fèvrier":   2,
		"mars":      3,
		"avril":     4,
		"mai":       5,
		"juin":      6,
		"juillet":   7,
		"aout":      8,
		"septembre": 9,
		"octobre":   10,
		"novembre":  11,
		"decembre":  12,
	}
	table2 := map[string]int{
		"january":   1,
		"february":  2,
		"march":     3,
		"april":     4,
		"may":       5,
		"june":      6,
		"july":      7,
		"augest":    8,
		"september": 9,
		"october":   10,
		"november":  11,
		"december":  12,
	}
	ret := table[month]
	if ret == 0 {
		return table2[month]
	}
	return ret
}

func main() {
	if len(os.Args) != 2 {
		fmt.Printf("Wrong Format1\n")
		os.Exit(0)
	}
	const secondInADay int = 86400
	mTable := map[int]int{
		1:  31,
		2:  28,
		3:  31,
		4:  30,
		5:  31,
		6:  30,
		7:  31,
		8:  31,
		9:  30,
		10: 31,
		11: 30,
		12: 31,
	}
	arg1 := (os.Args[1:])[0]
	fields := strings.Fields(arg1)
	if len(fields) != 5 {
		fmt.Printf("Wrong Format1\n")
		os.Exit(0)
	}
	day, err1 := strconv.Atoi(fields[1])
	year, err2 := strconv.Atoi(fields[3])
	month := getMonth(strings.ToLower(fields[2])) - 1
	speciTime := strings.Split(fields[4], ":")
	if len(speciTime) != 3 {
		fmt.Printf("Wrong Format1\n")
		os.Exit(0)
	}
	secondOfThatDay := 0
	for index := 0; index < len(speciTime); index++ {
		temp, err := strconv.Atoi(speciTime[index])
		if err != nil {
			fmt.Printf("Wrong Format1\n")
			os.Exit(0)
		}
		if index == 0 {
			secondOfThatDay += temp * 60 * 60
		} else if index == 1 {
			secondOfThatDay += temp * 60
		} else {
			secondOfThatDay += temp
		}
	}
	isLeapYear := false
	if year%4 == 0 && year%100 != 0 {
		isLeapYear = true
	}
	if month == 0 || err1 != nil || err2 != nil {
		fmt.Printf("Wrong Format2\n")
		os.Exit(0)
	}

	ret := 0
	for start := 1970; start < year; start++ {
		if start%4 == 0 && start%100 != 0 {
			ret += 366 * secondInADay
		} else {
			ret += 365 * secondInADay
		}
	}
	for ; month > 0; month-- {
		if month == 2 && isLeapYear {
			ret += 29 * secondInADay
		} else {
			ret += mTable[month] * secondInADay
		}
	}
	ret += day*secondInADay + secondOfThatDay
	fmt.Printf("%d\n", ret)
}
