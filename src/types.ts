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

export interface HeaderProps {
  title: string;
}

export interface SideBarProps {
  title: string;
  // heading?: string;
  // links?: [
  //   {
  //     subHeading?: string;
  //     content?: string[];
  //   }
  // ];
}
