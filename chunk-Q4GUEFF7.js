import{a as oe,b as re,c as ce,d as le,e as de,f as me}from"./chunk-2KBO2ES2.js";import"./chunk-EWHKDAZZ.js";import{a as P,b as v,c as w,d as y,e as D,f as O,g as S,h as E,i as T,j as I,k,l as b}from"./chunk-QFJM2IU4.js";import{d as ne,e as ae}from"./chunk-IDTJ4JVD.js";import"./chunk-6WINSJK4.js";import{$ as Q,Ab as M,Fa as h,Ga as U,La as X,Pa as a,Qa as F,Xa as l,ab as p,ba as _,c as Z,cb as Y,d as q,db as ee,e as K,eb as te,fa as H,ga as R,hb as i,ib as n,jb as s,kb as f,lb as C,nb as j,qb as x,rb as z,ub as r,vb as ie,wb as u}from"./chunk-3UO3BMX6.js";function Ce(e,t){if(e&1&&(i(0,"a",6),r(1),n()),e&2){let o=t.$implicit;l("href",o.href,U),a(1),u(" ",o.name," ")}}var pe=(()=>{let t=class t{constructor(g,d){this._dialogRef=g,this._data=d,this.getData=X(null)}ngOnInit(){this.getData.set(this._data)}closeModal(){return this._dialogRef.close()}};t.\u0275fac=function(d){return new(d||t)(F(oe),F(re))},t.\u0275cmp=_({type:t,selectors:[["app-dialog-certificates"]],standalone:!0,features:[M],decls:18,vars:8,consts:[["mat-dialog-title",""],[3,"click"],["src","assets/icons/dialog/close.svg","alt","Bot\xE3o para fechar o dialog"],[3,"innerHTML"],[1,"centralizandoImagem"],["width","50%",3,"src","alt"],["target","_blank",1,"btn","btn-primary",3,"href"],["target","_blank","class","btn btn-primary",3,"href"]],template:function(d,c){if(d&1&&(i(0,"header")(1,"h2",0),r(2),n(),i(3,"button",1),x("click",function(){return c.closeModal()}),s(4,"img",2),n()(),i(5,"mat-dialog-content")(6,"h3"),r(7,"Descri\xE7\xE3o"),n(),s(8,"article",3)(9,"article",3)(10,"article",3)(11,"article",3)(12,"article",3),i(13,"div",4),s(14,"img",5),n(),i(15,"nav"),ee(16,Ce,2,2,"a",7,Y),n()()),d&2){let m,L,B,J,$,V,G,N,W;a(2),ie((m=c.getData())==null?null:m.nome),a(6),l("innerHTML",(L=c.getData())==null?null:L.empresa,h),a(1),l("innerHTML",(B=c.getData())==null?null:B.descricao,h),a(1),l("innerHTML",(J=c.getData())==null?null:J.dataEmissao,h),a(1),l("innerHTML",($=c.getData())==null?null:$.descricao,h),a(1),l("innerHTML",(V=c.getData())==null?null:V.codigoCredencial,h),a(2),l("src",(G=c.getData())==null?null:G.src2,U)("alt",(N=c.getData())==null?null:N.alt2),a(2),te((W=c.getData())==null?null:W.links)}},dependencies:[me,le,de],styles:[".dialog-container-projects .mdc-dialog__container{width:850px}[_nghost-%COMP%]{padding:10px 30px;display:flex;flex-direction:column}[_nghost-%COMP%]   header[_ngcontent-%COMP%], [_nghost-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]{padding:0;margin:0 0 15px}[_nghost-%COMP%]   header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}[_nghost-%COMP%]   header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px;padding:0;margin:0;color:var(--white);word-wrap:none;max-width:100%}[_nghost-%COMP%]   header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;border:none;padding:0;cursor:pointer}[_nghost-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;color:var(--black-010)}[_nghost-%COMP%]   article[_ngcontent-%COMP%]{margin-bottom:15px;color:--cinza-claro}[_nghost-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]{display:flex}.centralizandoImagem[_ngcontent-%COMP%]{text-align:center}"]});let e=t;return e})();var A=function(e){return e.CERTIFICATE="dialog-container-certificate",e}(A||{});function ge(e,t){e&1&&(i(0,"th",8),r(1," Idioma "),n())}function _e(e,t){if(e&1&&(i(0,"td",9),r(1),n()),e&2){let o=t.$implicit;a(1),u(" ",o.idioma," ")}}function he(e,t){e&1&&(i(0,"th",8),r(1," Nivel "),n())}function Me(e,t){if(e&1&&(i(0,"td",9),r(1),n()),e&2){let o=t.$implicit;a(1),u(" ",o.nivel," ")}}function xe(e,t){e&1&&s(0,"tr",10)}function be(e,t){e&1&&s(0,"tr",11)}var fe=(()=>{let t=class t{constructor(){this.arrayIdiomas=[{idioma:"Portugu\xEAs",nivel:"Fluente"},{idioma:"Ingles",nivel:"Intermediario"}],this.displayedColumns=["idioma","nivel"]}ngOnInit(){this.dataSourceIdioma=new b(this.arrayIdiomas)}};t.\u0275fac=function(d){return new(d||t)},t.\u0275cmp=_({type:t,selectors:[["app-idiomas"]],standalone:!0,features:[M],decls:12,vars:3,consts:[[1,"container"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","idioma"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nivel"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(d,c){d&1&&(i(0,"div",0)(1,"h2"),r(2,"Idiomas"),n(),i(3,"table",1),f(4,2),p(5,ge,2,0,"th",3)(6,_e,2,1,"td",4),C(),f(7,5),p(8,he,2,0,"th",3)(9,Me,2,1,"td",4),C(),p(10,xe,1,0,"tr",6)(11,be,1,0,"tr",7),n()()),d&2&&(a(3),l("dataSource",c.dataSourceIdioma),a(7),l("matHeaderRowDef",c.displayedColumns),a(1),l("matRowDefColumns",c.displayedColumns))},dependencies:[k,P,w,S,y,v,E,D,O,T,I],styles:["[_nghost-%COMP%]{margin-top:25px;padding:25px 0;display:flex;justify-content:center;align-items:center;flex-direction:column;background:var(--black-010)}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px;text-align:center}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:20px;margin:30px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex:20%;width:160px;height:160px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:100%;cursor:pointer;background:var(--black-010);border:2px solid var(--primary);border-radius:7px;transition:.5s}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:var(--primary)}@media (max-width: 750px){[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex:100%}}mat-icon[_ngcontent-%COMP%]{cursor:pointer}"]});let e=t;return e})();function Pe(e,t){e&1&&(i(0,"th",10),r(1," Nome "),n())}function ve(e,t){if(e&1&&(i(0,"td",11),r(1),n()),e&2){let o=t.$implicit;a(1),u(" ",o.nome," ")}}function we(e,t){e&1&&(i(0,"th",10),r(1," Universidade "),n())}function ye(e,t){if(e&1&&(i(0,"td",11),r(1),n()),e&2){let o=t.$implicit;a(1),u(" ",o.empresa," ")}}function De(e,t){e&1&&(i(0,"th",10),r(1," View "),n())}function Oe(e,t){if(e&1){let o=j();i(0,"td",12),x("click",function(){let c=H(o).$implicit,m=z();return R(m.openDialog(c))}),i(1,"mat-icon"),r(2,"open_in_new"),n()()}}function Se(e,t){e&1&&s(0,"tr",13)}function Ee(e,t){e&1&&s(0,"tr",14)}function Te(e,t){e&1&&(i(0,"th",10),r(1," Nome. "),n())}function Ie(e,t){if(e&1&&(i(0,"td",11),r(1),n()),e&2){let o=t.$implicit;a(1),u(" ",o.nome," ")}}function ke(e,t){e&1&&(i(0,"th",10),r(1," Empresa. "),n())}function He(e,t){if(e&1&&(i(0,"td",11),r(1),n()),e&2){let o=t.$implicit;a(1),u(" ",o.empresa," ")}}function Re(e,t){e&1&&(i(0,"th",10),r(1," View "),n())}function Ue(e,t){if(e&1){let o=j();i(0,"td",12),x("click",function(){let c=H(o).$implicit,m=z();return R(m.openDialog(c))}),i(1,"mat-icon"),r(2,"open_in_new"),n()()}}function Fe(e,t){e&1&&s(0,"tr",13)}function je(e,t){e&1&&s(0,"tr",14)}var it=(()=>{var t;let o=class o{constructor(){q(this,t,void 0);K(this,t,Q(ce)),this.arrayFormacao=[{nome:"Bacharelado em Sistemas de informa\xE7\xE3o",empresa:"Centro Universitario Fam",dataEmissao:"12 de Mar\xE7o de 2024",descricao:"",codigoCredencial:"43c258f3-35f9-4237-abf6-6e7778e851b8",urlDaCredencial:"",src1:"assets/img/certificados/bachareladoSist.png",alt1:'Certificado de conclus\xE3o curso "Bacharelado em Sistemas de Informa\xE7\xE3o"',src2:"assets/img/certificados/bachareladoSist.png",alt2:'Certificado de conclus\xE3o curso "Bacharelado em Sistemas de Informa\xE7\xE3 ',links:[{name:"Certificado",href:"https://fam.ged.docxpress.com.br/Docs/share/default.aspx?Doc=43c258f3-35f9-4237-abf6-6e7778e851b8"}]}],this.arrayCertificado=[{nome:"PHP do Zero a Maestria +4 Projetos incriveis!",empresa:"Udemy",dataEmissao:"23 de Setembro de 2022",descricao:"",codigoCredencial:"UC-193c1fe1-2c18-4476-9be2-da7d56b60587",urlDaCredencial:"",src1:"assets/icons/knowledge/php.svg",alt1:"Certificado Udemy ",src2:"assets/img/certificados/UC-193c1fe1-2c18-4476-9be2-da7d56b60587.jpg",alt2:'Certificado de conclus\xE3o curso "PHP do Zero a Maestria +4 Projetos incriveis!"',links:[{name:"Certificado",href:"https://www.udemy.com/certificate/UC-193c1fe1-2c18-4476-9be2-da7d56b60587/"}]},{nome:"Spring Boot Expert: JPA, RESTFUL API, Security, JWT e mais",empresa:"Udemy",dataEmissao:"12 de Setembro de 2023",descricao:"",codigoCredencial:"UC-acc38a8a-8232-4fd2-b484-6af5089ad339",urlDaCredencial:"",src1:"assets/icons/knowledge/leaf-solid.svg",alt1:"Certificado Udemy ",src2:"assets/img/certificados/UC-acc38a8a-8232-4fd2-b484-6af5089ad339.jpg",alt2:'Certificado de conclus\xE3o curso Spring "Spring Boot Expert: JPA, RESTFUL API, Security, JWT e mais" ',links:[{name:"Certificado",href:"https://www.udemy.com/certificate/UC-acc38a8a-8232-4fd2-b484-6af5089ad339/"}]},{nome:"Java Completo 2023 Programa\xE7\xE3o orientada a Objetos + Projetos",empresa:"Udemy",dataEmissao:"27 de junho de 2023",descricao:"",codigoCredencial:"UC-d7b4f357-c9cd-4c7e-83eb-18ddbf06d079",urlDaCredencial:"",src1:"assets/icons/knowledge/java.svg",alt1:"Certificado Udemy ",src2:"assets/img/certificados/UC-d7b4f357-c9cd-4c7e-83eb-18ddbf06d079.jpg",alt2:'Certificado de conclus\xE3o curso Spring "Java Completo 2023 Programa\xE7\xE3o orientada a Objetos + Projetos" ',links:[{name:"Certificado",href:"https://www.udemy.com/certificate/UC-d7b4f357-c9cd-4c7e-83eb-18ddbf06d079/"}]},{nome:"Angular 9 + Spring Boot 2.2 Fullstack Completo e Atualizado",empresa:"Udemy",dataEmissao:"21 de novembro de 2023",descricao:"",codigoCredencial:"UC-d52c3440-63f7-4152-bad0-abec7f6579e8",urlDaCredencial:"",src1:"assets/icons/knowledge/angular.svg",alt1:"Certificado Udemy ",src2:"assets/img/certificados/UC-d52c3440-63f7-4152-bad0-abec7f6579e8.jpg",alt2:'Certificado de conclus\xE3o curso Spring "Spring Boot Expert: JPA, RESTFUL API, Security, JWT e mais" ',links:[{name:"Certificado",href:"https://www.udemy.com/certificate/UC-d52c3440-63f7-4152-bad0-abec7f6579e8/"}]},{nome:"Linux Fundamentos",empresa:"FIAP",dataEmissao:"24 de Janeiro de 2024",descricao:"",codigoCredencial:"046718204df98f53ed72358eb0408436",urlDaCredencial:"",src1:"assets/icons/knowledge/linux.svg",alt1:'Certificado de conclus\xE3o curso de Linux "Linux Fundamentos" ',src2:"assets/img/certificados/certificado.png",alt2:'Certificado de conclus\xE3o curso de Linux "Linux Fundamentos" ',links:[{name:"Certificado",href:"https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/105437/046718204df98f53ed72358eb0408436/certificado.png"}]},{nome:"Gest\xE3o de infraestrutura de TI",empresa:"FIAP",dataEmissao:"09 de maio de 2024",descricao:"",codigoCredencial:"189eec19b98c9f5650e1f7193e3d4fd8",urlDaCredencial:"",src1:"assets/img/certificados/gestaoinfrati.png",alt1:'Certificado de conclus\xE3o Gest\xE3o de infraestrutura de TI" ',src2:"assets/img/certificados/gestaoinfrati.png",alt2:'Certificado de conclus\xE3o curso de Gest\xE3o de infraestrutura de TI" ',links:[{name:"Certificado",href:"https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/113929/189eec19b98c9f5650e1f7193e3d4fd8/certificado.png"}]}],this.displayedColumns=["nome","empresa","visualizar"]}ngOnInit(){this.dataSourceFormacao=new b(this.arrayFormacao),this.dataSourceCertificados=new b(this.arrayCertificado)}openDialog(d){Z(this,t).open(pe,{data:d,panelClass:A.CERTIFICATE})}};t=new WeakMap,o.\u0275fac=function(c){return new(c||o)},o.\u0275cmp=_({type:o,selectors:[["app-certificates"]],standalone:!0,features:[M],decls:31,vars:6,consts:[[1,"container"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","nome"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","empresa"],["matColumnDef","visualizar"],["mat-cell","",3,"click",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-cell","",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(c,m){c&1&&(i(0,"div",0)(1,"h2"),r(2,"Forma\xE7\xE3o Academica"),n(),i(3,"table",1),f(4,2),p(5,Pe,2,0,"th",3)(6,ve,2,1,"td",4),C(),f(7,5),p(8,we,2,0,"th",3)(9,ye,2,1,"td",4),C(),f(10,6),p(11,De,2,0,"th",3)(12,Oe,3,0,"td",7),C(),p(13,Se,1,0,"tr",8)(14,Ee,1,0,"tr",9),n(),s(15,"br"),i(16,"h2"),r(17,"Certificados"),n(),i(18,"table",1),f(19,2),p(20,Te,2,0,"th",3)(21,Ie,2,1,"td",4),C(),f(22,5),p(23,ke,2,0,"th",3)(24,He,2,1,"td",4),C(),f(25,6),p(26,Re,2,0,"th",3)(27,Ue,3,0,"td",7),C(),p(28,Fe,1,0,"tr",8)(29,je,1,0,"tr",9),n(),s(30,"app-idiomas"),n()),c&2&&(a(3),l("dataSource",m.dataSourceFormacao),a(10),l("matHeaderRowDef",m.displayedColumns),a(1),l("matRowDefColumns",m.displayedColumns),a(4),l("dataSource",m.dataSourceCertificados),a(10),l("matHeaderRowDef",m.displayedColumns),a(1),l("matRowDefColumns",m.displayedColumns))},dependencies:[k,P,w,S,y,v,E,D,O,T,I,ae,ne,fe],styles:["[_nghost-%COMP%]{margin-top:25px;padding:25px 0;display:flex;justify-content:center;align-items:center;flex-direction:column;background:var(--black-010)}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px;text-align:center}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:20px;margin:30px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex:20%;width:160px;height:160px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:100%;cursor:pointer;background:var(--black-010);border:2px solid var(--primary);border-radius:7px;transition:.5s}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:var(--primary)}@media (max-width: 750px){[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex:100%}}table[_ngcontent-%COMP%]{margin-bottom:10px}mat-icon[_ngcontent-%COMP%]{cursor:pointer}"]});let e=o;return e})();export{it as CertificatesComponent};
