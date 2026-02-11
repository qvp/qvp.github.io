(function() {
    'use strict';
    
    class TechFlappyGame {
        constructor() {
            this.container = document.getElementById('flappy-container');
            this.canvas = document.getElementById('flappy-canvas');
            this.ctx = this.canvas.getContext('2d');
            this.startScreen = document.getElementById('game-start-screen');
            this.gameOverScreen = document.getElementById('game-over-screen');
            this.scoreDisplay = document.getElementById('score-display');
            this.failedTechDisplay = document.getElementById('failed-tech-display');
            this.failedTechName = document.getElementById('failed-tech-name');
            this.learnedTechsList = document.getElementById('learned-techs-list');
            this.learnedTechsDisplay = document.getElementById('learned-techs-display');
            this.gameOverTitle = document.getElementById('game-over-title');

            this.playJumpSound = createJumpSound();
            this.gameRunning = false;
            this.learnedTechs = [];
            this.allTechs = [
                {name: 'Python', color: '#3471A3'},
                {name: 'FastAPI', color: '#059286'},
                {name: 'SqlAlchemy', color: '#778877'},
                {name: 'Django', color: '#092D1F'},
                {name: 'aiohttp', color: '#424750'},
                {name: 'Kafka', color: '#85D1E3'},
                {name: 'PostgreSQL', color: '#396C94'},
                {name: 'Clickhouse', color: '#FEFE08'},
                {name: 'RabbitMQ', color: '#F26C29'},
                {name: 'Redis', color: '#C83632'},
                {name: 'asyncio', color: '#6fea64'},
                {name: 'Микросервисы', color: '#339933'},
                {name: 'LangChain', color: '#224140'},
                {name: 'Docker', color: '#2468EE'},
                {name: 'DRF', color: '#955A5A'},
                {name: 'Celery', color: '#B8DF69'},
                {name: 'SQL', color: '#486475'},
                {name: 'Keycloak', color: '#A19F9F'},
                {name: 'Centrifugo', color: '#E95241'},
                {name: 'Grafana', color: '#F6942C'},
                {name: 'Prometheus', color: '#E75630'},
                {name: 'Websockets', color: '#08D188'},
                {name: 'GraphQL', color: '#E63BAE'},
                {name: 'gRPC', color: '#61B2B7'},
            ];
            
            this.remainingTechs = [...this.allTechs].sort(() => Math.random() - 0.5);
            this.currentTech = null;
            this.collidedTech = null;

            this.human = {
                x: window.innerWidth > 1200 ? window.screen.width / 2 - window.screen.width / 10 : 150,
                y: 250,
                width: 35,
                height: 60,
                velocity: 0,
                gravity: 0.5,
                jump: -11,
                rotation: 0
            };
            
            this.pillars = [];
            this.pillarWidth = 70;
            this.gap = 200;
            this.pillarSpeed = 3.5;
            this.pillarInterval = 2000;
            this.lastPillarTime = 0;
            
            this.stars = [];
            this.createStars(80);
            
            this.setupEventListeners();
            this.resizeCanvas();
            window.addEventListener('resize', () => this.resizeCanvas());
        }
        
        setupEventListeners() {
            document.getElementById('start-btn').addEventListener('click', () => this.startGame());
            document.querySelector('.restart-btn').addEventListener('click', () => this.restartGame());
            
            document.addEventListener('keydown', (e) => {
                if ((e.code === 'Space' || e.code === 'KeyW') && this.gameRunning) {
                    e.preventDefault();
                    this.human.velocity = this.human.jump;
                    this.human.rotation = -30;
                    this.playJumpSound();
                }
                
                if (e.code === 'Space' && !this.gameRunning && this.startScreen.style.display !== 'none') {
                    this.startGame();
                }
            });
            
            this.container.addEventListener('click', (e) => {
                if (this.gameRunning) {
                    this.human.velocity = this.human.jump;
                    this.human.rotation = -30;
                    this.playJumpSound();
                }
            });
        }
        
        createStars(count) {
            for (let i = 0; i < count; i++) {
                this.stars.push({
                    x: Math.random() * this.canvas.width,
                    y: Math.random() * this.canvas.height,
                    size: Math.random() * 2 + 0.5,
                    speed: Math.random() * 0.5 + 0.2,
                    opacity: Math.random() * 0.5 + 0.3
                });
            }
        }
        
        resizeCanvas() {
            this.canvas.width = this.container.clientWidth;
            this.canvas.height = this.container.clientHeight;
            
            if (this.gameRunning) {
                this.draw();
            }
        }
        
        startGame() {
            document.body.classList.add('game');

            this.gameRunning = true;
            this.learnedTechs = [];
            this.remainingTechs = [...this.allTechs].sort(() => Math.random() - 0.5);
            this.currentTech = null;
            this.collidedTech = null;
            this.human.y = this.canvas.height / 2;
            this.human.velocity = 0;
            this.human.rotation = 0;
            this.pillars = [];
            this.lastPillarTime = 0;
            
            this.canvas.style.display = 'block';
            this.startScreen.style.display = 'none';
            this.scoreDisplay.style.display = 'block';
            this.gameOverScreen.style.display = 'none';
            this.failedTechDisplay.style.display = 'none';
            this.scoreDisplay.textContent = `Изучено: ${this.learnedTechs.length} технологий`;
            
            this.gameLoop();
        }
        
        gameLoop() {
            if (!this.gameRunning) return;
            
            this.update();
            this.draw();
            requestAnimationFrame(() => this.gameLoop());
        }
        
        update() {
            // Update human
            this.human.velocity += this.human.gravity;
            this.human.y += this.human.velocity;
            
            // Rotate human
            if (this.human.rotation < 90) {
                this.human.rotation += 2;
            }
            
            // Check boundaries
            if (this.human.y <= 0) {
                this.human.y = 0;
                this.human.velocity = 0;
            }
            
            if (this.human.y + this.human.height >= this.canvas.height) {
                this.gameOver();
                return;
            }

            // win
            if (this.learnedTechs.length === this.allTechs.length) {
                this.gameOver();
                return;
            }
            
            // Generate pillars
            const currentTime = Date.now();
            if (currentTime - this.lastPillarTime > this.pillarInterval && this.remainingTechs.length > 0) {
                this.generatePillar();
                this.lastPillarTime = currentTime;
            }
            
            // Update pillars and check collisions
            for (let i = this.pillars.length - 1; i >= 0; i--) {
                const pillar = this.pillars[i];
                pillar.x -= this.pillarSpeed;
                
                // Check if human passed the pillar
                if (!pillar.passed && pillar.x + this.pillarWidth < this.human.x) {
                    pillar.passed = true;
                    this.learnedTechs.push(pillar.tech);
                    this.scoreDisplay.textContent = `Изучено: ${this.learnedTechs.length} технологий`;
                    this.currentTech = pillar.tech;
                }
                
                // Check collision
                if (this.checkCollision(pillar)) {
                    this.collidedTech = pillar.tech;
                    this.gameOver();
                    return;
                }
                
                // Remove off-screen pillars
                if (pillar.x + this.pillarWidth < 0) {
                    this.pillars.splice(i, 1);
                }
            }
            
            // Update stars
            this.stars.forEach(star => {
                star.x -= star.speed;
                if (star.x < 0) {
                    star.x = this.canvas.width;
                    star.y = Math.random() * this.canvas.height;
                }
            });
        }
        
        generatePillar() {
            if (this.remainingTechs.length === 0) return;
            
            const tech = this.remainingTechs.shift();
            const minHeight = 100;
            const maxHeight = this.canvas.height - this.gap - minHeight;
            const topHeight = Math.random() * (maxHeight - minHeight) + minHeight;
            
            this.pillars.push({
                x: this.canvas.width,
                topHeight: topHeight,
                tech: tech,
                passed: false
            });
        }
        
        checkCollision(pillar) {
            // Human hit top pillar
            if (this.human.x < pillar.x + this.pillarWidth &&
                this.human.x + this.human.width > pillar.x &&
                this.human.y < pillar.topHeight) {
                return true;
            }
            
            // Human hit bottom pillar
            const bottomY = pillar.topHeight + this.gap;
            if (this.human.x < pillar.x + this.pillarWidth &&
                this.human.x + this.human.width > pillar.x &&
                this.human.y + this.human.height > bottomY) {
                return true;
            }
            
            return false;
        }
        
        drawHuman() {
            this.ctx.save();
            this.ctx.translate(this.human.x + this.human.width / 2, this.human.y + this.human.height / 2);
            this.ctx.rotate(this.human.rotation * Math.PI / 180);
            
            // Draw flying trail effect
            if (this.human.velocity < 0) {
                this.ctx.fillStyle = '#60a5fa40';
                for (let i = 0; i < 3; i++) {
                    this.ctx.beginPath();
                    this.ctx.ellipse(-this.human.width - i * 8, 0, 10 + i * 2, 4 + i, 0, 0, Math.PI * 2);
                    this.ctx.fill();
                }
            }
            
            // Draw human body (clothes - programmer t-shirt)
            this.ctx.fillStyle = '#3b82f6';
            this.ctx.fillRect(-this.human.width / 2, -this.human.height / 2, this.human.width, this.human.height);
            
            // Draw pants
            this.ctx.fillStyle = '#1e293b';
            this.ctx.fillRect(-this.human.width / 2, this.human.height / 2 - 15, this.human.width, 15);
            
            // Draw head
            this.ctx.fillStyle = '#f8d8b9';
            this.ctx.beginPath();
            this.ctx.arc(0, -this.human.height / 2 - 8, 12, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Draw hair
            this.ctx.fillStyle = '#1e293b';
            this.ctx.beginPath();
            this.ctx.ellipse(0, -this.human.height / 2 - 15, 12, 6, 0, 0, Math.PI);
            this.ctx.fill();
            
            // Draw glasses (because he's a programmer!)
            this.ctx.fillStyle = '#6366f1';
            this.ctx.beginPath();
            this.ctx.arc(-6, -this.human.height / 2 - 6, 4, 0, Math.PI * 2);
            this.ctx.arc(6, -this.human.height / 2 - 6, 4, 0, Math.PI * 2);
            this.ctx.fill();
            
            this.ctx.strokeStyle = '#4f46e5';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(-2, -this.human.height / 2 - 6);
            this.ctx.lineTo(2, -this.human.height / 2 - 6);
            this.ctx.stroke();
            
            // Draw arms
            this.ctx.fillStyle = '#f8d8b9';
            this.ctx.fillRect(-this.human.width / 2 - 8, -this.human.height / 4, 8, 6);
            this.ctx.fillRect(this.human.width / 2, -this.human.height / 4, 8, 6);
            
            // Draw laptop bag (programmer's backpack)
            this.ctx.fillStyle = '#475569';
            this.ctx.fillRect(this.human.width / 2 - 5, this.human.height / 4, 10, 15);
            
            // Draw code symbol on t-shirt
            this.ctx.fillStyle = '#ffffff';
            this.ctx.font = 'bold 14px monospace';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText('{}', 0, 0);
            
            this.ctx.restore();
        }
        
        draw() {
            // Clear canvas with dark gradient
            const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
            gradient.addColorStop(0, '#0f172a');
            gradient.addColorStop(0.5, '#1e293b');
            gradient.addColorStop(1, '#0f172a');
            this.ctx.fillStyle = gradient;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            
            // Draw stars
            this.ctx.fillStyle = '#f8fafc';
            this.stars.forEach(star => {
                this.ctx.globalAlpha = star.opacity;
                this.ctx.beginPath();
                this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                this.ctx.fill();
            });
            this.ctx.globalAlpha = 1;
            
            // Draw pillars
            for (const pillar of this.pillars) {
                // Draw top pillar
                this.ctx.fillStyle = pillar.tech.color;
                this.ctx.fillRect(pillar.x, 0, this.pillarWidth, pillar.topHeight);
                
                // Pillar inner glow
                const glow = this.ctx.createLinearGradient(pillar.x, 0, pillar.x + this.pillarWidth, 0);
                glow.addColorStop(0, pillar.tech.color + '40');
                glow.addColorStop(0.5, pillar.tech.color);
                glow.addColorStop(1, pillar.tech.color + '40');
                this.ctx.fillStyle = glow;
                this.ctx.fillRect(pillar.x + 2, 2, this.pillarWidth - 4, pillar.topHeight - 4);
                
                // Draw tech name on top pillar
                this.ctx.save();
                this.ctx.translate(pillar.x + this.pillarWidth / 2, pillar.topHeight / 2);
                this.ctx.rotate(-Math.PI / 2);
                this.ctx.fillStyle = '#ffffff';
                this.ctx.font = 'bold 18px "Segoe UI", Arial, sans-serif';
                this.ctx.textAlign = 'center';
                this.ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
                this.ctx.shadowBlur = 6;
                this.ctx.fillText(pillar.tech.name, 0, 0);
                this.ctx.restore();
                
                // Draw bottom pillar
                const bottomY = pillar.topHeight + this.gap;
                this.ctx.fillStyle = pillar.tech.color;
                this.ctx.fillRect(pillar.x, bottomY, this.pillarWidth, this.canvas.height - bottomY);
                
                // Bottom pillar inner glow
                this.ctx.fillStyle = glow;
                this.ctx.fillRect(pillar.x + 2, bottomY + 2, this.pillarWidth - 4, this.canvas.height - bottomY - 4);
                
                // Draw tech name on bottom pillar
                this.ctx.save();
                this.ctx.translate(pillar.x + this.pillarWidth / 2, bottomY + (this.canvas.height - bottomY) / 2);
                this.ctx.rotate(-Math.PI / 2);
                this.ctx.fillStyle = '#ffffff';
                this.ctx.font = 'bold 18px "Segoe UI", Arial, sans-serif';
                this.ctx.textAlign = 'center';
                this.ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
                this.ctx.shadowBlur = 6;
                this.ctx.fillText(pillar.tech.name, 0, 0);
                this.ctx.restore();
            }
            
            // Draw human
            this.drawHuman();
            
            // Draw ground
            this.ctx.fillStyle = '#1e293b';
            this.ctx.fillRect(0, this.canvas.height - 40, this.canvas.width, 40);
            
            // Draw ground pattern
            this.ctx.fillStyle = '#334155';
            for (let i = 0; i < this.canvas.width; i += 80) {
                this.ctx.fillRect(i, this.canvas.height - 40, 40, 8);
            }
            
            // Draw currently learning tech
            if (this.currentTech) {
                this.ctx.fillStyle = '#f8fafc';
                this.ctx.font = 'bold 16px "Segoe UI", Arial, sans-serif';
                this.ctx.textAlign = 'right';
                this.ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
                this.ctx.shadowBlur = 4;
                this.ctx.fillText(`Изучаем: ${this.currentTech.name}`, this.canvas.width - 20, 40);
                this.ctx.shadowBlur = 0;
            }
        }
        
        gameOver() {
            document.body.classList.remove('game');

            this.gameRunning = false;

            this.gameOverTitle.textContent = this.learnedTechs.length === this.allTechs.length ? 'WIN' : 'GAME OVER';
            
            // Format learned techs as a comma-separated list
            let learnedText = '';
            if (this.learnedTechs.length === 0) {
                learnedText = 'ничего';
            } else {
                learnedText = this.learnedTechs.map(tech => tech.name).join(', ');
            }
            
            this.learnedTechsList.textContent = learnedText;
            
            // Show failed tech
            if (this.collidedTech) {
                this.failedTechDisplay.style.display = 'block';
                this.failedTechName.textContent = this.collidedTech.name;
                this.failedTechName.style.color = this.collidedTech.color;
            } else {
                this.failedTechDisplay.style.display = 'none';
            }
            
            // Show/hide learned techs section
            if (this.learnedTechs.length === 0) {
                this.learnedTechsDisplay.style.display = 'none';
            } else {
                this.learnedTechsDisplay.style.display = 'block';
            }
            
            this.canvas.style.display = 'none';
            this.scoreDisplay.style.display = 'none';
            this.gameOverScreen.style.display = 'flex';
        }
        
        restartGame() {
            this.gameOverScreen.style.display = 'none';
            document.body.classList.remove('game');
            this.startGame();
        }
    }
    
    // Инициализация игры при загрузке страницы
    window.addEventListener('DOMContentLoaded', () => {
        new TechFlappyGame();
    });

    // Open source btn
    document.getElementById('open-source-btn').addEventListener('click', () => {
        window.parent.document.getElementById('opensource').scrollIntoView({
            behavior: 'smooth'
        });
    })
})();
