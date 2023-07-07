import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author : {
      name: 'Lennon',
      avatarUrl: 'https://github.com/Lennon-Araujo.png',
      role: 'QA Analyst'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraaa'},
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, accusantium! Nobis animi vel soluta rem iusto maxime placeat, velit reiciendis, ex ullam'},
      { type: 'link', content: 'jane.design/doctorcare'},
      { type: 'hashtag', content: '#nlw'},
      { type: 'hashtag', content: '#novoprojeto'},
      { type: 'hashtag', content: '#rocketseat'},
    ],
    publishedAt: new Date('2023-06-29 19:32:00')
  },
  {
    id: 2,
    author : {
      name: 'Vitória Nunes',
      avatarUrl: 'https://pps.whatsapp.net/v/t61.24694-24/319791213_2008301972840159_2133965671036215136_n.jpg?ccb=11-4&oh=01_AdQlEq8tz7gdtXmn3QR7DQOb9oeRUF0EiHE9ycDIWmvxZA&oe=64A9C84E',
      role: 'Téc. Veterinária'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraaa'},
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, accusantium! Nobis animi vel soluta rem iusto maxime placeat, velit reiciendis, ex ullam'},
      { type: 'link', content: 'jane.design/doctorcare'},
      { type: 'hashtag', content: '#nlw'},
      { type: 'hashtag', content: '#novoprojeto'},
      { type: 'hashtag', content: '#rocketseat'},
    ],
    publishedAt: new Date('2023-06-22 15:30:00')
  },
  {
    id: 3,
    author : {
      name: 'Diego Fernandes',
      avatarUrl: 'https://github.com/diego3g.png',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraaa'},
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, accusantium! Nobis animi vel soluta rem iusto maxime placeat, velit reiciendis, ex ullam'},
      { type: 'link', content: 'jane.design/doctorcare'},
      { type: 'hashtag', content: '#nlw'},
      { type: 'hashtag', content: '#novoprojeto'},
      { type: 'hashtag', content: '#rocketseat'},
    ],
    publishedAt: new Date('2023-06-24 12:00:00')
  }
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
