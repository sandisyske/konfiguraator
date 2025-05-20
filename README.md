# konfiguraator
Web-based configurator to modify 3D houses

https://sandisyske.github.io/konfiguraator/



---

## Versions
- **v0.1.1** – Navigatsiooniriba ning canvase muudatused. Eemaldatud scroll konfiguraatori vaatest.
- **v0.1.0** – Esimene prototüüp, 3D mudel kuvatud, interaktiivne, kuid pole võimalik konfigureerida muudatusi.
- **v0.1.1** – Muudetud maja mudeli valikun menüüd, lisatud font ja dünaamiline hinna funktisoon
- **v0.1.2** – Layout etappile on lisatud funktsionaalsus elementide lisamiseks ja eemaldamiseks. Muudetud maja 2D kuvamine korruste kaupa.

---

## Setup and developement

```bash
npm install
npm install axios
npm install gsap
npm run dev
```

### Compile and Hot-Reload for Development
```sh
npm run dev
```

### Deploy changes to gh-pages
```sh
npm run deploy
```

import { setFloorPlanView } from '@/logic/layoutController';

watch(currentStep, async (step) => {
if (step === 1 && model) {
setFloorPlanView(model, 'FLOOR1');
} else if (step === 2 && model) {
setFloorPlanView(model, 'FLOOR2');
}
});
