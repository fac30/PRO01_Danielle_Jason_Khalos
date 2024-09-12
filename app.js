// CONTACT FORM

/* Dani's code goes here */


// JOURNEY CALCULATOR

const travelTimes = {
    "The Sun": 0.1,
    "Mercury": 1.2,
    "Venus": 1.5,
    "Earth": 0,
    "Mars": 2,
    "Jupiter": 5,
    "Saturn": 7,
    "Neptune": 12,
    "Uranus": 10,
};

const birthdayInput = document.getElementById('birthday');
const planetInput = document.getElementById('planetsForm');
const ageNowOutput = document.getElementById('age1');
const travelTimeOutput = document.getElementById('travelTime');
const ageOnArrivalOutput = document.getElementById('age2');
const ageOnReturnOutput = document.getElementById('age3');

birthdayInput.addEventListener('change', updateAgeNow);
planetInput.addEventListener('input', updateTravelTime);

function calculateAge(birthday) {
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

function updateAgeNow() {
    const birthday = birthdayInput.value;
    if (birthday) {
        const ageNow = calculateAge(birthday);
        ageNowOutput.value = ageNow;
        updateAgeOnArrival();
    }
}

function updateTravelTime() {
    const selectedPlanet = planetInput.value.trim();
    const travelTime = travelTimes[selectedPlanet] || 0; // Handle undefined planet case
    travelTimeOutput.value = travelTime; // Store only the numeric travel time
    const travelUnit = (travelTime == 1 ? "year" : "years");
    travelTimeOutput.setAttribute('data-display', `${travelTime} ${travelUnit}`); // Store the display value separately
    updateAgeOnArrival();
}

function updateAgeOnArrival() {
    const travelTime = parseFloat(travelTimeOutput.value); // Get the pure numeric travel time
    const ageNow = parseInt(ageNowOutput.value, 10);

    if (!birthdayInput.value) {
        ageOnArrivalOutput.value = "";
        ageOnReturnOutput.value = "";
    } else if (!Number.isNaN(ageNow) && !Number.isNaN(travelTime)) {
        const ageOnArrival = ageNow + travelTime;
        ageOnArrivalOutput.value = `${ageOnArrival.toFixed(0)}`;
        ageOnReturnOutput.value = `${(ageOnArrival + travelTime).toFixed(0)}`;
    } else {
        ageOnArrivalOutput.value = "Error";
        ageOnReturnOutput.value = "Error";
    }
}


// PLANET OBJECTS

const template = {
  intro1: `<p>Welcome to <strong>`,
  intro2: `</strong>, your next interplanetary adventure! Before you pack your space gear, here
    are some fun facts that make it a must-visit vacation spot for all cosmic travelers:</p>`
}

const jupiter = {
  name: 'Jupiter',
  colors: {
    color1: "#3B2F2F",
    color2: "#D7CCC8",
    color3: "#A1887F"
  },
  image: 'url("images/jupiter.png")',
  description: {
    column1: `
    ${template.intro1}${this.name}${template.intro2}
    <p><strong>The Ultimate Giant:</strong> Jupiter is so big that over 1,300 Earths could fit inside it! This gas giant is the largest planet in the Solar System. Visiting Jupiter would make you feel like you’ve stepped onto a truly colossal world. Imagine gazing at its vast swirling clouds and the famous Great Red Spot, a storm bigger than Earth that’s been raging for centuries.</p>
    `,
    column2: `<p><strong>Moon-Hopping Adventures:</strong> Jupiter has 79 moons, and four of them -Io, Europa, Ganymede, and Callisto— are bigger than any planet in the inner Solar System (except Earth). Each moon offers a different adventure, from volcanic landscapes on Io to possible alien oceans on Europa!</p>

    <p><strong>Experience Jupiter’s Superfast Days:</strong> Want to experience a fast-paced day? A day on Jupiter lasts only 10 hours! Despite being the largest planet, it spins the fastest, so while you're enjoying the sights, the sun will rise and set in no time. Perfect for those who want to experience multiple sunrises and sunsets in a single Earth day!</p>`
  }
}

const mars = {
  name: 'Mars',
  colors: { 
    color1: "#4C0000", 
    color2: "#2E2E2E", 
    color3: "#D4B59E" 
  },
  image: 'url("images/mars.png")',
  descriptions: { 
    column1: `
    ${template.intro1}${this.name}${template.intro2} 
    <p><strong>Experience "Martian Gravity":</strong> Mars has only 38% of Earth’s gravity. Imagine jumping three
    times higher than you would on Earth — perfect for some out-of-this-world fun!</p>
    `, 
    column2: `
    <p><strong>Stay at the Olympus Mons Resort:</strong> Olympus Mons is the tallest volcano in the entire solar
    system, nearly three times the height of Mount Everest! A stay near this massive peak offers breathtaking
    views unlike anything you’ve seen on Earth.</p>
    <p><strong>Red Dust Sunsets:</strong> Mars’ sky appears reddish-pink during the day, but at sunset, the sky
    turns blue! It’s the reverse of Earth — perfect for dreamy evening stargazing.</p>
    `
  }
}

const mercury = {
  name: 'Mercury',
  colors: {
     color1: "#1C1C1C", 
     color2: "#4A90E2", 
     color3: "#919191"
    },
  image: 'url("images/mercury.png")',
  description: { 
    column1: `
    ${template.intro1}${this.name}${template.intro2}
    <p><strong>Closest to the Sun, But Not the Hottest!</strong> Even though Mercury is the closest planet to the Sun, it’s not the hottest planet in the solar system—Venus holds that title. Mercury has virtually no atmosphere to trap heat, so it can’t retain the Sun’s warmth like Venus can. For adventurers, this makes Mercury a fascinating place to experience the raw, unfiltered power of the Sun up close!</p>
    `, 
    column2: `
    <p><strong>Visit The Caloris Basin:</strong> One of Mercury's most striking features is the Caloris Basin, an enormous impact crater about 960 miles (1,550 km) in diameter, caused by a colossal asteroid collision. Standing at the edge of this giant basin would give you a sense of just how powerful the forces of the universe can be.</p>
    <p><strong>Mercury Has a Comet-Like Tail:</strong> This is due to the solar wind interacting with Mercury’s exosphere, stripping away sodium atoms and creating a glowing tail that extends millions of miles into space. You wouldn’t see this tail with your eyes from Mercury’s surface, but it's visible through special instruments</p>
    `
  }
}

const neptune = {
  name: 'Neptune',
  colors: { 
    color1: "#0e0e24", 
    color2: "#F8F8FF", 
    color3: "#28697a" 
  },
  image: 'url("images/neptune.png")',
  description: { 
    column1: `
    ${template.intro1}${this.name}${template.intro2}
    <p><strong>A Stunning Shade of Blue:</strong> Neptune’s vibrant blue color is thanks to the presence of methane in its atmosphere. This gas absorbs red light and reflects blue light, giving the planet its striking hue. With its beautiful deep blue tones, Neptune is like a sapphire in the solar system, making it a must-visit for interplanetary photographers looking to capture breathtaking cosmic landscapes!</p>
    `, 
    column2: `
    <p><strong>Home to Rare Ice Volcanoes:</strong> In Triton, Neptune's largest moon, there are active cryovolcanoes! These "ice volcanoes" erupt supercooled nitrogen and other ices. Get ready to witness geysers shooting frosty material into the thin atmosphere of Triton, which offers a one-of-a-kind glimpse into extraterrestrial geology. This is an experience perfect for adventurous tourists looking to explore the peculiarities of icy worlds!</p>
    <p><strong>Rings of Ice and Dust:</strong> Neptune has a faint ring system composed of ice particles and dust. As you explore the planet’s ringed wonders, you might even get a chance to observe how these rings interact with Neptune’s numerous moons!</p>
    `
  }
}

const pluto = {
  name: 'Pluto',
  colors: { 
    color1: "#4C0000", 
    color2: "#2E2E2E", 
    color3: "#D4B59E" 
  },
  image: 'url("images/pluto.png")',
  description: { 
    column1: `
    ${template.intro1}${this.name}${template.intro2}
    `, 
    column2: `` 
  }
}

const saturn = {
  name: 'Saturn',
  colors: { 
    color1: "#4B3A2A", 
    color2: "#FFFAFA", 
    color3: "#B8860B" 
  },
  image: 'url("images/saturn.png")',
  description: { 
    column1: `
    ${template.intro1}${this.name}${template.intro2}
    <p><strong>Take a Stroll on Saturn's Rings:</strong> Saturn's iconic rings aren't solid, they're made of countless ice and rock particles ranging in size from tiny grains to massive boulders. While you couldn't actually walk on them, imagine floating among these icy particles, each reflecting sunlight in a mesmerizing cosmic dance. The view would be absolutely breathtaking!</p>
    `, 
    column2: `
    <p><strong>A World of Super-Fast Winds:</strong> Hold onto your helmets! Winds on Saturn can reach speeds of 1,100 miles per hour (1,800 km/h). That’s faster than a jet engine! Experience the thrill of witnessing Saturn's atmosphere as it swirls and churns, creating stunning cloud formations.</p>
    <p><strong>Floating in the Atmosphere:</strong> Saturn’s atmosphere is composed primarily of hydrogen and helium, making it incredibly light and buoyant. Experience an almost weightless sensation by floating in its atmosphere, adding a unique twist to the experience of exploring this gas giant.</p>
    ` 
  }
}

const venus = {
  name: 'Venus',
  colors: { 
    color1: "#241e0d", 
    color2: "#ede9da", 
    color3: "#8C7A50" 
  },
  image: 'url("images/venus.png")',
  description: { 
    column1: `
    ${template.intro1}${this.name}${template.intro2}
    <p><strong>Hotter than Mercury!</strong> Even though Venus is farther from the Sun, it's the hottest planet in the Solar System. With surface temperatures reaching a scorching 900°F (475°C), Venus is hotter than Mercury due to its thick atmosphere of carbon dioxide that traps heat. It’s like visiting the hottest sauna in the cosmos—just be sure to admire the view from a safe distance!</p>
    `, 
    column2: `
    <p><strong>Retrograde Rotation:</strong> Venus has a unique rotation compared to most other planets. It spins in the opposite direction to most planets, meaning if you were on Venus, the Sun would rise in the west and set in the east. Imagine experiencing the sky changing in ways completely different from Earth</p>
    <p><strong>A Day Longer Than a Year:</strong> A day on Venus is longer than its year! It takes Venus 243 Earth days to complete one full spin, but only 225 Earth days to orbit the Sun. That means you could experience a full Venusian year before the Sun sets on your first day there!</p>
    ` 
  }
}

const uranus = {
  name: 'Uranus',
  colors: { 
    color1: "#000000", 
    color2: "#ffff", 
    color3: "#6b6969" 
  },
  image: 'url("images/sun.png")',
  description: { 
    column1: `
    ${template.intro1}${this.name}${template.intro2}
    <p><strong>The "Rollercoaster" Planet:</strong> Uranus is tilted nearly 98 degrees on its side, this offers our tourists a wild, rotating view of space! Seasons last over 20 Earth years, and you get to see the Sun rising and setting in the same spot during those extended periods of daylight and darkness.</p>
    `, 
    column2: `
    <p><strong>The Ultimate Ice Resort:</strong> Welcome to the coldest destination in the solar system! Uranus can reach frigid lows of -371°F (-224°C), making it the perfect spot for extreme winter sports. Just make sure to pack for the subzero temperatures!</p>
    <p><strong>Floating Rings with a View:</strong> Uranus has 13 delicate rings, made of dark particles. Imagine gazing at these faint, mysterious rings from the surface of one of Uranus's 27 moons. Talk about a celestial view for your vacation selfies!</p>
    ` 
  }
}

const sun = {
  name: 'Sun',
  colors: { 
    color1: "#00000", 
    color2: "#ffff", 
    color3: "#6b6969" 
  },
  image: 'url("images/sun.png")',
  description: { 
    column1: `
    ${template.intro1}${this.name}${template.intro2}
    `, 
    column2: ``
  }
}