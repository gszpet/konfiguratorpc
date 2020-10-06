function info(pkt, inform){
    const punkt = document.getElementById(pkt);
    const imformation = document.getElementById(inform);

    punkt.addEventListener("mouseenter", function (){
        imformation.classList.remove('visible');
        imformation.classList.add('visibleNo');
    })



    info('lscpuHov', 'lscpu');
})