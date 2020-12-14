export interface Partner {
  name: string;
  id: string;
  photoUrl: string;
  description: string;
  profession: string;
  location: string;
  rating: number;
  reviews: number;
  rate: string;
  time: string;
}

export const mockPartner: Partner = {
  name: 'test name',
  id: 'fakeId',
  photoUrl: 'photoUrl',
  description: 'testDesc',
  profession: 'testProf',
  location: 'testLocation',
  rating: 5,
  reviews: 50,
  rate: '60',
  time: '50',
};
