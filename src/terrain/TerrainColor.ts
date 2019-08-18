import { ColorGradient } from '../util/ColorGradient';
import { ColorGradient2D } from '../util/ColorGradient2D';

interface TerrainColorOptions {
  PARCHMENT_FACTOR: number; // Controls how much rain is received inland, highest numbers means more desert

}

export class TerrainColor {
  terrainGradient: ColorGradient;
  terrainGradient2D: ColorGradient2D;

  options: TerrainColorOptions = {
    PARCHMENT_FACTOR: 0.0
  }

  maxHeight: number;

  constructor(maxHeight: number) {
    this.maxHeight = maxHeight;

    this.setupGradient();
  }

  setupGradient() {
    this.terrainGradient = new ColorGradient(this.maxHeight + 1);

    // Deep Ocean
    this.terrainGradient.addColorStop(0.0, new BABYLON.Color3(0, 0, 153/255));

    // Sea
    this.terrainGradient.addColorStop(0.4, new BABYLON.Color3(0/255, 102/255, 255/255));

    // Coast
    this.terrainGradient.addColorStop(0.46, new BABYLON.Color3(0/255, 120/255, 255/255));

    // Coastal Water
    this.terrainGradient.addColorStop(0.49, new BABYLON.Color3(153/255, 204/255, 255/255));

    // Coastal Land
    this.terrainGradient.addColorStop(0.5, new BABYLON.Color3(255/255, 255/255, 204/255));

    // Grasslands
    this.terrainGradient.addColorStop(0.51, new BABYLON.Color3(51/255, 204/255, 51/255));

    // Mountain
    this.terrainGradient.addColorStop(0.65, new BABYLON.Color3(153/255, 102/255, 51/255));

    // Mountain Peaks
    this.terrainGradient.addColorStop(0.72, new BABYLON.Color3(230/255, 255/255, 255/255));

    // Mountain Peaks
    this.terrainGradient.addColorStop(1.0, new BABYLON.Color3(230/255, 255/255, 255/255));

    this.terrainGradient.calculate();

    this.terrainGradient2D = new ColorGradient2D(256);

    this.terrainGradient2D.addColorStop(0.0, 0.0, new BABYLON.Color3(70/255, 97/255, 16/255));
    this.terrainGradient2D.addColorStop(0.2, 0.0, new BABYLON.Color3(92/255, 139/255, 38/255));
    this.terrainGradient2D.addColorStop(0.4, 0.0, new BABYLON.Color3(110/255, 156/255, 42/255));
    this.terrainGradient2D.addColorStop(0.6, 0.0, new BABYLON.Color3(81/255, 156/255, 52/255));
    this.terrainGradient2D.addColorStop(0.8, 0.0, new BABYLON.Color3(125/255, 184/255, 137/255));
    this.terrainGradient2D.addColorStop(1.0, 0.0, new BABYLON.Color3(230/255, 247/255, 234/255));

    this.terrainGradient2D.addColorStop(0.0, 0.25, new BABYLON.Color3(70/255, 97/255, 16/255));
    this.terrainGradient2D.addColorStop(0.2, 0.25, new BABYLON.Color3(84/255, 117/255, 30/255));
    this.terrainGradient2D.addColorStop(0.4, 0.25, new BABYLON.Color3(80/255, 156/255, 42/255));
    this.terrainGradient2D.addColorStop(0.6, 0.25, new BABYLON.Color3(42/255, 156/255, 52/255));
    this.terrainGradient2D.addColorStop(0.8, 0.25, new BABYLON.Color3(95/255, 154/255, 107/255));
    this.terrainGradient2D.addColorStop(1.0, 0.25, new BABYLON.Color3(230/255, 247/255, 234/255));

    this.terrainGradient2D.addColorStop(0.0, 0.5, new BABYLON.Color3(132/255, 194/255, 8/255));
    this.terrainGradient2D.addColorStop(0.2, 0.5, new BABYLON.Color3(96/255, 191/255, 8/255));
    this.terrainGradient2D.addColorStop(0.4, 0.5, new BABYLON.Color3(34/255, 139/255, 34/255));
    this.terrainGradient2D.addColorStop(0.6, 0.5, new BABYLON.Color3(12/255, 125/255, 12/255));
    this.terrainGradient2D.addColorStop(0.8, 0.5, new BABYLON.Color3(65/255, 124/255, 77/255));
    this.terrainGradient2D.addColorStop(1.0, 0.5, new BABYLON.Color3(230/255, 247/255, 234/255));

    this.terrainGradient2D.addColorStop(0.0, 0.75, new BABYLON.Color3(255/255, 230/255, 120/255));
    this.terrainGradient2D.addColorStop(0.2, 0.75, new BABYLON.Color3(255/255, 230/255, 100/255));
    this.terrainGradient2D.addColorStop(0.4, 0.75, new BABYLON.Color3(130/255, 156/255, 11/255));
    this.terrainGradient2D.addColorStop(0.6, 0.75, new BABYLON.Color3(57/255, 125/255, 12/255));
    this.terrainGradient2D.addColorStop(0.8, 0.75, new BABYLON.Color3(35/255, 94/255, 47/255));
    this.terrainGradient2D.addColorStop(1.0, 0.75, new BABYLON.Color3(230/255, 247/255, 234/255));

    this.terrainGradient2D.addColorStop(0.0, 1.0, new BABYLON.Color3(255/255, 237/255, 179/255));
    this.terrainGradient2D.addColorStop(0.2, 1.0, new BABYLON.Color3(255/255, 211/255, 94/255));
    this.terrainGradient2D.addColorStop(0.4, 1.0, new BABYLON.Color3(178/255, 189/255, 62/255));
    this.terrainGradient2D.addColorStop(0.6, 1.0, new BABYLON.Color3(155/255, 189/255, 62/255));
    this.terrainGradient2D.addColorStop(0.8, 1.0, new BABYLON.Color3(88/255, 148/255, 68/255));
    this.terrainGradient2D.addColorStop(1.0, 1.0, new BABYLON.Color3(230/255, 247/255, 234/255));


    this.terrainGradient2D.calculate();
  }

  getColor(heightNorm: number, rainNorm: number, tempNorm: number) {
    var invHeight: number = (1 - (heightNorm*this.options.PARCHMENT_FACTOR));

    var color2D: BABYLON.Color3 = this.terrainGradient2D.getColor(1-tempNorm, 1-(rainNorm * invHeight));
    var color1D: BABYLON.Color3 = this.terrainGradient.getColor(heightNorm);

    // Handle Ocean coloring
    if(heightNorm < .5) {
      return color1D;
    }
    // Coastal coloring to ensure smooth gradient from beach to mainland
    else if(heightNorm >= 0.5 && heightNorm <= 0.505) {
      return BABYLON.Color3.Lerp(color1D, color2D, 0.5);
    }
    // Interpolate mountain ranges into Whittaker coloring scheme
    else if(heightNorm > 0.6) {
      // If we are a snowy region, color a more rocky hue to the mountains
      if(tempNorm < 0.2 && heightNorm < 0.70) {
        var rockyColor: BABYLON.Color3 = new BABYLON.Color3(70/255, 90/255, 100/255);
        color1D = BABYLON.Color3.Lerp(color1D, rockyColor, 1-tempNorm);
      }
      // 8.3 scaling factor comes from 0.72 as the beginning of mountain peaks, so 1.0 / (.72 - .6)
      return BABYLON.Color3.Lerp(color2D, color1D, (heightNorm - 0.6) * 8.3);
    }

    return color2D;
  }

  get2DColor(u: number, v: number) {
    return this.terrainGradient2D.getColor(u,v);
  }
}
