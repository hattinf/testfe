export interface Showcase {
  id: number;
  backgroundColor: string;
  borderColor: string;
  color: string;
  data: {
    participants: Participant[];
  };
  textColor: string;
}

export interface Participant {
  description: string;
  image: string;
  link: string;
  name: string;
}
