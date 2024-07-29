const hamburger = document.querySelector('.icon-open');
const navigation = document.querySelector('.navigation >nav');

hamburger.onclick =()=>{
    if (navigation.style.display == 'block'){
        navigation.style.display = 'none';
        hamburger.src = 'icon-hamburger.svg'
    }else{
        navigation.style.display = 'block';
        hamburger.src = 'icon-close.svg'
    }
}