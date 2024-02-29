// import logo from "./logo.svg";
// import "./App.css";
// import { useState } from "react";
// import { useEffect } from "react";
// //Implementation for WEB_SQL:

// //create a open a databse:
// var db = openDatabase("mydb2", "1.0", "MY FIRST WEB_ SQL", 2 * 1024 * 1024);
// //executing query in transaction method :
// var create = function () {
//   db.transaction(function (tx) {
//     tx.executeSql(
//       "CREATE TABLE IF NOT EXISTS MYTABLE ((id integer primary key, firstName , lastName )"
//     );
//   });
// };
// console.log("@@create", db);
// //Inserting record in user_table:
// var insert = function(firstName, lastName) {
//   db.transaction(function (tx) {
//     tx.executeSql("INSERT INTO MYTABLE (firstname, lastname) VALUES (?,?)", [firstName, lastName]);
//   });
//   console.log("insert",db);
// }

// var select = function () {
//   db.transaction(function (tx) {
//     tx.executeSql(
//       "SELECT firstName, lastName FROM  MYTABLE",
//       [],
//       function (tx, results) {
//         // console.log(tx,results)
//         if (results.rows.length > 0) {
//           for (var i = 0; i < results.rows.length; i++) {
//             console.log(
//               "Result -> " +
//                 results.rows.item(i).firstName +
//                 " " +
//                 results.rows.item(i).lastName
//             );
//           }
//         }
//       }
//     );
//   });
//   console.log("select", db);
// };

// var empty = function () {
//   db.transaction(function (tx) {
//     tx.executeSql("DROP TABLE  MYTABLE");
//   });
//   console.log("empty", db);
// };

// function App() {
//   // const [id, setId] = useState();
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   useEffect(() => {
//     create();
//   }, []);
//   return (
//     <div className="App">
//       {/* <input
//         type="number"
//         placeholder="enter your emp.id"
//         onChange={(e) => setId(e.target.value)}
//       /> */}
//       <input
//         type="text"
//         id="firstName"
//         placeholder="enter your firstname"
//         value={firstName}
//         onChange={(e) => setFirstName(e.target.value)}
//       />
//       <input
//         type="text"
//         id ="lastName"
//         placeholder="enter your lastname"
//         value={lastName}
//         onChange={(e) => setLastName(e.target.value)}
//       />
//       <button onClick={() => empty()}>Delete webSql</button>
//       <button onClick={() => insert(firstName, lastName)}>Set webSql</button>
//       <button onClick={() => select()}>Show</button>
//     </div>
//   );
// }

// export default App;





import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';

var db = openDatabase("mydb", '1.0', "My WebSQL Database", 2 * 1024 * 1024);
console.log("database", db);

var create = function() {
    db.transaction(function (tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS user_table (id integer primary key, name text, email text)");
      });
      console.log("create",db);
}
var insert = function(name, email) {
  db.transaction(function (tx) {
    tx.executeSql("INSERT INTO user_table(name, email) VALUES (?,?)", [name, email]);
  });
  console.log("insert",db);
}

var select = function() {
  db.transaction(function (tx) {
    tx.executeSql("SELECT name, email FROM user_table", [], function(tx, results) {
      // console.log(tx,results)
      if(results.rows.length > 0) {
        for(var i = 0; i < results.rows.length; i++) {
          console.log("Result -> " + results.rows.item(i).name + " " + results.rows.item(i).email);
        }
      }
    });
  });
  console.log("select",db);
}

var empty = function() {
  db.transaction(function (tx) {
    tx.executeSql('DROP TABLE user_table');
  });
    console.log("empty",db);
}

  function App() {
    const [name, setName] = useState('');
    const [email, setemail] = useState('');
    useEffect(()=>{
      create();
    },[]);

  return (
    <div className="App">
     <h3>webSql</h3>

      <input
         placeholder="Name"
         id="tdName"
         value={name}
         onChange={(e) => setName(e.target.value)}
      />
  
      <input
         type="email"
         placeholder="email"
         id="tdEmail"
         value={email}
         onChange={(e) => setemail(e.target.value)}
      />
      <div>
      <button onClick={()=>empty()}>Delete webSql</button>
      <button onClick={()=>insert(name,email)}>Set webSql</button>
      <button onClick={()=>select()}>show</button>
      </div>
    </div>
  );
}

export default App;
