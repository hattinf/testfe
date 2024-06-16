export interface ImageBar {
  id: number;
  barColor: string;
  images: { images: Image[] };
}

export interface Image {
  image: string;
}
