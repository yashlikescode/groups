import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  jsonData: { groupName: string; templates: string[] }[] = [
    {
      groupName: 'Group 1',
      templates: ['Template 1A', 'Template 1B', 'Template 1C'],
    },
    {
      groupName: 'Group 2',
      templates: ['Template 2A', 'Template 2B'],
    },
    {
      groupName: 'Group 3',
      templates: ['Template 3A', 'Template 3B', 'Template 3C'],
    },
    {
      groupName: 'Group 4',
      templates: ['Template 4A', 'Template 4B', 'Template 4C'],
    },
    {
      groupName: 'Group 5',
      templates: ['Template 5A', 'Template 5B', 'Template 5C'],
    },
    {
      groupName: 'Group 6',
      templates: ['Template 6A', 'Template 6B', 'Template 6C'],
    },
  ];

  activeGroup: string = '';

  selectedTemplates: { [key: string]: boolean } = {};
  selectedGroup: string = '';

  toggable: boolean = true;
  disableToggle() {
    this.toggable = false;
  }
  enableToggle() {
    this.toggable = true;
  }
  toggleGroup(group: any) {
    const isActive = this.activeGroup === group.groupName;
    if (this.toggable) {
      this.activeGroup = isActive ? null : group.groupName;
    }
  }
  groupClicked(selectedGroup: any, event: any) {
    if (event.target.checked) {
      this.selectedGroup = selectedGroup.groupName;
    } else {
      this.selectedGroup = '';
    }
    this.jsonData.forEach((group) => {
      group.templates.forEach((template) => {
        if (selectedGroup.groupName === group.groupName) {
          this.selectedTemplates[template] = event.target.checked;
        } else {
          this.selectedTemplates[template] = false;
        }
      });
    });
  }
  isGroupActive(groupName: string): boolean {
    return this.activeGroup === groupName;
  }
  onTemplateChange(ParentGroup: any, template: string, event: any) {
    this.selectedTemplates[template] = event.target.checked;

    this.selectedGroup = '';

    this.jsonData.forEach((group) => {
      if (group.groupName != ParentGroup.groupName) {
        group.templates.forEach((template) => {
          this.selectedTemplates[template] = false;
        });
      }
    });
    this.jsonData.forEach((group) => {
      if (group.groupName === ParentGroup.groupName) {
        this.selectedGroup = group.groupName;
        group.templates.forEach((template) => {
          if(!this.selectedTemplates[template]){
            this.selectedGroup='';
          }
        });
      }
    });
  }

  isChecked(template: string): boolean {
    return this.selectedTemplates[template] || false;
  }
  isCheckedGroup(group: any): boolean {
    return group.groupName === this.selectedGroup;
  }
  getTrueTemplates(): string[] {
    return Object.keys(this.selectedTemplates).filter(
      (key) => this.selectedTemplates[key]
    );
  }
}
