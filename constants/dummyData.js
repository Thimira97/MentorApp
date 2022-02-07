import images from './images';
import icons from './icons';

const mentorList = [
  {
    id: 1,
    name: 'John Hardin',
    image: images.User1,
    company: 'Google',
    flag: icons.Canada,
    designation: 'Software Engineer',
    areas: [
      {
        id: 1,
        name: 'Software engineering',
      },
      {
        id: 2,
        name: 'UX',
      },
      {
        id: 3,
        name: 'Research methodology',
      },
      {
        id: 4,
        name: 'User studies',
      },
    ],
    description:
      'I am Software Engineer at Google and has extensive experience in Human Computer Interaction (HCI), UX, research methodology and data structures and algorithms.',
    category: [1, 4],
  },
  {
    id: 2,
    name: 'Prof. Peter Brookes',
    image: images.User2,
    flag: icons.Germany,
    company: 'Camebridge University',
    designation: 'Professor',
    areas: [
      {
        id: 1,
        name: 'Software engineering',
      },
      {
        id: 2,
        name: 'HCI',
      },
      {
        id: 3,
        name: 'Cyber security',
      },
      {
        id: 4,
        name: 'HCI',
      },
    ],
    description:
      'I am a Professor of Software Engineering at the Open University whose research addresses the practical problems associated with building and maintaining. ',
    category: [1, 4],
  },
  {
    id: 3,
    name: 'Henri Cevil',
    image: images.User3,
    flag: icons.Italiy,
    company: 'Bostern University',
    designation: 'Research Assistant',
    areas: [
      {
        id: 1,
        name: 'Deep Learning',
      },
      {
        id: 2,
        name: 'UI/UX',
      },
      {
        id: 3,
        name: 'HCI',
      },
      {
        id: 4,
        name: 'Software Engineering',
      },
    ],
    description:
      'I am a Ph.D. candidate in Technology at Purdue University. I received the MSc. degree in Electrical Engineering from The University of Akron, in 2016. ',
    category: [1, 4],
  },
  {
    id: 4,
    name: 'John Machathi',
    image: images.User5,
    flag: icons.Japan,
    company: 'Western University',
    designation: 'Ph.D. Candidate',
    areas: [
      {
        id: 1,
        name: 'Research Projects',
      },
      {
        id: 2,
        name: 'AI',
      },
      {
        id: 3,
        name: 'ML',
      },
      {
        id: 4,
        name: 'Academic Writing',
      },
    ],
    description:
      'I am a Ph.D. candidate at the University of Western Ontario, studying interpretability of neural network models and human-in-the-loop machine learning. ',
    category: [1, 4],
  },
  {
    id: 5,
    name: 'Dr. Liza Miller',
    image: images.User10,
    flag: icons.NewZeland,
    company: 'Oracle',
    designation: 'Hardware Engineer',
    areas: [
      {
        id: 1,
        name: 'Hardware engineering',
      },
      {
        id: 2,
        name: 'AI',
      },
    ],
    description:
      'I am the Principal Hardware Engineer at Oracle based in Santa Clara, California and is a University of Toronto alum. Her expertise lies in hardware engineering and she can provide guidance and mentorship on pursuing graduate studies.',
    category: [1, 4],
  },
  {
    id: 6,
    name: 'Harry Gazia',
    image: images.User6,
    flag: icons.Russia,
    company: 'Oracle',
    designation: 'Software Engineer',
    areas: [
      {
        id: 1,
        name: 'Software Engineer',
      },
      {
        id: 2,
        name: 'UI/UX',
      },
      {
        id: 3,
        name: 'Data Science',
      },
      {
        id: 4,
        name: 'Machine Lerning',
      },
    ],
    description:
      'I am a software engineer having nearly ten years of experience. I completed my bachelors degree in computer science and engineering from the University of Moratuwa and a masters degree in computer science from the National University of Singapore. ',
    category: [1, 4],
  },
  {
    id: 7,
    name: 'John Watson',
    image: images.User4,
    flag: icons.Spain,
    company: 'Boston University',
    designation: 'PhD Candidate',
    areas: [
      {
        id: 1,
        name: 'Life Science',
      },
      {
        id: 2,
        name: 'Acedemic Writing',
      },
      {
        id: 3,
        name: 'Resech Methadology',
      },
    ],
    description:
      'Currently a PhD candidate in biomedical engineering at Boston University. I am interested in biomedical engineering research. My research experiences include bio-signal processing and machine learning.',
    category: [3],
  },
  {
    id: 8,
    name: 'Victor Holmes',
    image: images.User8,
    flag: icons.UK,
    company: 'Mount-Elisabeth Hospital',
    designation: 'Consultant Surgeon',
    areas: [
      {
        id: 1,
        name: 'Medicine',
      },
      {
        id: 2,
        name: 'Molecular',
      },
      {
        id: 3,
        name: 'Clinical research',
      },
      {
        id: 4,
        name: 'Higher education',
      },
    ],
    description:
      'Consultant General and Colorectal Surgeon and Senior Lecturer in Surgery at the University Surgical Unit, North Colombo Teaching Hospital, Sri Lanka. My research interests are colorectal cancer, IBD and FAP. Currently reading for PhD.',
    category: [2],
  },
  {
    id: 9,
    name: 'Marry Sandiya',
    image: images.User7,
    flag: icons.USA,
    company: 'Commonwealth Bank',
    designation: 'Systems Engineer',
    areas: [
      {
        id: 1,
        name: 'Cloud Computing',
      },
      {
        id: 2,
        name: 'Software development',
      },
      {
        id: 3,
        name: 'System engineering',
      },
    ],
    description:
      'I am a cloud governance enthusiast. I work in FinTech transforming governance policies into technical controls.',
    category: [],
  },
  {
    id: 10,
    name: 'Pilar Salasar',
    image: images.User9,
    flag: icons.SL,
    company: 'Victoria Hospital',
    designation: 'ETI Serjon',
    areas: [
      {
        id: 1,
        name: 'Reserch Studies',
      },
      {
        id: 2,
        name: 'Acdemic Writing',
      },
      {
        id: 3,
        name: 'Medicine',
      },
    ],
    description:
      'Consultant General and Colorectal Surgeon and Senior Lecturer in Surgery at the University Surgical Unit, North Colombo Teaching Hospital, Sri Lanka. My research interests are colorectal cancer, IBD and FAP. Currently reading for PhD.',
    category: [2],
  },
];

const categories = [
  {
    id: 1,
    name: 'Software Enginnering',
  },
  {
    id: 2,
    name: 'Medical',
  },
  {
    id: 3,
    name: 'Life Science',
  },
  {
    id: 4,
    name: 'Tech',
  },
];

export default {
  mentorList,
  categories,
};
