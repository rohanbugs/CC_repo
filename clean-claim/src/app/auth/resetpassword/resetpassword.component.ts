import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.css'
})
export class ResetpasswordComponent {

  resetForm:FormGroup

  constructor(private fb:FormBuilder,private router:Router){
    this.resetForm= this.fb.group({
      email:['',[Validators.required,Validators.email]]
    })

  }
  onSubmit(){
    if (this.resetForm.valid) {
      
      // After successful login
      this.router.navigate(['/dashboard']);
    }

  }


  get email() { return this.resetForm.get('email'); }
}
