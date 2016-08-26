/* -  This is a javascript snippet to be used with
      http://mcdlr.com/js-inject/             - */


/* -  GitHub - https://github.com/any-repo/package.json  - *\
|* -  Link package dependencies on a package.json to npm - *|
\* -  v1.0                                               - */


const findParentBySelector = (elem, selector) => {
  const parent = elem.parentNode;
  if (parent.matches(selector)) {
    return parent;
  } else {
    return findParentBySelector(parent, selector);
  }
};

const isStartOfObject = (row) => /{/.test(row.textContent);

const isEndOfObject = (row) => /}/.test(row.textContent);

const linkToNMP = (tr) => {
  const packageEl = tr.querySelector('.pl-s:first-child');
  const packageText = packageEl.textContent;
  const packageName = packageText.replace(/["']*/g, '');
  packageEl.innerHTML = `<a href='https://www.npmjs.com/package/${packageName}' style='text-decoration: underline'>${packageText}</a>`;
};

const traverseTrs = (dep) => {
  const trFather = dep.matches('tr') ? dep : findParentBySelector(dep, 'tr');
  const trSibling = trFather.nextElementSibling;

  if(!isEndOfObject(trFather)){
    if(isStartOfObject(trFather)){
      traverseTrs(trSibling);
    } else {
      linkToNMP(trFather);
      traverseTrs(trSibling);
    }
  }

};

if (window.location.host === 'github.com' && window.location.pathname.endsWith('package.json')) {
  const deps = Array.from(document.querySelectorAll('.pl-s:first-child'))
    .filter((el, i) => /"(dev)?[Dd]ependencies"/.test(el.textContent));
  for(dep of deps){
    traverseTrs(dep);
  };
} else {
  alert('This is not a package.json file on github.com');
}

/* -  /GitHub  - */
