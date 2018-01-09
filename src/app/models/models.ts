export interface Photo {
    src?: string;
}

export interface AppState {
    photosReducer: {
        photos: Photo[];
    };
}
