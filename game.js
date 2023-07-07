// Canvas setup
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// Game variables
let player;
let enemies = [];
let items = [];
let boss;

// Health variables
const maxHealth = 100;
let health = maxHealth;

// Background images
const backgrounds = {
    'Golden Hills': 'golden_hills.jpg',
    'Reapers Domain': 'reapers_domain.jpg',
    'Berainian Wildes': 'berainian_wildes.jpg',
    'Reddrop Forest': 'reddrop_forest.jpg',
    'The Void': 'the_void.jpg'
};

// Game initialization
function init() {
    // Set initial background
    setBackground('Golden Hills');

    // Create player
    player = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        width: 64,
        height: 64,
        color: 'transparent',
        asset: 'player.png' // Path to player asset image
    };

    // Create enemies
    enemies.push({
        x: 100,
        y: 100,
        width: 30,
        height: 30,
        color: 'red'
    });

    // Create items
    items.push({
        x: 200,
        y: 200,
        width: 10,
        height: 10,
        color: 'green'
    });

    // Create boss (Grim Reaper)
    boss = {
        x: 400,
        y: 400,
        width: 50,
        height: 50,
        color: 'black',
        health: 200
    };
}

// Set background
function setBackground(background) {
    document.body.style.backgroundImage = `url(${backgrounds[background]})`;
}

// Game loop
function gameLoop() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update player position
    handlePlayerMovement();
    handlePlayerInteractions();

    // Render background
    // You would render the appropriate background image for each zone here

    // Render player
    if (player.asset) {
        const playerImage = new Image();
        playerImage.src = player.asset;
        ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);
    } else {
        ctx.fillStyle = player.color;
        ctx.fillRect(player.x, player.y, player.width, player.height);
    }

    // Render enemies
    enemies.forEach(enemy => {
        ctx.fillStyle = enemy.color;
        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
    });

    // Render items
    items.forEach(item => {
        ctx.fillStyle = item.color;
        ctx.fillRect(item.x, item.y, item.width, item.height);
    });

    // Render boss (Grim Reaper)
    ctx.fillStyle = boss.color;
    ctx.fillRect(boss.x, boss.y, boss.width, boss.height);

    // Render health bar
    const healthBar = document.getElementById('health-bar');
    const healthText = document.createElement('span');
    healthText.textContent = `Health: ${health}`;
    healthBar.innerHTML = '';
    healthBar.appendChild(healthText);

    // Request next frame
    requestAnimationFrame(gameLoop);
}

// Function to handle player movement
function handlePlayerMovement() {
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'w':
                player.y -= 5;
                break;
            case 'a':
                player.x -= 5;
                break;
            case 's':
                player.y += 5;
                break;
            case 'd':
                player.x += 5;
                break;
        }
    });
}

// Function to handle player interactions
function handlePlayerInteractions() {
    // Add code here to handle player interactions with enemies, items, and boss
}

// Start the game
function startGame() {
    init();
    gameLoop();
}

// Event listeners
document.addEventListener('DOMContentLoaded', startGame);
