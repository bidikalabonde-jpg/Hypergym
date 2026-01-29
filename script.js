document.getElementById('ano').textContent = new Date().getFullYear();

// ===================== MOBILE MENU =====================
function toggleMobileMenu(force) {
  const drawer = document.getElementById('mobileDrawer');
  if (typeof force === 'boolean') {
    drawer.style.display = force ? 'flex' : 'none';
  } else {
    drawer.style.display = drawer.style.display === 'flex' ? 'none' : 'flex';
  }
}

// ===================== TREINOS =====================
let treinoSelecionado = null;

function renderTreinosList() {
  const busca = document.getElementById('treinoBusca').value.toLowerCase();
  const filtro = document.getElementById('treinoFiltro').value;
  const container = document.getElementById('treinosList');

  let filtrados = TREINOS;

  // Busca
  if (busca) {
    filtrados = filtrados.filter(t => 
      t.nome.toLowerCase().includes(busca) ||
      t.desc.toLowerCase().includes(busca) ||
      t.tags.some(tag => tag.includes(busca))
    );
  }

  // Filtro
  if (filtro !== 'todos') {
    filtrados = filtrados.filter(t => t.tags.includes(filtro));
  }

  container.innerHTML = filtrados.map(t => {
    const ativo = treinoSelecionado?.id === t.id ? ' active' : '';
    return `
      <div class="list-item${ativo}" onclick="selecionarTreino('${t.id}')">
        <strong>${t.nome}</strong>
        <small>${t.desc}</small>
      </div>
    `;
  }).join('');
}

function selecionarTreino(id) {
  treinoSelecionado = TREINOS.find(t => t.id === id);
  if (!treinoSelecionado) return;

  document.getElementById('treinoSub').textContent = treinoSelecionado.desc;
  document.getElementById('treinoChips').innerHTML = treinoSelecionado.chips.map(c => 
    `<span class="chip ${c.c}">${c.t}</span>`
  ).join('');
  document.getElementById('treinoDetalhe').textContent = treinoSelecionado.detalhe;

  renderTreinosList();
}

function sugerirTreino() {
  const obj = document.getElementById('quickObj').value;
  const nivel = document.getElementById('quickNivel').value;

  let sugestao = null;

  if (obj === 'massa') {
    if (nivel === 'iniciante') sugestao = 'fullbody_abc';
    else if (nivel === 'intermediario') sugestao = 'ppl';
    else sugestao = 'arnold';
  } else if (obj === 'emagrecer') {
    if (nivel === 'iniciante') sugestao = 'fullbody_abc';
    else sugestao = 'pump';
  } else if (obj === 'definir') {
    if (nivel === 'iniciante') sugestao = 'fullbody_abc';
    else sugestao = 'upper_lower';
  } else if (obj === 'perna') {
    sugestao = 'lower_focus';
  } else if (obj === 'forca') {
    sugestao = 'forca_531';
  }

  if (sugestao) {
    selecionarTreino(sugestao);
    document.getElementById('treinos').scrollIntoView({ behavior: 'smooth' });
  }
}

function salvarTreinoSelecionado() {
  if (!treinoSelecionado) return alert('Selecione um treino primeiro.');
  localStorage.setItem('treinoPrincipal', JSON.stringify(treinoSelecionado));
  atualizarResumo();
  alert('Treino salvo como principal!');
}

function copiarTreino() {
  if (!treinoSelecionado) return alert('Selecione um treino.');
  const texto = treinoSelecionado.nome + '\\n\\n' + treinoSelecionado.detalhe;
  navigator.clipboard.writeText(texto).then(() => alert('Treino copiado!'));
}

function imprimirTreino() {
  if (!treinoSelecionado) return alert('Selecione um treino.');
  const texto = treinoSelecionado.nome + '\\n\\n' + treinoSelecionado.detalhe;
  const win = window.open('', '', 'width=800,height=600');
  win.document.write('<pre>' + texto + '</pre>');
  win.print();
  win.close();
}

// ===================== DIETAS =====================
let dietaSelecionada = null;

function renderDietasList() {
  const busca = document.getElementById('dietaBusca').value.toLowerCase();
  const filtro = document.getElementById('dietaFiltro').value;
  const container = document.getElementById('dietasList');

  let filtrados = DIETAS;

  if (busca) {
    filtrados = filtrados.filter(d => 
      d.nome.toLowerCase().includes(busca) ||
      d.tags.some(tag => tag.includes(busca))
    );
  }

  if (filtro !== 'todas') {
    filtrados = filtrados.filter(d => d.categoria === filtro);
  }

  container.innerHTML = filtrados.map(d => {
    const ativo = dietaSelecionada?.id === d.id ? ' active' : '';
    return `
      <div class="list-item${ativo}" onclick="selecionarDieta('${d.id}')">
        <strong>${d.nome}</strong>
        <small>${d.chips.map(c => c.t).join(' • ')}</small>
      </div>
    `;
  }).join('');
}

function selecionarDieta(id) {
  dietaSelecionada = DIETAS.find(d => d.id === id);
  if (!dietaSelecionada) return;

  document.getElementById('dietaSub').textContent = dietaSelecionada.nome;
  document.getElementById('dietaChips').innerHTML = dietaSelecionada.chips.map(c => 
    `<span class="chip ${c.c}">${c.t}</span>`
  ).join('');
  document.getElementById('dietaDetalhe').textContent = dietaSelecionada.detalhe;

  renderDietasList();
}

function copiarModeloDieta() {
  if (!dietaSelecionada) return alert('Selecione uma dieta.');
  const texto = dietaSelecionada.nome + '\\n\\n' + dietaSelecionada.detalhe;
  navigator.clipboard.writeText(texto).then(() => alert('Modelo copiado!'));
}

// ===================== CALCULADORA DE MACROS =====================
let ultimaDieta = null;

function calcularMacros() {
  const sexo = document.getElementById('sexo').value;
  const idade = parseFloat(document.getElementById('idade').value) || 25;
  const altura = parseFloat(document.getElementById('altura').value) || 170;
  const peso = parseFloat(document.getElementById('peso').value) || 70;
  const atividade = parseFloat(document.getElementById('atividade').value) || 1.55;
  const objetivo = document.getElementById('objetivoDieta').value;
  const preferencia = document.getElementById('preferencia').value;
  const proteina_g_kg = parseFloat(document.getElementById('perfilProteina').value) || 1.8;

  // TMB (Mifflin-St Jeor)
  let tmb = 10 * peso + 6.25 * altura - 5 * idade;
  tmb += sexo === 'masc' ? 5 : -161;

  // TDEE
  let tdee = tmb * atividade;

  // Ajuste objetivo
  let kcal = tdee;
  if (objetivo === 'cut') kcal *= 0.8;
  else if (objetivo === 'recomp') kcal *= 0.9;
  else if (objetivo === 'bulk') kcal *= 1.1;

  // Macros
  let proteina = Math.round(peso * proteina_g_kg);
  let gordura = Math.round(peso * 0.9);
  let carbo = Math.round((kcal - proteina * 4 - gordura * 9) / 4);

  // Ajustes preferência
  if (preferencia === 'lowcarb') {
    carbo = Math.round(carbo * 0.5);
    gordura = Math.round((kcal - proteina * 4 - carbo * 4) / 9);
  } else if (preferencia === 'cetogenica') {
    carbo = Math.round(30);
    gordura = Math.round((kcal - proteina * 4 - carbo * 4) / 9);
  }

  ultimaDieta = { kcal: Math.round(kcal), proteina, carbo, gordura, objetivo, preferencia };

  document.getElementById('outKcal').textContent = Math.round(kcal) + ' kcal/dia';
  document.getElementById('outMacros').textContent = proteina + 'g P • ' + carbo + 'g C • ' + gordura + 'g G';
}

function gerarCardapio() {
  if (!ultimaDieta) return alert('Calcule os macros primeiro.');

  const refeicoes = parseInt(document.getElementById('refeicoesDia').value) || 4;
  const pref = ultimaDieta.preferencia;
  const obs = document.getElementById('obsDieta').value.trim();

  let cardapio = 'PLANO DE DIETA HYPER GYM\\n\\n';
  cardapio += 'MACROS: ' + ultimaDieta.proteina + 'g P • ' + ultimaDieta.carbo + 'g C • ' + ultimaDieta.gordura + 'g G\\n';
  cardapio += 'CALORIAS: ' + ultimaDieta.kcal + ' kcal/dia\\n';
  cardapio += 'REFEIÇÕES: ' + refeicoes + '/dia\\n\\n';

  if (obs) cardapio += 'OBS: ' + obs + '\\n\\n';

  // Geração básica de exemplo
  cardapio += 'EXEMPLO DE CARDÁPIO (' + pref + ')\\n\\n';

  if (pref === 'equilibrada' || pref === 'bulk_limpo') {
    cardapio += 'REFEIÇÃO 1\\n• Ovos (2–3 unidades)\\n• Aveia + banana\\n• Café/chá\\n\\n';
    cardapio += 'REFEIÇÃO 2\\n• Arroz integral\\n• Frango grelhado\\n• Feijão\\n• Salada + azeite\\n\\n';
    cardapio += 'REFEIÇÃO 3 (pós-treino)\\n• Whey protein + fruta\\n\\n';
    cardapio += 'REFEIÇÃO 4\\n• Carne/peixe\\n• Batata doce\\n• Legumes\\n\\n';
  } else if (pref === 'lowcarb' || pref === 'cetogenica') {
    cardapio += 'REFEIÇÃO 1\\n• Ovos (3 unidades) + abacate\\n• Café com manteiga (opcional)\\n\\n';
    cardapio += 'REFEIÇÃO 2\\n• Carne gorda/salmão\\n• Salada grande + azeite\\n\\n';
    cardapio += 'REFEIÇÃO 3\\n• Castanhas + queijo\\n\\n';
    cardapio += 'REFEIÇÃO 4\\n• Frango + legumes + azeite\\n\\n';
  } else if (pref === 'vegetariano') {
    cardapio += 'REFEIÇÃO 1\\n• Ovos + aveia + fruta\\n\\n';
    cardapio += 'REFEIÇÃO 2\\n• Arroz + feijão + queijo cottage + salada\\n\\n';
    cardapio += 'REFEIÇÃO 3\\n• Iogurte + whey\\n\\n';
    cardapio += 'REFEIÇÃO 4\\n• Omelete + legumes\\n\\n';
  } else if (pref === 'vegano') {
    cardapio += 'REFEIÇÃO 1\\n• Aveia + proteína vegana + banana\\n\\n';
    cardapio += 'REFEIÇÃO 2\\n• Arroz + lentilha + tofu/tempeh + salada\\n\\n';
    cardapio += 'REFEIÇÃO 3\\n• Pasta de amendoim + frutas\\n\\n';
    cardapio += 'REFEIÇÃO 4\\n• Grão de bico + quinoa + legumes\\n\\n';
  } else {
    cardapio += '[Ajuste conforme sua preferência usando os macros acima]\\n';
  }

  cardapio += '\\nDICA: ajuste porções para bater os macros. Use app de rastreamento (MyFitnessPal, FatSecret).';

  document.getElementById('outCardapio').textContent = cardapio;
}

function copiarDieta() {
  const texto = document.getElementById('outCardapio').textContent;
  if (!texto || texto.includes('Clique')) return alert('Gere o cardápio primeiro.');
  navigator.clipboard.writeText(texto).then(() => alert('Dieta copiada!'));
}

function salvarDieta() {
  if (!ultimaDieta) return alert('Calcule os macros primeiro.');
  localStorage.setItem('dietaPrincipal', JSON.stringify(ultimaDieta));
  atualizarResumo();
  alert('Dieta salva no resumo!');
}

function imprimirDieta() {
  const texto = document.getElementById('outCardapio').textContent;
  if (!texto || texto.includes('Clique')) return alert('Gere o cardápio primeiro.');
  const win = window.open('', '', 'width=800,height=600');
  win.document.write('<pre>' + texto + '</pre>');
  win.print();
  win.close();
}

// ===================== SUPLEMENTOS =====================
function renderSupp() {
  const container = document.getElementById('suppGrid');
  container.innerHTML = SUPLEMENTOS.map(s => `
    <div class="supp-card">
      <span class="tag ${s.categoria}">${s.categoria === 'essential' ? 'Essencial' : s.categoria === 'performance' ? 'Performance' : s.categoria === 'recovery' ? 'Recuperação' : s.categoria === 'health' ? 'Saúde' : 'Cuidado'}</span>
      <h4>${s.nome}</h4>
      <div class="desc">${s.desc}</div>
      <div class="divider"></div>
      <ul>
        ${s.beneficios.map(b => '<li>' + b + '</li>').join('')}
      </ul>
      <div class="divider"></div>
      <div><strong>Dose:</strong> ${s.dose}</div>
      <div style="margin-top:6px; color:var(--muted2); font-size:.86rem;">${s.obs}</div>
    </div>
  `).join('');
}

function renderStores() {
  const container = document.getElementById('stores');
  container.innerHTML = LOJAS.map(l => `
    <div class="store">
      <h4>${l.nome}</h4>
      <div class="meta">${l.desc}</div>
      <div class="go">
        <a href="${l.url}" target="_blank" class="btn btn-ghost" style="font-size:.85rem; padding:6px 10px;">Visitar</a>
      </div>
    </div>
  `).join('');
}

// ===================== RESUMO =====================
function atualizarResumo() {
  const treino = JSON.parse(localStorage.getItem('treinoPrincipal') || 'null');
  const dieta = JSON.parse(localStorage.getItem('dietaPrincipal') || 'null');

  document.getElementById('statTreino').textContent = treino ? treino.nome : '—';
  document.getElementById('statKcal').textContent = dieta ? dieta.kcal + ' kcal' : '—';
  document.getElementById('statMacros').textContent = dieta ? dieta.proteina + 'g P • ' + dieta.carbo + 'g C • ' + dieta.gordura + 'g G' : '—';
  document.getElementById('statPref').textContent = dieta ? dieta.preferencia : '—';
}

// ===================== LOGIN =====================
function modalLogin() {
  document.getElementById('modalLogin').classList.add('show');
}

function fazerLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const senha = document.getElementById('loginSenha').value.trim();
  if (!email || !senha) return alert('Preencha e-mail e senha.');
  localStorage.setItem('usuario', JSON.stringify({ email }));
  alert('Login feito (simulado)!');
  closeModal('modalLogin');
  document.getElementById('btnLogin').textContent = email;
}

function fazerCadastro() {
  const email = document.getElementById('loginEmail').value.trim();
  const senha = document.getElementById('loginSenha').value.trim();
  if (!email || !senha) return alert('Preencha e-mail e senha.');
  localStorage.setItem('usuario', JSON.stringify({ email }));
  alert('Cadastro feito (simulado)!');
  closeModal('modalLogin');
  document.getElementById('btnLogin').textContent = email;
}

// ===================== COMPRAR =====================
function modalComprar() {
  document.getElementById('modalComprar').classList.add('show');
}

function finalizarCompra() {
  const email = document.getElementById('compraEmail').value.trim();
  const nome = document.getElementById('compraNome').value.trim();
  const pagamento = document.getElementById('compraPagamento').value;

  if (!email || !nome) return alert('Preencha todos os campos.');

  alert('Compra simulada! Em produção, você integraria Stripe/Mercado Pago aqui.\\n\\nE-mail: ' + email + '\\nNome: ' + nome + '\\nPagamento: ' + pagamento);
  closeModal('modalComprar');
}

// ===================== MODAL =====================
function closeModal(id) {
  document.getElementById(id).classList.remove('show');
}

// ===================== INIT =====================
document.addEventListener('DOMContentLoaded', () => {
  renderTreinosList();
  renderDietasList();
  renderSupp();
  renderStores();
  atualizarResumo();

  const usuario = JSON.parse(localStorage.getItem('usuario') || 'null');
  if (usuario) document.getElementById('btnLogin').textContent = usuario.email;
});
