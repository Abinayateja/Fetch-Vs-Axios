# 🚀 Fetch vs Axios

A simple React project created to understand and practice **API communication using Fetch API and Axios**.

This project demonstrates the commonly used HTTP methods:

- GET
- POST
- PUT
- PATCH
- DELETE

The same API operations are implemented separately using **Fetch** and **Axios** so that their syntax and behavior can be easily compared.

---

## 🌐 What is an API?

An **API (Application Programming Interface)** allows two applications to communicate with each other.

In a React application, we commonly communicate with a backend API to send or retrieve data.

The basic flow is:

```text
React Application
       ↓
HTTP Request
       ↓
API / Server
       ↓
HTTP Response
       ↓
React Application
```

For example, when we request products:

```text
React
  ↓
GET /products
  ↓
API
  ↓
Product Data
  ↓
React
```

---

# ⚡ What is Fetch API?

**Fetch API** is a built-in JavaScript Web API used to make HTTP requests.

It is available in modern browsers, so we don't need to install any package.

Example:

```javascript
fetch("https://fakestoreapi.com/products");
```

Fetch returns a **Promise**, so it is commonly used with `async/await`.

Example:

```javascript
async function getData() {
    const response = await fetch(
        "https://fakestoreapi.com/products"
    );

    const data = await response.json();

    console.log(data);
}
```

### How Fetch works

```text
fetch(url)
     ↓
Request sent to API
     ↓
Server processes request
     ↓
Response received
     ↓
response.json()
     ↓
JavaScript data
```

With Fetch, we manually convert the response into JSON using:

```javascript
response.json()
```

---

# 📦 What is Axios?

**Axios** is a third-party JavaScript library used to make HTTP requests.

Unlike Fetch, Axios needs to be installed.

```bash
npm install axios
```

Then:

```javascript
import axios from "axios";
```

Example:

```javascript
async function getData() {
    const response = await axios.get(
        "https://fakestoreapi.com/products"
    );

    console.log(response.data);
}
```

Axios provides separate methods for HTTP operations such as:

```javascript
axios.get()
axios.post()
axios.put()
axios.patch()
axios.delete()
```

Axios automatically handles common JSON response parsing, so we access the response using:

```javascript
response.data
```

---

# ⚔️ Fetch vs Axios

Both Fetch and Axios can perform HTTP requests.

The main difference is **how we write and handle those requests**.

| Feature | Fetch | Axios |
|---|---|---|
| Type | Built-in Web API | Third-party library |
| Installation | Not required | Required |
| GET | `fetch(url)` | `axios.get(url)` |
| POST | `fetch(url, options)` | `axios.post(url, data)` |
| PUT | `fetch(url, options)` | `axios.put(url, data)` |
| PATCH | `fetch(url, options)` | `axios.patch(url, data)` |
| DELETE | `fetch(url, options)` | `axios.delete(url)` |
| JSON response | `response.json()` | `response.data` |
| Request configuration | More manual | More convenient |
| Interceptors | Not built in | Built in |
| Dependency | No additional package | Axios package |

---

# 🔥 HTTP Methods

HTTP methods tell the server what operation we want to perform.

```text
GET     → Read data
POST    → Create data
PUT     → Update/replace data
PATCH   → Partially update data
DELETE  → Delete data
```

---

## 1️⃣ GET

Used to retrieve data from the API.

### Fetch

```javascript
const response = await fetch(
    "https://fakestoreapi.com/products"
);

const data = await response.json();

console.log(data);
```

### Axios

```javascript
const response = await axios.get(
    "https://fakestoreapi.com/products"
);

console.log(response.data);
```

---

## 2️⃣ POST

Used to create new data.

### Fetch

```javascript
const response = await fetch(
    "https://fakestoreapi.com/products",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "New Product",
            price: 100
        })
    }
);

const data = await response.json();

console.log(data);
```

### Axios

```javascript
const response = await axios.post(
    "https://fakestoreapi.com/products",
    {
        title: "New Product",
        price: 100
    }
);

console.log(response.data);
```

Notice that with Fetch we manually use:

```javascript
JSON.stringify()
```

Axios provides a simpler way to send the JavaScript object.

---

## 3️⃣ PUT

Used to update or replace an existing resource.

### Fetch

```javascript
const response = await fetch(
    "https://fakestoreapi.com/products/1",
    {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "Updated Product",
            price: 200
        })
    }
);

const data = await response.json();

console.log(data);
```

### Axios

```javascript
const response = await axios.put(
    "https://fakestoreapi.com/products/1",
    {
        title: "Updated Product",
        price: 200
    }
);

console.log(response.data);
```

---

## 4️⃣ PATCH

Used to partially update an existing resource.

For example, changing only the price:

### Fetch

```javascript
const response = await fetch(
    "https://fakestoreapi.com/products/1",
    {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            price: 300
        })
    }
);

const data = await response.json();

console.log(data);
```

### Axios

```javascript
const response = await axios.patch(
    "https://fakestoreapi.com/products/1",
    {
        price: 300
    }
);

console.log(response.data);
```

---

## 5️⃣ DELETE

Used to delete an existing resource.

### Fetch

```javascript
const response = await fetch(
    "https://fakestoreapi.com/products/1",
    {
        method: "DELETE"
    }
);

const data = await response.json();

console.log(data);
```

### Axios

```javascript
const response = await axios.delete(
    "https://fakestoreapi.com/products/1"
);

console.log(response.data);
```

---

# 🆚 Same API Request: Fetch vs Axios

The difference becomes very clear when comparing the same POST request.

### Fetch

```javascript
const response = await fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
});

const result = await response.json();
```

### Axios

```javascript
const response = await axios.post(url, data);

const result = response.data;
```

Fetch requires more manual configuration, while Axios provides convenient methods that make the code shorter.

---

# 📁 Project Structure

```text
fetch-vs-axios/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── Axios/
│   │   └── index.jsx
│   │
│   ├── Fetch/
│   │   └── index.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

### `src/Fetch/index.jsx`

Contains the API implementations using the **Fetch API**.

### `src/Axios/index.jsx`

Contains the same API operations using **Axios**.

Keeping Fetch and Axios in separate folders makes it easy to compare their implementation.

### `src/App.jsx`

Used to render and connect the Fetch and Axios components.

---

# 🧪 API Used

This project uses the **Fake Store API** for learning and testing API requests.

```text
https://fakestoreapi.com/
```

The project demonstrates:

```text
GET
POST
PUT
PATCH
DELETE
```

The API is intended for practice/testing, so write operations should not be treated as permanent production database changes.

---

# 🔄 Complete API Flow

The overall process can be understood like this:

```text
React Component
      ↓
User performs an action
      ↓
Fetch / Axios
      ↓
HTTP Request
      ↓
API / Server
      ↓
HTTP Response
      ↓
Fetch / Axios processes response
      ↓
React receives data
      ↓
UI can be updated
```

---

# 🎯 What You Will Learn

After practicing this project, you should understand:

- What an API is
- What an HTTP request is
- What an HTTP response is
- GET, POST, PUT, PATCH and DELETE
- How Fetch works
- How Axios works
- How `async/await` works with API requests
- How to send JSON data
- How to receive JSON data
- `response.json()` in Fetch
- `response.data` in Axios
- The difference between Fetch and Axios
- How CRUD-style API operations are implemented

---

# 🧠 Quick Memory Trick

```text
GET     → Read
POST    → Create
PUT     → Update / Replace
PATCH   → Partially Update
DELETE  → Delete
```

### Fetch

```javascript
fetch(url, options)
```

### Axios

```javascript
axios.method(url, data)
```

---

# 🚀 Final Takeaway

Fetch and Axios are both used to communicate with APIs.

**Fetch**

> Built into modern browsers, requires no additional package, but often requires more manual configuration.

**Axios**

> A third-party HTTP client that provides a convenient API and additional features for handling HTTP requests.

Understanding Fetch helps you understand the fundamentals of HTTP requests. Axios then provides a more convenient abstraction for many common application scenarios.

The main goal of this project is to understand **what happens when a React application communicates with an API**, rather than simply memorizing Fetch or Axios syntax.

```text
React
  ↓
Request
  ↓
API
  ↓
Response
  ↓
React
```

Happy Coding! 🚀