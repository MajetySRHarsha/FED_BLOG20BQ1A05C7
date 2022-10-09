import React from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Main = () => {
    return (

    <div>
  <div className="article">
  <div className="ll" >
    <h1>Introduction to Mongo DB</h1>
        <h2>What is MongoDB?</h2>
        MongoDB is a document database designed for ease of application development and scaling.
       <p> MongoDB is an open-source document database and leading NoSQL database. MongoDB is written in C++. This tutorial will give you great understanding on MongoDB concepts needed to create and deploy a highly scalable and performance-oriented database.
       </p>
       <h3>
        Key Differences between NoSQL and SQL
       </h3>
       <p>
        <ul>
          <li>
          SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database.
          </li>
          <li>
          Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases.

          </li>
          <li>
          SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
          </li>
          <li>SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data.</li>
          <li>Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.</li>
        </ul>
       </p>
       <p>In the RDBMS database, a table can have multiple rows and columns. Similarly in MongoDB, a collection can have multiple documents which are equivalent to the rows. Each document has multiple "fields" which are equivalent to the columns. Documents in a single collection can have different fields.</p>
       <p>The following is an example of JSON based document.</p>
       <img src="https://www.tutorialsteacher.com/Content/images/mongodb/document.png"/>
       
       <h2>Advantages of MongoDB</h2>
       <ol>
        <li>
        MongoDB stores data as JSON based document that does not enforce the schema. It allows us to store hierarchical data in a document. This makes it easy to store and retrieve data in an efficient manner.

        </li>
        <li>It is easy to scale up or down as per the requirement since it is a document based database. MongoDB also allows us to split data across multiple servers</li>
       <li>MongoDB provides rich features like indexing, aggregation, file store, etc</li>
       <li>MongoDB performs fast with huge data</li>
       <li>MongoDB provides drivers to store and fetch data from different applications developed in different technologies such as C#, Java, Python, Node.js, etc.</li>
       <li>MongoDB provides tools to manage MongoDB databases</li>
       </ol>
    </div>
    <div>
      <h2>Check how to install MongoDB on Windows</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/FwMwO8pXfq0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
    <Sidebar />
    </div>
    
    )
};

export default Main;
