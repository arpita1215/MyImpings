import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    //alert("I am clicked");
    setAddItem((prevData) => [...prevData, note]);
    console.log(note);
    const oldItem = [...addItem];
    oldItem.push(note);
    localStorage.setItem("notes", JSON.stringify(oldItem));
  };

  const onDelete = (id) => {
    setAddItem((olddata) => {
      const resultingArr = olddata.filter((currdata, indx) => {
        return indx !== id;
      });
        localStorage.setItem("notes", JSON.stringify(resultingArr));
      return resultingArr;
    });
    // localStorage.setItem("notes", JSON.stringify(resultingArr));ertyuiop[]
  };


  useEffect(() => {
    const Notes = localStorage.getItem("notes");
    console.log(Notes);
    if(Notes)
    setAddItem(JSON.parse(Notes));

  }, []);

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />

      {addItem  && addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default App;
