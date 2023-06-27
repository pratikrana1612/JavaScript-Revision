!function(){"use strict";class e{constructor(e,t){this.fallBackText=t,this.contentTemplateEl=document.getElementById(e),this.modalTemplateEl=document.getElementById("modal-template")}show(){if("content"in document.createElement("template")){const e=document.importNode(this.modalTemplateEl.content,!0);this.modalElement=e.querySelector(".modal"),this.backdropElement=e.querySelector(".backdrop");const t=document.importNode(this.contentTemplateEl.content,!0);this.modalElement.append(t),document.body.insertAdjacentElement("afterbegin",this.modalElement),document.body.insertAdjacentElement("afterbegin",this.backdropElement)}else alert(this.fallBackText)}hide(){this.modalElement&&(document.body.removeChild(this.modalElement),document.body.removeChild(this.backdropElement),this.modalElement=null,this.backdropElement=null)}}class t{constructor(e){this.coords=e,this.render(e)}render(e){let t=L.map("map").setView(e,13);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors",maxZoom:40}).addTo(t),console.log(e),L.marker(e).addTo(t).bindPopup("It's your current location").openPopup()}}new class{constructor(){const e=document.querySelector("form"),t=document.querySelector("#locate-btn");this.sharedBtn=document.getElementById("share-btn"),t.addEventListener("click",this.getUserLocationHandler.bind(this)),this.sharedBtn.addEventListener("click",this.sharePlaceHandler),e.addEventListener("submit",this.getUserAddressHandler.bind(this))}sharePlaceHandler(){const e=document.getElementById("share-link");navigator.clipboard?navigator.clipboard.writeText(e.value).then((e=>alert("copied into the clipboard"))).catch((e=>console.log(e))):e.select()}selectPlace(e,o){this.map||(this.map=new t(e),fetch("http://localhost:3000/add-location",{method:"POST",body:JSON.stringify({address:o,lat:e[0],lng:e[1]}),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{console.log(e);const t=e.locId;this.sharedBtn.disabled=!1,document.getElementById("share-link").value="".concat(location.origin,"/my-place?location=").concat(t)})))}getUserLocationHandler(){if(!navigator.geolocation)return void alert("Location feature does not exist in your browser");const t=new e("loading-modal-content","loading location please wait");t.show(),navigator.geolocation.getCurrentPosition((async e=>{const o=[e.coords.latitude,e.coords.longitude];console.log(o);const n=await async function(e){try{const t=await fetch("https://nominatim.openstreetmap.org/reverse?format=json&lat=".concat(e[0],"&lon=").concat(e[1])),o=await t.json();return o?o.display_name:void alert("No results found for this coodinates.")}catch(e){throw new Error("Something went wrong")}}(o);this.selectPlace(o,n),t.hide()}),(e=>{t.hide(),alert("Please enter the address manually")}))}getUserAddressHandler(t){t.preventDefault();const o=t.target.querySelector("input").value;if(!o||0==o.trim().length)return void alert("invalid address");const n=new e("loading-modal-content","loading location please wait");n.show(),async function(e){try{const t=encodeURI(e),o=await fetch("https://nominatim.openstreetmap.org/search?q=".concat(t,"&format=json")),n=await o.json();let a;return n.length>0?(console.log(n),a=[parseFloat(n[0].lat),parseFloat(n[0].lon)],a):void alert("No results found for the address.")}catch(e){throw new Error("Something went wrong")}}(o).then((e=>{this.selectPlace(e,o)})).catch((e=>alert(e))),n.hide()}}}();