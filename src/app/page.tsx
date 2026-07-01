"use client";

import { useEffect, useMemo, useState } from "react";
import { Bar, bars, cities, moods, types } from "@/data/bars";

const Icon = ({ children }: { children: React.ReactNode }) => <span aria-hidden="true">{children}</span>;

export default function Home() {
  const [city, setCity] = useState("全部");
  const [mood, setMood] = useState("全部");
  const [type, setType] = useState("全部");
  const [budget, setBudget] = useState(1600);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Bar | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showFavs, setShowFavs] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const saved = window.localStorage.getItem("tonight-bar-favorites");
    if (saved) queueMicrotask(() => setFavorites(JSON.parse(saved)));
  }, []);

  const filtered = useMemo(() => bars.filter((bar) => {
    const text = `${bar.name}${bar.englishName}${bar.area}${bar.tags.join("")}`.toLowerCase();
    return (city === "全部" || bar.city === city)
      && (mood === "全部" || bar.moods.includes(mood))
      && (type === "全部" || bar.type === type)
      && bar.price <= budget
      && text.includes(query.toLowerCase())
      && (!showFavs || favorites.includes(bar.id));
  }), [city, mood, type, budget, query, showFavs, favorites]);

  const toggleFavorite = (id: number) => {
    const next = favorites.includes(id) ? favorites.filter((item) => item !== id) : [...favorites, id];
    setFavorites(next);
    window.localStorage.setItem("tonight-bar-favorites", JSON.stringify(next));
  };

  const reset = () => {
    setCity("全部"); setMood("全部"); setType("全部"); setBudget(1600); setQuery(""); setShowFavs(false);
  };

  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="今晚喝哪首頁"><span className="brand-mark">今</span><span>今晚喝哪</span></a>
        <nav aria-label="主要導覽">
          <a href="#discover">探索酒吧</a><a href="#how">怎麼選</a><a href="#partners">店家合作</a>
        </nav>
        <button className={`favorite-nav ${showFavs ? "active" : ""}`} onClick={() => setShowFavs(!showFavs)}>
          <Icon>♡</Icon> 收藏 <span>{favorites.length}</span>
        </button>
      </header>

      <section className="hero shell" id="top">
        <div className="eyebrow"><span /> 你的夜晚，值得剛剛好的那一杯</div>
        <h1>今晚，<em>喝哪？</em></h1>
        <p>不用滑過幾百則評論。告訴我們你的心情，<br />三分鐘找到最合拍的台灣酒吧。</p>
        <div className="hero-actions">
          <a className="primary" href="#discover">開始探索 <Icon>↘</Icon></a>
          <button className="text-button" onClick={() => setShowQuiz(true)}>讓我幫你選 <Icon>✦</Icon></button>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="moon" /><div className="glass"><i /><b>今<br />夜</b></div>
          <span className="star s1">✦</span><span className="star s2">·</span><span className="star s3">✦</span>
        </div>
        <div className="scroll-hint">SCROLL TO DISCOVER <span>↓</span></div>
      </section>

      <section className="discovery" id="discover">
        <div className="shell">
          <div className="section-heading">
            <div><span className="kicker">CURATED FOR TONIGHT</span><h2>找到你的今晚</h2></div>
            <p>從氛圍開始，而不是從星等開始。<br />每一間都由我們依真實體驗標記。</p>
          </div>

          <div className="search-panel">
            <label className="search-input"><Icon>⌕</Icon><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="搜尋店名、區域或特色…" /></label>
            <div className="filter-row">
              <Filter label="城市" value={city} options={cities} onChange={setCity} />
              <Filter label="今晚想要" value={mood} options={moods} onChange={setMood} />
              <Filter label="酒吧類型" value={type} options={types} onChange={setType} />
              <label className="budget-filter"><span>每人預算</span><strong>NT$ {budget.toLocaleString()}</strong><input type="range" min="500" max="1600" step="100" value={budget} onChange={(e) => setBudget(Number(e.target.value))} /></label>
            </div>
          </div>

          <div className="results-head">
            <p>{showFavs ? "你的收藏" : city === "全部" ? "全台精選" : `${city}精選`} <strong>{filtered.length}</strong> 間</p>
            <button onClick={reset}>重設條件 ↻</button>
          </div>

          {filtered.length ? <div className="bar-grid">{filtered.map((bar, index) => <BarCard key={bar.id} bar={bar} index={index} favorite={favorites.includes(bar.id)} onFavorite={() => toggleFavorite(bar.id)} onOpen={() => setSelected(bar)} />)}</div> : <div className="empty"><span>☾</span><h3>今晚暫時沒有合適選項</h3><p>放寬預算或換個條件，下一杯正在等你。</p><button className="primary" onClick={reset}>重新探索</button></div>}
        </div>
      </section>

      <section className="how shell" id="how">
        <div className="how-intro"><span className="kicker">A BETTER WAY TO CHOOSE</span><h2>星等不會告訴你，<br /><em>今晚適不適合。</em></h2><p>我們把最難形容的感受，變成真正有用的選擇依據。</p></div>
        <div className="metric-list">
          <div><b>01</b><span>安靜程度</span><i>適合深聊，還是熱鬧碰杯</i></div>
          <div><b>02</b><span>一人友善</span><i>吧台座位與自在程度</i></div>
          <div><b>03</b><span>約會氣氛</span><i>燈光、距離與恰好的曖昧</i></div>
          <div><b>04</b><span>新手友善</span><i>不用懂術語，也能喝得開心</i></div>
        </div>
      </section>

      <section className="partner" id="partners">
        <div className="shell partner-inner"><div><span className="kicker">FOR BAR OWNERS</span><h2>讓對的客人，<br />在對的晚上找到你。</h2></div><div><p>加入認證店家方案，管理資訊、接收訂位意向，並用匿名趨勢了解客人正在尋找什麼。</p><button className="outline" onClick={() => setNotice("合作申請已記錄！正式版將串接店家後台。")}>了解店家方案 →</button></div></div>
      </section>

      <footer className="shell"><div className="brand"><span className="brand-mark">今</span><span>今晚喝哪</span></div><p>理性飲酒，未滿十八歲請勿飲酒。<br />示範資料僅供產品展示，上線前需由店家確認。</p><span>© 2026 今晚喝哪</span></footer>

      {selected && <DetailModal bar={selected} favorite={favorites.includes(selected.id)} onClose={() => setSelected(null)} onFavorite={() => toggleFavorite(selected.id)} onNotice={setNotice} />}
      {showQuiz && <Quiz onClose={() => setShowQuiz(false)} onResult={(filters) => { setCity(filters.city); setMood(filters.mood); setBudget(filters.budget); setShowQuiz(false); document.querySelector("#discover")?.scrollIntoView({ behavior: "smooth" }); }} />}
      {notice && <div className="toast" role="status">✓ {notice}<button onClick={() => setNotice("")}>×</button></div>}
    </main>
  );
}

function Filter({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (value: string) => void }) {
  return <label className="select-filter"><span>{label}</span><select value={value} onChange={(e) => onChange(e.target.value)}>{options.map((option) => <option key={option}>{option}</option>)}</select></label>;
}

function BarCard({ bar, index, favorite, onFavorite, onOpen }: { bar: Bar; index: number; favorite: boolean; onFavorite: () => void; onOpen: () => void }) {
  return <article className="bar-card" style={{ animationDelay: `${index * 60}ms` }}>
    <button className="card-image" style={{ background: bar.gradient }} onClick={onOpen} aria-label={`查看${bar.name}詳情`}>
      <span className="big-character">{bar.emoji}</span><span className="image-no">0{index + 1}</span>
      {bar.featured && <span className="editors-pick">編輯精選</span>}
    </button>
    <button className={`heart ${favorite ? "saved" : ""}`} onClick={onFavorite} aria-label={favorite ? "取消收藏" : "加入收藏"}>{favorite ? "♥" : "♡"}</button>
    <div className="card-body">
      <div className="card-meta"><span>{bar.city} · {bar.area}</span><strong>★ {bar.rating}</strong></div>
      <button className="card-title" onClick={onOpen}><h3>{bar.name}</h3><span>{bar.englishName}</span></button>
      <p>{bar.description}</p>
      <div className="tags">{bar.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div>
      <div className="card-bottom"><span>約 NT$ {bar.price.toLocaleString()} / 人</span><button onClick={onOpen}>查看詳情 →</button></div>
    </div>
  </article>;
}

function DetailModal({ bar, favorite, onClose, onFavorite, onNotice }: { bar: Bar; favorite: boolean; onClose: () => void; onFavorite: () => void; onNotice: (value: string) => void }) {
  return <div className="modal-backdrop" onMouseDown={onClose}><section className="modal" onMouseDown={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={`${bar.name}詳情`}>
    <button className="modal-close" onClick={onClose}>×</button>
    <div className="modal-visual" style={{ background: bar.gradient }}><span>{bar.emoji}</span><small>{bar.englishName}</small></div>
    <div className="modal-content"><span className="kicker">{bar.city} · {bar.area} · {bar.type}</span><h2>{bar.name}</h2><p className="modal-description">{bar.description}</p>
      <div className="detail-stats"><div><small>氛圍</small><strong>{bar.noise}</strong></div><div><small>營業至</small><strong>{bar.openUntil}</strong></div><div><small>預算</small><strong>NT$ {bar.price}</strong></div></div>
      <div className="signature"><small>今晚推薦</small><strong>{bar.signature}</strong></div><p className="distance">⌖ {bar.distance}　·　★ {bar.rating}（{bar.reviews} 則）</p>
      <div className="modal-actions"><button className="primary" onClick={() => onNotice(`已送出 ${bar.name} 的訂位意向`)}>我要訂位</button><button className="outline-dark" onClick={onFavorite}>{favorite ? "♥ 已收藏" : "♡ 收藏"}</button></div>
    </div>
  </section></div>;
}

function Quiz({ onClose, onResult }: { onClose: () => void; onResult: (value: { city: string; mood: string; budget: number }) => void }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ city: "台北", mood: "約會", budget: 1000 });
  const questions = [
    { title: "今晚在哪座城市？", choices: ["台北", "台中", "高雄"], key: "city" },
    { title: "你想要怎樣的夜晚？", choices: ["約會", "朋友聊天", "獨飲", "慶生"], key: "mood" },
    { title: "每人預算大約是？", choices: ["NT$ 800", "NT$ 1,000", "NT$ 1,600"], key: "budget" },
  ];
  const question = questions[step];
  const choose = (choice: string) => {
    const value = question.key === "budget" ? Number(choice.replace(/\D/g, "")) : choice;
    const next = { ...answers, [question.key]: value };
    setAnswers(next);
    if (step === 2) onResult(next); else setStep(step + 1);
  };
  return <div className="modal-backdrop"><section className="quiz modal" role="dialog" aria-modal="true"><button className="modal-close" onClick={onClose}>×</button><span className="kicker">MATCHMAKER · {step + 1}/3</span><h2>{question.title}</h2><p>憑直覺選就好，酒吧這件事不需要考試。</p><div className="quiz-options">{question.choices.map((choice) => <button key={choice} onClick={() => choose(choice)}>{choice}<span>→</span></button>)}</div></section></div>;
}
