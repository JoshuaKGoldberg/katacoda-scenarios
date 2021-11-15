let gem;

switch (Math.floor(Math.random() * 3)) {
  case 0:
    gem = "Amethyst";
    break;
  case 1:
    gem = "Garnet";
    break;
  case 2:
    gem = "Pearl";
    break;
}

console.log(`My random gem: ${gem}`);
