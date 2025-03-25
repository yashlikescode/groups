import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
  ];

  activeGroup: string = '';

  selectedTemplates: { [key: string]: boolean } = {};
  selectedGroup:string = '';

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
    this.jsonData.forEach((group) => {
      group.templates.forEach((template) => {
        if (selectedGroup.groupName === group.groupName) {
          this.selectedTemplates[template] = event.target.checked;
          if(event.target.checked){
            this.selectedGroup = selectedGroup.groupName;
          }
        } else {
          this.selectedTemplates[template] = false;
        }
      });
    });
  }
  isGroupActive(groupName: string): boolean {
    return this.activeGroup === groupName;
  }

  onTemplateChange(template: string, event: any) {
    this.selectedTemplates[template] = event.target.checked;
  }

  isChecked(template: string): boolean {
    return this.selectedTemplates[template] || false;
  }
  isCheckedGroup(group:any):boolean{
    return group.groupName === this.selectedGroup;
  }
}
