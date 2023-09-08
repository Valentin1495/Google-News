interface Image {
  url: string;
  height: number;
  width: number;
  caption: string;
}

interface News {
  section: string;
  title: string;
  url: string;
  byline: string;
  published_date: string;
  multimedia: Image[];
}

interface NewsData {
  section: string;
  num_results: number;
  results: News[];
}

type SearchParams = {
  q: string;
};

type PageParams = {
  page: number;
};

type UserInfo = {
  name: string;
  email: string;
  image: string;
};

type User = {
  user: UserInfo;
} | null;
