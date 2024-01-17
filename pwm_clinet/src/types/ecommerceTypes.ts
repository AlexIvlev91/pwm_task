export interface EcommerceItem {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
    currency: string;
    inStock: boolean;
    image: string;
    review: number;
    discount: number;
}

export interface WatchListItem {
    itemId: number;
    addedDate: Date;
}
