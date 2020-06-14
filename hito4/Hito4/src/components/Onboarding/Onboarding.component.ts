import { Component, OnInit, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

const HTML_TEMPLATE = `

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Slides</title>
  <script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core@next/dist/ionic/ionic.esm.js"></script>
  <script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core@next/dist/ionic/ionic.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core@next/css/ionic.bundle.css"/>
 
</head>
<body>
  <ion-app>
    <ion-content fullscreen class="ion-padding" scroll-y="false">
      <ion-slides>

        <ion-slide style="background-color: #4DCA77;">
          <div class="slide">
            <div class="cont">
              <h1 >PDM</h1>
              <p>Creacion Ionic Angular Package</p>
            </div>
            <div class="left">
              <button 
              id= {{title}} 
              type="submit" 
              float-left ion-button  
              color="primary" 
              class="btnPrev" 
              (click)="prev()">Prev</button>
          </div>
          <div class="right">
          <button 
          id= {{title}} 
          type="submit" 
          float-right ion-button color="primary"
           class="btnNext" 
           (click)="nextP()">Next</button>
          </div>
          </div>
        </ion-slide>

        <ion-slide style="background-color: #F07243;">
          <div class="slide">
            <div class="cont">
              <h1 >DEFENSA HITO4</h1>
              <p>ESTU: SANDRA MALDONADO</p>
              <p>GESTION 2020</p>
            
            </div>
            <div class="left2">
              <button 
              id= {{title}} 
              type="submit" 
              float-left ion-button  
              color="primary" 
              class="btnPrev" 
              (click)="prev()">Prev</button>
          </div>
          <div class="right2">
          <button 
          id= {{title}} 
          type="submit" 
          float-right ion-button color="primary"
           class="btnNext" 
           (click)="nextP()">Next</button>
          </div>
          </div>
        </ion-slide>

      </ion-slides>
    </ion-content>
  </ion-app>

  
</body>

`;
 
const CSS_STYLE = `
ion-slides {
    height: 100%;
  }
  
  .swiper-slide {
    display: block;
  }
  
  .swiper-slide h2 {
    margin-top: 1rem;
  }
  
  .swiper-slide img {
    max-height: 50%;
    max-width: 80%;
    margin: 60px 0 40px;
    pointer-events: none;
  }
  
  b {
    font-weight: 500;
  }
  
  p {
    padding: 0 40px;
    font-size: 14px;
    line-height: 1.5;
    color: var(--ion-color-step-600, #60646b);
  }
  
  p b {
    color: var(--ion-text-color, #000000);
  }
  
  ion-header{
    background-color: #8C243C;
  }
  :root {
  --ion-safe-area-top: 20px;
  --ion-safe-area-bottom: 22px;
  }
  
  .slide{
  
  height: 700px;
  width: 100%;
  
  }
  #login{
  background-color:#428AF8;
  }
  .ion-padding{
    padding: 0px;
  }
  .botones{
  margin-top: 600px;
  }
  img{
    margin-top: -150px;
    width: 600px;
    height: 400px;
  }
  h1{
    color:white;
    font-weight: bold;
    
  }
  p{
    color: white;
  }
  .cont{
    margin-top: 50%;
  }
  .btnPrev
  {
      
      background: transparent;
      color: white;
      border-radius: 12px;
      border: 2px solid white;
      width: 100px;
     
  }
  .btnNext{
  
      background: transparent;
      color: white;
      border-radius: 12px;
      border: 2px solid white;
      margin-left: 50px;
      width: 100px;
      
  }
  .left
  {
      float: left;
      margin-top: 100%;
  }
  .right{
      float: right;
      margin-top: 100%;
  }
  .left2
  {
      float: left;
      margin-top: 90%;
  }
  .right2{
      float: right;
      margin-top: 90%;
  }
`;

@Component({
  selector: 'app-home',
  templateUrl: 'HTML_TEMPLATE',
  styleUrls: ['CSS_STYLE'],
})
export class OnboardingComponent {

  constructor() {}

  @ViewChild(Slides)slides: Slides;

  public next(){
    this.slides.slideNext();
  }

  public prev(){
    this.slides.slidePrev();
  }

}