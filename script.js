//Lessons from site regexone.com/lesson

//Exercise 1: Matching Characters
//Task	Text	 
//Match	abcdefg	
//Match	abcde	
//Match	abc

//Solution
/* 
 abc
 */

//Exercise 1½: Matching Digits
//Task	Text	 
//Match	abc123xyz	
//Match	define "123"	
//Match	var g = 123;

//Solution
/*
 \d
 \d{3}
 */

//Exercise 2: Matching With Wildcards
//Task	Text	 
//Match	cat.	
//Match	896.	
//Match	?=+.	
//Skip	abc1

//Solution
/*
 \.
 */

//Exercise 3: Matching Characters
//Task	Text	 
//Match	can	
//Match	man	
//Match	fan	
//Skip	dan	
//Skip	ran	
//Skip	pan
/*
 Below are a couple lines, where we only want to match the first three strings, 
 but not the last three strings. Notice how we can't avoid matching the last three strings
 if we use the dot, but have to specifically define what letters to match using the notation above.
 */

//Solution
/*
 [^drp][a]
 */

//Exercise 4: Excluding Characters
//Task	Text	 
//Match	hog	To be completed
//Match	dog	To be completed
//Skip	bog

/*
 With the strings below, try writing a pattern that matches only the live animals
 (hog, dog, but not bog). Notice how most patterns of this type can also be written 
 using the technique from the last lesson as they are really two sides of the same coin.
 By having both choices, you can decide which one is easier to write and understand when composing your own patterns.
 */

/*
 [^bog]
 */

//Exercise 5: Matching Character Ranges
//Task	Text	 
//Match	Ana	To be completed
//Match	Bob	To be completed
//Match	Cpc	To be completed
//Skip	aax	To be completed
//Skip	bby	To be completed
//Skip	ccz

/*
 [A-Z]
 */

//Exercise 6: Matching Repeated Characters
//Task	Text	 
//Match	wazzzzzup	Success
//Match	wazzzup	Success
//Skip	wazup

/*
 z{3}
 */

//Exercise 7: Matching Repeated Characters
//Task	Text	 
//Match	aaaabcc	To be completed
//Match	aabbbbc	To be completed
//Match	aacc	To be completed
//Skip	a

/*
 a.
 */

//Exercise 8: Matching Optional Characters
//Task	Text	 
//Match	1 file found?	Success
//Match	2 files found?	Success
//Match	24 files found?	Success
//Skip	No files found.

/*
 \d ?
 */

//Exercise 9: Matching Whitespaces
//Task	Text	 
//Match	1.   abc	To be completed
//Match	2.	abc	To be completed
//Match	3.           abc	To be completed
//Skip	4.abc	To be completed

/*
 \d\.\s
 */

//Exercise 10: Matching Lines
//Task	Text	 
//Match	Mission: successful	Success
//Skip	Last Mission: unsuccessful	To be completed
//Skip	Next Mission: successful upon capture of target

/*
 ^(Mission)
 */

//Exercise 11: Matching Groups
//Task	Text	Capture Groups	 
//Capture	file_record_transcript.pdf	file_record_transcript	Success
//Capture	file_07241999.pdf	file_07241999	Success
//Skip	testfile_fake.pdf.tmp

/*
 ^(file.+)\.pdf$
 */

//Exercise 12: Matching Nested Groups
//Task	Text	Capture Groups	 
//Capture	Jan 1987	Jan 1987 1987	To be completed
//Capture	May 1969	May 1969 1969	To be completed
//Capture	Aug 2011

/*
 (\w+ (\d+))
 */

//Exercise 13: Matching Nested Groups
//Task	Text	Capture Groups	 
//Capture	1280x720	1280 720	To be completed
//Capture	1920x1600	1920 1600	To be completed
//Capture	1024x768	1024 768

/*
 (\d+)x(\d+)
 */

//Exercise 14: Matching Conditional Text
//Task	Text	 
//Match	I love cats	To be completed
//Match	I love dogs	To be completed
//Skip	I love logs	To be completed
//Skip	I love cogs

/*
 ^(I love) cats|dogs
 */

//Exercise 15: Matching Other Special Characters
//Task	Text	 
//Match	The quick brown fox jumps over the lazy dog.	To be completed
//Match	There were 614 instances of students getting 90.0% or above.	To be completed
//Match	The FCC had to censor the network for saying &$#*@!.

/*
 .*
 */