const loadingOverlay = document.getElementById("loading-overlay");

fetch('/api/fighters')
    .then(resp => resp.json())
    .then(data => {
        const fightersElement = document.getElementById('fighters');

        data.forEach(item => {
            const fighterElement = createFighter(item);

            fightersElement.append(fighterElement);
        });
    })
    .catch(err => {
       console.error(err);
       loadingOverlay.innerHTML = "Failed to load data";
    })
    .finally(() => {
        loadingOverlay.remove();
    });

function createFighter(fighter) {
    const fighterElement = document.createElement("div");
    fighterElement.classList.add("fighter");

    const fighterNameElement = createFighterName(fighter);
    const fighterImageElement = createFighterImage(fighter);

    fighterElement.append(fighterImageElement, fighterNameElement);
    return fighterElement;

}

function createFighterName({ name }) {
    const fighterNameElement = document.createElement("div");
    fighterNameElement.classList.add("fighter__name");
    fighterNameElement.innerHTML = name;
    return fighterNameElement;
}

function createFighterImage({ source }) {
    const fighterImageElement = document.createElement("img");
    fighterImageElement.classList.add("fighter__image");
    fighterImageElement.setAttribute("src", source);
    return fighterImageElement;
}