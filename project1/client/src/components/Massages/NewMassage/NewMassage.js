import styles from './NewMassage.module.css'

export default function NewMassage({click,massagesPageChange,text}) {

    console.log(text)

    return (
        <div className={styles.wap}>
            <textarea onChange={text} onKeyDown={(e)=>{click(e)}} value={massagesPageChange}  cols="30" rows="2" placeholder='Новое сообщение...'></textarea>
        </div>
    )
}
