import styles from "./Comment.module.css";
import { Trash } from "phosphor-react";
import { ThumbsUp } from "phosphor-react"
import { Avatar } from "./Avatar";
import { useState } from "react";


interface CommentProps {
  content: string;
  deleteComment: (comment: string) => void;
}

export function Comment({ content, deleteComment }: CommentProps) {

  const [likeCount, setLikeCount] = useState(0);




  function handleDeleteComment() {
    deleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }



  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/Madson333.png" alt="" />

      <div className={styles.commentBox} >
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Madson Santos</strong>
              <time title="16 de maio as 12:25h" dateTime="2022-05-16 12:23:00">Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir  <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}