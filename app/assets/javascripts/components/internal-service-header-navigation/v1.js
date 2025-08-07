
const headerNav = document.querySelector('[data-module="dwp-header-nav"]'),
      viewport = { 'mobile': 390 };

/**
 * Check if a DOM object is in the visible bounds of another DOM object
 * 
 * @param {Object} element  DOM object to test visibility of
 * @param {Object} container DOM object the element needs to be in the bounds of to be visible
 * @returns {Boolean}
 */
const isVisible = (element, container) => {
    var elementBounding = element.getBoundingClientRect();
    var containerBounding = container.getBoundingClientRect();

    return (
        elementBounding.top >= containerBounding.top &&
        elementBounding.left >= containerBounding.left &&
        elementBounding.bottom <= containerBounding.bottom &&
        elementBounding.right <= containerBounding.right
    );
};

/**
 * Debounce function for resize
 * https://www.joshwcomeau.com/snippets/javascript/debounce/
 * 
 * @param {Function} callback Function to run after wait
 * @param {Number} wait time in milliseconds to wait before running callback 
 * @returns 
 */
const debounce = (callback, wait) => {
    let timeoutId = null;

    return (...args) => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        callback.apply(null, args);
      }, wait);
    };
  }

/**
 * Convert HTML string into nodes to use to insert into DOM
 * @param {String} html HTML string
 * @return {NodeList} 
 */
const htmlToElements = (html => {
    let template = document.createElement('template');
    template.innerHTML = html;

    return template.content.childNodes;
});

/**
 * Find and remove elements with the given class name
 * @param {String} className 
 */
const removeElementsByClass = (className => {
    const element = document.getElementsByClassName(className);

    while(element.length > 0) {
        element[0].parentNode.removeChild(element[0]);
    }
});

/**
 * Removes all children of the given element
 * 
 * @param {Object} element 
 */
const removeAllChildren = (element => {
    let lastChild = element.lastChild

    while(element.lastChild) {
        element.removeChild(lastChild)
        lastChild = element.lastChild
    }
});

/**
 * Toggles class on overflow menu when more button is clicked
 * 
 * @param {Object} button Button object that toggles class
 * @param {String} buttonToggleClass Class name to toggle on the Button
 * @param {Object} element Element to toggle a class on
 * @param {String} elementToggleClass Class name to toggle on the Element
 */
 const buttonToggle = (button, buttonToggleClass, element, elementToggleClass,) => {    
    button.classList.toggle(buttonToggleClass)
    element.classList.toggle(elementToggleClass)
}

/**
 * Checks if a value is 'undefined' or null
 * 
 * @param {Any} value  The value to test  
 * @returns {Boolean}  True if there is a 'some' value, false if value is equal to 'undefined' string or equates to null
 */
const hasValue = (value) => {
    return typeof value === 'undefined' || value === null ? false : true
}

/**
 * Create the overflow nav
 */
const overflowNav = debounce((event) => {

    // do not continue if the screen is for mobile
    if (event.target.screen.width < viewport.mobile) {
        return
    }
    
    // remove more button if it already exists
    removeElementsByClass('dwp-header-navigation__button-list-item');

    let headerNavListItems = Array.from(headerNav.querySelectorAll('li')),
        fullNav = document.createElement('ul'),
        lastVisible,
        overflowLinks,
        navLinks;
    
    // remove any header links that may have been added from the mobile nav 
    headerNavListItems  = headerNavListItems.filter(listItem => listItem.classList.contains('mobile-nav__header-link') == false )  

    /* remove all ul in the current nav and set up all the links in a single ul
        to see if an overflow is needed - this is inefficient if there is no need for an
        overflow - there must be a better way!
    */ 
    removeAllChildren(headerNav)    

    // create a dummy full nav to test which links are visible
    fullNav.setAttribute('class', 'full-nav')
    headerNav.appendChild(fullNav)
    
    

    // find out which is the last list link that is visible in the current viewport
    headerNavListItems.forEach((listItem, i) => {
        fullNav.appendChild(listItem)
        if (isVisible(listItem, headerNav)) {
            lastVisible = i
        }
    });

    // if there is a need to create an overflow nav do it
    if (headerNavListItems.length > (lastVisible + 1)) { 
        
        // create empty ul for the updated navs     
        let overflowNav = document.createElement('div'),
            navLinksHtml = document.createElement('ul'),
            overflowNavLinksHtml = document.createElement('ul'),
            buttonListItemHtml = document.createElement('li'),                                    
            moreButtonHtml = document.createElement('button');

        // split the nav into two arrays one for the visible nav and one for the overflow links
        navLinks = [...headerNavListItems];
        overflowLinks = navLinks.splice(lastVisible);  

        // get the html from each link in the arrays and add to the empty lists
        navLinks.forEach(link => {
            navLinksHtml.appendChild(htmlToElements(link.outerHTML)[0])
        });

        overflowLinks.forEach(link => {
            overflowNavLinksHtml.appendChild(htmlToElements(link.outerHTML)[0])
        });

        // create and add the more button to the visible list
        buttonListItemHtml.setAttribute('class', 'dwp-header-navigation__button-list-item')
        moreButtonHtml.setAttribute('class', 'dwp-header-navigation__overflow-menu-button')
        moreButtonHtml.innerHTML = 'More <span class="govuk-visually-hidden"> links<span>'
        buttonListItemHtml.appendChild(moreButtonHtml)
        navLinksHtml.appendChild(buttonListItemHtml)
        
        // remove the temp nav
        headerNav.removeChild(fullNav)

        // add the new link lists to the nav
        overflowNav.setAttribute('class', 'nav-links--overflow')
        navLinksHtml.setAttribute('class', 'nav-links--visible')
        // overflowNavLinksHtml.setAttribute('class', 'nav-links--overflow')
        headerNav.appendChild(navLinksHtml)
        overflowNav.appendChild(overflowNavLinksHtml)
        headerNav.appendChild(overflowNav)

        // setup click
        moreButtonHtml.addEventListener('click', (event) => {
            buttonToggle(event.target, 'dwp-header-navigation__menu-button--open', overflowNav, 'navlinks--overflow-visible',)
        });
    } 
}, 100);



/**
 * Create mobile nav
 */
const mobileNav = debounce((event) => {

    // do not continue if the screen is bigger than mobile
     if (event.target.screen.width > (viewport.mobile - 1) ) {
        return
    }

    let header =  document.querySelector('[data-header-id="' + headerNav.getAttribute('data-header') + '"'), // use data attributes to associate a nav to a specific header, in general there should only ever be one header and nav but not making assumptions!
        headerContainerAction = header.getElementsByClassName('dwp-header__container--action')[0],
        menuButton = headerContainerAction.getElementsByClassName('dwp-header-navigation__mobile-nav-button')[0],
        mobileNavLinks = headerNav.getElementsByClassName('dwp-header-navigation__mobile-nav-links')[0];
        
    // if the nav has already been split with an overflow then merge everything back into one list
    if (headerNav.querySelectorAll('ul').length > 1 || !hasValue(mobileNavLinks)) {
        let headerNavLinks = Array.from(headerNav.querySelectorAll('a'));
        
        mobileNavLinks = document.createElement('ul')

        // create new merged list of links
        headerNavLinks.forEach(link => {
            let li = document.createElement('li');

            li.appendChild(link)
            mobileNavLinks.appendChild(li)
        });

        // copy all the links in the header and append to bottom of the mobile nav
        const headerLinks = headerContainerAction.querySelectorAll('a:not(.dwp-header-navigation__action)') // this class needs to be added to any links that are not to be copied to the mobile nav e.g. nojs mobile link

        headerLinks.forEach(link => {
         
            let li = document.createElement('li'),
            mobileHeaderLink = link.cloneNode(true);

            li.classList.add('mobile-nav__header-link')
            li.appendChild(mobileHeaderLink)
            mobileNavLinks.appendChild(li)
         
        });

        headerContainerAction.classList.add('hide-links--mobile')

        // remove any current lists and links
        removeAllChildren(headerNav)

        // add the merged list of links
        mobileNavLinks.setAttribute('class', 'dwp-header-navigation__mobile-nav-links')
        headerNav.appendChild(mobileNavLinks)

    } else {
        mobileNavLinks.classList.remove('nav-links--mobile-visible')
    }

    // Only create the menu button if it does not exist
    if (!hasValue(menuButton)) {
        menuButton = document.createElement('button'),
        menuButton.setAttribute('class', 'dwp-header-navigation__mobile-nav-button')
        menuButton.innerHTML = 'Menu'
        headerContainerAction.insertBefore(menuButton, headerContainerAction.firstChild);   
        
    } else {
        let unboundMenuButton = menuButton.cloneNode(true)

        // remove all previous events by replacing the button with a clone
        menuButton.replaceWith(unboundMenuButton);
        // reestablish menu button with the clone
        menuButton = unboundMenuButton

        menuButton.classList.remove('dwp-header-navigation__menu-button--open')
    }

    // setup click on resize because mobileNavLinks may need to be rebound 
    // TODO: is there more efficient way to do this?
    menuButton.addEventListener('click', (event) => {
        buttonToggle(menuButton, 'dwp-header-navigation__menu-button--open', mobileNavLinks, 'nav-links--mobile-visible',)
    });
}, 100);

/*  
    only implement js nav behaviour if html has is marked up to do so
    1. header nav requires [data-module="dwp-header-nav"]
    2. header nav require class dwp-header-navigation--js-nav
*/
if (hasValue(headerNav && headerNav.classList.contains('dwp-header-navigation--js-nav'))) {
    // hide any no-js elements
    const nojsMenuLink = document.getElementsByClassName('dwp-header-navigation__nojs-mobile-nav-link')[0];
    nojsMenuLink.setAttribute('style', 'display:none;');

    // Run setNav on resize
    window.addEventListener('resize', overflowNav);
    window.addEventListener('resize', mobileNav);

    // Setup navs on load
    window.dispatchEvent(new Event('resize')); // TODO: not sure how browser friendly dispatchEvent is - it doesn't work in IE 11 not sure when it does kick in
}

