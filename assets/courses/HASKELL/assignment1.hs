{-
Assignment 1 , 2024

READ THE FOLLOWING !! - 

Submission date and time : September 20, 2024. 11.59 pm

Suppose your cmi mail id is nam.ug2024@cmi.ac.in, where nam is some version of your name.
Submit your solution in a single file named nam.ug2024.hs on Moodle

You may define auxiliary functions in the same file, but the solutions should have the function names and types specified by the problems. Remember that function names should start with a lowercase letter, and there should be no indentation for non-local functions.

Please compile and check that the sample cases are satisfied before submitting!

Besides each problem number, there is the name of the TA whom you can contact for any necessary clarifications. For the first two problems, no binary representation can begin with '0'

-}

-------------------------------------------------------------------------------------------------
-- Problem (0) @Harsh

-- Input - a string s which represents a positive integer in binary

binaryToDecimal :: String -> String
binaryToDecimal = undefined

-- Output - A string which represents the same integer in decimal

{- Example
    Input - "1101010"
    Output - "106"
-}

-------------------------------------------------------------------------------------------------
-- Problem (1) @Aadrita

-- Input - a string s which represents a positive integer in decimal

decimalToBinary :: String -> String
decimalToBinary = undefined

-- Output - A string which represents the same integer in binary

{-
Example
Input - "106"
Output - "1101010"
-}

-------------------------------------------------------------------------------------------------
-- Problem (2) @Ryan

factorial :: Int -> Int
factorial 0 = 1
factorial x = x * factorial (x-1)

-- Input - n :: Int where n > 0

maxFactorial :: Int -> Int
maxFactorial = undefined

-- Output - the least x :: Int such that (factorial (x+1)) > n
--          If no such x exists, then -1

{- 
Example
Input - 25
Output - 4
-}

-------------------------------------------------------------------------------------------------
-- Problem (3) @Harsh

{- 
In the same way any non-negative integer can be represented  by a finite binary sequence, it can be represented by a finite sequence of booleans (replace 1 by True and 0 by False)

For explicit defintions of the following material, you can consult https://en.wikipedia.org/wiki/Bitwise_operation.
Given a function 
    f :: Bool -> Bool -> Bool
the bitwise version of f is a function 
    bitwise_f :: Integer -> Integer -> Integer
such that bitwise_f n m = the number represented by the finite boolean sequence 
    f n_0 m_0, f n_1 m_1, ... , f n_k m_k               
where n_0, n_1, ... , n_k and m_0, m_1, ... , m_k are finite boolean sequences of equal length representing n and m respectively.
-}

-- Implement bitwise versions of xor, and, or

bitwiseXor, bitwiseAnd, bitwiseOr :: Integer -> Integer -> Integer
bitwiseXor = undefined
bitwiseAnd = undefined
bitwiseOr  = undefined
{-
Examples 
bitwiseXor 12 39 = 43
bitwiseAnd 12 39 = 4
bitwiseOr 12 39 = 47
-}

-------------------------------------------------------------------------------------------------
-- Problem (4) @Harsh

-- Input - l :: [Integer], k :: Integer

targetSum :: [Integer] -> Integer -> Int
targetSum = undefined

-- Output - number of (i,j) such that (l!!i + l!!j == k)
{-
Example 
targetSum [1..20] 35 = 6
-}
-------------------------------------------------------------------------------------------------
-- Problem (5) @Harsh

-- Input - l :: [a], i :: Int, j :: Int where 0 <= i <= j < (length l)

reverseSublist :: [a] -> Int -> Int -> [a]
reverseSublist = undefined

-- Output - reverse of the sublist [ l!!i , l!!(i+1) , . . . , l!!(j-1) , l!!j ]
{-
Examples
reverseSublist [12,11..] 56 61 == [-49,-48,-47,-46,-45,-44]
-}

-------------------------------------------------------------------------------------------------
-- Problem (6) @Aadrita

-- Vigenere Cipher

-- The Vigenere cipher is a method of encryption using a 'key' 
-- in which each letter of the plaintext is shifted according to the corresponding letter in the key.
-- 'Shifting a letter by n' means to take the letter which occurs n places after it in the alphabet, with wrap-around. 
-- e.g. 'J' shifted by 1 is 'K', 'Z' shifted by 3 is 'C' etc.
-- The letters A-Z are assigned numbers 0-25. 
-- To obtain the ciphertext, we shift the ith letter of the plaintext 
-- by the number corresponding to the ith letter of the key 
-- (if the plaintext is longer than the key, we repeat the key). e.g. if the key is "ADFC", 
    -- then the first letter of the plaintext is shifted by 0, second letter is shifted by 3, 
    --the third letter by 5, the fourth letter by 2, and then again the fifth letter by 0 etc.)

-- Input - a key :: String and a plaintext :: String, 
-- You may assume the key and plaintext are in uppercase and consist only of characters A-Z.

vigenere :: String -> String -> String
vigenere = undefined

-- Output - the corresponding ciphertext. 
{-
Examples:
vigenere "AAZ" "CHENNAIMATHEMATICALINSTITUTE" is "CHDNNZIMZTHDMASICZLIMSTHTUSE"
vigenere "HASKELL" "HELLOWORLD" is "OEDVSHZYLV"
-}
-------------------------------------------------------------------------------------------------
-- Problem (7) @Aadrita

{-
Tower of Hanoi

The Tower of Hanoi is a puzzle consisting of three rods (labelled A, B, C) and n discs of distinct diameters (labelled 1-n, with 1 being of the smallest diameter and n being of the largest diameter). The puzzle begins with the discs stacked on rod A in order of decreasing size (i.e. with the smallest disc at the top). The objective of the puzzle is to move the entire stack to rod C, obeying the following rules: 
    Only one disc may be moved at a time.  
    Each move consists of taking the topmost disc from one of the stacks and placing it on top of another stack (or on an empty rod).  
    No disc can be placed on top of a disc that is smaller than it at any point.

For n discs, a solution in (2^n)-1 moves is always possible (by recursively moving the top n-1 discs to rod B, the bottom-most disc to rod C, and the top n-1 discs to rod C 
https://en.wikipedia.org/wiki/Tower_of_Hanoi#Recursive_solution).
-}

-- Input - the number of discs n :: Int

hanoi :: Int -> [(Int, Char)]
hanoi = undefined

-- Output - the list of required moves in the form of a list of (2^n)-1 tuples 
--          with the first entry in the tuple being the disc which is being moved 
--          and the second entry in the tuple being the rod it is being moved to.
{-
Examples: 
hanoi 1 is [(1,'C')]
hanoi 2 is [(1,'B'),(2,'C'),(1,'C')]
hanoi 3 is [(1,'C'),(2,'B'),(1,'B'),(3,'C'),(1,'A'),(2,'C'),(1,'C')]
-}
-------------------------------------------------------------------------------------------------
-- Problem (8) @Ryan

-- Input - m :: Int , a :: Int , where m > 0 and a >= 0

pastCount :: Int -> Int -> [Int]
pastCount =  undefined

-- Output - [ a_1, a_2, ... , a_m ] such that
-- 1.) a_1 == a  
-- 2.) for all i in [1..(m-1)], a_{i+1} == number of occurrences of a_i in [ a_1, a_2, ... , a_i ]

-- Examples - 
-- pastCount 20 3 = [3,1,1,2,1,3,2,2,3,3,4,1,4,2,4,3,5,1,5,2]
-- pastCount 20 0 = [0,1,1,2,1,3,1,4,1,5,1,6,1,7,1,8,1,9,1,10]
-- pastCount 20 1 = [1,1,2,1,3,1,4,1,5,1,6,1,7,1,8,1,9,1,10,1]

-------------------------------------------------------------------------------------------------
-- Problem (9) @Ryan

{- 
Given a list of lists ll, l is said to be a choice list of ll if the following conditions hold:
    length l == length ll and 
    for all i in [0..((length l)-1)] , ( l!!i `elem` ll !!i )
-}

-- Input - ll :: [[a]]

choiceLists :: [[a]] -> [[a]]
choiceLists = undefined

-- Output - list of all choice lists of ll

{-
Example -
Input - [[1,2,3],[4,5,6],[7,8,9]]
Output - [[1,4,7],[1,4,8],[1,4,9],[1,5,7],[1,5,8],[1,5,9],[1,6,7],[1,6,8],[1,6,9],[2,4,7],[2,4,8],[2,4,9],[2,5,7],[2,5,8],[2,5,9],[2,6,7],[2,6,8],[2,6,9],[3,4,7],[3,4,8],[3,4,9],[3,5,7],[3,5,8],[3,5,9],[3,6,7],[3,6,8],[3,6,9]]
-}
-------------------------------------------------------------------------------------------------
-- Problem (10) @Ryan

-- A function p :: Integer -> Integer, is said to be a polynomial if
-- there are some a_0, a_1, a_2, . . . , a_n :: Integers
-- such that for all x :: Integer, ( p x == a_0*(x^0)+a_1*(x^1)+a_2*(x^2)+...+a_n*(x^n) )
--
-- and n is said to be the degree of p if (a_n/=0)

-- Input - p :: Integer -> Integer , n :: Int, a :: Integer
--             where p and n, its degree, are as above, and a > (abs a_i) for all i in [0..n]

coefficients :: ( Integer -> Integer ) -> Int -> Integer ->  [Integer]
coefficients = undefined

-- Output - [ a_0, a_1, a_2, . . . , a_n ]

-- Example -
-- Input - p and 4 and 22, where p x = x*x*x + 21 + x + x*x + x*x + x*x*x + x*x*x*x
-- Output - [21,1,2,2,1]

-------------------------------------------------------------------------------------------------
-- Best of luck !!
