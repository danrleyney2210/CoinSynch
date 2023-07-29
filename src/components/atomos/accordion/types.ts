import { IcoinProps } from "../../../context/types";

export interface IItem {
  id: number;
  label: string;
  price: string;
  change: string;
  toggled: boolean;
}

export interface IAccordionProps {
  items: IcoinProps[];
  keepOthersOpen: boolean;
}
