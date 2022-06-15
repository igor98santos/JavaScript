const BASE_URL = "https://thatcopy.pw/catapi/rest/"
const heroesBtn = document.getElementById('charge-hero')
const heroe = document.getElementById('heroes')

const getHero = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.webpurl
    } catch (e) {
        console.log(e.message)
    }
}
const loadImg = async () => {
    const heroImg = document.getElementById('heroes')
    heroImg.src = await getHero();
}

heroesBtn.addEventListener('click', loadImg)
loadImg()