import { Trash, ThumbsUp } from '@phosphor-icons/react'

import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/Lennon-Araujo.png" isComment />

      <div className={styles.commentBox}>

        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
            <strong>Vitória Nunes (você)</strong>
            <time
              title='28 de Junho às 17:35'
              dateTime='2023-06-28 19:36:00'
            >
              Cerca de 2h atrás
            </time>
            </div>

            <button 
              onClick={handleDeleteComment}
              title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p className={styles.commentText}>
            {content}
          </p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span> 
          </button>
        </footer>
      </div>
    </div>
  )
}
