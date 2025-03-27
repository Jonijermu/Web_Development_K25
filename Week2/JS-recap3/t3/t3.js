'use strict'

function userInformation() {
  const div = document.querySelector('#target')
  const os = navigator.userAgentData.platform;
  const browser = navigator.userAgentData.brands[2].brand;
  const browserVersion = navigator.userAgentData.brands[2].version;
  const screenW = window.screen.width.toString();
  const screenH = window.screen.height.toString();
  const screenSpaceW = window.innerWidth.toString();
  const screenSpaceH = window.innerHeight.toString()

  const info = [`OS: ${os}`,
    `Browser: ${browser}`,
    `Browser Version: ${browserVersion}`,
    `Screen Width: ${screenW}`,
    `Screen Height: ${screenH}`,
    `Screen Width Space: ${screenSpaceW}`,
    `Screen Height Space: ${screenSpaceH}`
  ];

  for (let i of info) {
    const p = document.createElement('p');
    p.textContent = i;
    div.appendChild(p);
  }
}

function getCurrentTime() {
  const div = document.querySelector('#target')
  const time = new Date();
  const options = time.toLocaleString('fi-Fi', {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: '2-digit',
    minute: '2-digit',

  });

  const p = document.createElement('p');
  p.textContent = `Current Time: ${options}`;
  div.appendChild(p);
}

userInformation();
getCurrentTime();
