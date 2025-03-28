export const siteConfig: {
    baseUrl: string;
    domain: string;
    author: string;
    author_surname: string;
    titlePrefix: string;
    profile_image: string;
    form_id: string;
    github_org_name: string;
    country: string;
    social: {
      kofi: string;
      sponsor: string;
      email: string;
      twitter: string;
      github: string;
      linkedin: string;
      blog: string;
      medium: string;
      dev: string;
      hashnode: string;
      discord: string;
      github_organisation: string;
    };
    other: {
      hacktoberfest: string;
      codsoft: string;
      github_snake: string;
    };
    chatbot: {
      rateLimit: number;
    };
    contact: {
      debug: boolean;
      rateLimit: number;
    };
    metadata: {
      description: string;
      keywords: string;
      type: string;
    };
  } = {
    baseUrl: 'https://janhavisolanki.com',
    domain: 'janhavisolanki.com',
    author: 'Janhavi Solanki',
    author_surname: 'Solanki',
    titlePrefix: 'Janhavi Solanki',
    github_org_name: 'Solanki Technologies',
    country: 'India',
    profile_image:
      'https://avatars.githubusercontent.com/u/75434191?s=400&u=0aa88e4ae941c44425b2be4595cf92b68f578f8a&v=4',
    form_id: 'https://formspree.io/f/myzynpbr',
    social: {
      kofi: '',
      sponsor: '',
      email: 'janhavimakwana305@gmail.com',
      twitter: '',
      github: 'janhavi.makwana',
      linkedin: '',
      blog: '',
      medium: '',
      dev: '',
      hashnode: '',
      discord: '',
      github_organisation: '',
    },
    metadata: {
      description: `Hi! I'm Janhavi Solanki, a Full Stack developer passionate about building apps, exploring AI and ML, and collaborating on exciting projects. Let's connect!`,
      keywords:
        'Janhavi Solanki, Full Stack Developer, Janhavi Solanki portfolio, Janhavi Solanki GitHub, Web Development, Mobile Applications, Machine Learning, Artificial Intelligence, Programming Languages, Open Source Developer, App Development',
      type: 'website'
    },
    chatbot: {
      rateLimit: 10
    },
    contact: {
      debug: true,
      rateLimit: 10
    },
    other: {
      hacktoberfest: 'https://hacktoberfest.com/',
      codsoft: 'https://www.codsoft.in/',
      github_snake:
        ''
    }
  };
