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
      "text2": "¿Necesitas organizar tus proyectos?, hazlo con",
      "text3": "Software de Gestión de Proyectos",
      "text4": "No pierdas de vista ningún proyecto por errores de seguimiento y enfócate en las tareas más importantes. Controla a tu equipo en cada etapa del proyecto y asegura el éxito de tus entregas."
    },
    {
      "text2": "Dificultades gestionando tareas y plazos",
      "text3": "Gestión Eficiente de Tareas",
      "text4": "Optimiza tus flujos de trabajo con una gestión eficiente de tareas y plazos. Asegura que cada miembro del equipo esté alineado y trabajando hacia los mismos objetivos."
    },
    {
      "text2": "Mantén tus equipos sincronizados con",
      "text3": "Colaboración en Tiempo Real",
      "text4": "Facilita la comunicación y colaboración en tiempo real entre todos los miembros del equipo, asegurando que todos estén informados y alineados en todo momento."
    },
    {
      "text2": "¿Problemas para seguir el progreso?",
      "text3": "Monitoreo de Proyectos en Vivo",
      "text4": "Automatiza y monitorea el progreso de tus proyectos en tiempo real. Obtén informes detallados y toma decisiones informadas basadas en datos actualizados al instante."
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
