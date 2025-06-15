export interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber: number;
  password: string;
  masterPhotosList: PhotosList[];
}

export interface PhotosList {
  id: string;
  date: string;
  photosList: Photo[];
}

export interface Photo {
  id: string;
  url: string;
  label: string;
  location: string;
}

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: 1234567890,
    password: 'password123',
    masterPhotosList: [
      {
        id: 'collection-1',
        date: '2024-12-15',
        photosList: [
          {
            id: 'photo-1',
            url: 'https://picsum.photos/300/300?random=1',
            label: 'Beach Sunset',
            location: 'Miami Beach',
          },
          {
            id: 'photo-2',
            url: 'https://picsum.photos/300/300?random=2',
            label: 'Ocean Waves',
            location: 'Miami Beach',
          },
          {
            id: 'photo-3',
            url: 'https://picsum.photos/300/300?random=3',
            label: 'Seashells',
            location: 'Miami Beach',
          },
        ],
      },
      {
        id: 'collection-2',
        date: '2024-12-10',
        photosList: [
          {
            id: 'photo-4',
            url: 'https://picsum.photos/300/300?random=4',
            label: 'Mountain Peak',
            location: 'Rocky Mountains',
          },
          {
            id: 'photo-5',
            url: 'https://picsum.photos/300/300?random=5',
            label: 'Forest Trail',
            location: 'Rocky Mountains',
          },
          {
            id: 'photo-6',
            url: 'https://picsum.photos/300/300?random=6',
            label: 'Wildlife',
            location: 'Rocky Mountains',
          },
          {
            id: 'photo-7',
            url: 'https://picsum.photos/300/300?random=7',
            label: 'Campfire',
            location: 'Rocky Mountains',
          },
        ],
      },
      {
        id: 'collection-3',
        date: '2024-12-05',
        photosList: [
          {
            id: 'photo-8',
            url: 'https://picsum.photos/300/300?random=8',
            label: 'City Skyline',
            location: 'New York',
          },
          {
            id: 'photo-9',
            url: 'https://picsum.photos/300/300?random=9',
            label: 'Street Art',
            location: 'New York',
          },
        ],
      },
      {
        id: 'collection-4',
        date: '2025-01-05',
        photosList: [
          {
            id: 'photo-24',
            url: 'https://picsum.photos/300/300?random=24',
            label: 'Waterfall',
            location: 'Iceland',
          },
          {
            id: 'photo-25',
            url: 'https://picsum.photos/300/300?random=25',
            label: 'Ice Cave',
            location: 'Iceland',
          },
        ],
      },
      {
        id: 'collection-5',
        date: '2025-01-10',
        photosList: [
          {
            id: 'photo-26',
            url: 'https://picsum.photos/300/300?random=26',
            label: 'Safari Jeep',
            location: 'Kenya',
          },
          {
            id: 'photo-27',
            url: 'https://picsum.photos/300/300?random=27',
            label: 'Elephants',
            location: 'Kenya',
          },
        ],
      },
      {
        id: 'collection-6',
        date: '2025-01-15',
        photosList: [
          {
            id: 'photo-30',
            url: 'https://picsum.photos/300/300?random=30',
            label: 'Photo 30',
            location: 'Kyoto',
          },
          {
            id: 'photo-31',
            url: 'https://picsum.photos/300/300?random=31',
            label: 'Photo 31',
            location: 'Kyoto',
          },
          {
            id: 'photo-32',
            url: 'https://picsum.photos/300/300?random=32',
            label: 'Photo 32',
            location: 'Kyoto',
          },
          {
            id: 'photo-33',
            url: 'https://picsum.photos/300/300?random=33',
            label: 'Photo 33',
            location: 'Kyoto',
          },
          {
            id: 'photo-34',
            url: 'https://picsum.photos/300/300?random=34',
            label: 'Photo 34',
            location: 'Kyoto',
          },
          {
            id: 'photo-35',
            url: 'https://picsum.photos/300/300?random=35',
            label: 'Photo 35',
            location: 'Kyoto',
          },
          {
            id: 'photo-36',
            url: 'https://picsum.photos/300/300?random=36',
            label: 'Photo 36',
            location: 'Kyoto',
          },
          {
            id: 'photo-37',
            url: 'https://picsum.photos/300/300?random=37',
            label: 'Photo 37',
            location: 'Kyoto',
          },
          {
            id: 'photo-38',
            url: 'https://picsum.photos/300/300?random=38',
            label: 'Photo 38',
            location: 'Kyoto',
          },
          {
            id: 'photo-39',
            url: 'https://picsum.photos/300/300?random=39',
            label: 'Photo 39',
            location: 'Kyoto',
          },
          {
            id: 'photo-40',
            url: 'https://picsum.photos/300/300?random=40',
            label: 'Photo 40',
            location: 'Kyoto',
          },
          {
            id: 'photo-41',
            url: 'https://picsum.photos/300/300?random=41',
            label: 'Photo 41',
            location: 'Kyoto',
          },
          {
            id: 'photo-42',
            url: 'https://picsum.photos/300/300?random=42',
            label: 'Photo 42',
            location: 'Kyoto',
          },
          {
            id: 'photo-43',
            url: 'https://picsum.photos/300/300?random=43',
            label: 'Photo 43',
            location: 'Kyoto',
          },
          {
            id: 'photo-44',
            url: 'https://picsum.photos/300/300?random=44',
            label: 'Photo 44',
            location: 'Kyoto',
          },
          {
            id: 'photo-45',
            url: 'https://picsum.photos/300/300?random=45',
            label: 'Photo 45',
            location: 'Kyoto',
          },
          {
            id: 'photo-46',
            url: 'https://picsum.photos/300/300?random=46',
            label: 'Photo 46',
            location: 'Kyoto',
          },
          {
            id: 'photo-47',
            url: 'https://picsum.photos/300/300?random=47',
            label: 'Photo 47',
            location: 'Kyoto',
          },
          {
            id: 'photo-48',
            url: 'https://picsum.photos/300/300?random=48',
            label: 'Photo 48',
            location: 'Kyoto',
          },
          {
            id: 'photo-49',
            url: 'https://picsum.photos/300/300?random=49',
            label: 'Photo 49',
            location: 'Kyoto',
          },
          {
            id: 'photo-50',
            url: 'https://picsum.photos/300/300?random=50',
            label: 'Photo 50',
            location: 'Kyoto',
          },
          {
            id: 'photo-51',
            url: 'https://picsum.photos/300/300?random=51',
            label: 'Photo 51',
            location: 'Kyoto',
          },
          {
            id: 'photo-52',
            url: 'https://picsum.photos/300/300?random=52',
            label: 'Photo 52',
            location: 'Kyoto',
          },
          {
            id: 'photo-53',
            url: 'https://picsum.photos/300/300?random=53',
            label: 'Photo 53',
            location: 'Kyoto',
          },
          {
            id: 'photo-54',
            url: 'https://picsum.photos/300/300?random=54',
            label: 'Photo 54',
            location: 'Kyoto',
          },
          {
            id: 'photo-55',
            url: 'https://picsum.photos/300/300?random=55',
            label: 'Photo 55',
            location: 'Kyoto',
          },
          {
            id: 'photo-56',
            url: 'https://picsum.photos/300/300?random=56',
            label: 'Photo 56',
            location: 'Kyoto',
          },
          {
            id: 'photo-57',
            url: 'https://picsum.photos/300/300?random=57',
            label: 'Photo 57',
            location: 'Kyoto',
          },
          {
            id: 'photo-58',
            url: 'https://picsum.photos/300/300?random=58',
            label: 'Photo 58',
            location: 'Kyoto',
          },
          {
            id: 'photo-59',
            url: 'https://picsum.photos/300/300?random=59',
            label: 'Photo 59',
            location: 'Kyoto',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phoneNumber: 9876543210,
    password: 'mypassword',
    masterPhotosList: [
      {
        id: 'collection-4',
        date: '2024-12-20',
        photosList: [
          {
            id: 'photo-10',
            url: 'https://picsum.photos/300/300?random=10',
            label: 'Garden Flowers',
            location: 'Home Garden',
          },
          {
            id: 'photo-11',
            url: 'https://picsum.photos/300/300?random=11',
            label: 'Butterfly',
            location: 'Home Garden',
          },
          {
            id: 'photo-12',
            url: 'https://picsum.photos/300/300?random=12',
            label: 'Rose Bush',
            location: 'Home Garden',
          },
          {
            id: 'photo-13',
            url: 'https://picsum.photos/300/300?random=13',
            label: 'Garden Path',
            location: 'Home Garden',
          },
          {
            id: 'photo-14',
            url: 'https://picsum.photos/300/300?random=14',
            label: 'Bird Feeder',
            location: 'Home Garden',
          },
        ],
      },
      {
        id: 'collection-5',
        date: '2024-12-18',
        photosList: [
          {
            id: 'photo-15',
            url: 'https://picsum.photos/300/300?random=15',
            label: 'Coffee Shop',
            location: 'Downtown',
          },
          {
            id: 'photo-16',
            url: 'https://picsum.photos/300/300?random=16',
            label: 'Latte Art',
            location: 'Downtown',
          },
        ],
      },
    ],
  },
  {
    id: '3',
    name: 'Demo User',
    email: 'demo@example.com',
    phoneNumber: 1111111111,
    password: 'demo',
    masterPhotosList: [
      {
        id: 'collection-6',
        date: '2024-12-25',
        photosList: [
          {
            id: 'photo-17',
            url: 'https://picsum.photos/300/300?random=17',
            label: 'Holiday Lights',
            location: 'Christmas Market',
          },
          {
            id: 'photo-18',
            url: 'https://picsum.photos/300/300?random=18',
            label: 'Christmas Tree',
            location: 'Christmas Market',
          },
          {
            id: 'photo-19',
            url: 'https://picsum.photos/300/300?random=19',
            label: 'Gift Boxes',
            location: 'Christmas Market',
          },
          {
            id: 'photo-20',
            url: 'https://picsum.photos/300/300?random=20',
            label: 'Snow Scene',
            location: 'Christmas Market',
          },
          {
            id: 'photo-21',
            url: 'https://picsum.photos/300/300?random=21',
            label: 'Hot Cocoa',
            location: 'Christmas Market',
          },
          {
            id: 'photo-22',
            url: 'https://picsum.photos/300/300?random=22',
            label: 'Ice Skating',
            location: 'Christmas Market',
          },
          {
            id: 'photo-23',
            url: 'https://picsum.photos/300/300?random=23',
            label: 'Carolers',
            location: 'Christmas Market',
          },
        ],
      },
    ],
  },
];
