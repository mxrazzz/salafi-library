export interface Book {
  id: string;
  title: string;
  author: string;
  publishedDate: string;
  description: string;
  coverImageUrl: string;
  categories: string[]; // e.g., ['aqeedah', 'fiqh']
  language: string;
  dateAdded: string; // ISO date string format
  resources: BookResources;
}

export interface BookResources {
  matn?: {
    title?: string;
    pdfUrl?: string;
  };
  sharh?: {
    title?: string;
    pdfUrl?: string;
  };
  explanations?: BookExplanation[];
  youtube?: {
    playlistId?: string;
    playlistUrl?: string;
  };
  videos?: VideoPlaylist[];
}

export interface BookExplanation {
  id: string;
  title: string;
  author?: string;
  pdfUrl?: string;
}

export interface VideoPlaylist {
  id: string;
  title: string;
  url: string;
  thumbnailUrl?: string;
}
