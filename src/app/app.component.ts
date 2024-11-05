import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateModule, TranslateService} from '@ngx-translate/core'

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

  constructor() {
    // Cargar el idioma guardado en localStorage o establecer inglés como predeterminado
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    this.translate.use(savedLanguage);
    this.currentLang = savedLanguage;
  }

  translateText(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('selectedLanguage', lang); // Guardar el idioma seleccionado en localStorage
    this.currentLang = lang;
  }
}
