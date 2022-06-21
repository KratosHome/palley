export type productTypes = {
    id: string;
    name: string;
    prise: number | null,
    grade: number,
    newPrise: number,
    img: string,
    cart_img: string[];
    description: string;
    soldInTwelveHours: number;
    remainder: number;
    prod: any[];
}