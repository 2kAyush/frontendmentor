const arrowBtn = document.getElementsByClassName('arrow');
console.log(arrowBtn);
for(let i=0; i < arrowBtn.length;i++){
    arrowBtn[i].setAttribute('onclick', 'clicked(this)');
}

function clicked(element){
    let faqText = element.parentElement;
    if(faqText.querySelector('.toggle-text').style.display === "none"){
        // need to make sure that every other question is not visited currently.
        for(let i=0; i < arrowBtn.length;i++){
            unWatch(arrowBtn[i]);
        }
        faqText.querySelector('.question').style.fontWeight="700";
        element.querySelector('img').classList.add('active');
        faqText.querySelector('.toggle-text').style.display="block";
    }
    else{
        unWatch(element);
    }
}

function unWatch(element){
    let faqText = element.parentElement;
    faqText.querySelector('.question').style.fontWeight="400";
    element.querySelector('img').classList.remove('active');
    faqText.querySelector('.toggle-text').style.display="none";
}