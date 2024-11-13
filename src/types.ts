export interface NavDropProps {
  img?: string;
  lists?: [
    {
      heading?: string;
      list: string[];
    }
  ];
}

export interface Links {
  subHeading?: string;
  content?: string[];
}

export interface List {
  heading?: string;
  list?: string[];
}

export interface HeaderProps {
  title: string;
}

export interface SideBarProps {
  title?: string;
  links?: [
    {
      subHeading: string;
      content: string[];
    }
  ];
}

export interface PolicyOneProps {
  title: string;
  content: string;
}

export interface ProfileImgProps {
  ProfileImg: string;
  name: string;
  position: string;
  period: string;
}
