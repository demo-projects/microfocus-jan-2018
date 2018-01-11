import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ElementProperties, Project } from '../defintions/element-properties';
import { TAGS } from '../constants/elements.constants';

@Injectable()
export class EditorService {
  elements: ElementProperties[] = [
    {
      tag: TAGS.H1,
      title: 'Microfocus Angular Course',
      color: '#123ABC',
      opacity: 1
    },
    {
      tag: TAGS.H2,
      title: 'January 2018',
      color: '#456DEF',
      opacity: 1
    }
  ];
  selectedElementIndex = null;

  get selectedElement() {
    return this.elements[this.selectedElementIndex];
  }

  constructor(private http: HttpClient) { }


  setSelectedIndex(index) {
    this.selectedElementIndex = index;
  }

  isSelected(index) {
    return this.selectedElementIndex === index;
  }

  updateProperties(newProperties) {
    this.elements[this.selectedElementIndex] = {
      ...this.elements[this.selectedElementIndex],
      ...newProperties
    };
  }

  addElement(tag) {
    this.elements = [
      ...this.elements,
      {
        tag,
        title: 'Enter Text',
        color: '#000000',
        opacity: 1
      }
    ];
    this.setSelectedIndex(this.elements.length - 1);
  }

  save() {
    return this.http.post<Project>(
      `http://localhost:3000/projects`,
      {
        elements: this.elements
      }
    );
  }
}
