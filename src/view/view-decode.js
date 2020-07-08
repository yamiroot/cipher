import {validateDecode} from '../controller/decode.js';
import {restore} from '../controller/restore.js';


const decode = () => {
  const view = `
    <h1>Cifrado César para información policial</h1>
    <p>
       Este sitio web fue creado con el fin de proveer un cifrado personalizado
       y seguro para la información que manejan los agentes de Policía Nacional
       del Perú (PNP). Ante los sucesos de hackeos delictivos, la mejor forma 
       de proteger nuestra información es cifrándola.
    </p>
    <div class="div-cipher">
      <label for="displacement">
        Indique el número de posiciones de desplazamiento: 
      </label>
      <input type="number" name="displacement" id="displacement" min="1">

      <label for="message">Escriba mensaje a descifrar: </label>
      <textarea name="message" id="message"></textarea> 

      <div class="div-buttons">
        <button type="button" id="button-decode">Descifrar mensaje</button>
        <button type="button" id="button-restore">Restablecer</button>
      </div>
    </div>
    `;

  const sectionView = document.createElement('section');
  sectionView.className = 'content-view-encode-decode';
  sectionView.innerHTML = view;

  validateDecode(sectionView);
  restore(sectionView);

  return sectionView;
};


export default decode;