
export interface MuralNote {
  id: string;
  content: string;
  author: string;
  color: string;
  timestamp: number;
}

export interface ReleaseItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  type: 'video' | 'audio' | 'art';
  link: string;
}
