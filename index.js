const { addClass, createElement } = require('./lib/utils');

fetch(chrome.runtime.getURL('/index.html')).then(r => r.text()).then(html => {
    // Attaching main html to page
    // not using innerHTML as it would break js event listeners of the page
    document.body.insertAdjacentHTML('beforebegin', html);

    // alert('Hey');
    // document.body.style.backgroundColor = "red";
    window.wdt = {};

    wdt.mainUIDiv = document.querySelector(".wdt");
    wdt.createElementButton = document.querySelector("#create-element");
    wdt.elementToCreate = document.querySelector("#element-to-create");
    wdt.testButton = document.querySelector("#test-button");
    wdt.outlinedClass = 'wdt-outlined';


    let mousePosition = { x: 0, y: 0 };

    function toggleElementStyle(element, styleAttribute, style1, style2) {
        if (element.style[styleAttribute] != style1) {
            element.style[styleAttribute] = style1;
        } else {
            element.style[styleAttribute] = style2;
        }
    }

    function setElementStyles(element, keysValues) {
        for (let key in keysValues) {
            element.style[key] = keysValues[key];
        }
    }


    // Create the tooltip and append to body
    const tooltip = createElement('div');
    tooltip.classList.add('web-exp-tooltip');
    document.body.appendChild(tooltip);

    // TEST
    wdt.testButton.addEventListener("click", function (e) {
        chrome.storage.sync.set({ color: 'red' });
        // chrome.storage.sync.set({ color: elementToCreate.value });
    })

    document.addEventListener("keydown", function (e) {
        const key = e.key.toLowerCase();

        if (key == 'w' && e.altKey) {
            toggleElementStyle(wdt.mainUIDiv, 'display', 'none', 'block');
            setElementStyles(wdt.mainUIDiv, { top: mousePosition.y + 'px', left: mousePosition.x + 'px' })
        }
    })

    document.addEventListener("keyup", function (e) {
        const key = e.key;

        //TEST
        console.log({ up: e.key });

        chrome.storage.sync.get("color", ({ color }) => {

        });
    })

    // Add event that gets the element being hovered
    document.addEventListener("mousemove", function (e) {
        let hoveredElement = e.target;

        hoveredElement.classList.add(wdt.outlinedClass);

        // Get the mouse target element's position and update tooltip
        let rect = hoveredElement.getBoundingClientRect();
        tooltip.innerHTML = `${hoveredElement.localName}`;
        setElementStyles(tooltip, { top: mousePosition.y + 'px', left: mousePosition.x + 'px' })


        // Get all hovered elements and add outline to them
        // const allHoveredElements = document.querySelectorAll('*:hover');
        // allHoveredElements.forEach((eachElement) => {
        //     eachElement.classList.add("outlined");
        // })
    })

    // For every mouse move get the mouse position and store it
    document.addEventListener("mousemove", function (e) {
        mousePosition.x = e.clientX;
        mousePosition.y = e.clientY;
    })

    // Add event that gets the element being out of hover
    document.addEventListener("mouseout", function (e) {
        e.target.classList.remove(wdt.outlinedClass);
    })

    // Create an element and append to the element holder
    wdt.createElementButton.addEventListener("click", function (e) {
        // create the element
        const toCreateText = wdt.elementToCreate.value;

        // edit the element
        const createdElement = createElement(toCreateText);
        createdElement.innerText = `I am a ${toCreateText}`;

        // append the element
        const createdElementHolder = document.querySelector("#wdt-element-holder");
        createdElementHolder.appendChild(createdElement);
    })
});
