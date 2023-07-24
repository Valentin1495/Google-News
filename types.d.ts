type News = {
  name: string;
  url: string;
  description: string;
  provider: [
    {
      _type: string;
      name: string;
      image: {
        thumbnail: {
          contentUrl: string;
        };
      };
    }
  ];

  datePublished: string;
};

type NewsData = {
  totalEstimatedMatches?: number;
  value: News[];
};

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
