
interface ingredientType {
    _id : string,
    name: string,

    type : "bun" | "sauce" | "main",
    image : string,
    image_large: string,
    image_mobile : string

    price: number,
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    __v : number,
};
export default ingredientType;
