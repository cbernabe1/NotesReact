import React, {useState} from 'react'
import styles from './CreateArea.module.css';
import AddIcon from '@mui/icons-material/Add';
export const CreateArea = (props) => {
  const [input,setInput] = useState({title: "" ,content: ""});

  function handleChange(event){
    const {name, value} = event.target;
    setInput(prevValue => ({...prevValue, [name]: value}));
  }

  function handleSubmit(event){
    props.add(input);
    setInput({title: "" , content:""});
    event.preventDefault();
  }

  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
      <input onChange={handleChange} type="text" name="title" className={styles.titleInput} value={input.title}/>
      <textarea onChange={handleChange} name="content" id="" cols="15" rows="10" className={styles.contentInput} value={input.content}></textarea>
      <button type='submit' onClick={handleSubmit} className={styles.submit}><AddIcon/></button>
      </form>
      </div>
  )
}
