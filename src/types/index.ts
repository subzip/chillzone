export interface ButtonProps {
  title: string;
  styles?: string;
}

export interface LineProps {
  styles?: string;
}

export interface CardProps {
  title: string;
  img: string;
  arr: Array<object>;
}

export interface DisposableProps {
  _id: string;
  title: string;
  isAvaliable: boolean;
  typeNikotine: {
    percent: number;
    type: string;
  };
  isCharge: boolean;
  numberOfRods: number;
  tastes: Array<string>;
  price: Array<object>;
  imageUrl: string;
}

export interface LiquidProps {
  _id: string;
  title: string;
  isAvaliable: boolean;
  typeNikotine: {
    amount: string;
    type: string;
  };
  volumeOfJars: number;
  tastes: Array<string>;
  price: Array<object>;
  imageUrl: string;
}

export interface PodProps {
  _id: string;
  title: string;
  isAvaliable: boolean;
  colors: Array<string>;
  price: Array<object>;
  imageUrl: string;
}

export interface ConsumblesProps {
  _id: string;
  title: string;
  isAvaliable: boolean;
  resistant: number;
  price: Array<object>;
  imageUrl: string;
}

export interface NikoProps {
  _id: string;
  title: string;
  isAvaliable: boolean;
  consentration: {
    ml: number;
    mg: number;
  };
  price: Array<object>;
  imageUrl: string;
}

export interface SnusProps {
  _id: string;
  title: string;
  isAvaliable: boolean;
  amount: number;
  price: Array<object>;
  imageUrl: string;
}
