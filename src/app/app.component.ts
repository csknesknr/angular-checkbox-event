import { Component } from '@angular/core';
import { NotificationService } from './natification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private _notification: NotificationService) {}
  checkBox: any[] = [
    {
      value: 1,
      selected: false,
    },
    {
      value: 2,
      selected: false,
    },
    {
      value: 3,
      selected: false,
    },
    {
      value: 4,
      selected: false,
    },
    {
      value: 5,
      selected: false,
    },
    {
      value: 6,
      selected: false,
    },
    {
      value: 7,
      selected: false,
    },
    {
      value: 8,
      selected: false,
    },
    {
      value: 9,
      selected: false,
    },
    {
      value: 10,
      selected: false,
    },
    {
      value: 11,
      selected: false,
    },
    {
      value: 12,
      selected: false,
    },
    {
      value: 13,
      selected: false,
    },
    {
      value: 14,
      selected: false,
    },
    {
      value: 15,
      selected: false,
    },
    {
      value: 16,
      selected: false,
    },
    {
      value: 17,
      selected: false,
    },
    {
      value: 18,
      selected: false,
    },
    {
      value: 19,
      selected: false,
    },

    {
      value: 20,
      selected: false,
    },

    {
      value: 21,
      selected: false,
    },
    {
      value: 22,
      selected: false,
    },
  ];
  selectedList: any[] = [];
  selectedItemCount: number = 0;

  selectedItem = (value: any) => {
    this.selectedItemCount = this.checkBox.filter(
      (item) => item.selected == true
    ).length;

    if (value.checked == true) {
      if (this.selectedItemCount == 3) {
        this._notification.showWarning(
          'En fazla 3 adet seçebilirsiniz',
          'Dikkat'
        );
        var index = this.checkBox.findIndex(
          (item) => item.value == value.value
        );
        this.checkBox[index] = {
          value: Number.parseInt(value.value),
          selected: false,
        };

        return;
      }
      var index = this.checkBox.findIndex((item) => item.value == value.value);
      this.checkBox[index] = {
        value: Number.parseInt(value.value),
        selected: true,
      };
    } else {
      var index = this.checkBox.findIndex((item) => item.value == value.value);
      this.checkBox[index] = {
        value: Number.parseInt(value.value),
        selected: false,
      };
    }
    console.log(this.checkBox);
  };

  selectedItemAll = (value: any) => {
    this.selectedItemCount = this.checkBox.filter(
      (item) => item.selected == true
    ).length;
    if (value.checked == true) {
      if (this.selectedItemCount == 3) {
        this._notification.showWarning(
          'En fazla 3 adet seçebilirsiniz',
          'Dikkat'
        );
        value.checked = false;
      }
    }
  };

  getselectedItem = () => {
    return this.checkBox.filter((a) => a.selected == true);
  };
}
