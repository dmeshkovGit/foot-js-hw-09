import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const t=document.querySelector(".feedback-form"),s=t.elements.email,l=t.elements.message,e={email:"",message:""},m=a=>{try{return JSON.parse(a)}catch{console.error("parsin error")}},r=m(localStorage.getItem("feedback-form-state"));r!==null&&(e.email=r.email,e.message=r.message);s.value=e.email;l.value=e.message;t.addEventListener("input",a=>{a.target.name==="email"?e.email=a.target.value.trim():e.message=a.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e))});t.addEventListener("submit",a=>{a.preventDefault(),s.value!==""&&l.value!==""?(console.log(e),localStorage.removeItem("feedback-form-state"),t.reset()):alert("Fill in all fields !")});
//# sourceMappingURL=commonHelpers2.js.map
