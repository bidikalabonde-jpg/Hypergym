const TREINOS = [
  {
    id: "fullbody_abc",
    nome: "Iniciante 3x/sem — Full Body A/B/C",
    desc: "Técnica, adaptação e progressão segura (ótimo ponto de partida).",
    nivel: "iniciante",
    tags: ["iniciante","full body","3x/sem","hipertrofia","base"],
    chips: [{t:"Iniciante",c:"good"},{t:"3x/semana",c:""},{t:"Full Body",c:""},{t:"Foco técnica",c:""}],
    detalhe: `OBJETIVO
- Aprender execução, criar consistência e progredir sem exagero.

DIRETRIZES
- Aqueça 5–8 min + 1–2 séries leves no 1º exercício.
- Descanso: 60–90s (até 120s nos básicos se precisar).
- Pare 1–3 reps antes da falha (principalmente nas primeiras semanas).
- Progrida: quando bater o topo das reps em todas as séries, aumente um pouco a carga.

DIA A
• Agachamento (livre/Smith) — 3x8–12
• Supino reto (barra/halter) — 3x8–12
• Puxada na frente — 3x10–12
• Remada baixa — 3x10–12
• Prancha — 3x30–45s

DIA B
• Leg press — 3x10–15
• Supino inclinado — 3x8–12
• Remada unilateral — 3x8–12
• Elevação lateral — 3x12–20
• Abdômen (máquina/cabo) — 3 séries

DIA C
• Terra romeno (leve/moderado) — 3x8–12
• Puxada (pegada diferente) — 3x8–12
• Paralelas ou tríceps corda — 3x10–15
• Rosca direta — 3x8–12
• Panturrilha — 4x10–20

OBS
- Dor articular não é "normal". Ajuste exercício/carga/amplitude e peça ajuda.`
  },
  {
    id: "upper_lower",
    nome: "Upper/Lower (4x/sem)",
    desc: "Frequência boa, simples de seguir e evoluir (ótimo custo/benefício).",
    nivel: "intermediario",
    tags: ["intermediario","upper lower","4x/sem","hipertrofia"],
    chips: [{t:"Intermediário",c:"good"},{t:"4x/semana",c:""},{t:"Upper/Lower",c:""},{t:"Consistência",c:""}],
    detalhe: `DIRETRIZES
- Descanso: 60–90s (básicos 90–120s).
- Reps: 6–12 nos compostos; 10–20 nos isoladores.

UPPER 1
• Supino reto — 4x6–12
• Puxada — 4x6–12
• Remada — 3x8–12
• Desenvolvimento — 3x6–12
• Braços (1–2 exercícios) — 2–3 séries cada

LOWER 1
• Agachamento/Leg press — 4x6–12
• Mesa flexora — 3x10–15
• Terra romeno — 3x8–12
• Panturrilha — 4x10–20
• Abdômen — 3 séries

UPPER 2
• Supino inclinado — 4x8–12
• Remada unilateral — 3x8–12
• Puxada (pegada diferente) — 3x8–12
• Elevação lateral — 4x12–20
• Braços (1–2 exercícios) — 2–3 séries cada

LOWER 2
• Leg press — 4x10–15
• Extensora — 3x12–20
• Flexora — 3x10–15
• Glúteo (opcional) — 2–4 séries
• Panturrilha — 4x10–20`
  },
  {
    id: "ppl",
    nome: "PPL (Push Pull Legs)",
    desc: "Clássico para hipertrofia. Funciona muito bem em 5–6 dias.",
    nivel: "intermediario",
    tags: ["intermediario","ppl","hipertrofia","3-6x/sem"],
    chips: [{t:"Intermediário",c:"good"},{t:"3–6x/sem",c:""},{t:"Hipertrofia",c:"good"},{t:"Divisão por grupos",c:""}],
    detalhe: `PUSH (Peito + Ombro + Tríceps)
• Supino reto — 4x6–12
• Supino inclinado — 3x8–12
• Desenvolvimento — 3x6–12
• Elevação lateral — 3x12–20
• Tríceps corda — 3x10–15

PULL (Costas + Bíceps)
• Puxada na frente — 4x6–12
• Remada (baixa/curvada) — 4x6–12
• Remada unilateral — 3x8–12
• Rosca direta — 3x8–12
• Rosca martelo — 3x10–12

LEGS (Pernas)
• Agachamento/Leg press — 4x6–12
• Extensora — 3x12–20
• Flexora — 3x10–15
• Terra romeno — 3x8–12
• Panturrilha — 4x10–20
• Abdômen — 3 séries

FREQUÊNCIA
- 6x/sem: PPL + PPL
- 5x/sem: PPL + PP (alternar na semana seguinte)`
  },
  {
    id: "bro_split",
    nome: "Bro Split (1 músculo por dia)",
    desc: "Clássico. Volume alto por grupo e frequência baixa (muito usado).",
    nivel: "intermediario",
    tags: ["intermediario","hipertrofia","5x/sem","volume"],
    chips: [{t:"Intermediário",c:"good"},{t:"5x/sem",c:""},{t:"Volume alto",c:"warn"},{t:"1 músculo/dia",c:""}],
    detalhe: `DIVISÃO
Seg: Peito
Ter: Costas
Qua: Ombro
Qui: Pernas
Sex: Braços

DICA
- Para naturais, pode ser interessante adicionar "toques" (2–3 séries) de um músculo fraco em outro dia.

PEITO
• Supino reto — 4x6–12
• Supino inclinado — 4x8–12
• Crucifixo — 3x10–15
• Crossover — 3x12–20

COSTAS
• Barra fixa/Puxada — 4x6–12
• Remada — 4x6–12
• Remada unilateral — 3x8–12
• Pulldown — 3x10–15

OMBRO
• Desenvolvimento — 4x6–12
• Elevação lateral — 4x10–20
• Posterior — 4x12–20
• Trapézio (opcional) — 2–3 séries

PERNAS
• Agacho/Leg press — 4x6–12
• Extensora — 3x12–20
• Flexora — 3x10–15
• Terra romeno — 3x8–12
• Panturrilha — 5x10–20

BRAÇOS
• Rosca direta — 4x8–12
• Rosca alternada — 3x10–12
• Tríceps testa — 4x8–12
• Corda — 3x12–15`
  },
  {
    id: "phul",
    nome: "PHUL (Power + Hypertrophy Upper/Lower)",
    desc: "Combina força (baixas reps) com hipertrofia (reps moderadas).",
    nivel: "intermediario",
    tags: ["intermediario","forca","hipertrofia","4x/sem","phul"],
    chips: [{t:"4x/sem",c:""},{t:"Força + Hipertrofia",c:"good"},{t:"Estruturado",c:""},{t:"Natural friendly",c:""}],
    detalhe: `UPPER POWER
• Supino reto — 4x3–6
• Remada — 4x3–6
• Desenvolvimento — 3x4–8
• Puxada — 3x4–8
• Bíceps/Tríceps — 2–3x8–12

LOWER POWER
• Agachamento — 4x3–6
• Terra romeno — 3x4–8
• Leg press — 3x6–10
• Panturrilha — 4x8–15
• Abdômen — 3 séries

UPPER HYPERTROPHY
• Supino inclinado — 4x8–12
• Puxada — 4x8–12
• Remada — 3x10–15
• Elevação lateral — 4x12–20
• Braços — 3–4 séries cada

LOWER HYPERTROPHY
• Leg press — 4x10–15
• Extensora — 3x12–20
• Flexora — 3x10–15
• Glúteo (opcional) — 2–4 séries
• Panturrilha — 4x12–20`
  },
  {
    id: "arnold",
    nome: "Arnold Split (Peito+Costas | Ombro+Braços | Pernas)",
    desc: "Divisão clássica de volume alto (para quem já treina há mais tempo).",
    nivel: "avancado",
    tags: ["avancado","arnold","volume alto","hipertrofia"],
    chips: [{t:"Avançado",c:"warn"},{t:"Volume alto",c:"warn"},{t:"Hipertrofia",c:"good"},{t:"5–6x/sem",c:""}],
    detalhe: `DIA 1 — Peito + Costas
• Supino reto — 4x6–10
• Supino inclinado — 3x8–12
• Crucifixo/crossover — 3x10–15
• Barra fixa ou puxada — 4x6–12
• Remada — 3x8–12

DIA 2 — Ombro + Braços
• Desenvolvimento — 4x6–10
• Elevação lateral — 4x10–20
• Rosca direta — 3x8–12
• Rosca alternada — 3x10–12
• Tríceps testa — 3x8–12
• Corda no pulley — 3x10–15

DIA 3 — Pernas
• Agachamento/Leg press — 4x6–12
• Extensora — 3x12–20
• Flexora — 3x10–15
• Terra romeno — 3x8–12
• Panturrilha — 4x10–20

OBS
- Não use falha absoluta em tudo. Deixe 1–2 reps "na reserva" na maioria.`
  },
  {
    id: "gvt",
    nome: "GVT — German Volume Training (10x10)",
    desc: "Volume extremo em exercícios compostos. Muito cansativo (curto período).",
    nivel: "avancado",
    tags: ["avancado","hipertrofia","volume alto","gvt"],
    chips: [{t:"Avançado",c:"bad"},{t:"Volume extremo",c:"bad"},{t:"10x10",c:"warn"},{t:"Hipertrofia",c:"good"}],
    detalhe: `CONCEITO
- 10 séries de 10 reps no exercício principal (descanso ~60s).
- Use por 4–6 semanas e depois volte a um treino normal.

EXEMPLO (4 DIAS)
Dia A: Supino 10x10 + Remada 10x10 + acessórios
Dia B: Agacho 10x10 + acessórios
Dia C: Desenvolvimento 10x10 + braços
Dia D: Terra romeno 10x10 + glúteo/posterior

OBS
- Natural geralmente não sustenta por muito tempo. Faça com cuidado.`
  },
  {
    id: "fst7",
    nome: "FST-7 (7 séries finais para pump)",
    desc: "Treino normal + 7 séries curtas no final (descanso curto).",
    nivel: "avancado",
    tags: ["avancado","hipertrofia","pump","volume"],
    chips: [{t:"Avançado",c:"warn"},{t:"Pump",c:"good"},{t:"7 séries finais",c:""},{t:"Descanso curto",c:"warn"}],
    detalhe: `CONCEITO
- Após o treino do músculo, faça 7 séries de 8–12 reps com 30–45s descanso em um isolador.

EXEMPLO PEITO
• Supino reto — 4x6–12
• Supino inclinado — 3x8–12
• Crossover (FST-7) — 7x10–12 (30–45s)

EXEMPLO COSTAS
• Puxada — 4x6–12
• Remada — 4x6–12
• Pulldown (FST-7) — 7x10–12 (30–45s)

CUIDADO
- Não use FST-7 em todos os grupos na mesma semana se você não recupera bem.`
  },
  {
    id: "pump",
    nome: "Pump/Volume (metabólico)",
    desc: "Mais repetições, descanso curto e foco em pump. Use com cautela.",
    nivel: "intermediario",
    tags: ["intermediario","hipertrofia","pump","volume"],
    chips: [{t:"Pump",c:"good"},{t:"10–20 reps",c:""},{t:"Descanso curto",c:"warn"},{t:"Metabólico",c:""}],
    detalhe: `DIRETRIZES
- 10–20 reps, descanso 30–60s.
- Intensificadores em 1 exercício por músculo (no máximo).

EXEMPLO UPPER PUMP
• Supino inclinado — 3x10–15
• Puxada — 3x10–15
• Elevação lateral — 4x15–25
• Crossover — 3x12–20
• Braços (bi-set) — 3–4 rounds

EXEMPLO LOWER PUMP
• Leg press — 4x12–20
• Extensora (drop opcional) — 2–3x12–20
• Flexora — 4x12–20
• Panturrilha — 5x12–25
• Abdômen — 3–4 séries`
  },
  {
    id: "fullbody_5x",
    nome: "Full Body 5x/sem (alta frequência)",
    desc: "Alta frequência com volume distribuído. Para quem recupera bem.",
    nivel: "avancado",
    tags: ["avancado","full body","5x/sem","hipertrofia"],
    chips: [{t:"Avançado",c:"warn"},{t:"5x/sem",c:""},{t:"Alta frequência",c:"warn"},{t:"Hipertrofia",c:"good"}],
    detalhe: `CONCEITO
- Treinar todos os grupos 5x/sem com menos volume por sessão.

EXEMPLO (SEG–SEX)
Seg: Agacho + Supino + Remada + braços
Ter: Leg press + Desenvolvimento + Puxada + posterior
Qua: Afundo + Inclinado + Remada unilateral + abdômen
Qui: Terra romeno + Supino + Puxada + deltoide lateral
Sex: Agacho leve + isoladores (peito/costas) + panturrilha

DICA
- Não vá à falha em tudo. Use "reps na reserva" e alterne dias pesados/leves.`
  },
  {
    id: "forca_531",
    nome: "Força (base 5/3/1 inspirada)",
    desc: "Foco em força e progressão lenta e consistente (ótimo para base).",
    nivel: "intermediario",
    tags: ["intermediario","forca","base","progressao"],
    chips: [{t:"Força",c:"good"},{t:"Progressão",c:""},{t:"Base sólida",c:"good"},{t:"Intermediário",c:""}],
    detalhe: `IDEIA
- Escolha 3–4 levantamentos base: agacho, supino, terra, desenvolvimento.
- Progrida cargas semanalmente de forma conservadora.

EXEMPLO (4 DIAS)
Dia 1: Supino (séries principais) + acessórios peito/tríceps
Dia 2: Agacho (séries principais) + acessórios perna
Dia 3: Desenvolvimento (séries principais) + ombro/costas
Dia 4: Terra (séries principais) + posterior/costas

ACESSÓRIOS
- 3–5 exercícios, 2–4 séries, 8–15 reps.
- Não mate a recuperação: força precisa de sistema nervoso "inteiro".`
  },
  {
    id: "upper_focus",
    nome: "Upper Focus (3 upper + 1 lower)",
    desc: "Foco em parte superior para quem quer melhorar peito/costas/braços.",
    nivel: "intermediario",
    tags: ["intermediario","hipertrofia","upper","4x/sem"],
    chips: [{t:"Intermediário",c:"good"},{t:"Ênfase upper",c:""},{t:"4x/sem",c:""},{t:"Hipertrofia",c:"good"}],
    detalhe: `SEMANA
Upper A (pesado) • Lower • Upper B (ombro/braços) • Upper C (volume)

UPPER A
• Supino reto — 4x6–10
• Remada — 4x6–10
• Inclinado — 3x8–12
• Puxada — 3x8–12

LOWER
• Agacho/Leg press — 4x8–12
• Posterior — 3x10–15
• Extensora — 3x12–20
• Panturrilha — 4x10–20

UPPER B
• Desenvolvimento — 4x6–12
• Elevação lateral — 4x12–20
• Rosca — 3x8–12
• Tríceps — 3x10–15

UPPER C (volume)
• Crossover — 3x12–20
• Remada unilateral — 3x10–15
• Peck deck — 3x12–20
• Pulldown — 3x12–20`
  },
  {
    id: "lower_focus",
    nome: "Lower Focus (3 lower + 1 upper)",
    desc: "Foco em pernas/glúteo com alta frequência.",
    nivel: "intermediario",
    tags: ["intermediario","pernas","gluteo","hipertrofia","4x/sem"],
    chips: [{t:"Intermediário",c:"good"},{t:"Ênfase pernas",c:"good"},{t:"4x/sem",c:""},{t:"Hipertrofia",c:"good"}],
    detalhe: `SEMANA
Lower A (quad) • Upper (manutenção) • Lower B (posterior/glúteo) • Lower C (misto)

LOWER A — Quadríceps
• Agachamento — 4x6–12
• Leg press — 4x10–15
• Extensora — 3x12–20
• Afundo — 3x10–12 cada

UPPER (manutenção)
• Supino — 3x8–12
• Remada — 3x8–12
• Desenvolvimento — 3x8–12
• Braços — 2–3 séries cada

LOWER B — Posterior/Glúteo
• Terra romeno — 4x8–12
• Flexora — 4x10–15
• Stiff — 3x10–12
• Glúteo (cabo/máquina) — 3x12–20

LOWER C — Misto
• Agacho sumô — 3x10–15
• Leg press pés altos — 3x12–20
• Flexora — 3x12–20
• Panturrilha — 5x10–20`
  },
  {
    id: "ramon_insp",
    nome: "Bodybuilding atual (inspirado) — volume alto",
    desc: "Amplitude, controle e séries difíceis. Exige recuperação boa.",
    nivel: "avancado",
    tags: ["avancado","hipertrofia","volume alto","bodybuilding"],
    chips: [{t:"Avançado",c:"warn"},{t:"Hipertrofia",c:"good"},{t:"Séries difíceis",c:"warn"},{t:"5–6x/sem",c:""}],
    detalhe: `DIVISÃO SUGERIDA
- Costas • Peito • Pernas • Ombro • Braços • (opcional) Pernas 2

PRINCÍPIOS
- Amplitude completa, cadência controlada, progressão de carga.
- Intensificadores: 1–2 exercícios por treino (no máximo).

EXEMPLO (RESUMO COSTAS)
• Puxada pesada — 4x6–10
• Remada pesada — 4x6–10
• Remada controlada — 3x10–12
• Pulldown/pullover — 3x12–15
• Posterior de ombro — 3x12–20`
  },
  {
    id: "allday_pernas",
    nome: "All Day — Pernas/Glúteo (volume alto, inspirado)",
    desc: "Pernas com máquinas pesadas e intensificadores. Somente avançados.",
    nivel: "avancado",
    tags: ["avancado","pernas","gluteo","volume","intensificadores"],
    chips: [{t:"Avançado",c:"bad"},{t:"Pernas/Glúteo",c:"good"},{t:"Volume alto",c:"warn"},{t:"Dropset/Rest-pause",c:"warn"}],
    detalhe: `ESTILO
- Muito volume de perna e glúteo com foco em máquinas.
- Exige aquecimento e boa técnica para não destruir joelho/lombar.

EXEMPLO DE TREINO (PERNAS)
1) Cadeira extensora — 4x15–20 (última com 1 dropset)
2) Leg press 45º — 4x10–12 (90–120s descanso, descida lenta)
3) Hack machine — 4x8–10 (pesado)
4) Smith (ênfase glúteo/quadríceps) — 3–4x10–12
5) Cadeira flexora — 4x12–15 (última com rest-pause)
6) Stiff — 3x10–12
7) Panturrilha — 4x12–20 (segurar 1–2s em cima)

CUIDADOS
- Não recomendado para iniciantes.
- Ajuste se houver dor articular.`
  }
];

const DIETAS = [
  {
    id:"equilibrada",
    nome:"Equilibrada (padrão)",
    categoria:"saude",
    tags:["saude","fácil","adesão"],
    chips:[{t:"Saúde",c:"good"},{t:"Fácil de seguir",c:""},{t:"Boa adesão",c:"good"}],
    detalhe:`QUANDO USAR
- Melhor escolha para a maioria, principalmente iniciante/intermediário.

PRINCÍPIOS
- Proteína alta o suficiente.
- Carbo e gordura "normais", sem extremos.
- Frutas/legumes todos os dias.

EXEMPLO (4 refeições)
• Café: ovos + aveia + fruta
• Almoço: arroz + feijão + frango + salada + azeite
• Lanche: iogurte/ whey + fruta
• Jantar: carne/peixe + batata/mandioca + legumes`
  },
  {
    id:"bulk_limpo",
    nome:"Bulk Limpo (ganho de massa com qualidade)",
    categoria:"bulk",
    tags:["bulk","qualidade","hipertrofia"],
    chips:[{t:"Bulk",c:"good"},{t:"Qualidade",c:"good"},{t:"Menos gordura",c:""}],
    detalhe:`QUANDO USAR
- Para ganhar massa reduzindo ganho de gordura.

PRINCÍPIOS
- Superávit leve (ex.: +150 a +300 kcal).
- Carbo de boa qualidade (arroz, batata, aveia, frutas).
- Gorduras boas (azeite, castanhas).
- Proteína constante.

EXEMPLO
• Café: aveia + whey + banana
• Almoço: arroz + feijão + carne magra + salada
• Pré: pão/banana + iogurte
• Pós: whey + fruta
• Jantar: frango/peixe + legumes + carbo (moderado)`
  },
  {
    id:"cut_alta_proteina",
    nome:"Cut alta proteína (definição com saciedade)",
    categoria:"cut",
    tags:["cut","saciedade","alta proteína"],
    chips:[{t:"Cut",c:"good"},{t:"Alta proteína",c:"good"},{t:"Sacia mais",c:""}],
    detalhe:`QUANDO USAR
- Para emagrecer e preservar massa muscular.

PRINCÍPIOS
- Déficit moderado.
- Proteína alta (1.8–2.2 g/kg).
- Volume de comida alto (saladas, legumes, sopas).
- Carbo ajustado ao treino (mais perto do treino).

EXEMPLO
• Café: omelete + fruta
• Almoço: grande salada + frango + arroz (porção menor)
• Lanche: iogurte proteico / whey
• Jantar: peixe + legumes + batata pequena`
  },
  {
    id:"lowcarb",
    nome:"Low Carb",
    categoria:"estrategia",
    tags:["estrategia","low carb","apetite"],
    chips:[{t:"Estratégia",c:""},{t:"Low carb",c:"warn"},{t:"Apetite",c:"good"}],
    detalhe:`QUANDO USAR
- Para controlar fome, reduzir "beliscadas", melhorar adesão.

PRINCÍPIOS
- Reduz carbo (mas não zera).
- Aumenta proteína e gorduras boas.
- Carbo maior no pré/pós-treino se necessário.

OBS
- Algumas pessoas perdem desempenho se cortar carbo demais.

EXEMPLO
• Café: ovos + abacate + café
• Almoço: carne + salada grande + azeite
• Lanche: castanhas + iogurte
• Jantar: frango + legumes`
  },
  {
    id:"cetogenica",
    nome:"Cetogênica (Keto)",
    categoria:"estrategia",
    tags:["estrategia","keto","baixo carbo"],
    chips:[{t:"Estratégia",c:""},{t:"Keto",c:"warn"},{t:"Carbo muito baixo",c:"warn"}],
    detalhe:`QUANDO USAR
- Para pessoas que se adaptam bem e conseguem seguir.
- Não é superior por si só, mas pode facilitar déficit.

PRINCÍPIOS
- Carbo geralmente 20–50g/dia.
- Gordura alta, proteína moderada a alta.
- Corpo usa gordura como combustível (cetose).

EXEMPLO
• Café: ovos com queijo + café
• Almoço: carne gorda + salada com azeite
• Lanche: castanhas ou abacate
• Jantar: salmão + legumes

CUIDADO
- Desempenho pode cair no início. Adapte suplementos (eletrólitos).`
  },
  {
    id:"jejum",
    nome:"Jejum intermitente",
    categoria:"estrategia",
    tags:["estrategia","jejum","aderencia"],
    chips:[{t:"Estratégia",c:""},{t:"Jejum",c:"warn"},{t:"Aderência",c:"good"}],
    detalhe:`QUANDO USAR
- Para reduzir "beliscadas" e concentrar refeições.
- Funciona bem para quem não tem fome de manhã.

PRINCÍPIOS
- Janela alimentar (ex.: 16h jejum / 8h comer).
- Total de calorias/proteína é o que importa.
- Não é mágica, mas facilita controle.

EXEMPLO (16/8)
• 12h: Refeição 1 (maior)
• 16h: Lanche
• 20h: Refeição 2

DICA
- Treine no final do jejum ou início da janela para otimizar síntese.`
  },
  {
    id:"carb_cycling",
    nome:"Carb Cycling (ciclagem de carboidratos)",
    categoria:"estrategia",
    tags:["estrategia","carb cycling","avancado"],
    chips:[{t:"Estratégia",c:""},{t:"Carb cycling",c:"warn"},{t:"Avançado",c:"warn"}],
    detalhe:`QUANDO USAR
- Para otimizar composição corporal em cut ou recomp.

PRINCÍPIOS
- Dias treino: carbo alto/gordura baixa
- Dias descanso: carbo baixo/gordura moderada
- Proteína sempre alta

EXEMPLO SEMANA
Seg (treino): 300g carbo / 60g gordura
Ter (treino): 300g carbo / 60g gordura
Qua (off): 120g carbo / 100g gordura
Qui (treino): 300g carbo / 60g gordura
Sex (treino): 300g carbo / 60g gordura
Sáb/Dom: moderado

CUIDADO
- Exige planejamento e tracking. Não é para iniciante.`
  },
  {
    id:"mediterranea",
    nome:"Mediterrânea",
    categoria:"saude",
    tags:["saude","longevidade","qualidade"],
    chips:[{t:"Saúde",c:"good"},{t:"Longevidade",c:"good"},{t:"Qualidade",c:""}],
    detalhe:`QUANDO USAR
- Para saúde geral, pressão, colesterol.
- Boa para quem quer ganhar massa com qualidade ou emagrecer sem extremos.

PRINCÍPIOS
- Azeite, oleaginosas, peixes, frutas, vegetais.
- Grãos integrais, leguminosas.
- Carne vermelha moderada.

EXEMPLO
• Café: iogurte grego + frutas + castanhas
• Almoço: peixe grelhado + legumes + arroz integral
• Lanche: frutas + oleaginosas
• Jantar: frango + salada + azeite`
  },
  {
    id:"dash",
    nome:"DASH (pressão arterial e saúde)",
    categoria:"saude",
    tags:["saude","pressão","cardio"],
    chips:[{t:"Saúde",c:"good"},{t:"Pressão arterial",c:"good"},{t:"Cardio",c:""}],
    detalhe:`QUANDO USAR
- Para hipertensão, saúde cardiovascular.

PRINCÍPIOS
- Reduz sódio (sal).
- Foco em frutas, vegetais, grãos integrais, proteínas magras.
- Lácteos com baixo teor de gordura.

EXEMPLO
• Café: aveia + leite desnatado + banana
• Almoço: frango grelhado + arroz integral + salada grande
• Lanche: iogurte + fruta
• Jantar: peixe + legumes cozidos

DICA
- Não use sal em excesso. Use ervas e especiarias.`
  },
  {
    id:"paleo",
    nome:"Paleo (estilo ancestral)",
    categoria:"estrategia",
    tags:["estrategia","paleo","qualidade"],
    chips:[{t:"Estratégia",c:""},{t:"Paleo",c:"warn"},{t:"Qualidade",c:""}],
    detalhe:`QUANDO USAR
- Para quem quer evitar processados e grãos.

PRINCÍPIOS
- Carnes, peixes, ovos, vegetais, frutas, oleaginosas.
- Exclui: grãos, lácteos, leguminosas, processados.

EXEMPLO
• Café: ovos + abacate + frutas
• Almoço: carne + batata doce + salada
• Lanche: castanhas + frutas
• Jantar: peixe + legumes assados

CUIDADO
- Pode ser mais caro e menos prático.`
  },
  {
    id:"vegetariano",
    nome:"Vegetariana",
    categoria:"restricao",
    tags:["restricao","vegetariano","proteína"],
    chips:[{t:"Restrição",c:""},{t:"Vegetariana",c:"warn"},{t:"Proteína atenção",c:"warn"}],
    detalhe:`QUANDO USAR
- Por escolha ética, saúde ou preferência.

PRINCÍPIOS
- Exclui carnes e peixes.
- Inclui ovos, laticínios, leguminosas, grãos.

EXEMPLO
• Café: ovos + aveia + fruta
• Almoço: arroz + feijão + queijo cottage + salada
• Lanche: iogurte + whey
• Jantar: omelete + legumes

DICA
- Combine proteínas vegetais (arroz + feijão).
- Suplementar B12 pode ser necessário.`
  },
  {
    id:"vegano",
    nome:"Vegana",
    categoria:"restricao",
    tags:["restricao","vegano","proteína"],
    chips:[{t:"Restrição",c:""},{t:"Vegana",c:"warn"},{t:"Proteína crítico",c:"warn"}],
    detalhe:`QUANDO USAR
- Por escolha ética, saúde ou preferência.

PRINCÍPIOS
- Exclui todos os produtos de origem animal.
- Foco em leguminosas, grãos, vegetais, frutas, oleaginosas.

EXEMPLO
• Café: aveia + proteína vegana + banana
• Almoço: grão de bico + arroz + salada + azeite
• Lanche: pasta de amendoim + frutas
• Jantar: tofu/tempeh + legumes + quinoa

SUPLEMENTOS IMPORTANTES
- B12, ferro, ômega-3 (algas), proteína vegana.`
  },
  {
    id:"sem_lactose",
    nome:"Sem lactose",
    categoria:"restricao",
    tags:["restricao","sem lactose","intolerância"],
    chips:[{t:"Restrição",c:""},{t:"Sem lactose",c:"warn"},{t:"Intolerância",c:""}],
    detalhe:`QUANDO USAR
- Para intolerância à lactose.

PRINCÍPIOS
- Exclui leite e derivados com lactose.
- Usa leites sem lactose, vegetais, queijos sem lactose.

EXEMPLO
• Café: ovos + leite sem lactose + aveia
• Almoço: carne + arroz + legumes
• Lanche: whey isolada (sem lactose) + fruta
• Jantar: frango + batata + salada

DICA
- Whey isolada tem pouca/zero lactose.`
  },
  {
    id:"sem_gluten",
    nome:"Sem glúten",
    categoria:"restricao",
    tags:["restricao","sem glúten","celíaca"],
    chips:[{t:"Restrição",c:""},{t:"Sem glúten",c:"warn"},{t:"Celíaca/sensibilidade",c:""}],
    detalhe:`QUANDO USAR
- Para celíacos ou sensibilidade ao glúten.

PRINCÍPIOS
- Exclui trigo, cevada, centeio.
- Usa arroz, batata, mandioca, aveia (sem glúten), quinoa.

EXEMPLO
• Café: ovos + batata doce + fruta
• Almoço: arroz + feijão + carne + salada
• Lanche: iogurte + fruta
• Jantar: peixe + mandioca + legumes

CUIDADO
- Leia rótulos (traços de glúten).`
  }
];

const SUPLEMENTOS = [
  {
    nome:"Creatina",
    categoria:"essential",
    desc:"Um dos suplementos mais estudados e eficazes para força e hipertrofia.",
    beneficios:["Aumenta força","Melhora hipertrofia","Seguro e barato","Funciona para 80–90% das pessoas"],
    dose:"3–5g/dia (qualquer hora)",
    obs:"Saturação demora ~1 mês. Não precisa ciclar."
  },
  {
    nome:"Whey Protein",
    categoria:"essential",
    desc:"Proteína de rápida absorção. Facilita bater meta de proteína diária.",
    beneficios:["Praticidade","Absorção rápida","Ajuda na saciedade","Bom custo/benefício"],
    dose:"1–2 doses/dia (conforme necessidade)",
    obs:"Não é obrigatório se você come proteína suficiente."
  },
  {
    nome:"Cafeína",
    categoria:"performance",
    desc:"Melhora energia, foco e desempenho (principalmente aeróbico e força).",
    beneficios:["Mais energia","Foco mental","Melhora desempenho","Barato"],
    dose:"3–6 mg/kg (ex.: 200–400mg) ~30–60 min antes",
    obs:"Pode atrapalhar sono se usar tarde. Tolerância existe."
  },
  {
    nome:"Beta-Alanina",
    categoria:"performance",
    desc:"Ajuda em treinos de alta intensidade (mais reps em séries pesadas).",
    beneficios:["Reduz fadiga muscular","Mais reps/volume","Seguro"],
    dose:"3–5g/dia (qualquer hora)",
    obs:"Pode dar formigamento (normal e inofensivo)."
  },
  {
    nome:"Citrulina Malato",
    categoria:"performance",
    desc:"Melhora pump e pode aumentar desempenho (mais reps).",
    beneficios:["Mais pump","Pode aumentar volume","Reduz fadiga"],
    dose:"6–8g ~30 min antes do treino",
    obs:"Mais eficaz que arginina."
  },
  {
    nome:"Vitamina D",
    categoria:"health",
    desc:"Importante para ossos, imunidade e possivelmente testosterona.",
    beneficios:["Saúde óssea","Imunidade","Pode ajudar testosterona (se baixa)","Muito comum estar baixa"],
    dose:"1000–5000 UI/dia (conforme exame)",
    obs:"Faça exame de sangue para ajustar dose."
  },
  {
    nome:"Ômega-3 (EPA/DHA)",
    categoria:"health",
    desc:"Gordura essencial. Saúde cardiovascular, anti-inflamatório.",
    beneficios:["Saúde cardíaca","Anti-inflamatório","Pode ajudar recuperação","Cérebro"],
    dose:"1–2g EPA+DHA/dia",
    obs:"Prefira óleo de peixe/algas de qualidade."
  },
  {
    nome:"Multivitamínico",
    categoria:"health",
    desc:"Seguro contra deficiências (principalmente se dieta restrita).",
    beneficios:["Cobre deficiências","Saúde geral","Praticidade"],
    dose:"Conforme rótulo (geralmente 1–2 cápsulas/dia)",
    obs:"Não substitui dieta. Use se achar necessário."
  },
  {
    nome:"Zinco",
    categoria:"health",
    desc:"Mineral importante para testosterona, imunidade e recuperação.",
    beneficios:["Testosterona (se baixa)","Imunidade","Recuperação"],
    dose:"10–30mg/dia (conforme exame)",
    obs:"Excesso pode dar problemas. Faça exame."
  },
  {
    nome:"Magnésio",
    categoria:"recovery",
    desc:"Mineral importante para sono, relaxamento muscular e energia.",
    beneficios:["Melhora sono","Relaxamento muscular","Energia celular","Saúde óssea"],
    dose:"200–400mg/dia (pode ser à noite)",
    obs:"Tipos: citrato, bisglicinato, treonato."
  },
  {
    nome:"Glutamina",
    categoria:"recovery",
    desc:"Aminoácido mais abundante. Pode ajudar intestino e imunidade.",
    beneficios:["Saúde intestinal","Imunidade (em estresse alto)","Recuperação"],
    dose:"5–10g/dia",
    obs:"Evidência mista para hipertrofia. Útil em overtraining/doença."
  },
  {
    nome:"BCAAs",
    categoria:"caution",
    desc:"Aminoácidos de cadeia ramificada. Pouco útil se você come proteína suficiente.",
    beneficios:["Pode ajudar em jejum longo","Marketing forte"],
    dose:"5–10g (se usar)",
    obs:"Se você come proteína suficiente, é praticamente inútil."
  },
  {
    nome:"HMB",
    categoria:"caution",
    desc:"Pode reduzir catabolismo (principalmente em iniciantes ou idosos).",
    beneficios:["Pode reduzir perda muscular","Útil em déficit calórico/idosos"],
    dose:"3g/dia",
    obs:"Evidência mista. Caro. Não é essencial."
  },
  {
    nome:"Tribulus Terrestris",
    categoria:"caution",
    desc:"Marketing forte, mas evidência fraca para testosterona.",
    beneficios:["Marketing"],
    dose:"—",
    obs:"Não recomendado. Sem evidência sólida."
  },
  {
    nome:"Termogênicos",
    categoria:"caution",
    desc:"Cafeína + extratos. Podem ajudar energia e fome, mas não são mágicos.",
    beneficios:["Energia","Pode ajudar fome","Marketing"],
    dose:"Conforme rótulo",
    obs:"Efeito é basicamente cafeína + placebo. Cuidado com coração/pressão."
  }
];

const LOJAS = [
  {nome:"Growth Supplements",url:"https://www.gsuplementos.com.br",desc:"Marca própria, preços bons."},
  {nome:"Max Titanium",url:"https://www.maxtitanium.com.br",desc:"Nacional, boa procedência."},
  {nome:"Integral Médica",url:"https://www.integralmedica.com.br",desc:"Tradicional, ampla linha."},
  {nome:"Probiótica",url:"https://www.probiotica.com.br",desc:"Nacional, várias marcas."},
  {nome:"Darkness",url:"https://www.darknessintegralmédica.com.br",desc:"Linha premium."}
];