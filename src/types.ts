export interface NavDropProps {
  img?: string;
  lists?: [
    {
      heading?: string;
      list?: string[];
    }
  ];
}

export interface List {
  heading?: string;
  list?: string[];
}
