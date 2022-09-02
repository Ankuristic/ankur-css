// var temp= 'hello';
// function display(){
//     console.log(temp);
//     var temp = 'bye';
// };
// display();



// var array = [1, 2, 3]
// const array1 = [4, 5, 6]
// var arr1 = array.map(a => a * 2);

// array = [...array1, ...arr1]

// console.log(array)


// function foo(x, ...y) {
//     return x * y.length
//  }
//  foo(4,1,2,30);


// var title = "A Passage to India";
// var author = "E.M. Forster";

// var novel = {
//    title: "Pride and Prejudice",
//    author: "Jane Austen",
//    print: function() {
//        console.log(this.title);
//        console.log(this.author);
//    }
// }

// novel.print();



// const scores = [22, 33]
// const [math, science = 50, arts = 50, sst] = scores
// console.log(math,science,arts,sst);

// const colors = [
//     'Red',
//     'Orange',   
//     'Purple',
//     'Brown',
//     'Gray',
//     'Pink'
//   ];
// const [primary, ,secondary,...others] = colors;
// console.log(primary, secondary, others);


// function greet({ name, greeting='hello' }) {
//     console.log(`${greeting}, ${name}!`)
//   }
//   const person = { name: 'Aayushi', dept: 'tech', greeting: 'Welcome'};
//   greet(person);





  
//   greet(person);





// Priority List
// Send Feedback
// A student is creating a list of electronics items he wants to buy with decreasing priority(highest priority item at 0 index).
// Electronics=['Mobile', 'Watch', 'Kindle']. 
// But due to college requirements, he wants to keep a certain item as his first priority. Can you add that item at the start to create a new priority list using the spread operator?



function newPriorityList(item) {
    var Electronics=['Mobile', 'Watch', 'Kindle'];
    // write your code here
    
}


// Input and output has already been handled for you

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let remainder = '';
process.stdin.on('data', function (chunk) {
    var ans=newPriorityList(chunk);
    for(var i=0; i<ans.length; i++)
    {
        process.stdout.write(ans[i]+'\n');
    }
    process.exit();
});



// sum of n number

// Sum of N numbers
// Send Feedback
// Write a program for printing the sum of given numbers.
// Input :

// 1 2 3 4
// Output:

// 10


// Input:

// 4 1 3 1 1 1 2
// Output:

// 13

function sumOfNumbers(...args) {  
    // write your code here
    
}


// Input and output has already been handled for you

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let remainder = '';
// process.stdin.on('data', function (chunk) {
//     var arr = [];
//     var a = chunk.toString().split(' '); 
//     for(var i=0; i<a.length; i++)
//     {
//         arr.push(parseInt(a[i]));
//     }
//     ans = sumOfNumbers(...arr);
//     var ans1 = ""+ans;
//     process.stdout.write(ans1);
//     process.exit();
// });



// Student Grades
// Send Feedback
// You have to filter all the students with marks greater than the given grades. Complete the given function and return the object.
// const students = [
//   { name: 'Anjali', grade: 96 },
//   { name: 'Navdeep', grade: 84 },
//   { name: 'Varun', grade: 100 },
//   { name: 'Bhavya', grade: 65 },
//   { name: 'Shiva', grade: 90 }
// ];




// function studentGrades(grade) {
//     const students = [
//         { name: 'Anjali', grade: 96 },
//         { name: 'Navdeep', grade: 84 },
//         { name: 'Varun', grade: 100 },
//         { name: 'Bhavya', grade: 65 },
//         { name: 'Shiva', grade: 90 }
//       ];
//     //Write your code here
// }


// // Input and output has already been handled for you


// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let remainder = '';
// process.stdin.on('data', function (chunk) {
//     let t = parseInt(chunk);
//     let ans = studentGrades(t);
//     for(var i=0; i<ans.length; i++)
//     {
//         process.stdout.write(ans[i].name+'\n');
//     }
//     process.exit();
// });




// Remove Duplicates
// Send Feedback
// Remove duplicates from an array using reduce().
// Input Format: Given an array as input

// Output Format: Return the answer in the form of array after removing duplicates.



// Sample Input:

// a b c d a b b c d
// Sample Output:

// a b c d



function remDup(arr) {  
    // write your code here
    
}



// Input and output has already been handled for you

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let remainder = '';
process.stdin.on('data', function (chunk) {
    var arr = [];
    var a = chunk.toString().split(' '); 
    for(var i=0; i<a.length; i++)
    {
        arr.push(parseInt(a[i]));
    }
    ans = remDup(arr);
    ans.sort();
    for(var i=0; i<ans.length; i++)
    {
        process.stdout.write(ans[i]+' ');
    }
    process.exit();
});
