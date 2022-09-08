export interface IGroupsData {
  title: string
  parties: [string]
}

export interface IMenuIcon {
  id: string;
  title: string;
  icon: string;
  color: string;
}

export interface IPersons {
  id: number,
  name: string,
  image: string,
  colorNow: string,
  game: string,
  status: string,
  isBot: boolean
}

export interface IMembersData {
  title: string
  persons: [IPersons]
}

export interface IServerIcon {
  id: number,
  tooltip: string,
  image: string,
  message: boolean,
}

export interface IMessages {
  id: number,
  name: string,
  image: string,
  text: string,
  color: string,
}
