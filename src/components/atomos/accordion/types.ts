export interface IItem {
  id: number;
  label: string;
  price: string;
  change: string;
  toggled: boolean;
}

export interface IAccordionProps {
  items: IItem[];
  keepOthersOpen: boolean;
}
