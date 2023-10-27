export interface User {
  id: number;
  name: string;
  days_on_app: number;
  phone_number: string;
}

export interface Note {
  id: number;
  title: string;
  text: string;
  diary_id: number;
}

export interface NewNote {
  id: number;
  user_id: number;
  note_title: string;
  note_text: string;
}

export const EmptyNote: Note = {
  id: 2,
  title: "Me cai de la cama",
  text: "Casito, pero no.",
  diary_id: 1,
};

export const EmptyUser: User = {
  id: 1,
  name: "Manuel",
  days_on_app: 2,
  phone_number: "",
};
