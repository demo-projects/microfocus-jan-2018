import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { update } from 'lodash/fp';
import { ElementProperties, Project } from '../defintions/element-properties';
import { TAGS } from '../constants/elements.constants';

@Injectable()
export class EditorService {
  elements: ElementProperties[] = [];
  selectedElementIndex = null;
  projectId = null;

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
    this.elements = update(
      this.selectedElementIndex,
      (element) => ({ ...element, ...newProperties }),
      this.elements
    );
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
    return this.projectId ? this.update() : this.create();
  }

  create() {
    return this.http.post<Project>(
      `http://localhost:3000/projects`,
      {
        elements: this.elements
      }
    );
  }

  update() {
    return this.http.put<Project>(
      `http://localhost:3000/projects/${this.projectId}`,
      {
        id: this.projectId,
        elements: this.elements
      }
    );
  }

  setCurrentProject(id) {
    if (this.projectId !== id) {
      this.projectId = id;

      this.http.get<Project>(`http://localhost:3000/projects/${id}`)
        .subscribe((data) => {
          this.elements = data.elements;
          this.selectedElementIndex = null;
        });
    }
  }
}
