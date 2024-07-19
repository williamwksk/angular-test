import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// Módulos Custom
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

// Módulos de PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { PasswordModule } from 'primeng/password';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';
import { ChipModule } from 'primeng/chip';
import { KeyFilterModule } from 'primeng/keyfilter';
import { RippleModule } from 'primeng/ripple';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { GenerativeTextComponent } from './components/generative-text/generative-text.component';
import { MessageModule } from 'primeng/message'; // Importar MessageModule
import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    RegisterFormComponent,
    GenerativeTextComponent
  ],
  imports: [
    MessageModule,
    MessagesModule,
    ReactiveFormsModule,
    RippleModule,
    KeyFilterModule,
    BrowserModule,
    ChipModule,
    ImageModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    PasswordModule,
    CalendarModule,
    DropdownModule,
    DividerModule,
    BrowserAnimationsModule,
    ButtonModule,
    SelectButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
