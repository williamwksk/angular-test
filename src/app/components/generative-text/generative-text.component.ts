import { Component } from '@angular/core';

@Component({
  selector: 'app-generative-text',
  templateUrl: './generative-text.component.html',
  styleUrl: './generative-text.component.css'
})
export class GenerativeTextComponent {

   // Grupos de textos a ser animados
   grupos = [
    {
      text2: '¿Necesitas organizar tus licitaciones?, hazlo con',
      text3: 'Software de Gestión de Licitaciones',
      text4: 'No te pierdas ninguna licitación por errores de seguimiento y enfócate en el 80/20 de las mejores licitaciones. Controla a tu equipo en el paso a paso de cada licitación.'
    },
    {
      text2: 'Problemas con la gestión de mails',
      text3: 'Marketing Personalizado y Transaccional',
      text4: 'Realizamos campañas de venta dirigidas a sus clientes y potenciales clientes, alta tasa de retorno, le entregamos la lista de clientes interesados en cada campaña.'
    },
    {
      text2: 'Se siempre el primero con',
      text3: 'Compra Ágil',
      text4: 'Ofrecemos servicios para que su empresa aumente su venta y su margen de ganancia al vender en las Instituciones del Estado de Chile en los 3 canales principales existentes. Convenio Marco, Compra Ágil y Licitaciones públicas.'
    },
    {
      text2: 'Te cuesta buscar ofertas',
      text3: 'Robot de Ofertas y Stock',
      text4: 'Automatiza y programa las ofertas de tus productos de cualquier Convenio Marco, automatiza y parametriza el la visualización de tus productos en caulquier Convenio Marco.'
    }
  ];

  currentGroupIndex = 0;

  ngOnInit(): void {
    this.showNextGroup();
  }

  showNextGroup(): void {
    const currentGroup = this.grupos[this.currentGroupIndex];

    this.typeWriterEffect('text2', currentGroup.text2, 50, () => {
      this.typeWriterEffect('text3', currentGroup.text3, 100, () => {
        this.typeWriterEffect('text4', currentGroup.text4, 30, () => {
          setTimeout(() => {
            this.fadeOutGroup(() => {
              this.currentGroupIndex = (this.currentGroupIndex + 1) % this.grupos.length;
              this.clearText();
              this.showNextGroup();
            });
          }, 2000); // Tiempo de espera antes de desvanecer
        });
      });
    });
  }

  typeWriterEffect(elementId: string, text: string, speed: number, callback?: () => void): void {
    let i = 0;
    const element = document.getElementById(elementId);

    if (!element) {
      console.error(`Element with ID ${elementId} not found`);
      if (callback) {
        callback();
      }
      return;
    }

    const typeWriter = () => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      } else if (callback) {
        callback();
      }
    };

    typeWriter();
  }

  fadeOutGroup(callback: () => void): void {
    const elements = ['text2', 'text3', 'text4'].map(id => document.getElementById(id));
    let opacity = 1;

    const fade = () => {
      opacity -= 0.05;
      elements.forEach(el => {
        if (el) {
          el.style.opacity = opacity.toString();
        }
      });

      if (opacity <= 0) {
        elements.forEach(el => {
          if (el) {
            el.style.display = 'none';
          }
        });
        callback();
      } else {
        setTimeout(fade, 50);
      }
    };

    fade();
  }

  clearText(): void {
    ['text2', 'text3', 'text4'].forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.innerHTML = '';
        element.style.opacity = '1';
        element.style.display = 'block';
      }
    });
  }

}
