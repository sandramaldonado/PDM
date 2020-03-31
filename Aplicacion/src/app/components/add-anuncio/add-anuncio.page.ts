import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//  Service 
import { AnuncioService } from '../../servicios/anuncio.service';

// Class
import { Anuncio } from '../../Modelos/Anuncio';
@Component({
  selector: 'app-add-anuncio',
  templateUrl: './add-anuncio.page.html',
  styleUrls: ['./add-anuncio.page.scss'],
})
export class AddAnuncioPage implements OnInit {

  constructor(public anuncioService : AnuncioService) { }

  ngOnInit() {
    this.anuncioService.getAnuncios();
    this.resetForm();
  }

  onSubmit(productForm: NgForm)
  {
    if(productForm.value.$key == null)
      this.anuncioService.insertAnuncio(productForm.value);
    else
    this.anuncioService.updateAnuncio(productForm.value);
    
    this.resetForm(productForm);
  }

  resetForm(productForm?: NgForm)
  {
    if(productForm != null)
      productForm.reset();
      this.anuncioService.selectedAnuncio = new Anuncio();
  }

}
