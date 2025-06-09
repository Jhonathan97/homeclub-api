export interface ApartmentWithDetails {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  type: string;
  rateToday: number;
  distance: number;
  description: string | null;
  imageUrl: string | null;
}
