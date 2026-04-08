// СОСТОЯНИЕ - данные игры TEAM-Game state 82v(Вадим)
window.GameState = {
    isActive: false,          // Флаг активности боя (идёт бой или нет)
    elixir: 5,                // Количество эликсира игрока
    playerTowerHP: 1500,      // Здоровье башни игрока
    enemyTowerHP: 1500,       // Здоровье башни противника
    selectedUnit: 'knight',   // Выбранный юнит для спавна
    units: [],                // Массив всех юнитов на поле

    /**
     * Запускает новый бой.
     * 
     * Что делает:
     * - Активирует состояние боя (isActive = true)
     * - Сбрасывает здоровье башен до начальных значений (1500)
     * - Устанавливает стартовое количество эликсира (5)
     * - Очищает массив юнитов
     * - Выводит сообщение в консоль
     * 
     * Используется при начале новой игры или рестарте.
     */
    startBattle: function() {
        this.isActive = true;
        this.playerTowerHP = 1500;
        this.enemyTowerHP = 1500;
        this.elixir = 5;
        this.units = [];
        console.log('Battle started!');
    },

    /**
     * Завершает бой.
     * 
     * @param {string} winner - Победитель боя:
     *  'player' — победил игрок
     *  любое другое значение — поражение
     * 
     * Что делает:
     * - Останавливает бой (isActive = false)
     * - Выводит результат в консоль:
     *   "Victory!" если победил игрок
     *   "Defeat!" если проиграл
     */
    endBattle: function(winner) {
        this.isActive = false;
        console.log(winner === 'player' ? 'Victory!' : 'Defeat!');
    },
    
    /**
     * Возвращает текущий список юнитов на поле.
     * 
     * @returns {Array} Массив юнитов
     * 
     * Используется для:
     * - Отрисовки юнитов
     * - Логики боя
     * - Проверок состояния игры
     */
    getUnits: function() {
        return this.units;
    }
};
