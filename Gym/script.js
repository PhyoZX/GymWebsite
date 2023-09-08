const navMenu = document.getElementById('nav_menu'),
    navToggle = document.getElementById('nav_toggle'),
    navClose = document.getElementById('nav_close');
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show_menu');
    })
}
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show_menu');
    })
}

const navLink = document.querySelectorAll('.nav_link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav_menu');
    navMenu.classList.remove('show_menu');
}
navLink.forEach(n=>n.addEventListener('click',linkAction));
                
const scrollHeader = () =>{
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('scroll_header') : header.classList.remove('scroll_header');
}
window.addEventListener('scroll',scrollHeader);

const sections = document.querySelectorAll('section[id]');
const scrollActive = () =>{
    const scrollY = window.pageYOffset;
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 60,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']');
            if(scrollY > sectionTop && scrollY <= sectionTop+sectionHeight){
                sectionClass.classList.add('active_link');
            }else{
                sectionClass.classList.remove('active_link');
            }
    })
}
window.addEventListener('scroll',scrollActive);

const scrollUp = () =>{
    const scrollUp = document.getElementById('scrollup');
    this.scrollY >= 350 ? scrollUp.classList.add('show_scroll') : scrollUp.classList.remove('show_scroll');
}
window.addEventListener('scroll',scrollUp);

// animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
}) 
sr.reveal('.home_data, .footer_container, .footer_group');
sr.reveal('.home_img',{delay:700,origin:'bottom'});
sr.reveal('.program_card, .pricing_card',{interval:100});
sr.reveal('.choose_img, .calculate_content',{origin:'left'});
sr.reveal('.choose_content, .calculate_img',{origin:'right'});

const calculateForm = document.getElementById('calculate_form'),
    calculateCm = document.getElementById('calculate_cm'),
    calculateKg = document.getElementById('calculate_kg'),
    calculateMsg = document.getElementById('calculate_msg');

const calculateBmi = (e)=>{
    e.preventDefault();
    if(calculateCm.value === '' || calculateKg.value === ''){
        calculateMsg.classList.remove('first_color');
        calculateMsg.classList.add('red_color');

        calculateMsg.textContent = 'Fill height and weight!';

        setTimeout(() =>{
            calculateMsg.textContent='';
        },3000);
    }else{
        const cm = calculateCm.value/100,
            kg = calculateKg.value,
            bmi = Math.round(kg/(cm*cm));
        if(bmi < 18.5){
            calculateMsg.classList.add('first_color');
            calculateMsg.textContent = `Your BMI is ${bmi} and you are skinny!`;
        }else if(bmi < 25){
            calculateMsg.classList.add('first_color');
            calculateMsg.textContent = `Your BMI is ${bmi} and you are healthy!`;
        }else{
            calculateMsg.classList.add('first_color');
            calculateMsg.textContent = `Your BMI is ${bmi} and you are overweight!`;
        }
        calculateCm.value='';
        calculateKg.value='';
        setTimeout(()=>{
            calculateMsg.textContent='';
        },4000);
    }
}
calculateForm.addEventListener('submit',calculateBmi);

const contactForm = document.getElementById('contact_form'),
    contactMessage = document.getElementById('contact_message'),
    contactUser = document.getElementById('contact_user');

const sendEmail = (e) =>{
    e.preventDefault();
    if(contactUser.value===''){
        contactMessage.classList.remove('first_color');
        contactMessage.classList.add('red_color');
        contactMessage.textContent='You must enter your email !';
        setTimeout(()=>{
            contactMessage.textContent='';
        },3000);
    }else{
        // emailjs.sendForm(serviceID, templateID, templateParams_#form, publicKey);
        emailjs.sendForm('service_5kicjup','template_98t1o1o','#contact_form','HP5nvBXKuWzZFc1N-')
        .then(()=>{
            contactMessage.classList.add('first_color');
            contactMessage.textContent = 'Your registered successfully ><';
            setTimeout(()=>{
                contactMessage.textContent='';
            },3000);
        },(error)=>{
            alert('SORRY! SOMETHING WAS WRONG',error);
        })
        contactUser.value='';
     }
}
contactForm.addEventListener('submit',sendEmail);


