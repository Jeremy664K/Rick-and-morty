export function buildCharacter({ image, name, location, status, species, origin }) {
    const character = document.createElement("article");
    character.classList.add("characters__card");

    character.innerHTML = `
        <aside class="characters__aside">
            <picture class="characters__picture">
                <img class="characters__portrait" src="${image}" alt="${name}" loading="lazy" decoding="async" />
            </picture>
        </aside>
        <div class="characters__wrapper">
            <header class="characters__header">
                <h2 class="characters__title characters__title--colorful characters__title--gradient">${name}</h2>
                    <p class="characters__status characters__status--${status}">
                        <span class="characters__islive">
                            <svg width="16" height="16" fill="currentColor" class="bi bi-record-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            </svg>
                        </span>
                        ${status} - ${species}
                    </p>
                </header>
                <section class="characters__found">
                    <div class="characters__wrapper">
                        <p class="characters__info">Last known location:</p>
                        <h3 class="characters__location">${location.name}</h3>
                    </div>
                    <div class="characters__wrapper">
                        <p class="characters__info">First seen in:</p>
                        <h3 class="characters__seein">${origin.name}</h3>
                    </div>
                </section>
        </div>
    `;

    return character;
}
