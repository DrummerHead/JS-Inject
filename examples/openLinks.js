/* -  This is a javascript snippet to be used with
      http://mcdlr.com/js-inject/             - */


/* -  Any site                            - *\
|* -  Opens links                         - *|
\* -  v1.0                                - */


// Global state, sorry
let selectingParent = false;

class Menu {
  constructor(StyleClass, rmvEvntLstnr) {
    this.StyleClass = StyleClass;
    this.style = null;
    this.element = null;
    this.rmvEvntLstnr = rmvEvntLstnr;
    this.state = {
      selector: 'Hover over a link to consider as target',
      parentSelector: '',
      links: [],
      lastLinks: [],
      linkDelta: 10,
      elementTentativelyChosen: false,
      linksArrayHasContent: false,
      selectorChosen: false,
      willReverseLinks: false,
    };
    this.initialize();

    this.handleOpen = this.handleOpen.bind(this);
    this.handleTryAgain = this.handleTryAgain.bind(this);
    this.handleRange = this.handleRange.bind(this);
  }

  initialize() {
    document.body.insertAdjacentHTML('beforeend', '<div class="openLinks__menu"></div>');
    this.element = document.querySelector('.openLinks__menu');
    this.style = new this.StyleClass({ id: 'openLinksMenuStyle', content: `
      .openLinks__menu {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        padding: 1em;
        background-color: #eee;
        color: #222;
        box-shadow: 0 -.2em .5em rgba(0, 0, 0, .1);
      }
      .openLinks__menu__selectorDisplay {
        font-family: monospace;
        margin: 0 0 .6em;
      }
      .openLinks__menu__button {
        display: inline-block;
        background-color: #81d4fa;
        cursor: pointer;
        padding: .6em .8em;
        margin: .2em .2em 0 0;
      }
      .openLinks__menu__range {
        float: right;
      }
      .openLinks__menu__range input {
        display: inline-block;
        width: 10em;
        vertical-align: middle;
      }
      .openLinks__menu__range span {
        display: inline-block;
        width: 2em;
      }
    ` });
    document.addEventListener('keydown', (event) => {
      if (event.keyCode === 82) {
        this.state.willReverseLinks = true;
      } else if (event.keyCode >= 65 && event.keyCode <= 90) {
        this.handleSelectparent();
      } else if (event.keyCode === 32) {
        event.preventDefault();
        this.handleOpen();
      } else if (event.keyCode === 13) {
        this.handleTryAgain();
      }
    });
    this.render();
  }

  setSelector(selector) {
    this.state.selector = selector;
    this.state.elementTentativelyChosen = true;
    this.render();
  }

  setParentSelector(selector) {
    this.state.parentSelector = selector;
    this.render();
  }

  openLinks() {
    const linksToOpen = this.state.links.slice(0, this.state.linkDelta);
    const RemainingLinks = this.state.links.slice(this.state.linkDelta);
    this.state.lastLinks = linksToOpen;
    this.state.links = RemainingLinks;

    for (const link of this.state.lastLinks) {
      const href = link.getAttribute('href');
      console.log(href);
      window.open(href);
    }

    this.render();
  }

  handleOpen() {
    if (!this.state.linksArrayHasContent) {
      this.state.linksArrayHasContent = true;
      this.state.links = Array
        .from(document.querySelectorAll(`${this.state.parentSelector} ${this.state.selector}`))
        .filter((aElem) => {
          const href = aElem.getAttribute('href');
          return href && href.length > 1;
        });
      if (this.state.willReverseLinks) {
        this.state.links = this.state.links.reverse();
      }
      this.rmvEvntLstnr();
    }
    this.openLinks();
  }

  handleSelectparent() {
    // global var
    selectingParent = true;
  }

  handleTryAgain() {
    for (const link of this.state.lastLinks) {
      const href = link.getAttribute('href');
      console.log(href);
      window.open(href);
    }
  }

  handleRange(event) {
    this.state.linkDelta = event.target.value;
    document.querySelector('.openLinks__menu__range span').textContent = this.state.linkDelta;
    document.querySelector('.openLinks__menu__open').textContent = this.getOpenLinkText();
  }

  getOpenLinkText() {
    if (!this.state.linksArrayHasContent) {
      return 'Open [spacebar]';
    } else if (this.state.links.length <= 0) {
      return 'No more links';
    }
    const toOpenLength = this.state.links.length < this.state.linkDelta
      ? this.state.links.length
      : this.state.linkDelta;
    return `Open next ${toOpenLength} links [spacebar]`;
  }

  render() {
    const childNodes = Array.from(this.element.childNodes);
    for (const node of childNodes) {
      node.remove();
    }
    this.element.insertAdjacentHTML('beforeend',
    `<p class='openLinks__menu__selectorDisplay'>${this.state.parentSelector} ${this.state.selector}</p>
      ${this.state.elementTentativelyChosen
        ? `<span class="openLinks__menu__button openLinks__menu__open">${this.getOpenLinkText()}</span>
        ${this.state.linksArrayHasContent
          ? '<span class="openLinks__menu__button openLinks__menu__tryagain">try again [enter]</span>'
          : '<span class="openLinks__menu__button openLinks__menu__selectparent">Select parent [any key]</span>'
        }`
        : ''
      }
    <div class='openLinks__menu__range'>
      Number of links to open:
      <input type='range' min='5' max='40' step='1' value='${this.state.linkDelta}'>
      <span>${this.state.linkDelta}</span>
    </div>
    `);

    const openLinksMenuOpen = this.element.querySelector('.openLinks__menu__open');
    const openLinksMenuSelectparent = this.element.querySelector('.openLinks__menu__selectparent');
    const openLinksMenuTryAgain = this.element.querySelector('.openLinks__menu__tryagain');
    const openLinksMenuRange = this.element.querySelector('.openLinks__menu__range input');

    if (openLinksMenuOpen) {
      openLinksMenuOpen.addEventListener('click', this.handleOpen);
    }
    if (openLinksMenuSelectparent) {
      openLinksMenuSelectparent.addEventListener('click', this.handleSelectparent);
    }
    if (openLinksMenuTryAgain) {
      openLinksMenuTryAgain.addEventListener('click', this.handleTryAgain);
    }
    openLinksMenuRange.addEventListener('input', this.handleRange);
  }
}

class Style {
  constructor({ id, content = '.cmFuZG9tIHNoaXQ { visibility: visible; }' }) {
    this.id = id;
    this.state = {
      content,
      element: null,
    };
    this.initialize();
  }

  initialize() {
    document.head.insertAdjacentHTML('beforeend', `<style id='${this.id}'>${this.state.content}</style>`);
    this.state.element = document.getElementById(this.id);
  }

  setContent(content) {
    this.state.element.sheet.deleteRule(0);
    this.state.element.sheet.insertRule(content, 0);
  }
}

const getSelectorFromClassList = (nodeName, classList) => {
  const classArray = Array.from(classList);
  return `${nodeName.toLowerCase()}${classArray.reduce((prev, curr) => `${prev}.${curr}`, '')}`;
};


const styleManager = new Style({ id: 'c3R5bGU' });
const parentStyleManager = new Style({ id: 'cGFyZW50' });

const menu = new Menu(Style, () => {
  document.removeEventListener('mouseover', handleMouseOver, false);
});

const handleMouseOver = (event) => {
  // global var
  if (selectingParent) {
    const selector = getSelectorFromClassList(event.target.nodeName, event.target.classList);
    const rule = `${selector} {outline: .15em solid green}`;
    parentStyleManager.setContent(rule);
    menu.setParentSelector(selector);
  } else {
    if (event.target.nodeName === 'A') {
      const selector = getSelectorFromClassList('A', event.target.classList);
      const rule = `${selector} {outline: .1em solid red; color: red}`;
      styleManager.setContent(rule);
      menu.setSelector(selector);
    }
  }
};

document.addEventListener('mouseover', handleMouseOver, false);
