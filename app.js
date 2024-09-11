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
     color3: "#D4B59E"
    },
  image: 'url("images/mercury.png")',
  description: { 
    column1: `
    ${template.intro1}${this.name}${template.intro2}
    `, 
    column2: ``
  }
}

const neptune = {
  name: 'Neptune',
  colors: { 
    color1: "#1A1B41", 
    color2: "#F8F8FF", 
    color3: "#5ED3F3" 
  },
  image: 'url("images/neptune.png")',
  description: { 
    column1: `
    ${template.intro1}${this.name}${template.intro2}
    `, 
    column2: ``
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
    <p><strong>Take a Stroll on Saturn's Rings:</strong> Saturn's iconic rings aren't solid, they're made of countless ice and rock particles ranging in size from tiny grains to massive boulders. While you couldn't actually walk on them, imagine floating among these icy particles, each reflecting sunlight in a mesmerizing cosmic dance. The view would be absolutely breathtaking!
    </p>
    `, 
    column2: `
    <p><strong>A World of Super-Fast Winds:</strong> Hold onto your helmets! Winds on Saturn can reach speeds of 1,100 miles per hour (1,800 km/h). That’s faster than a jet engine! Experience the thrill of witnessing Saturn's atmosphere as it swirls and churns, creating stunning cloud formations.
    </p>
    <p><strong>Floating in the Atmosphere:</strong> Saturn’s atmosphere is composed primarily of hydrogen and helium, making it incredibly light and buoyant. Experience an almost weightless sensation by floating in its atmosphere, adding a unique twist to the experience of exploring this gas giant.</p>
    ` 
  }
}

const venus = {
  name: 'Venus',
  colors: { 
    color1: "#4C0000", 
    color2: "#2E2E2E", 
    color3: "#D4B59E" 
  },
  image: 'url("images/venus.png")',
  description: { 
    column1: `
    ${template.intro1}${this.name}${template.intro2}
    `, 
    column2: `` 
  }
}

const uranus = {
  name: 'Uranus',
  colors: { 
    color1: "#4C0000", 
    color2: "#2E2E2E", 
    color3: "#D4B59E" 
  },
  image: 'url("images/sun.png")',
  description: { 
    column1: `
    ${template.intro1}${this.name}${template.intro2}
    `, 
    column2: `` 
  }
}

const sun = {
  name: 'Sun',
  colors: { 
    color1: "#4C0000", 
    color2: "#2E2E2E", 
    color3: "#D4B59E" 
  },
  image: 'url("images/sun.png")',
  description: { 
    column1: `
    ${template.intro1}${this.name}${template.intro2}
    `, 
    column2: ``
  }
}

