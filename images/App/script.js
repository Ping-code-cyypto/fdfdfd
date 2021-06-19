const hamb = document.getElementById('hamb');
const dropdown = document.getElementById('list');
const closeb = document.getElementById('close');
const button = document.getElementById('button');
const personia1 = document.getElementById('item1');
const personia2 = document.getElementById('item3');
const main = document.getElementById('overflow');




hamb.addEventListener('click', function(){
    dropdown.style.marginTop = '0';
    dropdown.style.transitionDuration = '0.7s';
    this.style.display = 'none';
    closeb.style.display = 'block';
},false);

closeb.addEventListener('click', function(){
    this.style.display = 'none';
    dropdown.style.marginTop = '-300px';
    hamb.style.display = 'block';
    
},false);

document.getElementById('nav1').addEventListener('mouseover', function(){
    this.style.opacity = '0.5';
    this.style.transitionDuration = '0.7s';
})

document.getElementById('nav1').addEventListener('mouseleave', function(){
    this.style.opacity = '1';
    this.style.transitionDuration = '0.7s';
})

document.getElementById('nav2').addEventListener('mouseover', function(){
    this.style.opacity = '0.5';
    this.style.transitionDuration = '0.7s';
})

document.getElementById('nav2').addEventListener('mouseleave', function(){
    this.style.opacity = '1';
    this.style.transitionDuration = '0.7s';
})

document.getElementById('nav3').addEventListener('mouseover', function(){
    this.style.opacity = '0.5';
    this.style.transitionDuration = '0.7s';
})

document.getElementById('nav3').addEventListener('mouseleave', function(){
    this.style.opacity = '1';
    this.style.transitionDuration = '0.7s';
})

document.getElementById('nav4').addEventListener('mouseover', function(){
    this.style.opacity = '0.5';
    this.style.transitionDuration = '0.7s';
})

document.getElementById('nav4').addEventListener('mouseleave', function(){
    this.style.opacity = '1';
    this.style.transitionDuration = '0.7s';
})

document.getElementById('nav5').addEventListener('mouseover', function(){
    this.style.opacity = '0.5';
    this.style.transitionDuration = '0.7s';
})

document.getElementById('nav5').addEventListener('mouseleave', function(){
    this.style.opacity = '1';
    this.style.transitionDuration = '0.7s';
})

button.addEventListener('mouseleave', function(){
    this.style.transitionDuration = '0.7s';
})

button2.addEventListener('mouseleave', function(){
    this.style.transitionDuration = '0.7s';
})

personia1.addEventListener('mouseover', function(){
    main.style.marginLeft = '10px';
    main.style.transitionDuration = '1s';
},false)

personia1.addEventListener('mouseleave', function(){
    main.style.marginLeft = '-60px';
    main.style.transitionDuration = '1s';
},false)

personia2.addEventListener('mouseover', function(){
    main.style.marginLeft = '-150px';
    main.style.transitionDuration = '1s';
},false)

personia2.addEventListener('mouseleave', function(){
    main.style.marginLeft = '-60px';
    main.style.transitionDuration = '1s';
},false)


const x = window.matchMedia('(max-width: 1000px');
 myfunction(x);

function myfunction(x){
    if(x.matches){
        main.style.marginLeft = '30px';
            // var pers1 = document.getElementById('item1');
          
    }
}

document.getElementById('anotherfbutton').addEventListener('mouseleave',function(){
    this.style.transitionDuration = '1s';
})
document.getElementById('button4').addEventListener('mouseleave',function(){
    this.style.transitionDuration = '1s';
})
 