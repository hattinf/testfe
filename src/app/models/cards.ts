export interface Cards {
  data: {
    cards: Card[];
  };
  backgroundColor: string;
}

export interface Card {
  color: string;
  description: string;
  descriptionColor: string;
  descriptionSize: string;
  image: string;
  title: string;
  titleColor: string;
  titleSize: string;
}
