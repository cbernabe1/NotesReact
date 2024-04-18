import React,{useState} from 'react'
import styles from './Notes.module.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
export const Notes = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [input,setInput] = useState({title: props.title ,content: props.content});

  
  function handleChange(event){
    const {name, value} = event.target;
    setInput(prevValue => ({...prevValue, [name]: value}));
  }

  function handleEdit(){
    setIsEdit(!isEdit);
    const newValue = {id: props.id, title:input.title, content: input.content};
    if(isEdit){
      props.edit(newValue);
    }
  }

  return (
      <div className={styles.card}>
      <input className={styles.title} onChange={handleChange} type="text" name="title" value={input.title} disabled={!isEdit && "disabled"}/>
      <textarea className={styles.content} onChange={handleChange} name="content" value={input.content} disabled={!isEdit && "disabled"}/>
      <div className={styles.btn}>
      <button className={styles.deletebtn} onClick={()=>{props.delete(props.id)}}><DeleteIcon/></button>
      <button className={styles.editbtn} onClick={handleEdit}>{isEdit ? <CheckIcon/> : <EditIcon/>}</button>
      </div>
      </div>
  )
}
