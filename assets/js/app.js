const Q = [
  // E vs I (15 q, di:0)
  {d:0,dir:1,t:"Kamu lebih suka menghabiskan waktu dengan banyak orang daripada sendirian.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:0,dir:1,t:"Di pesta, kamu dengan mudah memulai percakapan dengan orang yang belum kamu kenal.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:0,dir:-1,t:"Setelah hari yang panjang bersama orang-orang, kamu butuh waktu sendiri untuk recharge.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:0,dir:1,t:"Kamu merasa lebih hidup ketika berada di lingkungan yang ramai dan aktif.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:0,dir:-1,t:"Kamu lebih suka berpikir sendiri dulu sebelum mendiskusikan ide dengan orang lain.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:0,dir:1,t:"Kamu termasuk orang yang mudah bergaul dan cepat akrab.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:0,dir:-1,t:"Kamu lebih suka memiliki sedikit teman yang sangat dekat daripada banyak kenalan.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:0,dir:1,t:"Kamu berpikir lebih baik saat berdiskusi dengan orang lain.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:0,dir:-1,t:"Kamu cenderung merasa lelah setelah bersosialisasi dalam waktu lama.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:0,dir:1,t:"Kamu senang menjadi pusat perhatian.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:0,dir:-1,t:"Kamu lebih nyaman mengungkapkan diri lewat tulisan daripada bicara.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:0,dir:1,t:"Kamu mudah mengekspresikan perasaan dan pikiranmu kepada orang baru.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:0,dir:-1,t:"Kamu butuh waktu sendiri untuk memproses pengalaman dan emosi.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:0,dir:1,t:"Kamu suka bekerja dalam tim yang besar dan dinamis.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:0,dir:-1,t:"Kamu lebih produktif saat bekerja di tempat yang tenang dan sepi.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  // S vs N (15 q, d:1)
  {d:1,dir:-1,t:"Kamu lebih percaya pada intuisi dan firasat daripada fakta konkret.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:1,dir:1,t:"Kamu lebih suka instruksi yang jelas dan detail daripada gambaran besar.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:1,dir:-1,t:"Kamu sering memikirkan kemungkinan dan skenario 'bagaimana jika'.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:1,dir:1,t:"Kamu lebih mempercayai pengalaman nyata daripada teori abstrak.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:1,dir:-1,t:"Kamu suka eksplorasi ide-ide baru dan konsep yang belum terbukti.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:1,dir:1,t:"Kamu memperhatikan detail-detail kecil yang sering dilewatkan orang lain.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:1,dir:-1,t:"Kamu lebih tertarik pada makna di balik sesuatu daripada sesuatu itu sendiri.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:1,dir:1,t:"Kamu lebih suka bekerja dengan langkah-langkah yang sudah terbukti berhasil.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:1,dir:-1,t:"Kamu sering punya visi tentang bagaimana seharusnya sesuatu itu.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:1,dir:1,t:"Kamu lebih menikmati pekerjaan yang bersifat praktis dan nyata.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:1,dir:-1,t:"Kamu sering melihat pola dan hubungan yang tidak terlihat jelas.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:1,dir:1,t:"Kamu lebih percaya pada apa yang bisa dilihat dan disentuh.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:1,dir:-1,t:"Kamu suka mempertanyakan hal-hal yang sudah diterima umum.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:1,dir:1,t:"Kamu lebih suka belajar dari contoh konkret daripada penjelasan abstrak.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:1,dir:-1,t:"Kamu sering terinspirasi oleh imajinasi dan kemungkinan-kemungkinan baru.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  // T vs F (15 q, d:2)
  {d:2,dir:-1,t:"Dalam mengambil keputusan, perasaan orang lain adalah pertimbangan utamamu.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:2,dir:1,t:"Kamu lebih mengutamakan logika dan objektivitas daripada perasaan.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:2,dir:-1,t:"Kamu sering dipengaruhi emosi saat membuat keputusan penting.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:2,dir:1,t:"Kamu lebih mudah mengkritik pekerjaan orang lain jika memang perlu.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:2,dir:-1,t:"Kamu sangat peduli dengan harmoni dan menghindari konflik.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:2,dir:1,t:"Kebenaran lebih penting bagimu daripada menjaga perasaan orang.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:2,dir:-1,t:"Kamu mudah berempati dan merasakan apa yang dirasakan orang lain.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:2,dir:1,t:"Kamu lebih memilih debat intelektual daripada basa-basi emosional.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:2,dir:-1,t:"Kamu membuat keputusan berdasarkan nilai-nilai personal, bukan analisis objektif.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:2,dir:1,t:"Kamu bisa mengkritik seseorang tanpa merasa bersalah jika itu memang benar.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:2,dir:-1,t:"Kamu butuh merasa terhubung secara emosional untuk bisa bekerja sama dengan baik.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:2,dir:1,t:"Kamu lebih nyaman dengan data dan fakta daripada cerita dan perasaan.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:2,dir:-1,t:"Kamu sering menjadi mediator saat ada konflik karena peduli pada semua pihak.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:2,dir:1,t:"Kamu menilai orang berdasarkan kompetensi, bukan keramahan mereka.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:2,dir:-1,t:"Sebuah keputusan yang menyakiti banyak orang sulit kamu ambil, meski logis.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  // J vs P (15 q, d:3)
  {d:3,dir:1,t:"Kamu lebih suka merencanakan semuanya jauh-jauh hari.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:3,dir:-1,t:"Kamu lebih suka membiarkan pilihan tetap terbuka selama mungkin.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:3,dir:1,t:"Deadline membuatmu lebih produktif dan terstruktur.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:3,dir:-1,t:"Kamu sering mengerjakan sesuatu di menit terakhir dan masih bisa perform.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:3,dir:1,t:"Kamu lebih nyaman saat ruangan dan meja kerjamu rapi dan teratur.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:3,dir:-1,t:"Kamu lebih suka spontan daripada mengikuti rencana yang sudah dibuat.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:3,dir:1,t:"Kamu menggunakan to-do list atau jadwal harian secara rutin.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:3,dir:-1,t:"Kamu bisa mengubah rencana dengan mudah tanpa merasa terganggu.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:3,dir:1,t:"Kamu lebih suka menyelesaikan proyek sebelum memulai yang baru.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:3,dir:-1,t:"Kamu senang multitasking dan menangani banyak hal sekaligus.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:3,dir:1,t:"Kamu merasa tidak nyaman jika ada hal yang belum terselesaikan.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:3,dir:-1,t:"Kamu menikmati proses lebih dari hasil akhir.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:3,dir:1,t:"Kamu lebih suka keputusan sudah diambil daripada masih dalam proses.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:3,dir:-1,t:"Kamu sering memulai banyak hal baru sebelum menyelesaikan yang lama.",L:"Sangat tidak setuju",R:"Sangat setuju"},
  {d:3,dir:1,t:"Kamu lebih suka rutinitas yang konsisten daripada variasi yang terus berubah.",L:"Sangat tidak setuju",R:"Sangat setuju"},
];

const TYPES = {
  INTJ:{name:"Arsitek",emoji:"🏛️",tagline:"Imajinatif dan strategis, selalu punya rencana",color:"#533ab7",
    desc:"INTJ adalah pemikir strategis yang brilian dengan kemampuan mengubah ide abstrak menjadi rencana konkret. Mereka sangat independen, analitis, dan selalu berorientasi pada tujuan jangka panjang.",
    strength:["Pemikiran strategis","Determinasi tinggi","Independen","Inovatif","Analitis mendalam"],
    weakness:["Terlalu perfeksionis","Kurang sabar","Sulit ekspresikan emosi","Terlalu kritis"],
    famous:["Elon Musk","Friedrich Nietzsche","Nikola Tesla","Mark Zuckerberg"],
    best:["ENFP","ENTP"],good:["INFJ","ENTJ"],hard:["ESFP","ISFP"]},
  INTP:{name:"Logikus",emoji:"🔬",tagline:"Pemikir inovatif haus akan pengetahuan",color:"#185fa5",
    desc:"INTP adalah filsuf modern yang menemukan kepuasan terbesar dalam menganalisis sistem dan teori. Mereka jenius dalam memecahkan masalah kompleks tetapi sering hidup dalam dunia ide.",
    strength:["Analitis luar biasa","Kreatif","Objektif","Pemikiran mendalam","Adaptif"],
    weakness:["Menunda-nunda","Sensitif terhadap kritik","Kurang perhatian pada detail praktis","Kurang tegas"],
    famous:["Albert Einstein","Bill Gates","Larry Page","Blaise Pascal"],
    best:["ENTJ","ESTJ"],good:["INFJ","ENFJ"],hard:["ESFJ","ISFJ"]},
  ENTJ:{name:"Komandan",emoji:"⚔️",tagline:"Berani, imajinatif, dan berkemauan keras",color:"#993c1d",
    desc:"ENTJ adalah pemimpin alami yang percaya diri dengan kemampuan luar biasa dalam mengorganisasi orang dan sumber daya menuju tujuan bersama. Mereka karismatik dan sangat efisien.",
    strength:["Kepemimpinan alami","Efisien","Percaya diri","Strategis","Energik"],
    weakness:["Keras kepala","Tidak sabar","Dominan","Kurang empati"],
    famous:["Steve Jobs","Gordon Ramsay","Margaret Thatcher","Napoleon"],
    best:["INTP","INFP"],good:["ENTJ","INTJ"],hard:["INFP","ENFP"]},
  ENTP:{name:"Debater",emoji:"💡",tagline:"Cerdas dan ingin tahu, tidak bisa menolak tantangan",color:"#0f6e56",
    desc:"ENTP adalah inovator yang antusias dengan kecepatan berpikir yang luar biasa. Mereka suka berdebat bukan untuk menang, tetapi karena proses intelektual itu sendiri.",
    strength:["Inovatif","Karismatik","Berpikir cepat","Berani","Kreatif"],
    weakness:["Tidak fokus","Suka berdebat","Tidak sensitif","Menghindari rutinitas"],
    famous:["Leonardo da Vinci","Benjamin Franklin","Celine Dion","Tom Hanks"],
    best:["INFJ","INTJ"],good:["ENFP","ENTP"],hard:["ISFJ","ESTJ"]},
  INFJ:{name:"Pendukung",emoji:"🌿",tagline:"Idealis tenang dengan pikiran yang mendalam",color:"#533ab7",
    desc:"INFJ adalah tipe paling langka. Mereka punya visi kuat tentang dunia yang lebih baik dan dedikasi untuk mewujudkannya. Intuitif dan empatik, mereka sering terasa lebih tua dari usianya.",
    strength:["Insightful","Prinsipil","Kreatif","Inspirasional","Empatik tinggi"],
    weakness:["Perfeksionis","Terlalu privat","Mudah lelah","Sulit beradaptasi"],
    famous:["Martin Luther King Jr.","Nelson Mandela","Mother Teresa","Mahatma Gandhi"],
    best:["ENTP","ENFP"],good:["INFP","INTJ"],hard:["ESTP","ESFP"]},
  INFP:{name:"Mediator",emoji:"🌈",tagline:"Puitis, baik hati, dan selalu siap membantu",color:"#d4537e",
    desc:"INFP adalah pembermimpi idealis dengan nilai-nilai kuat. Mereka mencari hubungan yang bermakna dan selalu mencari cara untuk membuat dunia menjadi tempat yang lebih baik.",
    strength:["Empatik","Kreatif","Setia","Idealis","Terbuka pikiran"],
    weakness:["Tidak realistis","Terlalu idealistis","Menghindari konflik","Terlalu sensitif"],
    famous:["William Shakespeare","J.R.R. Tolkien","Princess Diana","Audrey Hepburn"],
    best:["ENFJ","ENTJ"],good:["INFJ","ENFP"],hard:["ESTJ","ENTJ"]},
  ENFJ:{name:"Protagonis",emoji:"🌟",tagline:"Karismatik dan menginspirasi pemimpin",color:"#993c1d",
    desc:"ENFJ adalah pemimpin yang menghangatkan hati, mampu menginspirasi orang lain menuju pertumbuhan. Mereka punya bakat alami untuk melihat potensi terbaik dalam setiap orang.",
    strength:["Toleran","Andal","Karismatik","Empatik","Pemimpin alami"],
    weakness:["Terlalu idealistis","Terlalu sensitif","Overly involved","Mengorbankan diri"],
    famous:["Barack Obama","Oprah Winfrey","Nelson Mandela","Pope John Paul II"],
    best:["INFP","ISFP"],good:["ENFP","INFJ"],hard:["INTP","ISTP"]},
  ENFP:{name:"Pejuang",emoji:"🦋",tagline:"Semangat, kreatif, dan sosiabel",color:"#0f6e56",
    desc:"ENFP adalah jiwa bebas yang penuh semangat dan kreatifitas. Mereka melihat hidup sebagai petualangan penuh kemungkinan dan punya kemampuan luar biasa untuk terhubung dengan orang lain.",
    strength:["Antusias","Kreatif","Sosial","Ekspresif","Optimis"],
    weakness:["Tidak fokus","Overly emotional","Tidak terstruktur","Overthinking"],
    famous:["Robin Williams","Will Smith","Quentin Tarantino","Sandra Bullock"],
    best:["INTJ","INFJ"],good:["ENTP","INFP"],hard:["ISTJ","ISFJ"]},
  ISTJ:{name:"Logistikus",emoji:"📋",tagline:"Bertanggung jawab dan dapat diandalkan",color:"#444441",
    desc:"ISTJ adalah fondasi masyarakat: dapat diandalkan, bertanggung jawab, dan selalu menyelesaikan apa yang dimulai. Mereka menghormati tradisi dan komitmen.",
    strength:["Jujur","Bertanggung jawab","Setia","Tenang","Terorganisir"],
    weakness:["Keras kepala","Tidak fleksibel","Terlalu serius","Sulit adaptasi perubahan"],
    famous:["George Washington","Queen Elizabeth II","Jeff Bezos","Denzel Washington"],
    best:["ESFP","ESTP"],good:["ISFJ","ESTJ"],hard:["ENFP","ENTP"]},
  ISFJ:{name:"Pelindung",emoji:"🛡️",tagline:"Sangat berdedikasi dan hangat",color:"#185fa5",
    desc:"ISFJ adalah pendukung setia yang selalu ada untuk orang-orang yang mereka cintai. Mereka punya ingatan luar biasa untuk detail tentang orang-orang yang berarti bagi mereka.",
    strength:["Suportif","Andal","Sabar","Imajinatif","Loyal"],
    weakness:["Terlalu rendah hati","Mengabaikan kebutuhan sendiri","Menghindari konflik","Kaku"],
    famous:["Mother Teresa","Kate Middleton","Beyoncé","Rosa Parks"],
    best:["ESFP","ESTP"],good:["ISFP","ESTJ"],hard:["ENTP","ENFP"]},
  ESTJ:{name:"Eksekutif",emoji:"🏛️",tagline:"Manajer yang luar biasa dalam mengelola hal",color:"#444441",
    desc:"ESTJ adalah pemimpin komunitas dan organisasi. Mereka punya kemampuan luar biasa dalam mengatur orang dan mengelola proyek dengan efisien. Dedikasi dan martabat adalah inti mereka.",
    strength:["Berdedikasi","Kuat","Langsung","Jujur","Sabar"],
    weakness:["Keras kepala","Tidak fleksibel","Terlalu dominan","Kurang nyaman emosi"],
    famous:["Judge Judy","John D. Rockefeller","Michelle Obama","Frank Sinatra"],
    best:["ISTP","INTP"],good:["ISTJ","ESFJ"],hard:["INFP","INFJ"]},
  ESFJ:{name:"Konsul",emoji:"🤝",tagline:"Orang yang sangat peduli dan sosial",color:"#993c1d",
    desc:"ESFJ adalah tipe yang paling suka membantu dan paling sosial. Mereka menemukan kepuasan sejati dalam membantu orang lain dan memastikan semua orang merasa diterima.",
    strength:["Kuat","Loyal","Hangat","Sensitif","Terhubung dengan baik"],
    weakness:["Terlalu selfless","Rentan terhadap kritik","Tidak fleksibel","Terlalu butuh apresiasi"],
    famous:["Taylor Swift","Bill Clinton","Jennifer Garner","Danny Glover"],
    best:["ISFP","INFP"],good:["ISTJ","ISFJ"],hard:["INTP","ISTP"]},
  ISTP:{name:"Virtuoso",emoji:"🔧",tagline:"Eksperimentalis yang berani dan praktis",color:"#0f6e56",
    desc:"ISTP adalah pemecah masalah yang tenang dan ahli. Mereka sangat baik dalam memahami cara kerja sistem dan menemukan solusi praktis yang elegan.",
    strength:["Optimis","Kreatif","Faktual","Rileks","Spontan"],
    weakness:["Sulit berkomitmen","Keras kepala","Tidak sensitif","Pribadi yang tertutup"],
    famous:["Clint Eastwood","Tom Cruise","Bruce Lee","Scarlett Johansson"],
    best:["ESTJ","ESFJ"],good:["ISTJ","INTP"],hard:["ENFJ","INFJ"]},
  ISFP:{name:"Petualang",emoji:"🎨",tagline:"Seniman fleksibel yang selalu siap menjelajah",color:"#d4537e",
    desc:"ISFP adalah seniman sejati, meski tidak selalu mengartikan diri sebagai artis. Mereka mengekspresikan diri melalui tindakan dan pilihan hidup yang mencerminkan keindahan.",
    strength:["Pesona","Sensitif terhadap orang","Imajinatif","Cinta damai","Hangat"],
    weakness:["Tidak dapat diprediksi","Mudah tersinggung","Kurang ambisius","Tidak sukai konflik"],
    famous:["Michael Jackson","Marilyn Monroe","Paul McCartney","David Bowie"],
    best:["ENFJ","ESFJ"],good:["INFP","ISFJ"],hard:["ENTJ","ESTJ"]},
  ESTP:{name:"Pengusaha",emoji:"⚡",tagline:"Cerdas, energik, dan sangat perseptif",color:"#993c1d",
    desc:"ESTP adalah pemikir cepat yang hidup di momen sekarang. Mereka suka aksi, tidak takut mengambil risiko, dan punya kemampuan luar biasa membaca situasi secara real-time.",
    strength:["Toleran","Langsung","Sosial","Observan","Terampil"],
    weakness:["Tidak sensitif","Tidak sabar","Berisiko","Kurang perencanaan jangka panjang"],
    famous:["Donald Trump","Ernest Hemingway","Eddie Murphy","Bruce Willis"],
    best:["ISFJ","ISTJ"],good:["ESTJ","ESFJ"],hard:["INFJ","INTJ"]},
  ESFP:{name:"Penghibur",emoji:"🎭",tagline:"Orang yang spontan, energik, dan antusias",color:"#0f6e56",
    desc:"ESFP adalah jiwa pesta yang membawa kesenangan dan kegembiraan ke mana pun mereka pergi. Mereka hidup di saat ini dan sangat baik dalam membuat orang lain merasa nyaman.",
    strength:["Berani","Asal-usul","Estetis","Praktis","Observan"],
    weakness:["Sensitif","Menghindari konflik","Mudah bosan","Fokus jangka pendek"],
    famous:["Marilyn Monroe","Jamie Oliver","Adele","Will Smith"],
    best:["ISFJ","ISTJ"],good:["ESFJ","ESTP"],hard:["INTJ","INFJ"]},
};

const DIM_NAMES = ["Energi","Informasi","Keputusan","Gaya Hidup"];
const DIM_POLES = [["Ekstrovert (E)","Introvert (I)"],["Sensing (S)","Intuition (N)"],["Thinking (T)","Feeling (F)"],["Judging (J)","Perceiving (P)"]];
const DIM_COLORS = ["#c8793a","#7b6cf6","#0f6e56","#185fa5"];

let answers = {};
let cur = 0;
let selectedVal = null;

function startTest(){
  document.getElementById('screen-intro').classList.add('hidden');
  document.getElementById('screen-test').classList.remove('hidden');
  cur = 0; answers = {};
  renderQ();
}

function renderQ(){
  const q = Q[cur];
  selectedVal = answers[cur] !== undefined ? answers[cur] : null;
  document.getElementById('q-text').textContent = q.t;
  document.getElementById('lbl-left').textContent = q.L;
  document.getElementById('lbl-right').textContent = q.R;
  document.getElementById('prog-label').textContent = `Pertanyaan ${cur+1} dari ${Q.length}`;
  const pct = Math.round(cur/Q.length*100);
  document.getElementById('prog-pct').textContent = pct+'%';
  document.getElementById('prog-fill').style.width = pct+'%';
  document.getElementById('dim-label').textContent = `Dimensi: ${DIM_NAMES[q.d]} (${DIM_POLES[q.d][0].split(' ')[0]} vs ${DIM_POLES[q.d][1].split(' ')[0]})`;
  document.getElementById('dim-label').style.color = DIM_COLORS[q.d];
  document.getElementById('btn-back').style.visibility = cur===0?'hidden':'visible';
  renderScale();
  updateNext();
}

function renderScale(){
  const row = document.getElementById('scale-row');
  row.innerHTML = '';
  const vals = [1,2,3,4,5];
  vals.forEach(v=>{
    const b = document.createElement('button');
    b.className = 'scale-btn'+(selectedVal===v?' sel':'');
    b.dataset.v = v;
    b.textContent = v===3?'±':v;
    b.title = v===1?'Sangat tidak setuju':v===2?'Tidak setuju':v===3?'Netral':v===4?'Setuju':'Sangat setuju';
    b.onclick = ()=>{selectedVal=v;answers[cur]=v;renderScale();updateNext()};
    row.appendChild(b);
  });
}

function updateNext(){
  document.getElementById('btn-next').disabled = selectedVal===null;
}

function goNext(){
  if(selectedVal===null) return;
  answers[cur]=selectedVal;
  if(cur<Q.length-1){cur++;renderQ();}
  else showResult();
}

function goBack(){
  if(cur>0){cur--;renderQ();}
}

function calcType(){
  const scores = [0,0,0,0];
  const counts = [0,0,0,0];
  Q.forEach((q,i)=>{
    if(answers[i]!==undefined){
      const v = answers[i]; // 1-5
      const centered = v - 3; // -2 to +2
      scores[q.d] += q.dir * centered;
      counts[q.d]++;
    }
  });
  let type = '';
  const pcts = [];
  scores.forEach((s,i)=>{
    const max = counts[i]*2;
    const norm = max>0 ? s/max : 0; // -1 to +1
    const pct = Math.round((norm+1)/2*100); // 0-100 where 50=neutral
    pcts.push(pct);
    if(i===0) type += pct<50?'I':'E';
    else if(i===1) type += pct<50?'N':'S';
    else if(i===2) type += pct<50?'F':'T';
    else type += pct<50?'P':'J';
  });
  return {type, pcts};
}

function showResult(){
  const {type, pcts} = calcType();
  const info = TYPES[type] || TYPES['INFP'];
  document.getElementById('screen-test').classList.add('hidden');
  document.getElementById('screen-result').classList.remove('hidden');
  const poles = [
    pcts[0]>=50?['E','I',pcts[0],100-pcts[0]]:['I','E',100-pcts[0],pcts[0]],
    pcts[1]>=50?['S','N',pcts[1],100-pcts[1]]:['N','S',100-pcts[1],pcts[1]],
    pcts[2]>=50?['T','F',pcts[2],100-pcts[2]]:['F','T',100-pcts[2],pcts[2]],
    pcts[3]>=50?['J','P',pcts[3],100-pcts[3]]:['P','J',100-pcts[3],pcts[3]],
  ];
  const dimColors = ['#c8793a','#7b6cf6','#0f6e56','#185fa5'];
  document.getElementById('result-content').innerHTML = `
    <div class="result-type">
      <div class="type-emoji">${info.emoji}</div>
      <div class="type-code">${type}</div>
      <div class="type-name">${info.name}</div>
      <div class="type-tagline">${info.tagline}</div>
    </div>
    <div class="dim-section">
      <h3>Profil dimensimu</h3>
      ${poles.map((p,i)=>`
        <div class="dim-item">
          <div class="dim-poles">
            <span class="dim-pole-a" style="color:${dimColors[i]}">${p[0]} ${p[2]}%</span>
            <span class="dim-pole-b">${p[1]} ${p[3]}%</span>
          </div>
          <div class="dim-bar-bg">
            <div class="dim-bar-fill" style="width:${p[2]}%;background:${dimColors[i]}"></div>
          </div>
        </div>`).join('')}
    </div>
    <div class="desc-card">
      <h3>Tentang ${type} — ${info.name}</h3>
      <p>${info.desc}</p>
    </div>
    <div class="desc-card">
      <h3>Kekuatan utama</h3>
      <div class="traits-grid">
        ${info.strength.map(s=>`<div class="trait-item"><i class="ti ti-circle-check" aria-hidden="true"></i>${s}</div>`).join('')}
      </div>
    </div>
    <div class="desc-card">
      <h3>Area pengembangan</h3>
      <div class="traits-grid">
        ${info.weakness.map(w=>`<div class="trait-item"><i class="ti ti-alert-circle" aria-hidden="true"></i>${w}</div>`).join('')}
      </div>
    </div>
    <div class="desc-card">
      <h3>Tokoh terkenal dengan tipe ini</h3>
      <div class="famous-row">
        ${info.famous.map(f=>`<span class="famous-tag">${f}</span>`).join('')}
      </div>
    </div>
    <div class="desc-card">
      <h3>Kompatibilitas dengan tipe lain</h3>
      <p style="font-size:.8rem;color:var(--ink2);margin-bottom:.5rem">Pasangan ideal & hubungan menantang:</p>
      <div class="compat-row">
        ${info.best.map(t=>`<span class="compat-tag compat-best">✓ ${t}</span>`).join('')}
        ${info.good.map(t=>`<span class="compat-tag compat-good">○ ${t}</span>`).join('')}
        ${info.hard.map(t=>`<span class="compat-tag compat-hard">△ ${t}</span>`).join('')}
      </div>
      <p style="font-size:.72rem;color:var(--ink2);margin-top:.5rem">✓ Sangat cocok &nbsp;○ Cocok &nbsp;△ Perlu usaha ekstra</p>
    </div>
    <button class="btn-retry" onclick="retryTest()">Ulangi Tes ↺</button>
    <div style="height:2rem"></div>
  `;
  setTimeout(()=>{
    document.querySelectorAll('.dim-bar-fill').forEach(b=>{b.style.width=b.style.width});
  },100);
}

function retryTest(){
  document.getElementById('screen-result').classList.add('hidden');
  document.getElementById('screen-intro').classList.remove('hidden');
  answers={};cur=0;selectedVal=null;
}