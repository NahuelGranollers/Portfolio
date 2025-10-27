const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FullscreenPlayer-CTdkGBRy.js","assets/vendor_react-Y9HpgmFa.js","assets/vendor-B8cgOX9j.js"])))=>i.map(i=>d[i]);
import{r as p,j as e,R as j,a as w}from"./vendor_react-Y9HpgmFa.js";import"./vendor-B8cgOX9j.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();const N="modulepreload",k=function(r){return"/"+r},f={},v=function(o,s,l){let t=Promise.resolve();if(s&&s.length>0){let d=function(m){return Promise.all(m.map(x=>Promise.resolve(x).then(n=>({status:"fulfilled",value:n}),n=>({status:"rejected",reason:n}))))};document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),h=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));t=d(s.map(m=>{if(m=k(m),m in f)return;f[m]=!0;const x=m.endsWith(".css"),n=x?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${n}`))return;const u=document.createElement("link");if(u.rel=x?"stylesheet":N,x||(u.as="script"),u.crossOrigin="",u.href=m,h&&u.setAttribute("nonce",h),document.head.appendChild(u),x)return new Promise((b,g)=>{u.addEventListener("load",b),u.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${m}`)))})}))}function a(d){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=d,window.dispatchEvent(i),!i.defaultPrevented)throw d}return t.then(d=>{for(const i of d||[])i.status==="rejected"&&a(i.reason);return o().catch(a)})},E=[{id:1,title:"Poesía Visual Experimental",description:"Pieza audiovisual experimental que fusiona luz, imagen y movimiento. Este videopoema explora el lenguaje visual a través de tipografía cinética, texturas orgánicas y metáforas visuales, creando una narrativa sensorial que trasciende lo literal. Un trabajo personal que refleja mi interés en las formas híbridas de expresión audiovisual contemporánea.",thumbnailUrl:"/videos/haiku.webp",videoUrl:"/videos/haiku.webm",year:"2023",role:"Director Creativo & Editor",tools:["Premiere Pro"],category:"Arte Experimental"},{id:2,title:"Fashion Film",description:"Cortometraje cinematográfico enfocado en moda. Dirección, cinematografía y edición completa, explorando la narrativa visual a través del estilo y la estética contemporánea.",thumbnailUrl:"/videos/fashionfilm.webp",videoUrl:"/videos/Fashion-Film.webm",year:"2023",role:"Director & Editor",tools:["Premiere Pro","DaVinci Resolve","After Effects"],category:"Cinematografía"},{id:3,title:"Corto editado sin guion",description:"Ejercicio de edición narrativa trabajando con material existente sin guion previo. Desafío de construir una historia coherente y emotiva a través del montaje y la selección de tomas.",thumbnailUrl:"/videos/cortosinguion.webp",videoUrl:"/videos/Corto-Sin-Guion.webm",year:"2025",role:"Editor",tools:["Premiere Pro","Audition"],category:"Edición"},{id:4,title:"Grabación y Edición de Cortometraje",description:"Trabajo de edición y cámara realizado en exteriores para un cortometraje de ficción. Participé durante la grabación en localización real, encargándome tanto de la captación de imagen como de la edición posterior en un entorno profesional. El video mostrado recoge únicamente algunos fragmentos seleccionados del corto completo por motivos de derechos y duración.",thumbnailUrl:"/videos/corto-agnes-thumb.webp",videoUrl:"/videos/corto-agnes.webm",year:"2024",role:"Editor y operador de cámara",tools:["Premiere Pro","Canon EOS","DaVinci Resolve"],category:"Cinematografía"},{id:5,title:"Codebreak - Juego Multijugador",description:"Juego de lógica multijugador en tiempo real donde los jugadores deben descifrar códigos secretos.",thumbnailUrl:"/videos/codebreak.webp",videoUrl:"/videos/codebreak-demo.webm",year:"2025",role:"Desarrollador Full Stack",tools:["React","Node.js","Socket.io","TypeScript"],category:"Desarrollo Web",externalLink:"https://codebreak.onrender.com"},{id:6,title:"Pantallas en Resolume para betevé",description:"Diseño integral de visuales dinámicas para el sistema Resolume de betevé, usadas en directo para anunciar invitados especiales y conciertos. Fue una propuesta creativa propia, explorando nuevas tendencias visuales (trending styles) e innovación en el flujo audiovisual del plató para televisión en vivo. Mezclé tipografías animadas, colores en tendencia y layouts adaptativos para dar un look fresco y único al programa.",thumbnailUrl:"/videos/resolume-beteve-thumb.webp",videoUrl:"/videos/pantallas-invitados.webm",year:"2025",role:"Motion Designer & Creativo",tools:["Resolume","After Effects","Photoshop"],category:"Live Visuals",innovative:!0},{id:7,title:"Logo Animado con AE",description:"Animación de logotipo creada en After Effects utilizando principios de motion design. El proyecto explora transiciones fluidas y efectos visuales modernos para dar vida a la identidad de marca.",thumbnailUrl:"/videos/logoae.webp",videoUrl:"/videos/LOGO-AE.webm",year:"2024",role:"Motion Designer",tools:["After Effects","Illustrator"],category:"Motion Graphics"}],c={name:"Nahuel Granollers",title:"Director Audiovisual & Técnico de Realización",tagline:"Creando historias visuales que conectan y emocionan",about:{intro:"Soy un creador audiovisual apasionado por contar historias a través del video y la animación. Mi trabajo combina técnica cinematográfica con diseño en movimiento para crear piezas visuales que cautivan y comunican.",experience:"Con experiencia en dirección, edición y motion graphics, trabajo en proyectos que van desde fashion films hasta animación de interfaces. Me especializo en transformar conceptos abstractos en experiencias visuales memorables.",approach:"Mi enfoque es colaborativo y orientado a resultados. Creo en la importancia de entender la visión del cliente y traducirla en contenido audiovisual que supere expectativas."},skills:["Edición de Video","Dirección Cinematográfica","Premiere Pro","Diseño de UI/UX","Storytelling Visual"],social:{email:"nahuelgranollers@gmail.com",linkedin:"https://www.linkedin.com/in/nahuelgranollers"}},C=[{title:"Edición de Video",description:"Montaje profesional de material audiovisual para marcas, eventos y contenido digital.",icon:"🎬"},{title:"Dirección Cinematográfica",description:"Dirección y producción de cortometrajes, fashion films y contenido narrativo.",icon:"🎥"}],S=()=>{const[r,o]=p.useState(!1),[s,l]=p.useState(!1);p.useEffect(()=>{const a=()=>{o(window.scrollY>50)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]);const t=a=>{const d=document.getElementById(a);d&&(d.scrollIntoView({behavior:"smooth"}),l(!1))};return e.jsx("nav",{className:`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${r?"bg-brand-bg/95 backdrop-blur-sm shadow-lg":"bg-transparent"}`,children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"flex justify-between items-center py-4",children:[e.jsx("button",{onClick:()=>t("hero"),className:"text-2xl font-bold text-brand-primary hover:text-brand-primary-dark transition-colors",children:"NG"}),e.jsxs("div",{className:"hidden md:flex space-x-8",children:[e.jsx("button",{onClick:()=>t("proyectos"),className:"text-brand-text hover:text-brand-primary transition-colors",children:"Proyectos"}),e.jsx("button",{onClick:()=>t("sobre-mi"),className:"text-brand-text hover:text-brand-primary transition-colors",children:"Sobre Mí"}),e.jsx("button",{onClick:()=>t("servicios"),className:"text-brand-text hover:text-brand-primary transition-colors",children:"Servicios"}),e.jsx("button",{onClick:()=>t("contacto"),className:"px-4 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-primary-dark transition-colors",children:"Contacto"})]}),e.jsx("button",{onClick:()=>l(!s),className:"md:hidden text-brand-text p-2","aria-label":"Toggle menu",children:s?e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}):e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]}),s&&e.jsx("div",{className:"md:hidden py-4 animate-fade-in",children:e.jsxs("div",{className:"flex flex-col space-y-4",children:[e.jsx("button",{onClick:()=>t("proyectos"),className:"text-brand-text hover:text-brand-primary transition-colors text-left",children:"Proyectos"}),e.jsx("button",{onClick:()=>t("sobre-mi"),className:"text-brand-text hover:text-brand-primary transition-colors text-left",children:"Sobre Mí"}),e.jsx("button",{onClick:()=>t("servicios"),className:"text-brand-text hover:text-brand-primary transition-colors text-left",children:"Servicios"}),e.jsx("button",{onClick:()=>t("contacto"),className:"px-4 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-primary-dark transition-colors text-left",children:"Contacto"})]})})]})})},M=()=>{const r=()=>{const s=document.getElementById("proyectos");s&&s.scrollIntoView({behavior:"smooth"})},o=()=>{const s=document.getElementById("contacto");s&&s.scrollIntoView({behavior:"smooth"})};return e.jsxs("section",{className:"min-h-screen flex items-center justify-center px-6 relative overflow-hidden",children:[e.jsxs("div",{className:"max-w-4xl mx-auto text-center z-10",children:[e.jsx("h1",{className:"text-5xl md:text-7xl font-bold mb-4 animate-slide-up",children:c==null?void 0:c.name}),e.jsx("p",{className:"text-xl md:text-2xl text-gray-400 mb-6 animate-slide-up animation-delay-100",children:c==null?void 0:c.title}),e.jsx("p",{className:"text-lg text-gray-500 mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-200",children:c==null?void 0:c.tagline}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-300",children:[e.jsx("button",{onClick:r,className:"px-8 py-3 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-primary-dark transition-all hover:scale-105 shadow-lg shadow-brand-primary/20",children:"Ver Proyectos"}),e.jsx("button",{onClick:o,className:"px-8 py-3 bg-transparent border-2 border-brand-primary text-brand-primary rounded-lg font-semibold hover:bg-brand-primary hover:text-white transition-all hover:scale-105",children:"Hablemos"})]})]}),e.jsx("div",{className:"absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce",children:e.jsx("div",{className:"w-6 h-10 border-2 border-brand-primary rounded-full flex items-start justify-center p-2",children:e.jsx("div",{className:"w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse"})})})]})},z=({video:r,onSelectVideo:o})=>{const[s,l]=p.useState(!1),t=p.useRef(null),a=()=>{l(!0),t.current&&(t.current.currentTime=0,t.current.play().catch(()=>{}))},d=()=>{l(!1),t.current&&(t.current.pause(),t.current.currentTime=0)},i=()=>{l(!0),t.current&&(t.current.currentTime=0,t.current.play().catch(()=>{}))},h=()=>{l(!1),t.current&&(t.current.pause(),t.current.currentTime=0)},m=()=>{r.externalLink?window.open(r.externalLink,"_blank","noopener,noreferrer"):o(r)};return e.jsxs("div",{className:"group relative bg-brand-surface rounded-lg overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-brand-primary/20 transition-all duration-500 hover:scale-[1.02]",onClick:m,onMouseEnter:a,onMouseLeave:d,onTouchStart:i,onTouchEnd:h,children:[e.jsx("img",{src:r.thumbnailUrl,alt:r.title,loading:"lazy",className:`w-full h-64 object-cover transition-opacity duration-300 ${s?"opacity-0":"opacity-100"}`}),e.jsx("video",{ref:t,src:r.videoUrl,muted:!0,loop:!0,playsInline:!0,className:`absolute inset-0 w-full h-64 object-cover transition-opacity duration-300 ${s?"opacity-100":"opacity-0"}`}),r.category&&e.jsx("div",{className:"absolute top-4 right-4 bg-brand-primary/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold",children:r.category}),r.year&&e.jsx("div",{className:"absolute top-4 left-4 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold",children:r.year}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2 group-hover:text-brand-primary transition",children:r.title}),r.description&&e.jsx("p",{className:"text-sm text-gray-400 mb-2 line-clamp-2",children:r.description}),r.role&&e.jsx("p",{className:"text-xs text-brand-primary font-medium mb-2",children:r.role}),r.tools&&r.tools.length>0&&e.jsx("div",{className:"flex flex-wrap gap-2",children:r.tools.map((x,n)=>e.jsx("span",{className:"text-xs bg-brand-bg px-2 py-1 rounded text-gray-400",children:x},n))})]})]})},P=({expanded:r,onClick:o})=>e.jsxs("button",{onClick:o,"aria-label":r?"Mostrar menos proyectos":"Mostrar más proyectos",className:"mx-auto mt-8 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg hover:bg-white/10 hover:border-brand-primary transition-all duration-300 flex items-center gap-2 group",children:[e.jsx("span",{className:"text-gray-300 font-medium",children:r?"Ver menos":"Ver más proyectos"}),r?e.jsx("svg",{className:"w-5 h-5 text-gray-300 group-hover:text-brand-primary transition",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20 12H4"})}):e.jsx("svg",{className:"w-5 h-5 text-gray-300 group-hover:text-brand-primary transition",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v16m8-8H4"})})]}),L=({videos:r,onSelectVideo:o})=>{const[s,l]=p.useState(!1),t=6;return r.length===0?e.jsxs("div",{className:"text-center py-20 text-gray-400",children:[e.jsx("p",{className:"text-xl",children:"Tu portafolio está vacío."}),e.jsx("p",{className:"mt-2",children:"Añade videos a la carpeta `videos/` y configúralos en el archivo `constants.ts` para empezar."})]}):e.jsx("section",{id:"proyectos",className:"py-20 px-6",children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:(s?r:r.slice(0,t)).map(a=>e.jsx(z,{video:a,onSelectVideo:o},a.id))}),r.length>t&&e.jsx(P,{expanded:s,onClick:()=>l(!s)})]})})},T=()=>e.jsx("section",{id:"sobre-mi",className:"py-24 px-4 sm:px-6 lg:px-8 bg-gray-900",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsx("h2",{className:"text-4xl sm:text-5xl font-bold text-violet-400 mb-12 text-center",children:"Sobre Mí"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-12 items-center",children:[e.jsx("div",{className:"order-2 md:order-1 flex justify-center",children:e.jsx("img",{src:"/images/profile.webp",alt:"Nahuel Granollers",className:"w-full max-w-lg h-auto object-cover rounded-2xl shadow-2xl"})}),e.jsxs("div",{className:"order-1 md:order-2 space-y-6",children:[e.jsx("p",{className:"text-lg text-gray-200 leading-relaxed",children:c.about.intro}),e.jsx("p",{className:"text-lg text-gray-200 leading-relaxed",children:c.about.experience}),e.jsx("p",{className:"text-lg text-gray-200 leading-relaxed",children:c.about.approach}),e.jsxs("div",{className:"pt-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-violet-300 mb-4",children:"Habilidades & Herramientas"}),e.jsx("div",{className:"flex flex-wrap gap-3",children:c.skills.map((r,o)=>e.jsx("span",{className:"px-4 py-2 bg-gray-800/50 text-gray-200 rounded-full text-sm border border-gray-700 hover:border-violet-400 transition-colors",children:r},o))})]})]})]})]})}),V=()=>e.jsx("section",{id:"servicios",className:"py-20 px-6 bg-brand-surface",children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsx("h2",{className:"text-4xl font-bold mb-4 text-center",children:"Servicios"}),e.jsx("p",{className:"text-gray-400 text-center mb-12 max-w-2xl mx-auto",children:"Soluciones audiovisuales profesionales adaptadas a tus necesidades"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6",children:C.map((r,o)=>e.jsxs("div",{className:"bg-brand-bg border border-brand-border rounded-lg p-6 hover:border-brand-primary hover:shadow-lg hover:shadow-brand-primary/10 transition-all duration-300 group",children:[e.jsx("div",{className:"text-4xl mb-3 group-hover:scale-110 text-center transition-transform duration-300",children:r.icon}),e.jsx("h3",{className:"text-xl font-semibold mb-3 text-brand-text",children:r.title}),e.jsx("p",{className:"text-gray-400 leading-relaxed",children:r.description})]},o))})]})}),D=()=>{const[r,o]=p.useState({name:"",email:"",subject:"",message:""}),[s,l]=p.useState(!1),[t,a]=p.useState("idle"),[d,i]=p.useState(""),h="mvgweoqj";p.useEffect(()=>{if(t==="success"){const u=setTimeout(()=>a("idle"),4e3);return()=>clearTimeout(u)}},[t]);const m=u=>{o({...r,[u.target.name]:u.target.value})},x=()=>r.name.trim()?!r.email.includes("@")||!r.email.includes(".")?"Email inválido":r.message.trim()?r.message.length>1e3?"El mensaje no puede exceder 1000 caracteres":null:"El mensaje es requerido":"El nombre es requerido",n=async u=>{u.preventDefault();const b=x();if(b){i(b),a("error");return}l(!0),i("");try{(await fetch(`https://formspree.io/f/${h}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).ok?(a("success"),o({name:"",email:"",subject:"",message:""})):(a("error"),i("Hubo un error al enviar. Por favor, intenta de nuevo."))}catch{a("error"),i("Error de conexión. Por favor, verifica tu internet.")}l(!1)};return e.jsx("section",{id:"contacto",className:"py-20 px-6 bg-brand-bg",children:e.jsx("div",{className:"max-w-7xl mx-auto",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-4xl font-bold mb-4",children:"Trabajemos Juntos"}),e.jsx("p",{className:"text-gray-400 mb-8",children:"¿Tienes un proyecto en mente? Me encantaría escucharte"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-400",children:"Email"}),e.jsx("a",{href:`mailto:${c.social.email}`,className:"text-brand-primary hover:underline",children:c.social.email})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-400",children:"LinkedIn"}),e.jsx("a",{href:c.social.linkedin,target:"_blank",rel:"noopener noreferrer",className:"text-brand-primary hover:underline",children:"Conéctate conmigo"})]})]})]})]}),e.jsxs("form",{onSubmit:n,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium mb-2",children:"Nombre"}),e.jsx("input",{type:"text",id:"name",name:"name",value:r.name,onChange:m,className:"w-full px-4 py-3 bg-brand-surface border border-brand-border rounded-lg focus:outline-none focus:border-brand-primary transition",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium mb-2",children:"Email"}),e.jsx("input",{type:"email",id:"email",name:"email",value:r.email,onChange:m,className:"w-full px-4 py-3 bg-brand-surface border border-brand-border rounded-lg focus:outline-none focus:border-brand-primary transition",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium mb-2",children:"Asunto"}),e.jsx("input",{type:"text",id:"subject",name:"subject",value:r.subject,onChange:m,className:"w-full px-4 py-3 bg-brand-surface border border-brand-border rounded-lg focus:outline-none focus:border-brand-primary transition"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"message",className:"block text-sm font-medium mb-2",children:"Mensaje"}),e.jsx("textarea",{id:"message",name:"message",value:r.message,onChange:m,rows:5,maxLength:1e3,className:"w-full px-4 py-3 bg-brand-surface border border-brand-border rounded-lg focus:outline-none focus:border-brand-primary transition resize-none",required:!0}),e.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:[r.message.length,"/1000 caracteres"]})]}),e.jsx("button",{type:"submit",disabled:s,className:"w-full py-3 px-6 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-primary-dark transition disabled:opacity-50 disabled:cursor-not-allowed",children:s?"Enviando...":"Enviar Mensaje"}),t==="success"&&e.jsx("div",{className:"p-4 bg-green-500/10 border border-green-500 rounded-lg text-green-400",children:"✓ ¡Mensaje enviado correctamente! Te responderé pronto."}),t==="error"&&e.jsxs("div",{className:"p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-400",children:["✗ ",d||"Hubo un error. Por favor, intenta de nuevo."]})]})]})})})},U=()=>{var o;const r=new Date().getFullYear();return e.jsx("footer",{className:"border-t border-brand-border bg-brand-bg py-8 px-6",children:e.jsx("div",{className:"max-w-7xl mx-auto",children:e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center gap-4",children:[e.jsxs("p",{className:"text-gray-400 text-sm text-center md:text-left",children:["© ",r," ",c==null?void 0:c.name,". All rights reserved."]}),e.jsxs("div",{className:"flex gap-6 items-center",children:[e.jsx("a",{href:`mailto:${c.social.email}`,className:"text-gray-400 hover:text-brand-primary transition-colors","aria-label":"Email",children:e.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"})})}),e.jsx("a",{href:c.social.linkedin,target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-brand-primary transition-colors","aria-label":"LinkedIn",children:e.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})}),((o=c==null?void 0:c.social)==null?void 0:o.github)&&e.jsx("a",{href:c.social.github,target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-brand-primary transition-colors","aria-label":"GitHub",children:e.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})})]})]})})})},q=()=>{const r=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;return p.useEffect(()=>{if(r)return;document.querySelectorAll(".bg-particle").forEach(s=>{const l=s;l.style.setProperty("--dx",`${Math.random()*100-50}px`),l.style.setProperty("--dy",`${Math.random()*100-50}px`)})},[r]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .bg-gradient-layer {
          position: fixed;
          inset: 0;
          background: radial-gradient(circle at 50% 30%, #1a1a2e 0%, #0a0a0f 60%, #000000 100%);
          z-index: -5;
          pointer-events: none;
        }

        .bg-glow-top {
          position: fixed;
          top: -30%;
          left: 50%;
          transform: translateX(-50%);
          width: 150%;
          height: 80%;
          background: radial-gradient(
            ellipse at center,
            rgba(187,134,252,0.35) 0%,
            rgba(187,134,252,0.2) 30%,
            transparent 70%
          );
          filter: blur(100px);
          z-index: -4;
          pointer-events: none;
          animation: glow-pulse 8s ease-in-out infinite;
        }

        @keyframes glow-pulse {
          0%, 100% { opacity: 0.6; transform: translateX(-50%) scale(1); }
          50% { opacity: 1; transform: translateX(-50%) scale(1.05); }
        }

        .bg-glow-bottom {
          position: fixed;
          bottom: -40%;
          right: -20%;
          width: 100%;
          height: 80%;
          background: radial-gradient(
            circle at center,
            rgba(3,218,198,0.25) 0%,
            rgba(3,218,198,0.15) 30%,
            transparent 70%
          );
          filter: blur(120px);
          z-index: -4;
          pointer-events: none;
          animation: glow-pulse-slow 12s ease-in-out infinite;
        }

        @keyframes glow-pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.9; }
        }

        .bg-shimmer-overlay {
          position: fixed;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(187,134,252,0.12) 0%,
            transparent 40%,
            rgba(3,218,198,0.08) 100%
          );
          z-index: -3;
          pointer-events: none;
          animation: shimmer-move 15s ease-in-out infinite alternate;
        }

        @keyframes shimmer-move {
          0% { opacity: 0.4; transform: translateY(0); }
          50% { opacity: 0.7; transform: translateY(-20px); }
          100% { opacity: 0.4; transform: translateY(0); }
        }

        .bg-particles-container {
          position: fixed;
          inset: 0;
          z-index: -2;
          pointer-events: none;
          overflow: hidden;
        }

        .bg-particle {
          position: absolute;
          border-radius: 50%;
          background: var(--color, rgba(255,255,255,0.5));
          width: var(--size, 6px);
          height: var(--size, 6px);
          top: var(--top, 50%);
          left: var(--left, 50%);
          box-shadow: 0 0 20px var(--color, rgba(255,255,255,0.4));
          animation: float-particle var(--duration, 12s) ease-in-out infinite;
          opacity: 0.7;
        }

        .bg-particle:nth-child(1) {
          --color: rgba(187,134,252,0.8);
          --size: 10px;
          --top: 20%;
          --left: 15%;
          --duration: 10s;
        }
        .bg-particle:nth-child(2) {
          --color: rgba(3,218,198,0.7);
          --size: 12px;
          --top: 60%;
          --left: 75%;
          --duration: 14s;
        }
        .bg-particle:nth-child(3) {
          --color: rgba(187,134,252,0.6);
          --size: 8px;
          --top: 45%;
          --left: 35%;
          --duration: 11s;
        }
        .bg-particle:nth-child(4) {
          --color: rgba(3,218,198,0.6);
          --size: 9px;
          --top: 80%;
          --left: 20%;
          --duration: 16s;
        }
        .bg-particle:nth-child(5) {
          --color: rgba(255,255,255,0.5);
          --size: 7px;
          --top: 30%;
          --left: 85%;
          --duration: 13s;
        }
        .bg-particle:nth-child(6) {
          --color: rgba(187,134,252,0.5);
          --size: 8px;
          --top: 70%;
          --left: 50%;
          --duration: 15s;
        }

        @keyframes float-particle {
          0%   { transform: translate(0, 0) scale(1); opacity: 0.6; }
          25%  { transform: translate(var(--dx, 30px), var(--dy, -40px)) scale(1.3); opacity: 0.9; }
          50%  { transform: translate(calc(var(--dx, 30px) * -0.8), calc(var(--dy, -40px) * -0.8)) scale(1.1); opacity: 0.7; }
          75%  { transform: translate(var(--dx, 30px), var(--dy, -40px)) scale(1.2); opacity: 0.8; }
          100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
        }

        ${r?`
          .bg-glow-top,
          .bg-glow-bottom,
          .bg-shimmer-overlay,
          .bg-particle {
            animation: none !important;
          }
        `:""}
      `}),e.jsx("div",{className:"bg-gradient-layer","aria-hidden":"true"}),e.jsx("div",{className:"bg-glow-top","aria-hidden":"true"}),e.jsx("div",{className:"bg-glow-bottom","aria-hidden":"true"}),e.jsx("div",{className:"bg-shimmer-overlay","aria-hidden":"true"}),e.jsx("div",{className:"bg-particles-container","aria-hidden":"true",children:[...Array(6)].map((o,s)=>e.jsx("div",{className:"bg-particle"},s))})]})};function y(r={}){const{immediate:o=!1,onNeedRefresh:s,onOfflineReady:l,onRegistered:t,onRegisteredSW:a,onRegisterError:d}=r;let i,h;const m=async(n=!0)=>{await h};async function x(){if("serviceWorker"in navigator){if(i=await v(async()=>{const{Workbox:n}=await import("./vendor-B8cgOX9j.js").then(u=>u.w);return{Workbox:n}},[]).then(({Workbox:n})=>new n("/sw.js",{scope:"/",type:"classic"})).catch(n=>{d==null||d(n)}),!i)return;i.addEventListener("activated",n=>{(n.isUpdate||n.isExternal)&&window.location.reload()}),i.addEventListener("installed",n=>{n.isUpdate||l==null||l()}),i.register({immediate:o}).then(n=>{a?a("/sw.js",n):t==null||t(n)}).catch(n=>{d==null||d(n)})}}return h=x(),m}const A=p.lazy(()=>v(()=>import("./FullscreenPlayer-CTdkGBRy.js"),__vite__mapDeps([0,1,2])));y();function B(){const[r,o]=p.useState(null),s=t=>{o(t)},l=()=>{o(null)};return e.jsxs(e.Fragment,{children:[e.jsx(q,{}),e.jsx(S,{}),e.jsxs("main",{children:[e.jsx(M,{}),e.jsx(L,{videos:E,onSelectVideo:s}),e.jsx(T,{}),e.jsx(V,{}),e.jsx(D,{})]}),e.jsx(U,{}),e.jsx(p.Suspense,{fallback:e.jsx("div",{className:"fixed inset-0 bg-black/95 flex items-center justify-center z-50",children:e.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-brand-primary"})}),children:r&&e.jsx(A,{video:r,onClose:l})})]})}y();j.createRoot(document.getElementById("root")).render(e.jsx(w.StrictMode,{children:e.jsx(B,{})}));
