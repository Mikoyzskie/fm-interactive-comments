

import { readFileSync } from 'node:fs'


export interface Comments {
  currentUser: User;
  comments: Comment[];
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies?: Comment[];
  replyingTo?: string;
}

export interface User {
  image: Image;
  username: string;
}

export interface Image {
  png: string;
  webp: string;
}


export default function Home() {
  const comments = readFileSync("./src/app/data.json", "utf-8");

  return (
    <div>
      <pre>
        {comments}
      </pre>
    </div>
  )
}
