(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{16:function(e,t,i){},17:function(e,t,i){},18:function(e,t,i){},20:function(e,t,i){"use strict";i.r(t);var a=i(7),s=i.n(a),n=(i(15),i(9)),r=i(2),c=i(1),l=(i(16),i(10)),o=(i(17),i(18),i(0)),m=function(e){var t=e.title,i=e.description,a=e.imgUrl,s=e.imdbUrl;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{src:a,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8",children:t})})]}),Object(o.jsxs)("div",{className:"content",children:[i,Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:s,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(o.jsx)("div",{className:"movies",children:t.map((function(e){return Object(o.jsx)(m,Object(l.a)({},e),e.imdbId)}))})},j=i(3),b=i.n(j),u=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/,h=function(e){var t=e.onAdd,i=Object(c.useState)(""),a=Object(r.a)(i,2),s=a[0],n=a[1],l=Object(c.useState)(""),m=Object(r.a)(l,2),d=m[0],j=m[1],h=Object(c.useState)(""),p=Object(r.a)(h,2),g=p[0],O=p[1],x=Object(c.useState)(""),f=Object(r.a)(x,2),w=f[0],v=f[1],M=Object(c.useState)(""),N=Object(r.a)(M,2),U=N[0],B=N[1],y=Object(c.useState)(!1),z=Object(r.a)(y,2),I=z[0],T=z[1],_=Object(c.useState)(!1),S=Object(r.a)(_,2),k=S[0],A=S[1],D=Object(c.useState)(!1),V=Object(r.a)(D,2),Y=V[0],C=V[1],Z=Object(c.useState)(!1),F=Object(r.a)(Z,2),X=F[0],L=F[1],q=Object(c.useState)(!1),E=Object(r.a)(q,2),P=E[0],R=E[1],J=function(e){return u.test(e)};return Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({title:s,description:d,imgUrl:g,imdbUrl:w,imdbId:U}),n(""),j(""),O(""),v(""),B(""),T(!1),A(!1),C(!1),L(!1),R(!1)},children:[Object(o.jsxs)("label",{children:["Title",Object(o.jsx)("input",{type:"text",className:b()("input",{"input--error":I&&!s}),placeholder:"Plz enter a title",value:s,onChange:function(e){return n(e.target.value.trim())},onBlur:function(){s||T(!0)}})]}),Object(o.jsx)("p",{className:b()("message",{"message--error":I&&!s}),children:I&&!s&&"required"}),Object(o.jsxs)("label",{children:["Description",Object(o.jsx)("input",{type:"text",className:b()("input",{"input--error":k&&!d}),placeholder:"Plz enter a description",value:d,onChange:function(e){return j(e.target.value.trim())},onBlur:function(){d||A(!0)}})]}),Object(o.jsx)("p",{className:b()("message",{"message--error":k&&!d}),children:k&&!d&&"required"}),Object(o.jsxs)("label",{children:["Image Url",Object(o.jsx)("input",{type:"text",className:b()("input",{"input--error":Y&&!J(g)}),placeholder:"Plz enter a imgUrl",id:"imgUrl",value:g,onChange:function(e){return O(e.target.value.trim())},onBlur:function(){J(g)||C(!0)}})]}),Object(o.jsx)("p",{className:b()("message",{"message--error":Y&&!J(g)}),children:Y&&!J(g)&&"required URL"}),Object(o.jsxs)("label",{children:["Imdb Url",Object(o.jsx)("input",{type:"text",className:b()("input",{"input--error":X&&!J(w)}),placeholder:"Plz enter a imdbUrl",value:w,id:"imdbUrl",onChange:function(e){return v(e.target.value.trim())},onBlur:function(){J(w)||L(!0)}})]}),Object(o.jsx)("p",{className:b()("message",{"message--error":X&&!J(w)}),children:X&&!J(w)&&"required URL"}),Object(o.jsxs)("label",{children:["Imdb ID",Object(o.jsx)("input",{type:"text",className:b()("input",{"input--error":P&&!U}),placeholder:"Plz enter a imdbId",value:U,onChange:function(e){return B(e.target.value)},onBlur:function(){U||R(!0)}})]}),Object(o.jsx)("p",{className:b()("message",{"message--error":P&&!U}),children:P&&!U&&"required"}),Object(o.jsx)("button",{type:"submit",className:"button",disabled:!(s&&U&&J(g)&&J(w)),children:"Add"})]})},p=i(8),g=function(){var e=Object(c.useState)(p),t=Object(r.a)(e,2),i=t[0],a=t[1];return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)(d,{movies:i})}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(h,{onAdd:function(e){a([].concat(Object(n.a)(i),[e]))}})})]})};s.a.render(Object(o.jsx)(g,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[20,1,2]]]);
//# sourceMappingURL=main.57dfec7a.chunk.js.map