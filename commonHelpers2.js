import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const t=document.querySelector(".feedback-form"),s=t.elements.email,m=t.elements.message,e={email:"",message:""},l=JSON.parse(localStorage.getItem("feedback-form-state"));l!==null&&(e.email=l.email,e.message=l.message);s.value=e.email;m.value=e.message;t.addEventListener("input",a=>{a.target.name==="email"?e.email=a.target.value:e.message=a.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(e))});t.addEventListener("submit",a=>{a.preventDefault(),s.value!==""&&m.value!==""?(console.log(e),localStorage.removeItem("feedback-form-state"),t.reset()):alert("Fill in all fields !")});
//# sourceMappingURL=commonHelpers2.js.map
