import React,{useState} from 'react';
import styles from './App.module.css';
import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import {CreateArea} from './components/Body/CreateArea';
import {Notes} from './components/Body/Notes';
function App() {
  const [notes,setNotes] = useState([{title: "Sample Title", content: "Sample Content"}]);

  function handleAdd(note){
    setNotes(preValue => ([...preValue, note]));
  }

  function handleDelete(id){
    setNotes(prevValue => {
      return prevValue.filter((note,index) =>{
        return index != id;
    })})
  }

  function handleEdit(note){
    let findId = notes.findIndex((noteItem,index) => index == note.id);
    notes[findId] = note;
    console.log(notes);
  }
  
  return (
    <div className={styles.container}>
    <Header />
    <CreateArea add={handleAdd}/>
    <div className={styles.noteArea}>
    {notes.map((note, index) => {
      return (
      <Notes 
      key={index} 
      id={index} 
      title={note.title} 
      content={note.content} 
      delete={handleDelete} 
      edit={handleEdit}/>
      );
    })}
    </div>
    <Footer />
    </div>
  )
}

export default App
