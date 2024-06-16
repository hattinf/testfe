import { Component, Output, Input, EventEmitter } from "@angular/core";

@Component({
  selector: "app-delete-confirm",
  templateUrl: "./delete-confirm.component.html",
  styleUrl: "./delete-confirm.component.scss",
})
export class DeleteConfirmComponent {
  toggle: boolean = false;
  toggleDelete: boolean = false;
  @Input() short: boolean = true;
  @Input() text: string = "";
  @Output() delete = new EventEmitter();

  toggleOpenDelete() {
    this.toggleDelete = !this.toggleDelete;
  }

  executeDelete() {
    this.delete.emit();
  }
}
