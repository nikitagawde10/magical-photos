// user.utils.ts - Updated with better mock data structure

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

// Enhanced mock data for testing
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
