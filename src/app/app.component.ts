import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  templateNames = {
    B: 'Branding Templates',
    C: 'Marketing Templates',
    G: 'Global Campaign Templates',
    S: 'SoV Templates',
    AR: 'Awards & Recognition Templates',
    GMA: 'Global Media Analytics Templates',
    E: 'Employee Engagement Templates',
    SM: 'Social Media Templates',
    ARL: 'Analyst Relation Templates',
    OC: 'One Trust Cookie AcceptanceTemplates',
    PMA: 'Paid Media Analytics Templates',
    CD: 'Paid Campaigns & Third Party Leads',
    GB: 'Global Branding Template',
    LM: 'LI Mapping Template',
    SS: 'Sports Sponsorship Template',
  };
  data = {
    success: [
      {
        id: 45,
        moduleName: 'Awards and Recognition Details',
        templateType: 'AR',
        sheets: [
          {
            id: 52,
            sheetName: 'Awards & Recognition',
            templateType: 'AR',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 172,
        moduleName: 'AR - Accenture',
        templateType: 'ARL',
        sheets: [
          {
            id: 188,
            sheetName: 'AR - Accenture',
            templateType: 'ARL',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 171,
        moduleName: 'AR - TCS',
        templateType: 'ARL',
        sheets: [
          {
            id: 187,
            sheetName: 'AR - TCS',
            templateType: 'ARL',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 15,
        moduleName: 'Branding Description Table',
        templateType: 'B',
        sheets: [
          {
            id: 19,
            sheetName: 'Branding Description Table',
            templateType: 'B',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 13,
        moduleName: 'Website Impressions',
        templateType: 'B',
        sheets: [
          {
            id: 17,
            sheetName: 'Website Impressions',
            templateType: 'B',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 11,
        moduleName: 'Smart Connect',
        templateType: 'B',
        sheets: [
          {
            id: 15,
            sheetName: 'Smart Connect',
            templateType: 'B',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 10,
        moduleName: 'Messaging Architecture',
        templateType: 'B',
        sheets: [
          {
            id: 14,
            sheetName: 'Messaging Architecture',
            templateType: 'B',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 9,
        moduleName: 'Media Coverage',
        templateType: 'B',
        sheets: [
          {
            id: 13,
            sheetName: 'Media Coverage',
            templateType: 'B',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 12,
        moduleName: 'Social Media Impressions',
        templateType: 'B',
        sheets: [
          {
            id: 16,
            sheetName: 'Social Media Impressions',
            templateType: 'B',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 2,
        moduleName: 'Awards',
        templateType: 'C',
        sheets: [
          {
            id: 7,
            sheetName: 'Awards',
            templateType: 'C',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 3,
        moduleName: 'Customer References',
        templateType: 'C',
        sheets: [
          {
            id: 8,
            sheetName: 'Customer References',
            templateType: 'C',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 4,
        moduleName: 'Customer Testimonial and Quotes',
        templateType: 'C',
        sheets: [
          {
            id: 9,
            sheetName: 'Customer Testimonial and Quotes',
            templateType: 'C',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 5,
        moduleName: 'Industry Publications',
        templateType: 'C',
        sheets: [
          {
            id: 10,
            sheetName: 'Industry Publications',
            templateType: 'C',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 7,
        moduleName: 'Event Details',
        templateType: 'C',
        sheets: [
          {
            id: 11,
            sheetName: 'Event Details',
            templateType: 'C',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 8,
        moduleName: 'Attendee Details',
        templateType: 'C',
        sheets: [
          {
            id: 12,
            sheetName: 'Attendee Details',
            templateType: 'C',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 16,
        moduleName: 'Follow Up Discussions',
        templateType: 'C',
        sheets: [
          {
            id: 20,
            sheetName: 'Follow Up Discussions',
            templateType: 'C',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 212,
        moduleName: 'Marketo - Campaign Data',
        templateType: 'CD',
        sheets: [
          {
            id: 230,
            sheetName: 'Marketo - Campaign Data',
            templateType: 'CD',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 267,
        moduleName: 'Third Party Leads',
        templateType: 'CD',
        sheets: [
          {
            id: 279,
            sheetName: 'Third Party Leads',
            templateType: 'CD',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 268,
        moduleName: 'Content Syndication',
        templateType: 'CD',
        sheets: [
          {
            id: 280,
            sheetName: 'Content Syndication',
            templateType: 'CD',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 209,
        moduleName: 'Google - Campaign Data',
        templateType: 'CD',
        sheets: [
          {
            id: 227,
            sheetName: 'Google - Campaign Data',
            templateType: 'CD',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 210,
        moduleName: 'Meta - Campaign Data',
        templateType: 'CD',
        sheets: [
          {
            id: 228,
            sheetName: 'Meta - Campaign Data',
            templateType: 'CD',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 211,
        moduleName: 'Demand Base - Campaign Data',
        templateType: 'CD',
        sheets: [
          {
            id: 229,
            sheetName: 'Demand Base - Campaign Data',
            templateType: 'CD',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 208,
        moduleName: 'LinkedIn - Campaign Data',
        templateType: 'CD',
        sheets: [
          {
            id: 226,
            sheetName: 'LinkedIn - Campaign Data',
            templateType: 'CD',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 56,
        moduleName: 'Employee Engagement Details',
        templateType: 'E',
        sheets: [
          {
            id: 63,
            sheetName: 'Employee Engagement',
            templateType: 'E',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 22,
        moduleName: 'Global Campaign',
        templateType: 'G',
        sheets: [
          {
            id: 29,
            sheetName: 'Campaigns_Planned',
            templateType: 'G',
            columns: null,
          },
          {
            id: 28,
            sheetName: 'Campaigns_Actuals',
            templateType: 'G',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 276,
        moduleName: 'Global Branding Template',
        templateType: 'GB',
        sheets: [
          {
            id: 288,
            sheetName: 'Branding Sheet',
            templateType: 'GB',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 50,
        moduleName: 'Global Media Analytics Details',
        templateType: 'GMA',
        sheets: [
          {
            id: 57,
            sheetName: 'Global Media Analytics',
            templateType: 'GMA',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 280,
        moduleName: 'LI Mapping',
        templateType: 'LM',
        sheets: [
          {
            id: 292,
            sheetName: 'LI Mapping Sheet',
            templateType: 'LM',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 173,
        moduleName: 'OneTrust Cookie Acceptance',
        templateType: 'OC',
        sheets: [
          {
            id: 189,
            sheetName: 'OneTrust Cookie Acceptance',
            templateType: 'OC',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 192,
        moduleName: 'Paid Media Analytics',
        templateType: 'PMA',
        sheets: [
          {
            id: 210,
            sheetName: 'Paid Media Analytics',
            templateType: 'PMA',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 73,
        moduleName: 'SoV Global',
        templateType: 'S',
        sheets: [
          {
            id: 80,
            sheetName: 'SoV Global',
            templateType: 'S',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 30,
        moduleName: 'SoV India',
        templateType: 'S',
        sheets: [
          {
            id: 37,
            sheetName: 'SoV India',
            templateType: 'S',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 92,
        moduleName: 'Social Media Posts',
        templateType: 'SM',
        sheets: [
          {
            id: 99,
            sheetName: 'Social Media Posts',
            templateType: 'SM',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 91,
        moduleName: 'Followers Count',
        templateType: 'SM',
        sheets: [
          {
            id: 98,
            sheetName: 'Followers Count',
            templateType: 'SM',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 90,
        moduleName: 'Quarterly Targets',
        templateType: 'SM',
        sheets: [
          {
            id: 97,
            sheetName: 'Quarterly Targets',
            templateType: 'SM',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 93,
        moduleName: 'Organization Talent Flow',
        templateType: 'SM',
        sheets: [
          {
            id: 100,
            sheetName: 'Organization Talent Flow',
            templateType: 'SM',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 289,
        moduleName: 'Endurance - Sport Sponsorship',
        templateType: 'SS',
        sheets: [
          {
            id: 301,
            sheetName: 'Endurance - Sport Sponsorship',
            templateType: 'SS',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
      {
        id: 298,
        moduleName: 'Racing - Sport Sponsorship',
        templateType: 'SS',
        sheets: [
          {
            id: 310,
            sheetName: 'Racing - Sport Sponsorship',
            templateType: 'SS',
            columns: null,
          },
        ],
        checked: true,
        isChecked: false,
      },
    ],
  };
  getSheetNamesByModuleName(moduleName: string): string[] {
    const module = this.data.success.find((m) => m.moduleName === moduleName);
    return module?.sheets.map((s) => s.sheetName) || [];
  }

  jsonData = Object.entries(this.templateNames).map(([code, name]) => {
    const templates = this.data.success
      .filter((item) => item.templateType === code)
      .map((item) => item.moduleName);

    return {
      groupName: name,
      templates: templates,
    };
  });

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
          if (!this.selectedTemplates[template]) {
            this.selectedGroup = '';
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
