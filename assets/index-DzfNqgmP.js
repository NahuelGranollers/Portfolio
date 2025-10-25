const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FullscreenPlayer-C3wa-166.js","assets/vendor_react-Y9HpgmFa.js","assets/vendor-B8cgOX9j.js"])))=>i.map(i=>d[i]);
import{r as u,j as e,R as y,a as N}from"./vendor_react-Y9HpgmFa.js";import"./vendor-B8cgOX9j.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const w="modulepreload",k=function(r){return"/"+r},h={},f=function(o,a,c){let t=Promise.resolve();if(a&&a.length>0){let n=function(d){return Promise.all(d.map(b=>Promise.resolve(b).then(i=>({status:"fulfilled",value:i}),i=>({status:"rejected",reason:i}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),x=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));t=n(a.map(d=>{if(d=k(d),d in h)return;h[d]=!0;const b=d.endsWith(".css"),i=b?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${i}`))return;const p=document.createElement("link");if(p.rel=b?"stylesheet":w,b||(p.as="script"),p.crossOrigin="",p.href=d,x&&p.setAttribute("nonce",x),document.head.appendChild(p),b)return new Promise((v,j)=>{p.addEventListener("load",v),p.addEventListener("error",()=>j(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(n){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=n,window.dispatchEvent(l),!l.defaultPrevented)throw n}return t.then(n=>{for(const l of n||[])l.status==="rejected"&&s(l.reason);return o().catch(s)})},C=()=>{const[r,o]=u.useState(!1),[a,c]=u.useState(!1);u.useEffect(()=>{const s=()=>{o(window.scrollY>50)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const t=s=>{const n=document.getElementById(s);n&&(n.scrollIntoView({behavior:"smooth"}),c(!1))};return e.jsx("nav",{className:`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${r?"bg-brand-bg/95 backdrop-blur-sm shadow-lg":"bg-transparent"}`,children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"flex justify-between items-center py-4",children:[e.jsx("button",{onClick:()=>t("hero"),className:"text-2xl font-bold text-brand-primary hover:text-brand-primary-dark transition-colors",children:"NG"}),e.jsxs("div",{className:"hidden md:flex space-x-8",children:[e.jsx("button",{onClick:()=>t("proyectos"),className:"text-brand-text hover:text-brand-primary transition-colors",children:"Proyectos"}),e.jsx("button",{onClick:()=>t("sobre-mi"),className:"text-brand-text hover:text-brand-primary transition-colors",children:"Sobre Mí"}),e.jsx("button",{onClick:()=>t("servicios"),className:"text-brand-text hover:text-brand-primary transition-colors",children:"Servicios"}),e.jsx("button",{onClick:()=>t("contacto"),className:"px-4 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-primary-dark transition-colors",children:"Contacto"})]}),e.jsx("button",{onClick:()=>c(!a),className:"md:hidden text-brand-text p-2","aria-label":"Toggle menu",children:a?e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}):e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]}),a&&e.jsx("div",{className:"md:hidden py-4 animate-fade-in",children:e.jsxs("div",{className:"flex flex-col space-y-4",children:[e.jsx("button",{onClick:()=>t("proyectos"),className:"text-brand-text hover:text-brand-primary transition-colors text-left",children:"Proyectos"}),e.jsx("button",{onClick:()=>t("sobre-mi"),className:"text-brand-text hover:text-brand-primary transition-colors text-left",children:"Sobre Mí"}),e.jsx("button",{onClick:()=>t("servicios"),className:"text-brand-text hover:text-brand-primary transition-colors text-left",children:"Servicios"}),e.jsx("button",{onClick:()=>t("contacto"),className:"px-4 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-primary-dark transition-colors text-left",children:"Contacto"})]})})]})})},m={name:"Nahuel Granollers",title:"Director Audiovisual & Técnico de Realización",tagline:"Creando historias visuales que conectan y emocionan",about:{intro:"Soy un creador audiovisual apasionado por contar historias a través del video y la animación. Mi trabajo combina técnica cinematográfica con diseño en movimiento para crear piezas visuales que cautivan y comunican.",experience:"Con experiencia en dirección, edición y motion graphics, trabajo en proyectos que van desde fashion films hasta animación de interfaces. Me especializo en transformar conceptos abstractos en experiencias visuales memorables.",approach:"Mi enfoque es colaborativo y orientado a resultados. Creo en la importancia de entender la visión del cliente y traducirla en contenido audiovisual que supere expectativas."},skills:["Edición de Video","Motion Graphics","Dirección Cinematográfica","After Effects","Premiere Pro","DaVinci Resolve","Color Grading","Diseño de UI/UX","Storytelling Visual"],social:{email:"nahuelgranollers@gmail.com",linkedin:"https://www.linkedin.com/in/nahuelgranollers"}},S=[{title:"Edición de Video",description:"Montaje profesional de material audiovisual para marcas, eventos y contenido digital.",icon:"🎬"},{title:"Dirección Cinematográfica",description:"Dirección y producción de cortometrajes, fashion films y contenido narrativo.",icon:"🎥"}],M=()=>{const r=()=>{const a=document.getElementById("proyectos");a&&a.scrollIntoView({behavior:"smooth"})},o=()=>{const a=document.getElementById("contacto");a&&a.scrollIntoView({behavior:"smooth"})};return e.jsx("section",{id:"hero",className:"min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative z-10",children:e.jsxs("div",{className:"max-w-4xl mx-auto text-center relative z-20",children:[e.jsxs("div",{className:"animate-slide-up",children:[e.jsx("h1",{className:"text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight text-violet-400 mb-6",children:m.name}),e.jsx("p",{className:"text-2xl sm:text-3xl font-semibold text-white mb-4",children:m.title}),e.jsx("p",{className:"text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-12",children:m.tagline}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center items-center",children:[e.jsx("button",{onClick:r,className:"px-6 py-3 min-w-[140px] bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-all duration-300 transform hover:scale-105 shadow-lg",children:"Ver Proyectos"}),e.jsx("button",{onClick:o,className:"px-6 py-3 min-w-[140px] border-2 border-violet-400 text-violet-400 rounded-lg hover:bg-violet-600 hover:text-white transition-all duration-300 transform hover:scale-105",children:"Hablemos"})]})]}),e.jsx("div",{className:"mt-16 animate-bounce",children:e.jsx("svg",{className:"w-6 h-6 mx-auto text-violet-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})})]})})},E=()=>e.jsx("section",{id:"sobre-mi",className:"py-24 px-4 sm:px-6 lg:px-8 bg-brand-surface",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsx("h2",{className:"text-4xl sm:text-5xl font-bold text-brand-primary mb-12 text-center",children:"Sobre Mí"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-12 items-center",children:[e.jsx("div",{className:"order-2 md:order-1",children:e.jsx("div",{className:"aspect-square bg-brand-surface-light rounded-2xl overflow-hidden shadow-2xl",children:e.jsx("img",{src:"images/profile.jpg",alt:"Nahuel Granollers",className:"w-full h-full object-cover"})})}),e.jsxs("div",{className:"order-1 md:order-2 space-y-6",children:[e.jsx("p",{className:"text-lg text-brand-text leading-relaxed",children:m.about.intro}),e.jsx("p",{className:"text-lg text-brand-text leading-relaxed",children:m.about.experience}),e.jsx("p",{className:"text-lg text-brand-text leading-relaxed",children:m.about.approach}),e.jsxs("div",{className:"pt-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-brand-secondary mb-4",children:"Habilidades & Herramientas"}),e.jsx("div",{className:"flex flex-wrap gap-3",children:m.skills.map((r,o)=>e.jsx("span",{className:"px-4 py-2 bg-brand-bg text-brand-text rounded-full text-sm border border-brand-border hover:border-brand-primary transition-colors",children:r},o))})]})]})]})]})}),L=()=>e.jsx("section",{id:"servicios",className:"py-24 px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsx("h2",{className:"text-4xl sm:text-5xl font-bold text-brand-primary mb-4 text-center",children:"Servicios"}),e.jsx("p",{className:"text-xl text-brand-text-secondary text-center mb-16 max-w-3xl mx-auto",children:"Soluciones audiovisuales profesionales adaptadas a tus necesidades"}),e.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-2 gap-8",children:S.map((r,o)=>e.jsxs("div",{className:"bg-brand-surface p-6 rounded-xl hover:bg-brand-surface-light transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-brand-border hover:border-brand-primary",children:[e.jsx("div",{className:"text-5xl mb-4",children:r.icon}),e.jsx("h3",{className:"text-xl font-semibold text-brand-text mb-3",children:r.title}),e.jsx("p",{className:"text-brand-text-secondary leading-relaxed",children:r.description})]},o))})]})}),z=()=>{const[r,o]=u.useState({name:"",email:"",subject:"",message:""}),[a,c]=u.useState(!1),[t,s]=u.useState("idle");u.useEffect(()=>{if(t==="success"){const x=setTimeout(()=>s("idle"),4e3);return()=>clearTimeout(x)}},[t]);const n=x=>{o({...r,[x.target.name]:x.target.value})},l=async x=>{x.preventDefault(),c(!0);try{(await fetch("https://formspree.io/f/mvgweoqj",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).ok?(s("success"),o({name:"",email:"",subject:"",message:""})):s("error")}catch{s("error")}c(!1)};return e.jsx("section",{id:"contacto",className:"py-24 px-4 sm:px-6 lg:px-8 bg-brand-surface",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h2",{className:"text-4xl sm:text-5xl font-bold text-brand-primary mb-4 text-center",children:"Trabajemos Juntos"}),e.jsx("p",{className:"text-xl text-brand-text-secondary text-center mb-16",children:"¿Tienes un proyecto en mente? Me encantaría escucharte"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-12",children:[e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-semibold text-brand-text mb-6",children:"Información de Contacto"}),e.jsx("div",{className:"space-y-4",children:e.jsxs("a",{href:`mailto:${m.social.email}`,className:"flex items-center gap-3 text-brand-text-secondary hover:text-brand-primary transition-colors",children:[e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),m.social.email]})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold text-brand-text mb-4",children:"Sígueme en"}),e.jsx("div",{className:"flex gap-4",children:e.jsx("a",{href:m.social.linkedin,target:"_blank",rel:"noopener noreferrer",className:"w-12 h-12 bg-brand-bg rounded-full flex items-center justify-center text-brand-text hover:bg-brand-primary hover:text-white transition-all duration-300 transform hover:scale-110","aria-label":"LinkedIn",children:e.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})})})]})]}),e.jsxs("form",{onSubmit:l,className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-brand-text mb-2",children:"Nombre"}),e.jsx("input",{type:"text",id:"name",name:"name",value:r.name,onChange:n,required:!0,autoComplete:"name",className:"w-full px-4 py-3 bg-brand-bg border border-brand-border rounded-lg focus:outline-none focus:border-brand-primary text-brand-text transition-colors",placeholder:"Tu nombre"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-brand-text mb-2",children:"Email"}),e.jsx("input",{type:"email",id:"email",name:"email",value:r.email,onChange:n,required:!0,autoComplete:"email",className:"w-full px-4 py-3 bg-brand-bg border border-brand-border rounded-lg focus:outline-none focus:border-brand-primary text-brand-text transition-colors",placeholder:"tu@email.com",disabled:a})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium text-brand-text mb-2",children:"Asunto"}),e.jsx("input",{type:"text",id:"subject",name:"subject",value:r.subject,onChange:n,required:!0,className:"w-full px-4 py-3 bg-brand-bg border border-brand-border rounded-lg focus:outline-none focus:border-brand-primary text-brand-text transition-colors",placeholder:"¿En qué puedo ayudarte?",disabled:a})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-brand-text mb-2",children:"Mensaje"}),e.jsx("textarea",{id:"message",name:"message",value:r.message,onChange:n,required:!0,rows:5,className:"w-full px-4 py-3 bg-brand-bg border border-brand-border rounded-lg focus:outline-none focus:border-brand-primary text-brand-text transition-colors resize-none",placeholder:"Cuéntame sobre tu proyecto...",disabled:a})]}),e.jsx("button",{type:"submit",disabled:a,className:`w-full px-8 py-3 transition-all duration-300 rounded-lg font-semibold ${a?"bg-brand-primary-dark cursor-not-allowed opacity-60":"bg-brand-primary text-white hover:bg-brand-primary-dark"}`,children:a?e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx("span",{className:"loading-spinner"}),"Enviando..."]}):"Enviar Mensaje"}),e.jsxs("div",{className:"relative h-10 mt-2",children:[t==="success"&&e.jsxs("div",{className:"absolute inset-0 flex items-center justify-center text-green-400 animate-fade-in",children:[e.jsx("svg",{className:"w-5 h-5 mr-2 inline",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),"¡Mensaje enviado correctamente! Te responderé pronto."]}),t==="error"&&e.jsxs("div",{className:"absolute inset-0 flex items-center justify-center text-red-400 animate-fade-in",children:[e.jsx("svg",{className:"w-5 h-5 mr-2 inline",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),"Hubo un error. Por favor, intenta de nuevo."]})]})]})]})]})})},P=()=>{const r=new Date().getFullYear();return e.jsx("footer",{className:"bg-brand-bg py-12 px-4 sm:px-6 lg:px-8 border-t border-brand-border",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center gap-6",children:[e.jsxs("div",{className:"text-center md:text-left",children:[e.jsx("h3",{className:"text-2xl font-bold text-brand-primary mb-2",children:m.name}),e.jsx("p",{className:"text-brand-text-secondary",children:m.title})]}),e.jsx("div",{className:"flex gap-4",children:e.jsx("a",{href:m.social.linkedin,target:"_blank",rel:"noopener noreferrer",className:"text-brand-text-secondary hover:text-brand-primary transition-colors","aria-label":"LinkedIn",children:e.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})})})]}),e.jsxs("div",{className:"mt-8 pt-8 border-t border-brand-border text-center text-brand-text-secondary text-sm",children:[e.jsxs("p",{children:["© ",r," ",m.name,". Todos los derechos reservados."]}),e.jsx("p",{className:"mt-2"})]})]})})},V=()=>{const r=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;return u.useEffect(()=>{if(r)return;document.querySelectorAll(".bg-particle").forEach(a=>{const c=a;c.style.setProperty("--dx",`${Math.random()*100-50}px`),c.style.setProperty("--dy",`${Math.random()*100-50}px`)})},[r]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
      `}),e.jsx("div",{className:"bg-gradient-layer","aria-hidden":"true"}),e.jsx("div",{className:"bg-glow-top","aria-hidden":"true"}),e.jsx("div",{className:"bg-glow-bottom","aria-hidden":"true"}),e.jsx("div",{className:"bg-shimmer-overlay","aria-hidden":"true"}),e.jsx("div",{className:"bg-particles-container","aria-hidden":"true",children:[...Array(6)].map((o,a)=>e.jsx("div",{className:"bg-particle"},a))})]})};function g(r={}){const{immediate:o=!1,onNeedRefresh:a,onOfflineReady:c,onRegistered:t,onRegisteredSW:s,onRegisterError:n}=r;let l,x;const d=async(i=!0)=>{await x};async function b(){if("serviceWorker"in navigator){if(l=await f(async()=>{const{Workbox:i}=await import("./vendor-B8cgOX9j.js").then(p=>p.w);return{Workbox:i}},[]).then(({Workbox:i})=>new i("/sw.js",{scope:"/",type:"classic"})).catch(i=>{n==null||n(i)}),!l)return;l.addEventListener("activated",i=>{(i.isUpdate||i.isExternal)&&window.location.reload()}),l.addEventListener("installed",i=>{i.isUpdate||c==null||c()}),l.register({immediate:o}).then(i=>{s?s("/sw.js",i):t==null||t(i)}).catch(i=>{n==null||n(i)})}}return x=b(),d}const I=u.lazy(()=>f(()=>import("./FullscreenPlayer-C3wa-166.js"),__vite__mapDeps([0,1,2])));g();function T(){const[r,o]=u.useState(null),a=()=>{o(null)};return e.jsxs("div",{className:"min-h-screen bg-brand-bg font-sans",children:[e.jsx(V,{}),e.jsx(C,{}),e.jsx(M,{}),e.jsx("section",{id:"proyectos",className:"py-24 px-4 sm:px-6 lg:px-8"}),e.jsx(E,{}),e.jsx(L,{}),e.jsx(z,{}),e.jsx(P,{}),r&&e.jsx(u.Suspense,{fallback:e.jsx("div",{children:"Cargando..."}),children:e.jsx(I,{video:r,onClose:a})})]})}g();y.createRoot(document.getElementById("root")).render(e.jsx(N.StrictMode,{children:e.jsx(T,{})}));
