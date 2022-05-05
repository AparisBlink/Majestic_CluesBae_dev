@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');

/*Hereda de Poptropica*/
:root {
    --TextColor: 35,31, 32;
    --MainFont: 'Poppins', sans-serif;
    --TitleFont:'Lexend Deca', sans-serif;
    --TitleFontBAE: 'Arvo', serif;
    --MainText: 1.6rem;
    --MainMargin: 0 0 2.0rem;
    --SecondaryText: 1.4rem;
    --MainLineHeight: 2.6rem;
    --SlidePadding: 5.0rem;
    --colorppal: 183, 40, 65;
    --color2BAE: 230, 218, 190;
}

/*Definimos estas reglas para que no dependan del font-size: 10px*/
html body:not(.edit),
 body.edit .navbar.libro {
    line-height: var(--MainLineHeight);
    font-size: var(--MainText);
    font-family: var(--MainFont)
}
#actividad .texto_curso,
 #actividad .texto_curso p {
     font-size: var(--MainText);
     line-height: var(--MainLineHeight) !important;
}
#actividad .workspace {
    font-size: var(--MainText);
    line-height: var(--MainLineHeight);
}
/*Padding de la slide*/
.body_clase:not(.edit):not(.book-summary) #actividad .class_slide {
    padding-left: var(--SlidePadding);
    padding-right: var(--SlidePadding);
    color: var(--TextColor);
}
/*------------------*/

/*TOC*/
#indice .units ul li {
    background: rgb(var(--colorppal));
    -webkit-border-radius: 18px;
    -moz-border-radius: 18px;
    border-radius: 0;
    margin-bottom: 8px;
    padding: 4px 8px
}
#indice .units ul li a .title {
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    margin: -21px 0 0 35px;
    line-height: 18px;
    display: block
}

body:not(.isTablet) #indice .units ul li.active:not(.disabled) a .title,
body:not(.isTablet) #indice .units ul li:not(.disabled) a:hover .title {
    color: rgb(var(--colorppal))
}

#indice .units ul li.active:not(.disabled),#indice .units ul li:focus:not(.disabled),body:not(.isTablet) #indice .units ul li:hover:not(.disabled) {
    background: transparent;
    border: 2px solid rgb(var(--colorppal))
}



.btn-primary,.btn-primary.disabled {
    color: #fff;
    background-color: rgb(var(--colorppal));
    border-color: transparent;
    opacity: 1;
    border-radius: 0
}

body.content_type_clase_Majestic_CluesBae_dev {
    font-size: 1.8rem
}


body.content_type_clase_Majestic_CluesBae_dev #actividad .content img {
    padding: 5px
}

.is_app.content_type_clase_Majestic_CluesBae_dev {
    padding-top: 0
}

.content_type_clase_Majestic_CluesBae_dev #actividad {
    margin-bottom: 0;
    -webkit-transform: none;
    -webkit-transform-style: flat
}

#actividad .carousel-inner .item-container {
    margin: 20px auto
}

.content_type_clase_Majestic_CluesBae_dev #actividad .slide-concatenate {
    margin-top: 30px
}

/*---------- GENERALES ---------------*/
#actividad .texto_curso p p:last-child {
    margin-bottom: 0;
}
/*-- ENLACES --*/
#actividad .slide-wrapper a:not(.audio,.bck-file-attach) {
    text-decoration: underline;
    color: rgb(var(--colorppal));
}
#actividad .slide-wrapper a:not(.audio,.bck-file-attach):active,
#actividad .slide-wrapper a:not(.audio,.bck-file-attach):focus,
#actividad .slide-wrapper a:not(.audio,.bck-file-attach):hover {
    color: rgb(var(--colorppal));
    background-color: rgba(var(--colorppal),0.2);
}
/*----*/


/*----------------------------*/
/*---- TITULO SLIDE ------------*/
.content_type_clase_Majestic_CluesBae_dev #actividad .content .header .chapter,
.content_type_clase_Majestic_CluesBae_dev #actividad .content .header .title img {
    display: none
}
.content_type_clase_Majestic_CluesBae_dev #actividad .content .header {
    border: none;
    background: none;
    width: calc(100% + var(--SlidePadding) * 2);
    margin-left: calc(-1 * var(--SlidePadding));
    padding: 0;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    min-height: 88px;
}
.content_type_clase_Majestic_CluesBae_dev #actividad .content .header.empty {
    display: none;
}
.content_type_clase_Majestic_CluesBae_dev #actividad .content .header .title {
    margin: 0 0 20px;
    background: rgb(var(--colorppal));
    width: 100%;
    padding: 30px var(--SlidePadding);
    margin: 0;
}
.content_type_clase_Majestic_CluesBae_dev #actividad .content .slide-concatenate .header .title {
    display: none
}
.content_type_clase_Majestic_CluesBae_dev #actividad .content .header .title h3 {
    position: relative;
    display: block;
    width: 100%;
    margin: 0;
    padding:0;
    color: #fff;
    font-family: var(--TitleFont);
    font-size: calc(var(--MainText) * 1.44);
    font-weight: bold;
    text-align: left
}
.content_type_clase_Majestic_CluesBae_dev #actividad .content .header:after {
    content: "";
    position: relative;
    background-image: url(images/logoMajestic.png);
    width: 130px;
    background-size: 80px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #ffffff;
}

.content_type_clase_Majestic_CluesBae_dev #actividad .slide_content_type_1 .pregunta .texto_curso,
.content_type_clase_Majestic_CluesBae_dev #actividad .texto_curso,
.html-book {
    font-size: var(--MainText);
}
.texto_curso p:last-of-type {
    margin-bottom: 0
}
.content_type_clase_Majestic_CluesBae_dev #actividad .texto_curso li,
.content_type_clase_Majestic_CluesBae_dev #actividad .workspace ul li li {
    margin-bottom: 10px
}
#actividad .class_slide {
    padding-top: 0
}
/*----------------------------------*/
/*Input*/
.content_type_clase_Majestic_CluesBae_dev .slide_main .img-input-container,
.content_type_clase_Majestic_CluesBae_dev .slide_main input {
    -webkit-box-shadow: inset 0 0 0 rgba(0,0,0,.075);
    -moz-box-shadow: inset 0 0 0 rgba(0,0,0,.075);
    box-shadow: inset 0 0 0 rgba(0,0,0,.075);
    border: 2px solid rgb(var(--colorppal));
    border-radius: 3px;
}
.content_type_clase_Majestic_CluesBae_dev .slide_main .fill-text .img-input-container {
    display: none
}
.content_type_clase_Majestic_CluesBae_dev .slide_main .img-input-container:focus,
.content_type_clase_Majestic_CluesBae_dev .slide_main input:focus {
    border-color: rgba(var(--colorppal),0.1);
    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.075) inset,0 0 8px rgba(133,200,57,0);
    -moz-box-shadow: 0 1px 1px rgba(0,0,0,.075) inset,0 0 8px rgba(133,200,57,0);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(133,200,57,0)
}
.content_type_clase_Majestic_CluesBae_dev .slide_main .img-input-container,
.content_type_clase_Majestic_CluesBae_dev .slide_main input[disabled],
.content_type_clase_Majestic_CluesBae_dev .slide_main input[readonly],
fieldset[disabled] .content_type_clase_Majestic_CluesBae_dev .slide_main input {
    cursor: not-allowed;
    background-color: #eee;
    opacity: 1
}
/*---------*/

.content_type_clase_Majestic_CluesBae_dev .slide_main .img-input-container.respuesta_ok,
.content_type_clase_Majestic_CluesBae_dev .slide_main input.respuesta_ok {
    border-color: #57e900;
    background: #d1f3bd
}

.content_type_clase_Majestic_CluesBae_dev .slide_main .img-input-container.respuesta_ko,
.content_type_clase_Majestic_CluesBae_dev .slide_main input.respuesta_ko {
    border-color: #ff3626;
    background: #ffa49d
}

.content_type_clase_Majestic_CluesBae_dev .slide_main .img-input-container.solucion,
.content_type_clase_Majestic_CluesBae_dev .slide_main input.solucion {
    border-color: #00bdff;
    background: #b6ecff
}

/*-------------------------*/
/*---- Navbar ----*/
.navbar-bottom {
    background: #D1D5DB;
}
.logo-publisher {
    display: none;
}
.edit .logo-publisher {
    display: none
}
#bottom-navigator li.active,#bottom-navigator li:hover {
    background: #923538
}
/*-------------*/

.btn-danger,.btn-danger[disabled] {
    background-color: rgb(var(--colorppal))
}

.btn-danger,.btn-danger[disabled],.btn-primary[disabled],.btn-primary[disabled]:focus {
    color: #fff;
    border-color: transparent;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px
}

.btn-primary[disabled],.btn-primary[disabled]:focus {
    background-color: #0051a0
}

.btn-primary {
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px
}

.btn-primary.active,.btn-primary:not([disabled]):active,.btn-primary:not([disabled]):focus,.btn-primary:not([disabled]):hover,.open .dropdown-toggle.btn-primary {
    color: #fff;
    background-color: #be8889;
    opacity: 1;
    border-color: transparent
}

.btn-danger.active,.btn-danger:active,.btn-danger:focus,.btn-danger:hover,.open .dropdown-toggle.btn-danger {
    color: #fff;
    background-color: #be8889;
    border-color: transparent
}

.btn-next,.btn-next.disabled,.btn-next[disabled],.btn-solution,.btn-solution.disabled,.btn-solution[disabled] {
    color: #fff;
    background-color: #0051a0;
    border-color: transparent;
    border-radius: 5px
}

.btn-next:active,.btn-next:focus,.btn-next:hover,.btn-solution:active,.btn-solution:focus,.btn-solution:hover,.open .dropdown-toggle.btn-solution {
    color: #fff;
    background-color: #5e91c3;
    border-color: transparent
}

#actividad .content .review .attemps span {
    width: 35px;
    height: 35px;
    font-weight: 700;
    color: #fff;
    background-color: rgb(var(--colorppal));
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    text-align: center;
    padding: 6px 12px;
    margin: 0 3px;
    display: inline-block;
    line-height: 24px
}

.form-control:focus-within,.shortanswer-container .preview:focus .form-control:focus,.shortanswer-container input:focus,.shortanswer-container textarea:focus {
    border-color: rgba(146,53,56,.63);
    border-width: 2px;
    outline-width: 0;
    outline-style: none;
    -webkit-box-shadow: 0 1px 1px #dbc9c9 inset,0 0 8px #dbc9c9;
    -moz-box-shadow: 0 1px 1px #dbc9c9 inset,0 0 8px #dbc9c9;
    box-shadow: inset 0 1px 1px #dbc9c9,0 0 8px #dbc9c9
}

/*---------------------------------------------*/
/*------- ESTILOS CK-EDITOR ------------------*/
/*--------------------------------------------*/
/*-------- Titulos-------------*/
.bck-title-1,
.bck-title-2,
.bck-title-3 {
    font-family: var(--TitleFont);
    font-weight: bold;
}
.bck-title-1 {
    font-size: calc(var(--MainText) * 1.44); /*26px*/
}
.bck-title-2 {
    font-size: calc(var(--MainText) * 1.33); /*24px*/
}
.bck-title-3 {
    font-size: calc(var(--MainText) * 1.22); /*22px*/
}
.bck-title-4 {
    font-size: calc(var(--MainText) * 1.11); /*20px*/
}

.bck-title-5 {
    font-family: var(--TitleFontBAE);
    font-size: calc(var(--MainText) * 2); /*36px*/
    color: rgb(var(--colorppal));
}
.bck-title-6 {
    font-family: var(--TitleFontBAE);
    font-size: calc(var(--MainText) * 1.4); /*25px*/
    color: rgb(var(--colorppal));
}
.bck-title-7 {
    font-family: var(--TitleFontBAE);
    font-size: calc(var(--MainText) * 1.4); /*25px*/
    color: rgba(var(--colorppal), 0.5);
}
.bck-title-8 {
    font-family: var(--TitleFontBAE);
    font-size: calc(var(--MainText) * 1.4); /*25px*/
    color: rgb(var(--TextColor));
}
.bck-title-9,
.bck-title-10 {
    display: inline-block;
    background-color: rgb(var(--color2BAE));
    color: rgb(var(--colorppal));
    font-weight: bold;
    font-family: var(--TitleFontBAE);
    padding: 5px 35px;
    box-shadow: 0px 5px 14px 0px #00000030;
}
.bck-title-10 {
    background-color: rgba(var(--colorppal),0.3);
    color: rgb(var(--TextColor));
}

/*----------- Estilo de parrafo ---------*/
#actividad p.bck-p-1 {
    font-size: calc(var(--MainText) * 1.11); /*20px*/
}

/*--------- ENFASIS ---------------*/
.bck-enfasis-1 {
    color: #00AEEF;
}
.bck-enfasis-2 {
    border-bottom: 2px solid #00AEEF;
}
.bck-enfasis-3 {
    border-bottom: 2px solid;
}
.bck-enfasis-4 {
    color: rgb(var(--colorppal));
}

/*------------ Listas ordenadas -----------*/
.cke_contents .bck-ol,
.cke_contents ol,
.content .bck-ol,
.content ol {
    list-style-type: none;
    padding-left: 0;
    counter-reset: bck-li-counter
}
.cke_contents .bck-ol li,
.cke_contents ol li,
.content .bck-ol li,
.content ol li {
    list-style-type: none;
    padding-left: 30px;
    margin-bottom: 16px;
    counter-increment: bck-li-counter;
    position: relative;
    line-height: 1.1rem
}
.cke_contents .bck-ol li:before,
.cke_contents ol li:before,
.content .bck-ol li:before,
.content ol li:before {
    content: counter(bck-li-counter) ".";
    font-family: 'Outfit', sans-serif;
    position: absolute;
    top: 0;
    left: -16px;
    display: block;
    width: 50px;
    height: 24px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    border: none;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    background: transparent;
    color: #333;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    line-height: unset;
}
.cke_contents .bck-ol-1 li:before,
.content .bck-ol-1 li:before {
    color: rgb(var(--colorppal));
}
.cke_contents .bck-ol-2 li:before,
.content .bck-ol-2 li:before {
    color: rgb(238, 50, 41);
}
.cke_contents .bck-ol-3 li:before,
.content .bck-ol-3 li:before {
    color: rgb(0, 192, 243);
}
.cke_contents .bck-ol-4 li:before,
.content .bck-ol-4 li:before {
    color: green;
}
.cke_contents .bck-ol-5 li:before,
.content .bck-ol-5 li:before,
.cke_contents .bck-ol-6 li:before,
.content .bck-ol-6 li:before,
.cke_contents .bck-ol-7 li:before,
.content .bck-ol-7 li:before,
.cke_contents .bck-ol-8 li:before,
.content .bck-ol-8 li:before,
.cke_contents .bck-ol-15 li:before,
.content .bck-ol-15 li:before {
    content: counter(bck-li-counter, upper-roman) ".";
    color: rgb(var(--colorppal)); 
}
.cke_contents .bck-ol-6 li:before,
.content .bck-ol-6 li:before {
    color: rgb(238, 50, 41); 
}
.cke_contents .bck-ol-7 li:before,
.content .bck-ol-7 li:before {
    color: rgb(0, 192, 243);
}
.cke_contents .bck-ol-8 li:before,
.content .bck-ol-8 li:before {
    color: green;
}
.cke_contents .bck-ol-15 li:before,
.content .bck-ol-15 li:before {
    color: rgb(var(--TextColor));
}

.cke_contents .bck-ol-9 li:before,
.content .bck-ol-9 li:before,
.cke_contents .bck-ol-10 li:before,
.content .bck-ol-10 li:before,
.cke_contents .bck-ol-11 li:before,
.content .bck-ol-11 li:before,
.cke_contents .bck-ol-12 li:before,
.content .bck-ol-12 li:before,
.cke_contents .bck-ol-16 li:before,
.content .bck-ol-16 li:before {
    content: counter(bck-li-counter, lower-alpha) ".";
    color: rgb(var(--colorppal)); 
}
.cke_contents .bck-ol-10 li:before,
.content .bck-ol-10 li:before {
    color: rgb(238, 50, 41); 
}
.cke_contents .bck-ol-11 li:before,
.content .bck-ol-11 li:before {
    color: rgb(0, 192, 243);
}
.cke_contents .bck-ol-12 li:before,
.content .bck-ol-12 li:before {
    color: green;
}
.cke_contents .bck-ol-16 li:before,
.content .bck-ol-16 li:before {
    color: rgb(var(--TextColor));
}

.cke_contents .bck-ol-13 li:before,
.content .bck-ol-13 li:before,
.cke_contents .bck-ol-14 li:before,
.content .bck-ol-14 li:before {
    content: counter(bck-li-counter, lower-alpha) ")";
    color: rgb(var(--colorppal)); 
}
.cke_contents .bck-ol-14 li:before,
.content .bck-ol-14 li:before {
    color: rgb(var(--TextColor));
}



/*------- Listas desordenadas ----------*/
.cke_contents ul li,
 .texto_curso ul li,
 .workspace ul li ul li {
    padding-left: 16px;
    line-height: var(--MainLineHeight) !important;
}

.cke_contents ul li:before,
 .texto_curso ul li:before,
  .workspace ul li ul li:before {
    width: 0.6rem;
    height: 0.6rem;
    margin-top: 1.3rem;
    margin-left: -1.5rem;
    background-color: #414141;
}

.cke_contents .bck-ul-1 li:before,
 .texto_curso .bck-ul-1 li:before,
  .workspace ul li .bck-ul-1 li:before {
    background-color: rgb(var(--colorppal));
}
.cke_contents .bck-ul-2 li:before,
 .texto_curso .bck-ul-2 li:before,
  .workspace ul li .bck-ul-2 li:before {
    background-color: rgb(238, 50, 41);
}
.cke_contents .bck-ul-3 li:before,
 .texto_curso .bck-ul-3 li:before,
  .workspace ul li .bck-ul-3 li:before {
    background-color: rgb(0, 192, 243);
}
.cke_contents .bck-ul-4 li:before,
 .texto_curso .bck-ul-4 li:before,
  .workspace ul li .bck-ul-4 li:before {
    background-color: green;
}
/*----------------------------------*/
/*------------- CAJAS --------------*/
.bck-box {
    position: relative;
    border: 2px solid rgb(var(--colorppal));
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 25px;
    background: #fff;
    padding: 1.5rem;
    margin: var(--MainMargin);
}
#actividad .bck-box .bck-title p {
    font-size: calc(var(--MainText) * 1.1);
}
.bck-box-1 {
    border-color: rgb(215,73,12);
}
.bck-box.bck-box-2 {
    padding: 0;
    width: calc(100% + var(--SlidePadding) * 2);
    margin-left: calc(-1 * var(--SlidePadding));
    border: 0;
    text-align: center;
}
.bck-box.bck-box-3 {
    border: 0;
    border-radius: 0;
    padding: 0;
}
.bck-box.bck-box-3 .bck-title {
    background-color: rgb(var(--color2BAE));
    display: inline-block;
    font-family: var(--TitleFontBAE);
    color: rgb(var(--colorppal));
    font-weight: bold;
    padding: 0.5rem 3.0rem;
    margin-left: 3.0rem;
    box-shadow: 0px 10px 8px 0px #00000030;
}
.bck-box.bck-box-3 .bck-content {
    background-color: rgba(var(--color2BAE),0.5);
    padding: 1.5rem;
}
.bck-box.bck-box-4 {
    border: 0;
    border-radius: 0;
    background-color: rgba(var(--colorppal), 0.2);
}

.bck-box.bck-box-5,
.bck-box.bck-box-6,
.bck-box.bck-box-7,
.bck-box.bck-box-8 {
    border: 0;
    border-radius: 0;
    padding: 0;
}
.bck-box.bck-box-5 .bck-title, 
.bck-box.bck-box-6 .bck-title,
.bck-box.bck-box-7 .bck-title,
.bck-box.bck-box-8 .bck-title {
    display: inline-block;
    background: linear-gradient(90deg, rgba(255,255,255,1) -39%, rgba(249,166,82,1) 0%, rgba(209,31,53,1) 100%);
    padding: 0.5rem 1.5rem 0.5rem 9.0rem;
    font-family: var(--TitleFontBAE);
    color: #ffffff;
    min-width: 200px;
    padding-left: 9.0rem;
    border-radius: 20px 20px 0px 0px;
    position: relative;
}
.bck-box.bck-box-5 .bck-title:before,
.bck-box.bck-box-6 .bck-title:before,
.bck-box.bck-box-7 .bck-title:before,
.bck-box.bck-box-8 .bck-title:before {
    content: "";
    position: absolute;
    background-image: url(images/icono_learnmore.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 70px;
    width: 70px;
    height: 70px;
    left: 0.7rem;
    top: -1.0rem;
}
.bck-box.bck-box-5 .bck-content,
.bck-box.bck-box-6 .bck-content,
.bck-box.bck-box-7 .bck-content, 
.bck-box.bck-box-8 .bck-content {
    padding: 15px;
    background-color: rgb(var(--color2BAE));
}

.bck-box.bck-box-5 .bck-title {
    background: linear-gradient(90deg, rgba(255,255,255,1) -39%, rgba(249,166,82,1) 0%, rgba(209,31,53,1) 100%);
}
.bck-box.bck-box-5 .bck-title:before {
    background-image: url(images/icono_learnmore.png);
}

.bck-box.bck-box-6 .bck-title {
    background: linear-gradient(90deg, rgba(255,255,255,1) -39%, rgba(108,173,206,1) 0%, rgba(15,78,140,1) 100%);
}
.bck-box.bck-box-6 .bck-title:before {
    background-image: url(images/icono_everyday_language.png);
}

.bck-box.bck-box-7 .bck-title {
    background: linear-gradient(90deg, rgba(255,255,255,1) -39%, rgba(102,195,199,1) 0%, rgba(0,172,109,1) 100%);
}
.bck-box.bck-box-7 .bck-title:before {
    background-image: url(images/icono_multiculturalism.png);
}

.bck-box.bck-box-8 .bck-title {
    background: linear-gradient(90deg, rgba(255,255,255,1) -39%, rgba(230,156,174,1) 0%, rgba(111,44,145,1) 100%);
}
.bck-box.bck-box-8 .bck-title:before {
    background-image: url(images/icono_studySkills.png);
}

/*CAJAS POST-IT----*/
.bck-box.bck-box-9,
.bck-box.bck-box-10 {
    border: 0;
    border-radius: 0;
    padding: 0;
    max-width: 400px;
}
.bck-box.bck-box-9 .bck-title,
.bck-box.bck-box-10 .bck-title {
    font-family: 'Architects Daughter', cursive;
    background-color: #f9d45f;
    padding: 0.5rem 1.5rem;
    text-align: center;
    font-weight: bold
}
.bck-box.bck-box-9 .bck-content,
.bck-box.bck-box-10 .bck-content {
    padding: 1.0rem;
    text-align:center;     
    min-height:250px;
    position:relative;   
    border:1px solid #E8E8E8;
    border-top: 0;   
    display:inline-block;    
    background: #FCDD7B;
    background: -webkit-linear-gradient(-45deg, #FCDD7B 81%,#FCDD7B 82%,#FCDD7B 82%,#ffefba 100%);
    background: linear-gradient(135deg, #FCDD7B 81%,#FCDD7B 82%,#FCDD7B 82%,#ffefba 100%);
  }
  .bck-box.bck-box-9 .bck-content:after,
  .bck-box.bck-box-10 .bck-content:after {
    content: "";
    position:absolute;
    z-index:-1;
    right:-0px; bottom:20px;
    width:200px;
    height: 25px;
    background: rgba(0, 0, 0, 0.2);
    box-shadow:2px 15px 5px rgba(0, 0, 0, 0.40);
    -webkit-transform: matrix(-1, -0.1, 0, 1, 0, 0);
    transform: matrix(-1, -0.1, 0, 1, 0, 0);  
  }
  
.bck-box.bck-box-10 .bck-title {
    background-color: #A2D077;
}
.bck-box.bck-box-10 .bck-content {   
    background: #FCDD7B;
    background: -webkit-linear-gradient(-45deg, #B0D57A 81%,#B0D57A 82%,#B0D57A 82%,#ebffcd 100%);
    background: linear-gradient(135deg, #B0D57A 81%,#B0D57A 82%,#B0D57A 82%,#ebffcd 100%);
}
/*--*/
.bck-box.bck-box-11 {
    border: 0;
    border-radius: 0;
    background-color: #CEEBE9;
    padding-bottom: 35px;
    margin-bottom: 25px;
}
.bck-box.bck-box-11 .bck-title {
    font-weight: bold;
}
.bck-box.bck-box-11:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 30px;
    left: 0;
    background-image: url(images/Imagen_recorte.png);
    bottom: -12px;
    background-size: auto 30px;
    background-repeat: repeat no-repeat;
}

/*Cajas dialogos*/
.bck-box.bck-box-12,
.bck-box.bck-box-13 {
    background-color: #ffffff;
    border-color: #58A7DC;
    padding-bottom: 30px;
    margin-bottom: 40px;
}
.bck-box-12:after,
.bck-box-13:after {
    content: "";
    position: absolute;
    bottom: -17px;
    right: 70px;
    height: 31px;
    width: 30px;
    background: #ffffff;
    transform: rotate(45deg) matrix(1, 0, 0, 1, 0, 0);
    border-bottom: inherit;
    border-right: inherit;
}
.bck-box-13:after {
    right: 0;
    left: 70px;
}
.bck-box.bck-box-14 {
    border: 0;
    border-radius: 0;
    background-image: url(images/papel_arrugado.jpg);
    background-size: contain;
    background-repeat: round;
    padding: 0;
}
.bck-box.bck-box-14 p{
    margin-bottom: var(--MainLineHeight);
}
.bck-box.bck-box-14:before {
    content: "";
    position: absolute;
    width: 2px;
    height: 100%;
    top: 0;
    left: 35px;
    background: #E17B6D;
}
.bck-box.bck-box-14 > .bck-title {
    font-family: 'Architects Daughter', cursive;
    padding: 10px 15px 10px 50px;
}
.bck-box.bck-box-14 > .bck-content {
    padding: 0px 15px 15px 50px;
    background-image: repeating-linear-gradient(to bottom, transparent, transparent 24px, #60ABDD var(--MainLineHeight));
}

.bck-box.bck-box-15 {
    background-color: #FBF9EE;
    border: 0;
    border-radius: 0;
    background-image: -webkit-radial-gradient(#ffffff 34%,transparent 0),-webkit-radial-gradient(#cfcfc3 40%,transparent 0);
    background-repeat: repeat-y;
    background-size: 30px 30px;
    padding: 40px 15px 15px 40px;
    margin:55px 0 30px;
    box-shadow: 1px 2px 3px #0000003b;
    transform: rotate(-1deg);
}
.bck-box.bck-box-15:before, .bck-box.bck-box-15:after {
    content: "";
    position: absolute;
    width: 50%;
    height: 50px;
    top: -52px;
    left: 0;
    transform: translate(50%, 50%);
    background: url(images/papel_arrugado.jpg);
    opacity: 0.6;
}
.bck-box.bck-box-15:after {
    background: #FBC0A0;
    mix-blend-mode: multiply;
}

.bck-box.bck-box-16 {
    border-radius: 0;
    border: 0;
    box-shadow: 2px 2px 6px #0000005c;
    padding-left: 35px;
}
.bck-box.bck-box-16:before {
    content: "";
    position: absolute;
    width: 25px;
    height: 100%;
    background-color: #F58A6D;
    left: 0;
    top: 0;
    border-right: 7px double #ffffff;
}

.bck-box.bck-box-17 {
    border: 0;
    border-radius: 0;
    z-index: 1;
    background: #ffffff;
    border: 15px solid #1A85C5;
    border-left-width: 3px;
    margin-top: 50px;
    box-shadow: 4px 0px 7px 1px #0000006b;
}
.bck-box-17:before {
    content: "";
    background-image: url(images/icono_franjas_colores.png);
    position: absolute;
    height: 50px;
    width: 100%;
    max-width: 500px;
    top: -50px;
    right: 0;
    background-repeat: no-repeat;
    filter: drop-shadow(0px -3px 6px #A9A9A9);
}



/*------- GRIDS ------------------*/
/*GRIDS - Reglas NUEVAS*/
.bck-row.row {
    margin: var(--MainMargin);
}
.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
    padding-left: 0;
}
/*-------------------------*/

/*----- DESPLEGABLES ------*/
#actividad .bck-dropdown {
    width: 100%;
    margin: var(--MainMargin);
    background-color: transparent;
    border: 2px solid rgb(35,31, 32);
}
.bck-dropdown-button {
    cursor: pointer;
}
.bck-dropdown-titulo {
    font-size: calc(var(--MainText) * 1.11);
    padding-left: 10px;
    font-weight: bold;
}
.bck-dropdown-icon>.fa {
    border: 2px solid black;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    padding: 9px;
    width: 100%;
    height: 100%;
    text-align: center;
}
.bck-dropdown-content {
    background-color: #e6e6e6;
}
/*-------------*/
/*------ Archivo adjunto -----*/
.bck-file-label,
.bck-sub-label {
    background: none;
    max-width: none;
    border: 2px solid rgb(var(--colorppal));
    color: rgb(var(--colorppal));
    margin-left: -3px;
    margin-bottom: 0;
    border-radius: 0;
    position: relative;
    padding: 5px 8px 5px 9px;
    border-radius: 5px;
}
.bck-file-attach:hover .bck-file-label,
.bck-file-attach:active .bck-file-label,
.bck-file-attach:focus .bck-file-label {
    background-color: rgba(var(--colorppal),0.1);
    border-color: transparent;
}

.bck-file-attach .bck-file-label:before {
    font-family: 'FontAwesome';
    content: "\f15b";
    position: relative;
    bottom: 0;
    left: 0;
    border: 0;
    background: none;
    margin-right: 5px;
}
.bck-file-attach img {
    display: none;
}
.bck-file-attach span {
    display: block;
    margin: var(--MainMargin);
}


/*------ FLIPBOX ----------*/
#actividad .bck-flipbox {
    width: 100%;
    font-size: var(--MainText);
    font-weight: normal;
    cursor: pointer;
    margin: var(--MainMargin);
}
/*-----*/

/*------ Popup -------*/
#actividad .info-button {
    margin: var(--MainMargin);
    color: rgb(var(--colorppal));
}
#actividad .info-button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 44px;
    height: 44px;
    -webkit-box-shadow: 1px 1px 3px 1px rgba(85,85,85,.55);
    -moz-box-shadow: 1px 1px 3px 1px rgba(85,85,85,.55);
    box-shadow: 1px 1px 3px 1px rgba(85,85,85,.55);
    border: 2px solid rgb(var(--TextColor));
    margin: var(--MainMargin);
    color: rgb(var(--colorppal));
}
.info-template.shown {
    background: #fff
}
.info-template .info-title.shown {
    color: rgb(var(--TextColor));
    font-weight: 700
}
.info-template .info-icon {
    color: rgb(var(--TextColor))
}
.info-popover .popover-title
.popover-template .popover-title {
    color: rgb(var(--TextColor));
    font-weight: 700;
    font-size: var(--MainText);
    padding: 1.0rem 1.5rem;
}
.fa-info:before,
.info-popover .popover-title:before,
.popover-template .popover-title:before {

}
.info-popover .popover-content,
 .popover-template .popover-content {
    padding: 1.0rem 1.5rem;
}

/*--- Tooltip---*/
.popover .popover-title {
    font-size: calc(var(--MainText) / 1.2);
    font-weight: bold;
    line-height: var(--MainLineHeight);
}
.popover .popover-content {
    font-size: calc(var(--MainText) / 1.2);
    line-height: var(--MainLineHeight);
}

/*-------*/

/*------ Tablas y celdas -----------*/
#actividad div:not(.calculo) > table:not(.rf-tablegrid):not(.puzzle) {
    width: 100%;
    border: solid 2px rgb(35,31, 32);
    font-size: var(--MainText);
    margin: var(--MainMargin);
}
#actividad div:not(.calculo) > table:not(.rf-tablegrid):not(.puzzle) td,
#actividad div:not(.calculo) > table:not(.rf-tablegrid):not(.puzzle) th {
    border: 2px solid rgb(35,31, 32);
    padding: 10px;
    background: transparent
}

#actividad div:not(.calculo) > table:not(.rf-tablegrid):not(.puzzle).bck-table-1 {
    border-color: rgb(var(--colorppal));
}
#actividad div:not(.calculo) > table:not(.rf-tablegrid):not(.puzzle).bck-table-1 td,
#actividad div:not(.calculo) > table:not(.rf-tablegrid):not(.puzzle).bck-table-1 th {
    border-color: rgb(var(--colorppal));
}

#actividad div:not(.calculo) > table:not(.rf-tablegrid):not(.puzzle).bck-table-2 {
    border: 0;
}
#actividad div:not(.calculo) > table:not(.rf-tablegrid):not(.puzzle).bck-table-2 td,
#actividad div:not(.calculo) > table:not(.rf-tablegrid):not(.puzzle).bck-table-2 th {
    border: 0;
}

#actividad div:not(.calculo) > table:not(.rf-tablegrid):not(.puzzle) td.bck-td-1 {
    background-color: rgb(var(--colorppal));
    color: #ffffff;
}
#actividad div:not(.calculo) > table:not(.rf-tablegrid):not(.puzzle) td.bck-td-2 {
    background-color: rgba(var(--colorppal),0.2);
}

/*------------*/


#actividad .player.audio,
#actividad .player.video,
#help-panel-content .player,
#remote-alert-modal-rich .player {
    height: 28px!important;
    width: 28px;
    display: inline-block;
    background-color: rgb(var(--colorppal));
    background-image: url(../../../images/shared/multimedia-icons.png);
    background-repeat: no-repeat;
    background-position-x: -30px;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    margin: 0 5px;
    vertical-align: sub;
}

.item-container .icon:before {
    content: "";
    background-repeat: no-repeat;
    -webkit-background-size: auto 100%;
    -moz-background-size: auto 100%;
    -o-background-size: auto 100%;
    background-size: auto 100%;
    background-position: 50%;
    display: inline-block;
    vertical-align: middle;
    height: 40px;
    width: 54px;
    margin-top: -16px
}

body:not(.edit) .front .bck-flipbox-section,body:not(.edit) .front .bck-flipbox-title {
    color: rgb(var(--TextColor));
    font-size: 18px
}

body:not(.edit) .bck-flipbox-face.front {
    color: rgb(var(--TextColor));
    border-color: rgb(var(--TextColor));
    -moz-box-shadow: 4px 6px 5px rgba(0,0,0,.26);
    -webkit-box-shadow: 4px 6px 5px rgba(0,0,0,.26);
    box-shadow: 4px 6px 5px rgba(0,0,0,.26)
}

body:not(.edit) .bck-flipbox-face.back {
    background-color: rgb(var(--TextColor));
    border-color: rgb(var(--TextColor));
    font-size: 18px
}

/*----------------------------------*/
/*------- PLANTILLAS -----------------*/

/*--- Marcar palabras ----*/
#actividad .markwords-word {
    line-height: var(--MainLineHeight) !important;
}
#actividad .markword-active,
#actividad .markword-correct,
#actividad .markword-false,
#actividad .markword-solution {
    line-height: var(--MainLineHeight) !important;
    padding: 0 4px !important;
    border: 2px solid rgb(35,31, 32) !important;
    border-radius: 5px !important;
    color: rgb(35,31, 32) !important;
}
#actividad .markword-correct {
    border-color: #57e900 !important;
}
#actividad .markword-false {
    border-color: #ff3626 !important;
}
#actividad .markword-solution {
    border-color: transparent !important;
}

#actividad .workspace.matching .opciones .opcion:not(.ko):not(.ok),#actividad .workspace.multiple-choice .opcion,#actividad .workspace.ordenar .js-rank-item {
    border: 2px solid rgb(var(--colorppal));
    background: #fff
}

#actividad .workspace.matching .opciones .opcion.emparejado.destino {
    border-width: 2px 2px 2px 0
}

#actividad .workspace.matching .opciones .opcion.emparejado.origen {
    border-width: 2px 0 2px 2px
}

#actividad .workspace.clasificar .clasificar_lista .classify-item {
    border: 0 solid #d8d8d8
}

#actividad .workspace.clasificar .clasificar_conjuntos .conjunto .group-box {
    border: 2px solid rgb(var(--colorppal));
    padding-top: 10px
}

.fillblanks-draggable-wrapper .response {
    border: 0 solid #d8d8d8;
    background: #f5e6e6
}

.fillblanks-draggable-wrapper .response .bck-i-fullscreen-wrapper {
    padding: 0
}

body.content_type_clase_Majestic_CluesBae_dev #actividad .content .fillblanks-draggable-wrapper .response .bck-i-fullscreen,body.content_type_clase_Majestic_CluesBae_dev #actividad .content .fillblanks-draggable .img-input-container.imgFilled img {
    width: auto;
    height: 100px!important;
    padding: 0
}

.slide.crosswords-puzzle .enunciado,.slide.crosswords .enunciados .enunciado {
    padding: 0;
    font-size: 1.6rem;
    line-height: 2rem
}

.slide.crosswords-puzzle .enunciado:before,.slide.crosswords .enunciados .enunciado:before {
    content: counter(bck-li-counter) ".";
    position: absolute;
    top: -3px;
    left: -24px;
    display: block;
    width: 24px;
    height: 24px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    border: none;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    background: transparent;
    color: #333;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    line-height: 2.5rem
}

#actividad .workspace.memory .front {
    z-index: 2;
    width: 120px;
    height: 140px;
    margin: 10px;
    border-radius: 10px;
    border: 2px solid #d8d8d8;
    background: #fff url(imagenes/favicon.png) 50%/50px auto no-repeat;
    transition: all .5s ease
}

.rf-wordcontainer li .index {
    margin-right: 5px;
    font-weight: 700;
    font-size: 1.3rem
}

@media (max-width: 579px) {
    #actividad .carousel-inner .item-container {
        margin-top:0
    }
}

@media (max-width: 767px) {
    .navbar-bottom {
        padding-left:1em;
        padding-right: 1em;
        min-height: 43px
    }
}


/*------ AJUSTES  GENERALES ------------*/
/*Quitamos el margin-top de la slide en dispositivos pequeños*/
@media (max-width: 767px) {
   #actividad .carousel-inner .item-container {
        margin-top: 0;
    }
}

/*------*/
/*----- AJUSTES cuando se añade imagen de fondo ----------*/
#actividad .carousel-inner .item-container.aux-bckg .class_slide, #actividad .carousel-inner .item-container.aux-fullscreen.is-left .class_slide {
    padding-left: 0;
    padding-right: 0;
}

#actividad .carousel-inner .item-container.aux-fullscreen .class_slide, #actividad .carousel-inner .item-container.aux-bckg .class_slide {
    padding-left: 0;
    margin-left: 0;
}

#actividad .carousel-inner .item-container.aux-fullscreen.is-large .class_slide, #actividad .carousel-inner .item-container.aux-bckg.is-large .class_slide {
    width: 50%;
}

#actividad .carousel-inner .item-container.aux-bckg.is-large .slide_main {
    padding: 0 40px;
}

#actividad .carousel-inner .item-container.aux-bckg.is-large .header .title {
    padding: 20px 40px;
}

#actividad .carousel-inner .item-container.aux-bckg.is-medium .slide_main {
    padding: 0 40px;
}

#actividad .carousel-inner .item-container.aux-bckg.is-medium .header .title {
    padding: 20px 40px;
}

#actividad .carousel-inner .item-container.aux-bckg.is-small .slide_main {
    padding: 0 40px;
}

#actividad .carousel-inner .item-container.aux-bckg.is-small .header .title {
    padding: 20px 40px;
}

#actividad .carousel-inner .item-container.aux-fullscreen.is-bottom .class_slide, #actividad .carousel-inner .item-container.aux-fullscreen.is-top .class_slide, #actividad .carousel-inner .item-container.aux-fullscreen.is-right .class_slide {
    margin-left: 0;
    padding-left: 0;
    padding-right: 0;
}

@media screen and (max-width: 1023px) {
    #actividad .carousel-inner .item-container.aux-fullscreen, #actividad .carousel-inner .item-container.aux-bckg {
        padding-left: 0;
    }
}
/*--*/
/*------ AJUSTES EN EL NAVBAR -------*/
#bottom-navigator li {
    width: 15px;
    height: 15px;
}
.content-wrapper {
    padding-bottom: 75px;
}
.navbar-bottom {
    background: #D1D5DB;
}

.logo-publisher {
    display: none;
}
.edit .logo-publisher {
    display: none
}
#bottom-navigator li.active,
#bottom-navigator li:hover {
    background: rgb(var(--colorppal));
}

@media only screen and (max-width: 640px) {
    .logo-publisher {
        display: none;
    }

    .content-wrapper {
        padding-bottom: 42px;
    }
}

@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
    .content_type_clase_Majestic_CluesBae_dev #actividad .content .header:after {
        display: none;
    }    
}

/*-------*/

/*------ AJUSTES EN EL TOC -----*/
/*Cambiamos la posición de la imagen del TOC para que se visualice el icono en móvil*/
#indice .unit-content .header {
    background-position: bottom;
}

/*-*/
/*----*/

/*------- coursetag_BAE_majestic --------*/
.coursetag_bae_majestic  #actividad .content .header .title {
    border-radius: 0px 0px 30px 30px;
    width: fit-content;
    width: -moz-fit-content;
}
.content_type_clase_Majestic_CluesBae_dev #actividad .content .header .title h3 {
    font-family: var(--TitleFontBAE);
}
