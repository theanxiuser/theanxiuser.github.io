(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const m of l.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function a(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=a(o);fetch(o.href,l)}})();const se=["██████╗ ██╗███████╗██╗  ██╗ █████╗ ██╗     ██╗   ██╗","██╔══██╗██║██╔════╝██║  ██║██╔══██╗██║     ██║   ██║","██████╔╝██║███████╗███████║███████║██║     ██║   ██║","██╔══██╗██║╚════██║██╔══██║██╔══██║██║     ██║   ██║","██████╔╝██║███████║██║  ██║██║  ██║███████╗╚██████╔╝","╚═════╝ ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝ "],oe="System x86_64",ne="вιѕнαℓυ",ae="system",ie="122112",ce="https://github.com/theanxiuser/theanxiuser.github.io",le="https://theanxiuser.github.io/thecipherdiary",ue={email:"theanxiuser@gmail.com",github:"theanxiuser",gitlab:"theanxiuser",linkedin:"theanxiuser",facebook:"theanxiuser",instagram:"theanxiuser",x:"theanxiuser",discord:"theanxiuser",tryhackme:"theanxiuser",hackthebox:"theanxiuser",medium:"theanxiuser"},he="Hi there, please find me here",pe=[["Praharak","Flow Based Network Threat Detection and Protection System.","https://theanxiuser.github.io/praharak/"],["TheCipherDiary","Something Useful.","https://theanxiuser.gitlab.io/thecipherdiary"],["вιѕнαℓυ","Terminal Like Portflio Site.","https://theanxiuser.github.io"]],de={background:"#000000",foreground:"#F8DDE5",banner:"#048400",border:{visible:!0,color:"#f2f2f4"},prompt:{default:"#A5A7A7",user:"#FE6BC9",host:"#70FDFF",input:"#FF7685"},link:{text:"#B6AAEE",highlightColor:"#FFADE2",highlightText:"#0C0623"},commands:{textColor:"#FD9BDB"}},s={ascii:se,title:oe,username:ne,hostname:ae,password:ie,repoLink:ce,diaryLink:le,social:ue,aboutGreeting:he,projects:pe,colors:de};(()=>{const e=document.createElement("style"),t=document.head,a=`body {background: ${s.colors.background}}`,i=`body {color: ${s.colors.foreground}}`,o=`input {background: ${s.colors.background}}`,l=`input {color: ${s.colors.prompt.input}}`,m=`.output {color: ${s.colors.prompt.input}}`,E=`#pre-host {color: ${s.colors.prompt.host}}`,$=`#host {color: ${s.colors.prompt.host}}`,T=`#pre-user {color: ${s.colors.prompt.user}}`,x=`#user {color: ${s.colors.prompt.user}}`,I=`#prompt {color: ${s.colors.prompt.default}}`,R=`pre {color: ${s.colors.banner}}`,L=`a {color: ${s.colors.link.text}}`,A=`a:hover {background: ${s.colors.link.highlightColor}}`,D=`a:hover {color: ${s.colors.link.highlightText}}`,B=`.command {color: ${s.colors.commands.textColor}}`,H=`.keys {color: ${s.colors.banner}}`;t.appendChild(e),e.sheet&&(e.sheet.insertRule(`#bars {background: ${s.colors.background}}`),e.sheet.insertRule(`main {border-color: ${s.colors.border.color}}`),e.sheet.insertRule(`#bar-1 {background: ${s.colors.border.color}; color: ${s.colors.background}}`),e.sheet.insertRule(`#bar-2 {background: ${s.colors.border.color}}`),e.sheet.insertRule(`#bar-3 {background: ${s.colors.border.color}}`),e.sheet.insertRule(`#bar-4 {background: ${s.colors.border.color}}`),e.sheet.insertRule(`#bar-5 {background: ${s.colors.border.color}}`),e.sheet.insertRule(a),e.sheet.insertRule(i),e.sheet.insertRule(o),e.sheet.insertRule(l),e.sheet.insertRule(m),e.sheet.insertRule(E),e.sheet.insertRule($),e.sheet.insertRule(T),e.sheet.insertRule(x),e.sheet.insertRule(I),e.sheet.insertRule(R),e.sheet.insertRule(L),e.sheet.insertRule(A),e.sheet.insertRule(D),e.sheet.insertRule(B),e.sheet.insertRule(H))})();const me={commands:[["'whoami'","A perplexing question."],["'about'","Expand the connections."],["'whereis'","Look into social media eg. whereis --linkedin."],["'projects'","Maybe there's something interesting."],["'thecipherdiary'","Something useful."],["'sudo'","???"],["'repo'","View this project repository."],["'banner'","Display the banner."],["'clear'","Clear the terminal."]]},be=()=>{const e=[];return e.push("<br>"),me.commands.forEach(t=>{const a="&nbsp;";let i="";i+=a.repeat(2),i+="<span class='command'>",i+=t[0],i+="</span>",i+=a.repeat(17-t[0].length),i+=t[1],e.push(i)}),e.push("<br>"),e.push("Press <span class='keys'>[Tab]</span> for auto completion."),e.push("Press <span class='keys'>[Esc]</span> to clear the input line."),e.push("Press <span class='keys'>[↑][↓]</span> to scroll through your history of commands."),e.push("<br>"),e},fe=be(),ge=()=>{const e=[];return e.push("<br>"),s.ascii.forEach(t=>{let a="";for(let o=0;o<t.length;o++)t[o]===" "?a+="&nbsp;":a+=t[o];let i=`<pre>${a}</pre>`;e.push(i)}),e.push("<br>"),e.push("Welcome to System x86_64 v1.0.0"),e.push("Type <span class='command'>'help'</span> for a list of all available commands."),e.push("<br>"),e},z=ge(),ke=()=>{const e=[],t="&nbsp;",a="Email",i="LinkedIn",o="GitHub",l="GitLab",m="X",E="Instagram",$="Facebook",T="Diary",x="Medium",I="TryHackMe",R="HackTheBox",L="Discord",A=`<i class='fa-solid fa-envelope'></i> ${a}`,D=`<i class='fa-brands fa-linkedin'></i> ${i}`,B=`<i class='fa-brands fa-github'></i> ${o}`,H=`<i class='fa-brands fa-gitlab'></i> ${l}`,X=`<i class='fa-brands fa-x'></i> ${m}`,q=`<i class='fa-brands fa-instagram'></i> ${E}`,J=`<i class='fa-brands fa-facebook'></i> ${$}`,Q=`<i class="fa fa-book"></i> ${T}`,Z=`<i class='fa-brands fa-medium'></i> ${x}`,ee=`<i class='fa fa-globe'></i> ${I}`,te=`<i class='fa fa-globe'></i> ${R}`,re=`<i class='fa-brands fa-discord'></i> ${L}`;let r="";return e.push("<br>"),e.push(s.aboutGreeting),e.push("<br>"),r+=t.repeat(2),r+=A,r+=t.repeat(17-a.length),r+=`<a target='_blank' href='mailto:${s.social.email}'>${s.social.email}</a>`,e.push(r),r="",r+=t.repeat(2),r+=D,r+=t.repeat(17-i.length),r+=`<a target='_blank' href='https://www.linkedin.com/in/${s.social.linkedin}'>linkedin/${s.social.linkedin}</a>`,e.push(r),r="",r+=t.repeat(2),r+=B,r+=t.repeat(17-o.length),r+=`<a target='_blank' href='https://github.com/${s.social.github}'>github/${s.social.github}</a>`,e.push(r),r="",r+=t.repeat(2),r+=H,r+=t.repeat(17-l.length),r+=`<a target='_blank' href='https://gitlab.com/${s.social.gitlab}'>gitlab/${s.social.gitlab}</a>`,e.push(r),r="",r+=t.repeat(2),r+=X,r+=t.repeat(17-m.length),r+=`<a target='_blank' href='https://x.com/${s.social.x}'>x/${s.social.x}</a>`,e.push(r),r="",r+=t.repeat(2),r+=re,r+=t.repeat(17-L.length),r+=`<a target='_blank' href='https://discord.com/users/${s.social.discord}'>discord/${s.social.discord}</a>`,e.push(r),r="",r+=t.repeat(2),r+=q,r+=t.repeat(17-E.length),r+=`<a target='_blank' href='https://instagram.com/${s.social.instagram}'>instagram/${s.social.instagram}</a>`,e.push(r),r="",r+=t.repeat(2),r+=J,r+=t.repeat(17-$.length),r+=`<a target='_blank' href='https://facebook.com/${s.social.facebook}'>facebook/${s.social.facebook}</a>`,e.push(r),r="",r+=t.repeat(2),r+=Q,r+=t.repeat(17-T.length),r+=`<a target='_blank' href='${s.diaryLink}'>thecipherdiary</a>`,e.push(r),r="",r+=t.repeat(2),r+=Z,r+=t.repeat(17-x.length),r+=`<a target='_blank' href='https://medium.com/${s.social.medium}'>medium/${s.social.medium}</a>`,e.push(r),r="",r+=t.repeat(2),r+=ee,r+=t.repeat(17-I.length),r+=`<a target='_blank' href='https://tryhackme.com/r/p/${s.social.tryhackme}'>tryhackme/${s.social.tryhackme}</a>`,e.push(r),r="",r+=t.repeat(2),r+=te,r+=t.repeat(17-R.length),r+=`<a target='_blank' href='https://app.hackthebox.com/profile/${s.social.hackthebox}'>hackthebox/${s.social.hackthebox}</a>`,e.push(r),e.push("<br>"),e},ye=ke(),we=()=>{const e=["<br>","System x86_64: command not found","Type <span class='command'>'help'</span> to get started.","<br>"],t=[];return e.forEach(a=>{t.push(a)}),t},Ee=we(),$e=()=>{let e="";const t=[],a=`${s.projects.length} File(s)`,i="&nbsp;";return t.push("<br>"),s.projects.forEach(o=>{let l=`<a href="${o[2]}" target="_blank">${o[0]}</a>`;e+=i.repeat(2),e+=l,e+=i.repeat(17-o[0].length),e+=o[1],t.push(e),e=""}),t.push("<br>"),t.push(a),t.push("<br>"),t},Te=$e(),C={message:[["The Engineer,","I build and optimize systems,","Helping to make human life easier through computers - then, "],["Security Researcher,","Adopting the Hacker culture,","I identify vulnerabilities and strengthen defenses to protect digital landscapes - then, "],["Software Developer,","I create software solutions that turn ideas into functional, scalable applications - then, "],["Student,","I continuously learn and adapt - then, "],["Tech Facilator,","Bridge the gap between learner and technology - then, "],["Tech Guy,","I troubleshoot and support, ensuring technology works seamlessly in everyday life - then, "]]},xe=()=>{const e=[],t=Math.floor(Math.random()*C.message.length);return e.push("<br>"),C.message[t].forEach((a,i)=>{i===C.message[t].length-1&&(a+="<span class='command'>who am I?</span>"),e.push(a)}),e.push("<br>"),e};let h=document.getElementById("write-lines"),d=0,N="",p,S=!1,O=!1,_=0,u=!1;const f=h,g=document.getElementById("terminal"),c=document.getElementById("user-input"),k=document.getElementById("input-hidden"),y=document.getElementById("password-input"),w=document.getElementById("password-field"),F=document.getElementById("pre-host"),U=document.getElementById("pre-user"),j=document.getElementById("host"),W=document.getElementById("user"),P=document.getElementById("prompt"),Ie=["help","about","projects","whoami","repo","banner","clear","whereis","thecipherdiary"],b=[],Re=s.password,Le=s.repoLink,v=s.social,ve=s.diaryLink,V=()=>{const e=document.getElementById("main");e&&(e.scrollTop=e.scrollHeight)};function M(e){const t=e.key;switch(t){case"Enter":e.preventDefault(),O?De():Se(),V();break;case"Escape":c.value="";break;case"ArrowUp":G(t),e.preventDefault();break;case"ArrowDown":G(t);break;case"Tab":Pe(),e.preventDefault();break}}function Se(){if(!h||!P)return;const e="";let t;if(p=c.value,u?t=p:t=`<span class='output'>${p}</span>`,b.push(p),d=b.length,p==="clear"){K(p.toLowerCase().trim()),c.value=e,p=e;return}const a=document.createElement("div");a.innerHTML=`<span id="prompt">${P.innerHTML}</span> ${t}`,h.parentNode&&h.parentNode.insertBefore(a,h),p.trim().length!==0&&K(p.toLowerCase().trim()),c.value=e,p=e}function Pe(){let e=c.value;for(const t of Ie)if(t.startsWith(e)){c.value=t;return}}function G(e){switch(e){case"ArrowDown":d!==b.length&&(d+=1,c.value=b[d],d===b.length&&(c.value=N));break;case"ArrowUp":d===b.length&&(N=c.value),d!==0&&(d-=1,c.value=b[d]);break}}function K(e){if(e.startsWith("rm -rf")&&e.trim()!=="rm -rf"){S?e==="rm -rf src"&&!u?(u=!0,setTimeout(()=>{!g||!f||(g.innerHTML="",g.appendChild(f),h=f)}),Be(),setTimeout(()=>{n(["What made you think that was a good idea?","<br>"])},200),setTimeout(()=>{n(["Now everything is ruined.","<br>"])},1200)):n(e==="rm -rf src"&&u?["there's no more src folder.","<br>"]:u?["What else are you trying to delete?","<br>"]:["<br>","Directory not found.","type <span class='command'>'ls'</span> for a list of directories.","<br>"]):n(["Permission not granted.","<br>"]);return}switch(e){case"clear":setTimeout(()=>{!g||!f||(g.innerHTML="",g.appendChild(f),h=f)});break;case"banner":if(u){n(["System x86_64 v1.0.0","<br>"]);break}n(z);break;case"help":if(u){n(["Maybe restarting your browser will fix this.","<br>"]);break}n(fe);break;case"whoami":if(u){n([`${s.username}`,"<br>"]);break}n(xe());break;case"about":if(u){n(["Nothing to see here.","<br>"]);break}n(ye);break;case"projects":if(u){n(["I don't want you to break the other projects.","<br>"]);break}n(Te);break;case"repo":n(["Redirecting...","<br>"]),setTimeout(()=>{window.open(Le,"_blank")},500);break;case"whereis --linkedin":n(["Redirecting...","<br>"]),setTimeout(()=>{window.open("https://www.linkedin.com/in/"+v.linkedin,"_blank")},500);break;case"whereis --github":n(["Redirecting...","<br>"]),setTimeout(()=>{window.open("https://www.github.com/"+v.github,"_blank")},500);break;case"whereis --x":n(["Redirecting...","<br>"]),setTimeout(()=>{window.open("https://www.x.com/"+v.x,"_blank")},500);break;case"email":n(["Redirecting...","<br>"]),setTimeout(()=>{window.open("mailto:"+v.email,"_blank")},500);break;case"thecipherdiary":n(["Redirecting...","<br>"]),setTimeout(()=>{window.open(ve,"_blank")},500);break;case"rm -rf":if(u){n(["Don't try again.","<br>"]);break}n(S?["Usage: <span class='command'>'rm -rf &lt;dir&gt;'</span>","<br>"]:["Permission not granted.","<br>"]);break;case"sudo":if(u){n(["Permission not granted.","<br>"]);break}if(!y)return;O=!0,c.disabled=!0,k&&(k.style.display="none"),y.style.display="block",setTimeout(()=>{w.focus()},100);break;case"ls":if(u){n(["","<br>"]);break}n(S?["src","<br>"]:["Permission not granted.","<br>"]);break;default:if(u){n(["type 'help'","<br>"]);break}n(Ee);break}}function n(e){e.forEach((t,a)=>{Ae(t,a)})}function Ae(e,t){setTimeout(()=>{if(!h)return;const a=document.createElement("p");a.innerHTML=e,h.parentNode.insertBefore(a,h),V()},40*t)}function Y(){!k||!y||(w.value="",c.disabled=!1,k.style.display="block",y.style.display="none",O=!1,setTimeout(()=>{c.focus()},200))}function De(){if(_===2){if(!k||!h||!y)return;n(["<br>","Incorrect password.","<br>"]),Y(),_=0;return}if(w.value===Re){if(!h||!h.parentNode)return;n(["<br>","Permission granted.","Try <span class='command'>'rm -rf'</span>","<br>"]),Y(),S=!0;return}else w.value="",_++}function Be(){const e=document.getElementById("bars"),t=document.body,a=document.getElementById("main"),i=document.getElementsByTagName("span");if(e){e.innerHTML="",e.remove(),a&&(a.style.border="none"),t.style.backgroundColor="black",t.style.fontFamily="VT323, monospace",t.style.fontSize="20px",t.style.color="white";for(let o=0;o<i.length;o++)i[o].style.color="white";c.style.backgroundColor="black",c.style.color="white",c.style.fontFamily="VT323, monospace",c.style.fontSize="20px",P&&(P.style.color="white")}}const He=()=>{j&&(j.innerText=s.hostname),W&&(W.innerText=s.username),F&&(F.innerText=s.hostname),U&&(U.innerText=s.username),window.addEventListener("load",()=>{n(z)}),c.addEventListener("keypress",M),c.addEventListener("keydown",M),w.addEventListener("keypress",M),window.addEventListener("click",()=>{c.focus()}),console.log(`%cPassword: ${s.password}`,"color: red; font-size: 9px;")};He();
