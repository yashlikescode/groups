import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor,NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  jsonData = [
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

  activeGroup: string | null = null;

  selectedTemplates: { [key: string]: boolean } = {};

  toggleGroup(group: any) {
    const isActive = this.activeGroup === group.groupName;
    this.activeGroup = isActive ? null : group.groupName;

    // Toggle all templates of the group
    group.templates.forEach((template: string) => {
      this.selectedTemplates[template] = !isActive;
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
}
