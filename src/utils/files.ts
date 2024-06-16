import { FormControl } from "@angular/forms";

export function fileChange(event: any, control: FormControl) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const string = reader.result as string;
    control.setValue(string);
  };
  if (file) {
    reader.readAsDataURL(file);
  }
}
