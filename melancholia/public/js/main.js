// Установка года в футере
document.getElementById('year').textContent = new Date().getFullYear();

// ========== TYPEWRITER EFFECT ==========
(function(){
  const el = document.getElementById('type');
  const words = ['грусть', 'тишина', 'монстр', 'хантер', 'эксперимент'];
  let w = 0, i = 0, forward = true, txt = '';
  const speed = {type:80, delete:40, pause:1500};

  function tick(){
    const word = words[w];
    if (forward){
      txt = word.slice(0, ++i);
      el.textContent = txt;
      if (i === word.length){ 
        forward = false; 
        setTimeout(tick, speed.pause); 
        return; 
      }
      setTimeout(tick, speed.type + Math.random()*40);
    } else {
      txt = word.slice(0, --i);
      el.textContent = txt;
      if (i === 0){ 
        forward = true; 
        w = (w+1)%words.length; 
        setTimeout(tick, 300); 
        return; 
      }
      setTimeout(tick, speed.delete + Math.random()*20);
    }
  }
  tick();
})();

// ========== PARTICLES ANIMATION ==========
(function(){
  const canvas = document.getElementById('pcanvas');
  const ctx = canvas.getContext('2d');
  let w=0, h=0, particles=[];

  function resize(){
    w = canvas.width = innerWidth;
    h = canvas.height = innerHeight;
  }
  addEventListener('resize', resize);
  resize();

  function rand(min, max){ 
    return Math.random()*(max-min)+min; 
  }

  function make(n){
    particles = [];
    for(let i=0; i<n; i++){
      particles.push({
        x: rand(0, w),
        y: rand(0, h),
        vx: rand(-0.3, 0.3),
        vy: rand(-0.3, 0.3),
        size: rand(0.5, 2),
        life: rand(100, 400)
      });
    }
  }
  make(Math.round((w*h)/100000));

  function step(){
    ctx.clearRect(0, 0, w, h);

    // Обновление и отрисовка частиц
    for(let p of particles){
      p.x += p.vx;
      p.y += p.vy;
      p.life--;
      
      // Wraparound границ
      if (p.x < -10) p.x = w+10;
      if (p.x > w+10) p.x = -10;
      if (p.y < -10) p.y = h+10;
      if (p.y > h+10) p.y = -10;
      
      // Возрождение частицы
      if (p.life <= 0){
        p.x = rand(0, w);
        p.y = rand(0, h);
        p.life = rand(100, 400);
      }

      // Свечение частицы
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255,255,255,0.08)';
      ctx.arc(p.x, p.y, p.size*3, 0, Math.PI*2);
      ctx.fill();

      // Ядро частицы
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255,255,255,0.3)';
      ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
      ctx.fill();
    }

    // Соединительные линии между близкими частицами
    for (let i=0; i<particles.length; i++){
      for (let j=i+1; j<particles.length; j++){
        const a = particles[i], b = particles[j];
        const dx = a.x-b.x, dy = a.y-b.y;
        const d = Math.sqrt(dx*dx + dy*dy);
        if (d<120){
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(255,255,255,' + (0.015 * (1 - d/120)) + ')';
          ctx.lineWidth = 0.5;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
})();