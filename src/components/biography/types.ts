export type ChapterMetric = {
  label: string;
  value: number;
  suffix?: string;
};

export type ChapterData = {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  period?: string;
  paragraphs: string[];
  quote: string;
  callouts?: string[];
  metrics?: ChapterMetric[];
};
