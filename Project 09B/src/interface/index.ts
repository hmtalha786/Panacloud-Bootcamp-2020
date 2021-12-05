export interface User {
  id?: string;
  email: string;
  username: string;
  password: string;
  diaryIds: string[] | null;
}

export interface Entry {
  id?: string;
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
  diaryId: string;
}

export interface Diary {
  id?: string;
  title: string;
  type: "private" | "public";
  createdAt?: string;
  updatedAt?: string;
  userId: string;
  entryIds: string[] | null;
}
