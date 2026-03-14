// Assignment A
// 1
const students = [
  { name: "Ali", grade: 75 },
  { name: "Sara", grade: 92 },
  { name: "Mona", grade: 88 }
]

const topStudents = students.filter(student => student.grade > 80)
console.log(topStudents);


// 2
const usersList = [
  { name: "Malak", role: "Student" },
  { name: "Omar", role: "Mentor" }
];

const userRoles = usersList.map(user => `${user.name} - ${user.role}`);
console.log(userRoles);


// 3
const simpleProducts = [
  { id: 1, name: "Mouse" },
  { id: 2, name: "Keyboard" },
  { id: 3, name: "Screen" }
];

const product = simpleProducts.find(p => p.id === 3);
console.log(product);


// 4
const person = { name: "Laila", age: 21, city: "Cairo" };

const { name, age } = person;
console.log("Name:", name, "Age:", age);


// 5
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const merged = [...arr1, ...arr2];
console.log(merged);


// 6
const student = { name: "Hana", grade: 84, level: 2 };

const updatedStudent = { ...student, grade: 90 };
console.log(updatedStudent);


// 7
const numbers = [1,2,3,4,5,6];

const doubled = numbers.map(n => n * 2);
console.log(doubled);


// 8
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers);


// 9
const employees = [
  { name: "Nour", department: "HR" },
  { name: "Youssef", department: "IT" }
];

const itEmployee = employees.find(emp => emp.department === "IT");
console.log(itEmployee);


// 10
const words = ["js", "ts", "js", "react", "js", "ts"];

const wordCount = words.reduce((acc: Record<string, number>, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

console.log(wordCount);


// Assignment B
interface User {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
}

interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

const users: User[] = [
  { id: 1, name: "Malak", age: 21, isActive: true },
  { id: 2, name: "Omar", age: 24, isActive: false },
  { id: 3, name: "Lina", age: 20, isActive: true }
];

const products: Product[] = [
  { id: 101, name: "Laptop", price: 25000, inStock: true },
  { id: 102, name: "Headphones", price: 1800, inStock: false },
  { id: 103, name: "Mouse", price: 650, inStock: true }
];

function getUserById(id: number): User | undefined {
  return users.find(user => user.id === id);
}

function getActiveUsers(list: User[]): User[] {
  return list.filter(user => user.isActive);
}

function getProductNames(items: Product[]): string[] {
  return items.map(item => item.name);
}

function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}

function printUser(user: User): string {
  return `${user.name} is ${user.age} years old`;
}

let selectedUser: User | undefined = getUserById(1);
let activeUsers: User[] = getActiveUsers(users);
let productNames: string[] = getProductNames(products);
let total: number = calculateTotal(650, 3);


// Assignment C
interface Course {
  id: number;
  title: string;
}

interface UserData {
  id: number;
  name: string;
  role: string;
  email: string;
  isActive: boolean;
  courses: Course[];
}

interface ApiResponse {
  success: boolean;
  message: string;
  data: UserData;
}

const apiResponse: ApiResponse = {
  success: true,
  message: "User retrieved successfully",
  data: {
    id: 1,
    name: "Malak Ahmed",
    role: "mentor",
    email: "malak@example.com",
    isActive: true,
    courses: [
      { id: 11, title: "JavaScript Basics" },
      { id: 12, title: "TypeScript Intro" }
    ]
  }
};

console.log(apiResponse);
