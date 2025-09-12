<html lang="en">
<head>
  <title>Manav Savani — Unity Games Portfolio</title>
  <style>
    :root{--accent:#0ea5a4;--bg:#0f1724;--card:#111827;--muted:#9ca3af}
    html,body{height:100%;margin:0;font-family:Inter,Segoe UI,Roboto,Arial,sans-serif;background:linear-gradient(180deg,#071028 0%, #0b1220 100%);color:#e6eef6}
    .container{max-width:1100px;margin:36px auto;padding:24px}
    header{text-align:center;margin-bottom:20px}
    h1{margin:0;font-size:26px}
    h2{margin:10px 0 0;font-size:20px;color:var(--accent)}

    .game-holder{position:relative;width:100%;max-width:720px;margin:20px auto;border-radius:16px;overflow:hidden;box-shadow:0 6px 18px rgba(2,6,23,0.6)}
    .game-holder img{width:100%;display:block}
    .overlay{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.55);display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity 0.3s ease}
    .game-holder:hover .overlay{opacity:1;cursor:pointer}
    .play-button{background:var(--accent);color:#042225;padding:14px 26px;border-radius:50px;font-weight:700;font-size:18px;text-decoration:none;box-shadow:0 4px 12px rgba(0,0,0,0.4)}

    footer{margin-top:28px;padding-top:18px;border-top:1px solid rgba(255,255,255,0.03);color:var(--muted)}
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>MANAV SAVANI — Unity Developer</h1>
      <h2>Bird Sort Mania Color Puzzle</h2>
    </header>

    <main>
      <div class="game-holder" onclick="window.open('games/Bird Sort Mania Color Puzzle/index.html','_blank')">
        <img src="games/Bird Sort Mania Color Puzzle.png" alt="Bird Sort Mania Color Puzzle thumbnail">
        <div class="overlay">
          <a class="play-button" href="games/Bird Sort Mania Color Puzzle/index.html" target="_blank" rel="noopener">▶ Play</a>
        </div>
      </div>
      
      <div style="height:50px"></div>
      <h2 style="text-align:center">Word Connect Quest</h2>
      <div class="game-holder" onclick="window.open('games/Word Connect Quest/index.html','_blank')">
        <img src="games/Word Connect Quest.jpg" alt="Word Connect Quest thumbnail">
        <div class="overlay">
          <a class="play-button" href="games/Word Connect Quest/index.html" target="_blank" rel="noopener">▶ Play</a>
        </div>
      </div>
    </main>

    <footer>
      <div style="display:flex;justify-content:center;align-items:center;gap:12px;flex-wrap:wrap">
        <div style="margin-top:30px;font-size:13px;color:var(--muted)">Built with ❤️ — Manav Savani</div>
      </div>
    </footer>
  </div>
</body>
</html>
