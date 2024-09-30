export type Tab = 'photo' | 'video';
export type Image = {
  width: number,
  height: number,
  url: string,
};

export type VideoItem = {
  width: number,
  height: number,
  url: string,
};

export interface Photo {
  id: number,
  image: Image | null,
}

export interface Video {
  id: number,
  video: Image,
  preview: Image,
}
