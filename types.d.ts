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
  category?: string;
  datePublished: string;
};

type NewsData = {
  totalEstimatedMatches?: number;
  value: News[];
};
