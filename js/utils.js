// function getRandomInt (value) {
//     return Math.random() < (value / 100);
// }

const getRandomInt = (value) => Math.random() < (value / 100);

const showInfo = function () {
    const message = `HP у ${Dragon.name} ${Dragon.hp}\nHP у ${Hero.name} ${Hero.hp} `;
    // const message = `HP у ${this.hp === 1000 ? 'Героя' : 'Дракона'} => ${this.hp}`;
    console.log(message);
    console.log('========================');
}

const modifyHealth = function () {
    const heroDamage = Hero.str + Hero.weapon - Dragon.defense;
    Dragon.hp -= heroDamage;
    const dragonDamage = Dragon.str + Dragon.weapon - Hero.defense;
    Hero.hp -= dragonDamage;
    // const message = `Герой попал по дракону, урон => ${heroDamage}`;
    // console.log(message);
    if (Hero.hp) {
        console.log(`Дракон попал по герою, урон => ${dragonDamage}`);
        if (Dragon.hp) {
            console.log(`Герой попал по дракону, урон => ${heroDamage}`);
        }
    } 
}

const heroAttack = function () {
    if (getRandomInt(75)) {
        Dragon.modifyHealth();
        Dragon.showInfo();
        if(getRandomInt(25)) {
            const message = `Герой промахнулся`;
            console.log(message);
        }
    } 
}
const dragonAttack = function () {
    if (getRandomInt(50)) {
        Hero.modifyHealth();
        Hero.showInfo();
        // console.log(`Дракон нанес ${dragonDamage} урона герою, у героя осталось ${Hero.hp}`);
        if (getRandomInt(50)) {
            console.log(`Дракон решил поспать`);  
        }
    }
    } 


