const animatsiya = window.addEventListener('mousemove', (e) => {
        let kozlar = document.querySelectorAll('.koz')
        kozlar.forEach(harBiri => {

            let orta = harBiri.getBoundingClientRect()
            // console.log(orta);

            let ortaX = orta.left - orta.width/2;
            let ortaY = orta.top - orta.height/2;
            // console.log(ortaX,ortaY);

            let deltaX = e.clientX - ortaX;
            let deltaY = e.clientY - ortaY;
            // console.log(deltaX,deltaY);

            // burchakni radianda aylantirib berishi uchun math kutubxonasidan foydalanamiz
            let burchak = Math.atan2(deltaY,deltaX)
            // console.log(burchak);

            // koz ichidagi qorachig' va koz masofasi
            let masofa = 30

            let harakatX = Math.cos(burchak)*masofa
            let harakatY = Math.sin(burchak)*masofa
            harBiri.style.transform = `translate(${harakatX}px,${harakatY}px)`
        });
})



// Tushunish uchun yasalgan shablon edi
// const aylana = document.querySelector('.aylana')
// const nuqta = document.querySelector('.nuqta')
// window.addEventListener('mousemove', (e)=>{
//     let harakatX = e.clientX;
//     let harakatY = e.clientY;

//     aylana.style.transform = `translate(${harakatX}px,${harakatY}px)`
//     aylana.style.opacity = '1'
//     nuqta.style.transform = `translate(${harakatX}px,${harakatY}px)`
//     nuqta.style.opacity = '1'

// })