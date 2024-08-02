import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent {

  radioOptions = ['Opción 1', 'Opción 2', 'Opción 3'];
  checkboxOptions = ['Opción A', 'Opción B', 'Opción C'];
  dropdownOptions = ['Categoría 1', 'Categoría 2', 'Categoría 3'];
  selectedCheckboxes: string[] = [];
  formSubmitted = false;

  onCheckboxChange(event: any) {
    const value = event.target.value;
    if (event.target.checked) {
      this.selectedCheckboxes.push(value);
    } else {
      const index = this.selectedCheckboxes.indexOf(value);
      if (index !== -1) {
        this.selectedCheckboxes.splice(index, 1);
      }
    }
  }
  
  onSubmit() {
    this.formSubmitted = true;
    console.log('Formulario enviado');
    console.log('Radio seleccionado:', this.radioOptions);
    console.log('Checkboxes seleccionados:', this.selectedCheckboxes);
    console.log('Dropdown seleccionado:', this.dropdownOptions);
  }
}