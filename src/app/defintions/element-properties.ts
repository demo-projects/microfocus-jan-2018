export interface Project {
  id?: any;
  elements: ElementProperties[];
}

export interface ElementProperties {
  tag: string;
  title: string;
  color: string;
  opacity: number;
}
