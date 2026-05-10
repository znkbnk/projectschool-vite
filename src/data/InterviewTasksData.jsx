const questions = [
  {
    id: 1,
    type: "React",
    text: "Write a React component that takes a list of items as a prop and displays them as a styled list. Each item should have a unique key.",
    solution: `
      const List = ({ items }) => (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    `,
    testCases: [
      {
        inputs: [{ items: ["Apple", "Banana", "Cherry"] }],
        expectedOutput: "<ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>",
      },
    ],
  },
  {
    id: 2,
    type: "Functions",
    text: "Create a JavaScript function that removes duplicates from an array.",
    solution: `
      const removeDuplicates = (arr) => [...new Set(arr)];
    `,
    testCases: [
      { inputs: [[1, 2, 2, 3]], expectedOutput: [1, 2, 3] },
      { inputs: [["a", "b", "b", "c"]], expectedOutput: ["a", "b", "c"] },
    ],
  },
  {
    id: 3,
    type: "React",
    text: "Write a React component that displays a greeting message. Pass the message as a prop.",
    solution: `
      const Greeting = (props) => <h1>{props.message}</h1>;
    `,
    testCases: [
      {
        inputs: [{ message: "Hello, World!" }],
        expectedOutput: "<h1>Hello, World!</h1>",
      },
      {
        inputs: [{ message: "Welcome!" }],
        expectedOutput: "<h1>Welcome!</h1>",
      },
    ],
  },
  {
    id: 4,
    type: "Functions",
    text: "Create a JavaScript function that takes an array of numbers and returns the sum of all elements.",
    solution: `
      const sumArray = (arr) => arr.reduce((sum, num) => sum + num, 0);
    `,
    testCases: [
      { inputs: [[1, 2, 3, 4]], expectedOutput: 10 },
      { inputs: [[10, -10, 5]], expectedOutput: 5 },
    ],
  },
  {
    id: 5,
    type: "React",
    text: "Create a React component that takes a number as a prop and displays it as a counter.",
    solution: `
      const Counter = (props) => <p>Counter: {props.count}</p>;
    `,
    testCases: [
      { inputs: [{ count: 5 }], expectedOutput: "<p>Counter: 5</p>" },
      { inputs: [{ count: 0 }], expectedOutput: "<p>Counter: 0</p>" },
    ],
  },
  {
    id: 6,
    type: "Functions",
    text: "Write a JavaScript function that takes a string and returns it reversed.",
    solution: `
      const reverseString = (str) => str.split('').reverse().join('');
    `,
    testCases: [
      { inputs: ["hello"], expectedOutput: "olleh" },
      { inputs: ["JavaScript"], expectedOutput: "tpircSavaJ" },
    ],
  },
  {
    id: 7,
    type: "React",
    text: "Write a React component that takes an array of strings as a prop and renders them as a list.",
    solution: `
      const StringList = (props) => (
        <ul>
          {props.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    `,
    testCases: [
      {
        inputs: [{ items: ["Apple", "Banana"] }],
        expectedOutput: "<ul><li>Apple</li><li>Banana</li></ul>",
      },
    ],
  },
  {
    id: 8,
    type: "Functions",
    text: "Create a function that checks if a given string is a palindrome.",
    solution: `
      const isPalindrome = (str) => str === str.split('').reverse().join('');
    `,
    testCases: [
      { inputs: ["racecar"], expectedOutput: true },
      { inputs: ["hello"], expectedOutput: false },
    ],
  },
  {
    id: 9,
    type: "Functions",
    text: "Write a function that returns the largest number in an array.",
    solution: `
      const findLargest = (arr) => Math.max(...arr);
    `,
    testCases: [
      { inputs: [[1, 2, 3, 4, 5]], expectedOutput: 5 },
      { inputs: [[-10, -20, 0]], expectedOutput: 0 },
    ],
  },
  {
    id: 10,
    type: "Arrays",
    text: "Create a JavaScript function that finds the longest word in an array of strings.",
    solution: `
      function findLongestWord(arr) {
          return arr.reduce((longest, current) => current.length > longest.length ? current : longest, '');
      }
    `,
    testCases: [
      { inputs: [["apple", "banana", "cherry", "kiwi"]], expectedOutput: "banana" },
      { inputs: [["dog", "cat", "elephant", "lion"]], expectedOutput: "elephant" },
      { inputs: [["apple", "pie", "orange", "grapefruit"]], expectedOutput: "grapefruit" },
      { inputs: [["short", "longer", "longest"]], expectedOutput: "longest" },
      { inputs: [["a", "ab", "abc", "abcd"]], expectedOutput: "abcd" },
    ],
  }
  
,  
 
  {
    id: 11,
    type: "Functions",
    text: "Write a recursive function that determines if a number is even.",
    solution: `
      const isEven = (n) => {
        if (n === 0) return true;
        else if (n === 1) return false;
        else if (n < 0) return isEven(-n);
        else return isEven(n - 2);
      };
    `,
    testCases: [
      { inputs: [4], expectedOutput: true },
      { inputs: [7], expectedOutput: false },
      { inputs: [-2], expectedOutput: true },
      { inputs: [-5], expectedOutput: false },
      { inputs: [0], expectedOutput: true },
    ],
  },
  {
    id: 12,
    type: "Functions",
    text: "Write two functions: one that creates an array of numbers within a range (supporting both increasing and decreasing ranges), and another that calculates the sum of an array of numbers.",
    solution: `
    const range = (start, end, step = start < end ? 1 : -1) => {
      const array = [];
      if (step > 0) {
        for (let i = start; i <= end; i += step) array.push(i);
      } else {
        for (let i = start; i >= end; i += step) array.push(i);
      }
      return array;
    };
    
    const sum = array => array.reduce((total, value) => total + value, 0);
    `,
    testCases: [
      { inputs: [1, 10], expectedOutput: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
      { inputs: [10, 1, -1], expectedOutput: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
      { inputs: [1, 5], expectedOutput: [1, 2, 3, 4, 5] },
      { inputs: [5, 1, -1], expectedOutput: [5, 4, 3, 2, 1] },
    ],
  },
  {
    id: 13,
    text: "Write a function that compares two objects deeply to check if they are equal. The function should return `true` if the objects are deeply equal, and `false` otherwise. Deep equality means that objects must have the same keys with the same values, including nested objects and arrays.",
    type: "JavaScript",
    solution: `
  const deepEqual = (a, b) => {
    if (a === b) return true;
  
    if (a == null || typeof a !== 'object' ||
        b == null || typeof b !== 'object') return false;
  
    const keysA = Object.keys(a), keysB = Object.keys(b);
  
    if (keysA.length !== keysB.length) return false;
  
    for (const key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
  
    return true;
  };
  `,
    testCases: [
      {
        inputs: [
          { a: 1, b: { c: 2 } },
          { a: 1, b: { c: 2 } },
        ],
        expectedOutput: true,
        run: (deepEqual, _, __, ___, inputs) => deepEqual(...inputs),
      },
      {
        inputs: [
          { a: 1, b: { c: 2 } },
          { a: 1, b: { c: 3 } },
        ],
        expectedOutput: false,
        run: (deepEqual, _, __, ___, inputs) => deepEqual(...inputs),
      },
      {
        inputs: [
          { a: 1, b: [1, 2] },
          { a: 1, b: [1, 2] },
        ],
        expectedOutput: true,
        run: (deepEqual, _, __, ___, inputs) => deepEqual(...inputs),
      },
      {
        inputs: [
          { a: 1, b: [1, 2] },
          { a: 1, b: [1, 3] },
        ],
        expectedOutput: false,
        run: (deepEqual, _, __, ___, inputs) => deepEqual(...inputs),
      },
      {
        inputs: [
          { a: 1, b: null },
          { a: 1, b: null },
        ],
        expectedOutput: true,
        run: (deepEqual, _, __, ___, inputs) => deepEqual(...inputs),
      },
      {
        inputs: [
          { a: 1, b: null },
          { a: 1, b: undefined },
        ],
        expectedOutput: false,
        run: (deepEqual, _, __, ___, inputs) => deepEqual(...inputs),
      },
    ],
  },
  {
    id: 14,
    type: "Algorithms",
    text: "Create a JavaScript function that counts all palindromic substrings in a given string.",
    solution: `
    const countPalindromicSubstrings = (s) => {
      let count = 0;
      const isPalindrome = (str, start, end) => {
        while (start >= 0 && end < str.length && str[start] === str[end]) {
          count++;
          start--;
          end++;
        }
      };
      for (let i = 0; i < s.length; i++) {
        isPalindrome(s, i, i);
        isPalindrome(s, i, i + 1);
      }
      return count;
    };
  `,
    testCases: [
      { inputs: ["abba"], expectedOutput: 6 }, // Palindromes: 'a', 'b', 'b', 'a', 'bb', 'abba'
      { inputs: ["racecar"], expectedOutput: 10 }, // Palindromes: 'r', 'a', 'c', 'e', 'c', 'a', 'r', 'cec', 'aceca', 'racecar'
      { inputs: ["abc"], expectedOutput: 3 }, // Palindromes: 'a', 'b', 'c'
    ],
  },
  {
    id: 15,
    type: "Algorithms",
    text: "Create a JavaScript function that finds all unique pairs in an array that sum up to a given target.",
    solution: `
    function findPairSums(arr, target) {
      const seen = new Set();
      const pairs = new Set();

      for (let num of arr) {
        const complement = target - num;
        if (seen.has(complement)) {
          const pair = [Math.min(num, complement), Math.max(num, complement)].toString();
          pairs.add(pair);
        }
        seen.add(num);
      }

      return Array.from(pairs).map(pair => pair.split(',').map(Number));
    }
  `,
    testCases: [
      {
        inputs: [[1, 2, 3, 4, 3], 6],
        expectedOutput: [
          [2, 4],
          [3, 3],
        ],
      },
      {
        inputs: [[0, -1, -2, 2, 1], 0],
        expectedOutput: [
          [-2, 2],
          [-1, 1],
        ],
      },
      { inputs: [[1, 1, 1, 1], 2], expectedOutput: [[1, 1]] },
    ],
  },
  {
    id: 16,
    type: "Algorithms",
    text: "Create a JavaScript function that rotates a square matrix 90 degrees clockwise.",
    solution: `
      function rotateMatrix(matrix) {
        const n = matrix.length;
  
        for (let layer = 0; layer < Math.floor(n / 2); layer++) {
          const start = layer;
          const end = n - layer - 1;
  
          for (let i = start; i < end; i++) {
            const offset = i - start;
  
            // Save top
            const top = matrix[start][i];
  
            // Move left to top
            matrix[start][i] = matrix[end - offset][start];
  
            // Move bottom to left
            matrix[end - offset][start] = matrix[end][end - offset];
  
            // Move right to bottom
            matrix[end][end - offset] = matrix[i][end];
  
            // Move top to right
            matrix[i][end] = top;
          }
        }
  
        return matrix;
      }
    `,
    testCases: [
      {
        inputs: [
          [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
          ],
        ],
        expectedOutput: [
          [7, 4, 1],
          [8, 5, 2],
          [9, 6, 3],
        ],
      },
      {
        inputs: [
          [
            [1, 2],
            [3, 4],
          ],
        ],
        expectedOutput: [
          [3, 1],
          [4, 2],
        ],
      },
      {
        inputs: [[[1]]],
        expectedOutput: [[1]],
      },
    ],
  },
  {
    id: 17,
    type: "React",
    text: "Write a React component that displays a list of items. Each item should have a button to toggle its background color between red and green.",
    solution: `
      const ToggleList = ({ items }) => (
        <ul>
          {items.map((item, index) => {
            const handleClick = (event) => {
              event.target.style.backgroundColor =
                event.target.style.backgroundColor === "green" ? "red" : "green";
            };
            return (
              <li key={index}>
                {item} <button onClick={handleClick}>Toggle Color</button>
              </li>
            );
          })}
        </ul>
      );
    `,
    testCases: [
      {
        inputs: [{ items: ["Item 1", "Item 2", "Item 3"] }],
        expectedOutput:
          "<ul><li>Item 1 <button>Toggle Color</button></li><li>Item 2 <button>Toggle Color</button></li><li>Item 3 <button>Toggle Color</button></li></ul>",
      },
    ],
  },
  {
    id: 18,
    type: "React",
    text: "Write a React component that displays 'Logged In' or 'Logged Out' based on a boolean prop called `isLoggedIn`.",
    solution: `
      const LoginStatus = ({ isLoggedIn }) => (
        <div>
          {isLoggedIn ? "Logged In" : "Logged Out"}
        </div>
      );
    `,
    testCases: [
      {
        inputs: [{ isLoggedIn: true }],
        expectedOutput: "<div>Logged In</div>",
      },
      {
        inputs: [{ isLoggedIn: false }],
        expectedOutput: "<div>Logged Out</div>",
      },
    ],
  },
  {
    id: 19,
    type: "Algorithms",
    text: "Create a JavaScript function that finds the length of the longest consecutive sequence in an array of integers.",
    solution: `
      function longestConsecutive(nums) {
        const numSet = new Set(nums);
        let longest = 0;
  
        for (let num of nums) {
          // Check if it's the start of a sequence
          if (!numSet.has(num - 1)) {
            let currentNum = num;
            let streak = 1;
  
            while (numSet.has(currentNum + 1)) {
              currentNum++;
              streak++;
            }
  
            longest = Math.max(longest, streak);
          }
        }
  
        return longest;
      }
    `,
    testCases: [
      { inputs: [[100, 4, 200, 1, 3, 2]], expectedOutput: 4 }, // Sequence: [1, 2, 3, 4]
      { inputs: [[0, 3, 7, 2, 5, 8, 4, 6, 0, 1]], expectedOutput: 9 }, // Sequence: [0, 1, 2, 3, 4, 5, 6, 7, 8]
      { inputs: [[1, 2, 0, 1]], expectedOutput: 3 }, // Sequence: [0, 1, 2]
    ],
  },
  {
    id: 20,
    type: "Algorithms",
    text: "Create a JavaScript function that flattens a nested array into a single-level array.",
    solution: `
      function flattenArray(arr) {
        const result = [];
  
        const flatten = (nested) => {
          for (let item of nested) {
            if (Array.isArray(item)) {
              flatten(item); // Recursively flatten the sub-array
            } else {
              result.push(item);
            }
          }
        };
  
        flatten(arr);
        return result;
      }
    `,
    testCases: [
      { inputs: [[[1, [2, [3, 4], 5]]]], expectedOutput: [1, 2, 3, 4, 5] },
      { inputs: [[[]]], expectedOutput: [] },
      { inputs: [[[1, 2, 3]]], expectedOutput: [1, 2, 3] },
      { inputs: [[[1, [2, [3, [4, 5]]]]]], expectedOutput: [1, 2, 3, 4, 5] },
    ],
  },
  {
    id: 21,
    type: "Algorithms",
    text: "Create a JavaScript function that finds the first non-repeating character in a string.",
    solution: `
      function firstNonRepeatingChar(str) {
        const charCount = {};
  
        for (let char of str) {
          charCount[char] = (charCount[char] || 0) + 1;
        }
  
        for (let char of str) {
          if (charCount[char] === 1) {
            return char;
          }
        }
  
        return null;
      }
    `,
    testCases: [
      { inputs: ["swiss"], expectedOutput: "w" },
      { inputs: ["repetition"], expectedOutput: "r" },
      { inputs: ["aabbcc"], expectedOutput: null },
      { inputs: ["a"], expectedOutput: "a" },
    ],
  },
  {
    id: 22,
    type: "Algorithms",
    text: "Create a JavaScript function that groups anagrams from a list of strings.",
    solution: `
      function groupAnagrams(strs) {
        const map = new Map();
  
        for (let str of strs) {
          const sortedStr = str.split('').sort().join('');
          if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
          }
          map.get(sortedStr).push(str);
        }
  
        return Array.from(map.values());
      }
    `,
    testCases: [
      { inputs: [["eat", "tea", "tan", "ate", "nat", "bat"]], expectedOutput: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]] },
      { inputs: [[""]], expectedOutput: [[""]] }, // Single empty string
      { inputs: [["a"]], expectedOutput: [["a"]] }, // Single character string
      { inputs: [["abc", "bca", "cab", "bac", "xyz", "zyx"]], expectedOutput: [["abc", "bca", "cab", "bac"], ["xyz", "zyx"]] },
    ],
  },
  {
    id: 23,
    type: "Algorithms",
    text: "Create a JavaScript function that checks if a string of parentheses is valid (every opening parenthesis has a closing one).",
    solution: `
      function isValid(s) {
        const stack = [];
  
        for (let char of s) {
          if (char === '(') {
            stack.push(char);
          } else if (char === ')') {
            if (stack.length === 0) {
              return false;
            }
            stack.pop();
          }
        }
  
        return stack.length === 0;
      }
    `,
    testCases: [
      { inputs: ["()"], expectedOutput: true }, // Valid parentheses
      { inputs: ["()()"], expectedOutput: true }, // Valid parentheses
      { inputs: ["(())"], expectedOutput: true }, // Valid parentheses
      { inputs: ["(()"], expectedOutput: false }, // Unmatched parentheses
      { inputs: [")("], expectedOutput: false }, // Unmatched parentheses
      { inputs: ["("], expectedOutput: false }, // Unmatched parentheses
      { inputs: [")"], expectedOutput: false }, // Unmatched parentheses
    ],
  },
  {
    id: 24,
    type: "Algorithms",
    text: "Create a JavaScript function that finds the missing number in an array containing numbers from 1 to n with one number missing.",
    solution: `
      function findMissingNumber(arr, n) {
        const totalSum = (n * (n + 1)) / 2;
        const arrSum = arr.reduce((sum, num) => sum + num, 0);
        
        return totalSum - arrSum;
      }
    `,
    testCases: [
      { inputs: [[1, 2, 3, 5], 5], expectedOutput: 4 }, // Missing number is 4
      { inputs: [[1, 3], 3], expectedOutput: 2 }, // Missing number is 2
      { inputs: [[2, 3, 4, 5], 5], expectedOutput: 1 }, // Missing number is 1
      { inputs: [[1, 2], 3], expectedOutput: 3 }, // Missing number is 3
    ],
  },
  {
    id: 25,
    type: "React",
    text: "Write a React component with a button that, when clicked, changes the text of a paragraph below it.",
    solution: `
      const ChangeText = () => {
        const changeParagraphText = (event) => {
          const paragraph = event.target.nextSibling;
          paragraph.textContent = "Text has been changed!";
        };
        return (
          <div>
            <button onClick={changeParagraphText}>Change Text</button>
            <p>Original Text</p>
          </div>
        );
      };
    `,
    testCases: [
      {
        inputs: [],
        expectedOutput: "<div><button>Change Text</button><p>Original Text</p></div>", // Initially displays original text
      },
    ],
  },
  {
    id: 26,
    type: "React",
    text: "Write a React component with a button that, when clicked, either shows or hides a piece of text.",
    solution: `
      const ToggleVisibility = () => {
        const toggleText = (event) => {
          const paragraph = event.target.nextSibling;
          paragraph.style.display = paragraph.style.display === 'none' ? 'block' : 'none';
        };
        return (
          <div>
            <button onClick={toggleText}>Show/Hide Text</button>
            <p style={{ display: 'none' }}>This is some content that can be toggled.</p>
          </div>
        );
      };
    `,
    testCases: [
      {
        inputs: [],
        expectedOutput: "<div><button>Show/Hide Text</button><p style=\"display:none\">This is some content that can be toggled.</p></div>", // Initially hidden content
      },
    ],
    
  },
  {
    id: 27,
    type: "Algorithms",
    text: "Create a JavaScript function that finds two numbers in an array that sum up to a given target.",
    solution: `
      function twoSum(nums, target) {
        const map = new Map();
  
        for (let i = 0; i < nums.length; i++) {
          const complement = target - nums[i];
          if (map.has(complement)) {
            return [map.get(complement), i];
          }
          map.set(nums[i], i);
        }
  
        return null;
      }
    `,
    testCases: [
      { inputs: [[2, 7, 11, 15], 9], expectedOutput: [0, 1] }, // Indices 0 and 1: nums[0] + nums[1] = 9
      { inputs: [[3, 2, 4], 6], expectedOutput: [1, 2] }, // Indices 1 and 2: nums[1] + nums[2] = 6
      { inputs: [[3, 3], 6], expectedOutput: [0, 1] }, // Indices 0 and 1: nums[0] + nums[1] = 6
      { inputs: [[1, 2, 3, 4], 8], expectedOutput: null }, // No two numbers sum to 8
    ],
  },
  {
    id: 28,
    type: "Objects",
    text: "Create a JavaScript function that converts an object to an array of key-value pairs.",
    solution: `
      function objectToArray(obj) {
        return Object.entries(obj);
      }
    `,
    testCases: [
      { inputs: [{ a: 1, b: 2 }], expectedOutput: [['a', 1], ['b', 2]] }, 
      { inputs: [{ name: "Alice", age: 25 }], expectedOutput: [['name', 'Alice'], ['age', 25]] }, 
      { inputs: [{ x: 10, y: 20, z: 30 }], expectedOutput: [['x', 10], ['y', 20], ['z', 30]] }, 
      { inputs: [{ key1: 'value1', key2: 'value2' }], expectedOutput: [['key1', 'value1'], ['key2', 'value2']] }, 
      { inputs: [{}], expectedOutput: [] }, 
    ],
  },
  {
    id: 29,
    type: "Objects",
    text: "Create a JavaScript function that counts the occurrences of values in an object.",
    solution: `
      function countOccurrences(obj) {
        const count = {};
  
        for (let value of Object.values(obj)) {
            count[value] = (count[value] || 0) + 1;
        }
  
        return count;
      }
    `,
    testCases: [
      { inputs: [{ a: 1, b: 2, c: 1 }], expectedOutput: { 1: 2, 2: 1 } }, 
      { inputs: [{ x: "apple", y: "banana", z: "apple" }], expectedOutput: { "apple": 2, "banana": 1 } }, 
      { inputs: [{ a: "hello", b: "hello", c: "world" }], expectedOutput: { "hello": 2, "world": 1 } }, 
      { inputs: [{ a: 5, b: 5, c: 5, d: 10 }], expectedOutput: { 5: 3, 10: 1 } }, 
      { inputs: [{ a: "red", b: "blue", c: "red", d: "green" }], expectedOutput: { "red": 2, "blue": 1, "green": 1 } },
    ],
  },
  {
    id: 30,
    type: "Arrays",
    text: "Create a JavaScript function that groups an array of numbers by parity (even and odd).",
    solution: `
      function groupByParity(arr) {
          return arr.reduce(
              (acc, num) => (num % 2 === 0 ? acc[0].push(num) : acc[1].push(num), acc),
              [[], []]
          );
      }
    `,
    testCases: [
      { inputs: [[1, 2, 3, 4, 5, 6]], expectedOutput: [[2, 4, 6], [1, 3, 5]] },
      { inputs: [[7, 8, 9, 10, 11, 12]], expectedOutput: [[8, 10, 12], [7, 9, 11]] },
      { inputs: [[1, 3, 5, 7]], expectedOutput: [[], [1, 3, 5, 7]] },
      { inputs: [[2, 4, 6, 8]], expectedOutput: [[2, 4, 6, 8], []] },
      { inputs: [[0, -1, -2, -3]], expectedOutput: [[0, -2], [-1, -3]] },
    ],
  }
  
  
  
  
  
  
 
  
  
  
  
 
  
  
  
  
  
  
  
  
  
];

export default questions;

/* 

  {
    id: ,
    text: "",
    solution: `
     
    `,
    testCases: [
    
    ],
  },

*/
