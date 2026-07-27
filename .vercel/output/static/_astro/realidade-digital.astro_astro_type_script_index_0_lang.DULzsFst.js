import{g as t,S as i}from"./ScrollTrigger.C0eCJjti.js";t.registerPlugin(i);document.addEventListener("DOMContentLoaded",()=>{let o=t.matchMedia();o.add("(min-width: 801px) and (max-width: 2399px)",()=>{t.timeline({scrollTrigger:{trigger:".hero",start:"top top",end:"+=150%",scrub:1,pin:!0}}).to(".hero .content",{opacity:0,y:-100,duration:1}).to(".arrow-down",{opacity:0,duration:.2},"<").to(".hero .cubo-img-wrapper",{y:"10vh",x:"20vw",scale:.8,duration:1},"<").fromTo(".ambientes-virtuais",{opacity:0,marginTop:"5vh"},{opacity:1,marginTop:"-50vh",duration:.8},"-=0.8")}),o.add("(min-width: 2400px)",()=>{t.timeline({scrollTrigger:{trigger:".hero",start:"top top",end:"+=150%",scrub:1,pin:!0}}).to(".hero .content",{opacity:0,y:-80,duration:1}).to(".arrow-down",{opacity:0,duration:.2},"<").to(".hero .cubo-img-wrapper",{y:"0vh",x:350,scale:.7,duration:1},"<").fromTo(".ambientes-virtuais",{opacity:0,marginTop:"5vh"},{opacity:1,marginTop:"-40vh",duration:.8},"-=0.8")}),o.add("(max-width: 800px)",()=>{t.timeline({scrollTrigger:{trigger:".hero",start:"top top",end:"+=120%",scrub:1,pin:!0}}).to(".hero .content",{opacity:0,y:-50,duration:1}).to(".arrow-down",{opacity:0,duration:.2},"<").to(".hero .cubo-img-wrapper",{y:"-10vh",duration:1},"<").fromTo(".ambientes-virtuais",{opacity:0,marginTop:"5vh"},{opacity:1,marginTop:"-20vh",duration:.8},"-=0.8")})});const e=document.getElementById("video-container"),a=document.getElementById("video-placeholder");a?.addEventListener("click",()=>{e&&(e.innerHTML=`
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
            `)});
