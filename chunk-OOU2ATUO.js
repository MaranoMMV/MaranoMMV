import{a as v,b as D,c as O,d as y,e as S,f as T,g as E,h as I,i as k,j as R,k as F,l as H}from"./chunk-QFJM2IU4.js";import{d as b,e as z}from"./chunk-IDTJ4JVD.js";import"./chunk-6WINSJK4.js";import{Ab as P,Pa as o,Xa as p,ab as c,ba as g,fa as _,ga as M,hb as n,ib as a,jb as f,kb as s,lb as u,nb as h,qb as x,rb as w,ub as i,wb as C}from"./chunk-3UO3BMX6.js";function V(e,t){e&1&&(n(0,"th",10),i(1," Nome "),a())}function j(e,t){if(e&1&&(n(0,"td",11),i(1),a()),e&2){let r=t.$implicit;o(1),C(" ",r.nome," ")}}function $(e,t){e&1&&(n(0,"th",10),i(1," Publicadora "),a())}function q(e,t){if(e&1&&(n(0,"td",11),i(1),a()),e&2){let r=t.$implicit;o(1),C(" ",r.publicadora," ")}}function L(e,t){e&1&&(n(0,"th",10),i(1," Visualizar "),a())}function U(e,t){if(e&1){let r=h();n(0,"td",12),x("click",function(){let m=_(r).$implicit,A=w();return M(A.openPDF(m.href))}),n(1,"mat-icon"),i(2,"open_in_new"),a()()}}function N(e,t){e&1&&f(0,"tr",13)}function B(e,t){e&1&&f(0,"tr",14)}var X=(()=>{let t=class t{constructor(){this.displayedColumns=["nome","publicadora","visualizar"],this.arraymagazine=[{nome:"CATI FAM III",publicadora:"Centro Universitario FAM",pagina:"1-4, 568-575",nomeProjeto:"Lanche on net: Tudo que o seu restaurante precisa",href:"assets/magazine/catifam3.pdf"},{nome:"CATI FAM IV",publicadora:"Centro Universitario FAM",pagina:"1-4, 216-232",nomeProjeto:"Lanche on net: Tudo que o seu restaurante precisa",href:"assets/magazine/catifam4.pdf"}]}ngOnInit(){this.dataSourceMagazine=new H(this.arraymagazine)}openPDF(d){window.open(d,"_blank")}};t.\u0275fac=function(l){return new(l||t)},t.\u0275cmp=g({type:t,selectors:[["app-magazine"]],standalone:!0,features:[P],decls:15,vars:3,consts:[[1,"container"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","nome"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","publicadora"],["matColumnDef","visualizar"],["mat-cell","",3,"click",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-cell","",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(l,m){l&1&&(n(0,"h2"),i(1,"Revistas Publicadas"),a(),n(2,"div",0)(3,"table",1),s(4,2),c(5,V,2,0,"th",3)(6,j,2,1,"td",4),u(),s(7,5),c(8,$,2,0,"th",3)(9,q,2,1,"td",4),u(),s(10,6),c(11,L,2,0,"th",3)(12,U,3,0,"td",7),u(),c(13,N,1,0,"tr",8)(14,B,1,0,"tr",9),a()()),l&2&&(o(3),p("dataSource",m.dataSourceMagazine),o(10),p("matHeaderRowDef",m.displayedColumns),o(1),p("matRowDefColumns",m.displayedColumns))},dependencies:[F,v,O,E,y,D,I,S,T,k,R,z,b],styles:["[_nghost-%COMP%]{margin-top:25px;padding:25px 0;display:flex;justify-content:center;align-items:center;flex-direction:column;background:var(--black-010)}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px;text-align:center;margin:0 0 25px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:20px;margin:30px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex:20%;width:160px;height:160px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:100%;cursor:pointer;background:var(--black-010);border:2px solid var(--primary);border-radius:7px;transition:.5s}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:var(--primary)}@media (max-width: 750px){[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex:100%}}table[_ngcontent-%COMP%]{margin-bottom:10px;max-width:100%}"]});let e=t;return e})();export{X as MagazineComponent};
