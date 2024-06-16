export interface Schedule {
  id: number;
  data: {
    date: string;
    title: string;
    titleSize: string;
    titleStyle: string;
    titleWeight: string;
    titleColor: string;
    color: string;
    textColor: string;
    activities: Activity[];
  };
}

export interface Activity {
  description: string;
  from: string;
  location: string;
  title: string;
  to: string;
}
