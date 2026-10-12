
function jookideValik(){
    let vastus2=document.getElementById('vastus2');
    let joogiValik=document.getElementById('joogiValik');
    let kogus=document.getElementById('kogus');
    let joogipilt=document.getElementById('joogipilt');

    const kohv=1.50;
    const cola=2.20;
    const fanta=2.00;
    const vesi=0;

    if(joogiValik.selectedIndex===1){
        vastus2.innerHTML=kogus.value+' Kohvi hind on '
            +(kogus.value*kohv)+' €';
        vastus2.style.color="green";
        joogipilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkgEoIl6POQd_1nZP9P4E7rJqZhcOUtCKRNPRy97oPMw&s=10";
    } else if(joogiValik.selectedIndex===2){
        vastus2.innerHTML=kogus.value+' Vesi on tasuta!';
        vastus2.style.color="green";
        joogipilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9MQIqYrPYDHZK0WQ_R4ZpzEAyUmVcW3InS3xoXrXrJA&s=10";
    } else if(joogiValik.selectedIndex===3){
        vastus2.innerHTML=kogus.value+' Coca-Cola hind on '
            +(kogus.value*cola)+' €';
        vastus2.style.color="green";
        joogipilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0qeazAP1O75Uc_6LQBZCN-XLxPmaJ8NSqBQRi5HdA7g&s=10";
    } else if(joogiValik.selectedIndex===4){
        vastus2.innerHTML=kogus.value+' Fanta hind on '
            +(kogus.value*fanta)+' €';
        vastus2.style.color="green";
        joogipilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-UisfUIYng_k3S2DOjLLBLhyuRVbhoCNqmj9khVYfqA&s=10";
    }
}