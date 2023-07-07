import { ChangeEvent, FormEvent, useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

interface AuthorProps {
  name: string;
  role: string;
  avatarUrl: string
}

interface PostContentProps {
  type: string;
  content: string
}

interface PostProps {
  author: AuthorProps;
  content: PostContentProps[];
  publishedAt: Date;
}

export function Post({author, content, publishedAt}: PostProps) {
  const [comments, setComments] = useState<string[]>([])
  const [newCommentText, setNewCommentText] = useState<string>('')

  const publishedAtFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedAtRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(e:FormEvent) {
    e.preventDefault();

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(e:ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(e.target.value)
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(commentsWithoutDeleteOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>{publishedAtRelativeNow}</time>
      </header>

      <div className={styles.content}>
        {content.map((cont) => {
          if(cont.type === 'paragraph') {
            return <p key={cont.content}>{cont.content}</p>
          }

          if(cont.type === 'link') {
            return <a key={cont.content}><p>{cont.content}</p></a>
          }

          if(cont.type === 'hashtag') {
            return <a key={cont.content}>{cont.content + ' '}</a>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          onChange={handleNewCommentChange}
          placeholder='Deixe um comentário'
          value={newCommentText}
          required
        />
        <footer>
          <button
            type='submit'
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
        })}
      </div>
        
    </article>
  )
}
