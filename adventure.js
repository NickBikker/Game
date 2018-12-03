var keuze1 = document.getElementById('button1');
var keuze2 = document.getElementById('button2');
var keuze3 = document.getElementById('button3');
var titel = document.getElementById('title');
var text = document.getElementById('description');
var item = document.getElementById('inventoryItem');
var container = document.getElementById('game-container');

var pickedupweapon = false;
var pickedupessence = false;
var pickedupphantom = false;

var killedabyss = false;
var killeddancer = false;

function start(){
    keuze1.innerHTML = 'Start Game';
    keuze2.style.display = 'none';
    keuze3.style.display= 'none';
    item.style.display ='none';
    titel.innerHTML = 'Welkom bij de Dark Souls 3 Experience';
    text.innerHTML = 'Dit is een game waar je een paar senarios gaat mee maken die je ook in Dark Souls tegen komt.';
    container.style.background = "url(img/start.jpg)";
    keuze1.onclick = boss1;

}

function boss1(){
    keuze1.innerHTML = 'run the fuck away';
    keuze2.style.display = 'inline-block';
    keuze2.innerHTML = 'Fight';
    keuze3.style.display = 'inline-block';
    keuze3.innerHTML = 'Try to romance it';
    container.style.backgroundImage ='url(img/boss1.png)';
    titel.innerHTML = 'You encountered your first boss';
    text.innerHTML = 'The gatekeeper of worlds.';
    keuze1.onclick = firelink;
    keuze2.onclick = dead;
    keuze3.onclick = dead;
}


function firelink(){
    keuze1.innerHTML = 'Go back';
    keuze2.style.display = 'inline-block';
    keuze2.innerHTML = 'Go forward';
    keuze3.style.display = 'none';
    container.style.backgroundImage = 'url(img/fire.jpg)';
    titel.innerHTML = 'You reached the firelink shrine';
    text.innerHTML = 'This place......I know this place! But....From where? But untill I can remember, I need to find a weapon';
    keuze1.onclick = deadboss1;
    if(killedabyss == false){
        keuze2.onclick = boss2;
    }else if(killedabyss == true){
        keuze2.onclick = deadboss2;
    }
}


function deadboss1(){
    keuze1.innerHTML = 'Go Forward';
    keuze2.style.display ='none';
    keuze3.style.display ='none';
    container.style.backgroundImage = 'url(img/deadboss1.jpg)';
    titel.innerHTML = 'this is the bossroom';
    text.innerHTML = 'Where did the boss go? Well....Maybe I can find myself a weapon somewhere';
    item.style.display = 'block';
    item.src = 'img/item.png';
    keuze1.onclick = firelink;
    item.onclick = weapon;
}


function weapon(){
    item.src = '';
    pickedupweapon = true;
}

function phantomsword(){
    item.src = '';
    pickedupphantom = true;
}

function essence(){
    item.src ='';
    pickedupessence = true;
}

function boss2(){
    keuze1.style.display = 'inline-block';
    keuze2.style.display = 'inline-block';
    keuze3.style.display = 'inline-block';
    keuze1.innerHTML = 'Fight!';
    keuze2.innerHTML = 'Just fucking run';
    keuze3.innerHTML = 'jump off the map?';
    container.style.backgroundImage = 'url(img/boss2.jpg)';
    titel.innerHTML = 'You encountered another boss!';
    text.innerHTML = 'From Fire to void, You dont know where you are..The only thing you can do is gaze into the abyss';
    if(pickedupweapon == true){
        keuze1.onclick = todancer;
    }else if(pickedupweapon == false){
        keuze1.onclick = dead;
    }
    keuze2.onclick = dead;
    keuze3.onclick = dead;

}

function todancer(){
    keuze1.style.display = 'inline-block';
    keuze2.style.display = 'inline-block';
    keuze3.style.display = 'none';
    keuze1.innerHTML ='Go Back';
    keuze2.innerHTML = 'Go forward';
    container.style.backgroundImage ='url(img/todancer.jpg)';
    titel.innerHTML = 'You reached the high wall of lothric';
    text.innerHTML = 'You just defeated the lord of the abyss, How much worse can it get from here?';
    keuze1.onclick = deadboss2;
    if(killeddancer == false){
        keuze2.onclick = boss3;
    }else if(killeddancer == true){
        keuze2.onclick = deadboss3;
    }

}

function deadboss2(){
    keuze1.style.display = 'inline-block';
    keuze2.style.display = 'inline-block';
    keuze3.style.display = 'none';
    keuze1.innerHTML ='Go Back';
    keuze2.innerHTML = 'Go forward';
    container.style.backgroundImage = 'url(img/deadboss2.jpg)';
    titel.innerHTML = 'abyss watcher area';
    text.innerHTML = 'This is the place where you fought the Lord of the abyss. His corrupted essence is still lingering.';
    item.src = 'img/item2.png';
    keuze1.onclick = firelink;
    keuze2.onclick = todancer;
    item.onclick = essence;
    killedabyss = true;
}

function boss3(){
    keuze1.style.display = 'inline-block';
    keuze2.style.display = 'inline-block';
    keuze3.style.display = 'inline-block';
    keuze1.innerHTML = 'Swing your sword';
    keuze2.innerHTML = 'try to hide';
    keuze3.innerHTML = 'Go commit die';
    container.style.backgroundImage = 'url(img/boss3.jpg)';
    titel.innerHTML = 'You encountered another boss';
    text.innerHTML = 'The maid. of the high lord was corrupted by the twisted practices of pontiff';
    keuze1.onclick = topontiff;
    keuze2.onclick = dead;
    keuze3.onclick = dead;
}

function topontiff(){
    keuze1.style.display = 'inline-block';
    keuze2.style.display = 'inline-block';
    keuze3.style.display = 'none';
    keuze1.innerHTML ='Go Back';
    keuze2.innerHTML = 'Go forward';
    container.style.backgroundImage = 'url(img/topontiff.jpg)';
    titel.innerHTML = 'You Reached Irithyll of the Boreal Valley';
    text.innerHTML = 'You are about to face the maker of corruption. The only way you can kill him is if you aquired a weapon, Essence of the abyss and a phantom blade from the maid.'
    keuze1.onclick = deadboss3;
    keuze2.onclick = boss4;

}

function deadboss3(){
    keuze1.style.display = 'inline-block';
    keuze2.style.display = 'inline-block';
    keuze3.style.display = 'none';
    keuze1.innerHTML ='Go Back';
    keuze2.innerHTML = 'Go forward';
    container.style.backgroundImage = 'url(img/deadboss3.jpg)';
    titel.innerHTML = 'This was the boss room of the dancer';
    text.innerHTML = 'You ended the dancers suffering but her phantom is still in existence';
    item.src = 'img/item3.png';
    keuze1.onclick = todancer;
    keuze2.onclick = topontiff;
    item.onclick = phantomsword;
    killeddancer = true;

}

function boss4(){
    keuze1.innerHTML = 'Rethink life decisions';
    keuze2.innerHTML = 'Fight';
    keuze3.innerHTML = 'just kys';
    keuze1.style.display = 'inline-block';
    keuze2.style.display = 'inline-block';
    keuze3.style.display = 'inline-block';
    titel.innerHTML = 'Second boss! ow no';
    text.innerHTML = 'Tell me pal, Whats the plan';
    container.style.backgroundImage = 'url(img/boss4.jpg)';
    keuze1.onclick = dead;
    if(pickedupweapon == true && pickedupessence == true && pickedupphantom == true){
        keuze2.onclick = win;
    }else{
        keuze2.onclick = dead;
    }
    keuze3.onclick = dead;

}

function dead(){
    keuze1.innerHTML = 'Start again';
    keuze1.onclick = reload;
    keuze2.style.display = 'none';
    keuze3.style.display = 'none';
    titel.style.display = 'none';
    text.style.display = 'none';
    container.style.backgroundImage = 'url(img/dead.png)'
}

function win(){
    keuze1.style.display = 'none';
    keuze2.style.display = 'none';
    keuze3.style.display = 'none';
    titel.innerHTML = 'YOU WON!';
    text.style.display = 'none';
    container.style.backgroundImage = 'url(img/win.jpg)';

}



function reload(){
    location.reload();
}
start();