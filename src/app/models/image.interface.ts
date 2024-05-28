export interface Image{
    id: string;
    alt_description: string;
    width: number;
    height: number;
    urls: urls;
    likes: number;
    user: user;
    description: string;
    created_at: string;
    slug: string
}

export interface urls{
    small: string;
    regular: string;
}
export interface user{
    name: string;
}