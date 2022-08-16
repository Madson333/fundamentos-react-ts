import { useState } from 'react'
import { Post } from "./components/Post"
import "./Global.css"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from "./app.module.css"


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://scontent.faju3-1.fna.fbcdn.net/v/t39.30808-6/247410283_4754580111259319_6501752228303547310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHz-x7kmh8fBRRYCpoeZFIQMFK3a4svsrAwUrdriy-ysByy_Vt0_LExqNEkAi8faNFJ0wb2mHmjxu71t_xWLavh&_nc_ohc=uOhxMSlReVEAX8qjbYB&_nc_ht=scontent.faju3-1.fna&oh=00_AT_VBSQN4DtuNYH3VRM1n_SkYhwTO-koBkcmgbvhjTm4PQ&oe=62AE4A79",
      name: "Madson Santos",
      role: "Web Developer",
    },
    content: [
      { type: 'paragraph', content: "Fala galeraa 👋" },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date("2022-06-17 21:57:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://scontent.faju3-1.fna.fbcdn.net/v/t39.30808-6/247410283_4754580111259319_6501752228303547310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHz-x7kmh8fBRRYCpoeZFIQMFK3a4svsrAwUrdriy-ysByy_Vt0_LExqNEkAi8faNFJ0wb2mHmjxu71t_xWLavh&_nc_ohc=uOhxMSlReVEAX8qjbYB&_nc_ht=scontent.faju3-1.fna&oh=00_AT_VBSQN4DtuNYH3VRM1n_SkYhwTO-koBkcmgbvhjTm4PQ&oe=62AE4A79",
      name: "Madson Santos",
      role: "Web Developer",
    },
    content: [
      { type: 'paragraph', content: "Fala galeraa 👋" },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date("2022-06-18 22:00:00"),
  }
];





function App() {


  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
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
    </div>

  )
}

export default App
