let buttomModal = document.getElementById('icon-video');
let windowsModal = document.getElementById('windows-modal');
let closedModal = document.getElementById('closed');
let videoModal = document.getElementById('video-modal')

buttomModal.addEventListener('click', ()=> {
    windowsModal.classList.add('open-modal')
    videoModal.src = "https://www.youtube-nocookie.com/embed/r44RKWyfcFw?autoplay=0&amp;controls=1&amp;disablekb=1&amp;playsinline=0&amp;cc_load_policy=0&amp;cc_lang_pref=auto&amp;widget_referrer=file%3A%2F%2F%2FUsers%2Fmarcosalvarez%2FDownloads%2Fbasic-free%2Findex.html&amp;rel=0&amp;showinfo=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;customControls=true&amp;noCookie=true&amp;enablejsapi=1&amp;widgetid=4";
})

closedModal.addEventListener('click', ()=> {
    windowsModal.classList.remove('open-modal')
    videoModal.src = "";
})

windowsModal.addEventListener('click', ()=> {
    windowsModal.classList.remove('open-modal')
    videoModal.src = "";
})



