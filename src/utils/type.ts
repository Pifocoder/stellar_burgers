type IngredientType = {
  name: string;

  image: string;
  image_large: string;
  image_mobile: string;

  price: number;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  type: "bun" | "sauce" | "main";
  __v: number;
  _id: string;
};
export default IngredientType;

export type OrderType = {
  ingredients: Array<string>;
  _id: string;
  status: "created" | "pending" | "done";
  number: 1;
  createdAt: Date;
  updatedAt: Date;
};