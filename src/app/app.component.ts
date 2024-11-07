import { Component, Inject, inject, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateModule, TranslateService} from '@ngx-translate/core'
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'beta';
  translate: TranslateService = inject(TranslateService);
  currentLang: string;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) 
  
  {
    // Cargar el idioma guardado en localStorage o establecer inglés como predeterminado
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    this.translate.use(savedLanguage);
    this.currentLang = savedLanguage;
  }

  translateText(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('selectedLanguage', lang); // Guardar el idioma seleccionado en localStorage
    this.currentLang = lang;

    // Cerrar el menú hamburguesa si está abierto
    const navbarCollapse = this.document.querySelector('.navbar-collapse');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      this.renderer.removeClass(navbarCollapse, 'show');
    }
  }
}

