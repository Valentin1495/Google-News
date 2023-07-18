type News = {
  totalEstimatedMatches?: number;
  name: string;
  url: string;
  image?: {
    thumbnail: {
      contentUrl: string;
      width: number;
      height: number;
    };
    isLicensed?: boolean;
  };
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
