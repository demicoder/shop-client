// Product Interface
export interface IProduct {
  name: string;
  price: number;
  coverImage: string;
  description?: string;
}

// Action Interface
export interface IAction {
  payload: any;
  type: string;
}

// Product Store Interface
export interface IState {
  productsHome: IProduct[];
  productsShop: IProduct[];
}
