export interface Faqs {
  id: number;
  data: {
    faqs: Faq[];
  };
  color: string;
  textColor: string;
  backgroundColor: string;
  borderColor: string;
}

export interface Faq {
  question: string;
  answer: string;
}
