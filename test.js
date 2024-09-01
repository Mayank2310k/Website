const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const description = document.getElementById("description");
const surpriseMeBtn = document.getElementById("surpriseMeBtn");

let isChickenVisible;

let people = [
    {
        photo:
            'url("https://lh3.googleusercontent.com/a/ACg8ocIYwQSsxWTPbT-ODBP6CKhtSlo2sAD83Msi9vdedD2xqm_LOw=w75-h75-p-rp-mo-br100")',
        name: "Kartik Suryawanshi",
        profession: "⭐⭐⭐⭐⭐",
        description:
            "HE HAS EXCEPTIONAL SKILLS AND TALENT TOO HUMBLE GUY COMMUNICATION WAS TOO SMOOTH WITH HIM , OVERALL EXPERIENCE WAS TOO GOOD WE NEED THIS TYPE OF PEOPLE IN INDIA"
    },

    {
        photo:
            "url('https://lh3.googleusercontent.com/a-/ALV-UjUMpkuvQVUk75-bRGWMG0xkpxwcQfHe8TrtmF929H4unFBQdw4=s45-c-rp-mo-br100')",
        name: "DORE MON",
        profession: "⭐⭐⭐⭐⭐",
        description:
            "Mayank Kulkarni is an exceptional web developer with a remarkable ability to communicate complex ideas clearly and effectively. Their strong communication skills not only make them an invaluable asset to any project, ensuring smooth collaboration and understanding among team members, but also help in translating client requirements into technical solutions seamlessly. Beyond their professional talents, Mayank is a great friend to everyone—approachable, supportive, and always willing to lend a helping hand. Their positive attitude and willingness to connect with others make them a joy to work with and be around."
    },

    {
        photo:
            "url('https://lh3.googleusercontent.com/a-/ALV-UjWFQGh8a_TE8LLfd4mhitOBZYnmxZbFQN4ltVK2mmda7GImOiXi=s45-c-rp-mo-br100')",
        name: "Viraj Borole",
        profession: "⭐⭐⭐⭐⭐",
        description:
            "Problem solving skills."
    },

    {
        photo:
            "url('https://lh3.googleusercontent.com/a/ACg8ocIex0U6R2fhY8a5_TzPChN7A9fUsx8KJQG9_eCAcPTyfzGCYQ=s45-c-rp-mo-br100')",
        name: "Anurag Trivedi",
        profession: "⭐⭐⭐⭐⭐",
        description:
            "Doing really great keep it up 👍"
    },
    {
        photo:
            "url('https://lh3.googleusercontent.com/a-/ALV-UjXi_kGqCXP2yF1kEr642dRmhFmwki1il-abq7bU3_7T2gajgFk=s45-c-rp-mo-br100')",
        name: "Kiranrathore123 Kiranrathore123",
        profession: "⭐⭐⭐⭐⭐",
        description:
            "Mayank is a web wizard! with a perfect mix of tech genius and budget savvy. Superb communication, and the final result blew me away. Highly recommend this web maestro!"
    }
    ,
    {
        photo:
            "url('https://lh3.googleusercontent.com/a-/ALV-UjWeTE-CpgaaEv6eI_ph35AA8-UhI3lrovUoo5EN6nDY11gHIKk_=s45-c-rp-mo-br100')",
        name: "Aditya Bhoyar",
        profession: "⭐⭐⭐⭐⭐",
        description:"Mayank Kulkarni is an exceptional web developer who created a fantastic website for me at an affordable price. The perfect blend of technical skills and cost-effectiveness makes him stand out. Communication was smooth, and the final result exceeded expectations. Highly recommend!"
    },
    {
        photo:
            "url('https://lh3.googleusercontent.com/a-/ALV-UjWP0i6uq8XEIsjmBYmykzJ7nQo3sRdREm512KlmsHXKVoUdyNrx=s45-c-rp-mo-br100')",
        name: "Pranjal Wagh",
        profession: "⭐⭐⭐⭐⭐",
        description:"N/A"
    },
    {
        photo:
            "url('https://lh3.googleusercontent.com/a-/ALV-UjWyWFIoQjn-dyF00-_eppOkEffxtu7hfCUKFQb-HNkb6_FpnRc=s45-c-rp-mo-br100')",
        name: "Priya Shukla",
        profession: "⭐⭐⭐⭐⭐",
        description:"N/A"
    },
    {
        photo:
            "url('https://lh3.googleusercontent.com/a/ACg8ocJu84GO1LOoAbENABWxCdhEi1MQTHTvuCAVGcFliz_SfTaD6g=s45-c-rp-mo-br100')",
        name: "Vivek Waje",
        profession: "⭐⭐⭐⭐⭐",
        description:"N/A"
    }
];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

//Select the side where you want to slide
function slide(whichSide, personNumber) {
    let reviewWrapWidth = reviewWrap.offsetWidth + "px";
    let descriptionHeight = description.offsetHeight + "px";
    //(+ or -)
    let side1symbol = whichSide === "left" ? "" : "-";
    let side2symbol = whichSide === "left" ? "-" : "";

    let tl = gsap.timeline();

    if (isChickenVisible) {
        tl.to(chicken, {
            duration: 0.4,
            opacity: 0
        });
    }

    tl.to(reviewWrap, {
        duration: 0.4,
        opacity: 0,
        translateX: `${side1symbol + reviewWrapWidth}`
    });

    tl.to(reviewWrap, {
        duration: 0,
        translateX: `${side2symbol + reviewWrapWidth}`
    });

    setTimeout(() => {
        imgDiv.style.backgroundImage = people[personNumber].photo;
    }, 400);
    setTimeout(() => {
        description.style.height = descriptionHeight;
    }, 400);
    setTimeout(() => {
        personName.innerText = people[personNumber].name;
    }, 400);
    setTimeout(() => {
        profession.innerText = people[personNumber].profession;
    }, 400);
    setTimeout(() => {
        description.innerText = people[personNumber].description;
    }, 400);

    tl.to(reviewWrap, {
        duration: 0.4,
        opacity: 1,
        translateX: 0
    });
}

function setNextCardLeft() {
    if (currentPerson === 8) {
        currentPerson = 0;
        slide("left", currentPerson);
    } else {
        currentPerson++;
    }

    slide("left", currentPerson);
}

function setNextCardRight() {
    if (currentPerson === 0) {
        currentPerson = 8;
        slide("right", currentPerson);
    } else {
        currentPerson--;
    }

    slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);

