// Alfabeto solo con 26 letras (sin ñ)
const alpha = 'abcdefghijklmnopqrstuvwxyz';

function shiftChar(ch, shift, decrypt=false, preserveCase=true){
  const isUpper = ch === ch.toUpperCase() && ch.toLowerCase() !== ch.toUpperCase();
  let base = ch.toLowerCase();
  const idx = alpha.indexOf(base);
  if(idx === -1) return ch;
  const len = alpha.length; // 26 letras
  const s = ((decrypt ? (idx - shift) : (idx + shift)) % len + len) % len;
  let out = alpha[s];
  return preserveCase && isUpper ? out.toUpperCase() : out;
}

function caesar(text, shift=3, mode='encrypt', preserveCase=true){
  const decrypt = mode === 'decrypt';
  return Array.from(text).map(ch => shiftChar(ch, shift, decrypt, preserveCase)).join('');
}

const $ = sel => document.querySelector(sel);
const input = $('#input');
const output = $('#output');
const shift = $('#shift');
const runBtn = $('#run');
const copyBtn = $('#copy');
const clearBtn = $('#clear');
const count = $('#count');
const preserveCase = $('#preserveCase');
const pills = document.querySelectorAll('.pill');

let mode = 'encrypt';

function updateCount(){
  const n = input.value.length;
  count.textContent = `${n} ${n === 1 ? 'carácter' : 'caracteres'}`;
}

function apply(){
  const s = Math.max(0, Math.min(25, parseInt(shift.value || '0', 10)));
  const keep = preserveCase.value === 'yes';
  const result = caesar(input.value, s, mode, keep);
  output.textContent = result;
}

input.addEventListener('input', ()=>{ updateCount(); apply(); });
shift.addEventListener('input', apply);
preserveCase.addEventListener('change', apply);
runBtn.addEventListener('click', apply);

pills.forEach(p => p.addEventListener('click', () => {
  pills.forEach(x => { x.classList.remove('active'); x.setAttribute('aria-selected','false'); });
  p.classList.add('active');
  p.setAttribute('aria-selected','true');
  mode = p.dataset.mode;
  apply();
}));

copyBtn.addEventListener('click', async () => {
  const text = output.textContent || '';
  if(!text){
    copyBtn.textContent = 'Nada para copiar';
    setTimeout(()=> copyBtn.textContent = 'Copiar', 1000);
    return;
  }
  try{
    await navigator.clipboard.writeText(text);
    const old = copyBtn.textContent; copyBtn.textContent = '¡Copiado!';
    setTimeout(()=> copyBtn.textContent = old, 1200);
  }catch(e){
    alert('No se pudo copiar automáticamente. Selecciona y copia manualmente.');
  }
});

clearBtn.addEventListener('click', () => {
  input.value = '';
  output.textContent = '';
  updateCount();
});

// Inicializar
updateCount();
apply();
