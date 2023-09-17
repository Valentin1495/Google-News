interface Image {
  url: string;
  blurredDataUrl: string;
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

interface NewsByQuery {
  _id: string;
  web_url: string;
  multimedia: Image[];
  headline: {
    main: string;
  };
  pub_date: string;
  byline: {
    original: string;
  };
}

type SearchParams = {
  query: string;
};

type UserInfo = {
  name: string;
  email: string;
  image: string;
};

type User = {
  user: UserInfo;
} | null;
