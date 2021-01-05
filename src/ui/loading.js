let loadingEl, descEl;

let goosemodScope = {};

export const setThisScope = (scope) => {
  goosemodScope = scope;
};

export const startLoadingScreen = () => {
  loadingEl = document.createElement('div');

  loadingEl.style.position = 'absolute';
  loadingEl.style.transform = 'translateX(-25%)';
  loadingEl.style.left = '50%';
  loadingEl.style.top = '60px';

  loadingEl.style.zIndex = '10';

  loadingEl.style.backgroundColor = 'var(--background-floating)';
  loadingEl.style.borderRadius = '8px';
  loadingEl.style.padding = '16px';
  loadingEl.style.boxShadow = 'var(--elevation-high)';

  loadingEl.style.display = 'flex';
  loadingEl.style.flexDirection = 'column';
  loadingEl.style.alignItems = 'center';

  const titleEl = document.createElement('h1');

  titleEl.classList.add('name-1jkAdW', 'header-2V-4Sw');

  titleEl.style.marginBottom = '5px';

  titleEl.style.display = 'block';

  titleEl.style.boxShadow = 'none';
  titleEl.style.webkitBoxShadow = 'none';

  titleEl.textContent = `Injecting GooseMod`;

  const versionEl = document.createElement('div');

  versionEl.classList.add('colorStandard-2KCXvj', 'size14-e6ZScH', 'description-3_Ncsb', 'formText-3fs7AJ', 'modeDefault-3a2Ph1');

  versionEl.textContent = `v${goosemodScope.version} (${goosemodScope.versionHash.substring(0, 7)})`;

  versionEl.style.marginBottom = '20px';

  descEl = document.createElement('div');

  descEl.classList.add('colorStandard-2KCXvj', 'size14-e6ZScH', 'description-3_Ncsb', 'formText-3fs7AJ', 'modeDefault-3a2Ph1');

  descEl.textContent = `Starting up...`;

  loadingEl.appendChild(titleEl);
  loadingEl.appendChild(versionEl);
  loadingEl.appendChild(descEl);

  document.body.appendChild(loadingEl);
};

export const updateLoadingScreen = (tip) => {
  descEl.textContent = tip;
};

export const stopLoadingScreen = () => {
  loadingEl.remove();
};