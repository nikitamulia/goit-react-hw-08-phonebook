"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[600],{2600:function(n,e,r){r.r(e),r.d(e,{default:function(){return _}});var o,i,t,a,d,p,s,l,c,x=r(885),h=r(5705),m=r(7103),u=r(9434),g=r(8724),b=r(168),f=r(6444),w=r(1087),Z=f.ZP.div(o||(o=(0,b.Z)(["\n  width: 500px;\n  height: 468px;\n  margin: 0 auto;\n  background-color: trasparent;\n  padding: 40px 65px 60px;\n  border-radius: 20px;\n\n  @media screen and (max-width: 768px) {\n    width: 320px;\n    height: 568px;\n    padding: 107px 20px;\n    border-radius: 0px;\n  }\n"]))),j=f.ZP.input(i||(i=(0,b.Z)(["\n  width: 410px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  outline: none;\n  height: 34px;\n  padding-left: 55px;\n  padding-right: 55px;\n  font-size: 18px;\n  line-height: 27px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 0.5px, solid;\n  border-color: #e7eaf2;\n\n  :focus {\n    border-color: #0396FF;\n  }\n\n  ::placeholder {\n    color: #e7eaf2;\n  }\n\n  @media screen and (max-width: 768px) {\n    width: 280px;\n    height: 32px;\n  }\n"]))),v=f.ZP.svg(t||(t=(0,b.Z)(["\n  position: absolute;\n  left: 10px;\n  top: 25px;\n"]))),k=f.ZP.span(a||(a=(0,b.Z)(["\nposition: absolute;\nright: 10px;\ntop: 25px;\ncolor: #fff;\n"]))),P=f.ZP.label(d||(d=(0,b.Z)(["\n  position: relative;\n  width: max-content;\n  display: block;\n"]))),z=f.ZP.button(p||(p=(0,b.Z)(["\n  display: block;\n  width: 300px;\n  height: 50px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  box-sizing: border-box;\n  border-radius: 20px;\n  text-transform: uppercase;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: 0.1em;\n  background-color: #24cca7;\n  border-color: transparent;\n  outline: none;\n  color: white;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  cursor: pointer;\n\n  :hover,\n  :focus {\n    border: 1px solid #24cca7;\n    color: #24cca7;\n    background-color: #ffffff;\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n      color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  @media screen and (max-width: 768px) {\n    width: 280px;\n  }\n"]))),C=(0,f.ZP)(w.rU)(s||(s=(0,b.Z)(["\n  display: flex;\n  text-decoration: none;\n  align-items: center;\n  justify-content: center;\n  width: 300px;\n  height: 50px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  box-sizing: border-box;\n  border-radius: 20px;\n  text-transform: uppercase;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: 0.1em;\n  background-color: #fff;\n  color: #4a56e2;\n  border: 1px solid #4a56e2;\n\n  :hover,\n  :focus {\n    color: #fff;\n    background-color: #4a56e2;\n    border: 1px solid #4a56e2;\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n      color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n  @media screen and (max-width: 768px) {\n    width: 280px;\n  }\n"]))),E=(f.ZP.form(l||(l=(0,b.Z)(["\n  margin-left: 65px;\n  margin-right: 65px;\n"]))),f.ZP.form(c||(c=(0,b.Z)(["\n  // width: 540px;\n  // height: auto;\n  margin-top: 60px;\n  margin-bottom: 62px;\n  margin-right: auto;\n  margin-left: auto;\n"]))),r(8185)),y=r(2791),V=r(184);function _(){var n=(0,u.I0)(),e=(0,y.useState)("password"),r=(0,x.Z)(e,2),o=r[0],i=r[1],t=m.Ry({email:m.Z_().email("Invalid email").required("Required"),password:m.Z_().required("Required")});return(0,V.jsx)(Z,{children:(0,V.jsx)(h.J9,{initialValues:{password:"",email:""},validationSchema:t,onSubmit:function(e){n(g.Z.logIn({email:e.email,password:e.password}))},children:function(n){var e=n.errors,r=n.touched,t=n.values,a=n.handleChange;return(0,V.jsxs)(h.l0,{children:[(0,V.jsxs)(P,{children:[(0,V.jsx)(j,{placeholder:"E-mail",onChange:a,name:"email",value:t.email}),(0,V.jsx)(v,{width:"21",height:"16",children:(0,V.jsx)("path",{d:"M18 0H2C.9 0 .00999999.9.00999999 2L0 14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V2l8 5 8-5v2Z",fill:"#E0E0E0"})})]}),e.email&&r.email?(0,V.jsx)("div",{children:e.email}):null,(0,V.jsxs)(P,{children:[(0,V.jsx)(j,{placeholder:"Password",onChange:a,name:"password",type:o,value:t.password}),"password"===o?(0,V.jsx)(k,{onClick:function(){return i("text")},children:(0,V.jsx)(E.rnh,{})}):(0,V.jsx)(k,{onClick:function(){return i("password")},children:(0,V.jsx)(E.cqT,{})}),(0,V.jsx)(v,{width:"16",height:"21",children:(0,V.jsx)("path",{d:"M14 7h-1V5c0-2.76-2.24-5-5-5S3 2.24 3 5v2H2C.9 7 0 7.9 0 9v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2Zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm3.1-9H4.9V5c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2Z",fill:"#E0E0E0"})})]}),e.password&&r.password?(0,V.jsx)("div",{children:e.password}):null,(0,V.jsx)(z,{type:"submit",children:"LOG IN"}),(0,V.jsx)(C,{to:"/register",children:"REGISTER"})]})}})})}}}]);
//# sourceMappingURL=600.278f916f.chunk.js.map