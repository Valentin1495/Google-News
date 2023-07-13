type News = {
  name: string;
  url: string;
  image?: {
    thumbnail: {
      contentUrl: string;
      width: number;
      height: number;
    };
    isLicensed: boolean;
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
  datePublished: string;
};

type NewsData = {
  _type: string;
  webSearchUrl: string;
  value: News[];
};
