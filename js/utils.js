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
        Hero.showInfo();
        Hero.modifyHealth();
        // console.log(`Дракон нанес ${dragonDamage} урона герою, у героя осталось ${Hero.hp}`);
        if (getRandomInt(50)) {
            console.log(`Дракон решил поспать`);  
        }
    }
} 

const heroQuestion = prompt('Что делать герою? Выбери действие: 1 - Атаковать, 2 - ничего не делать, 3 - одеть щит, 4 - снять щит');
const varHero = function () {
    switch (parseInt(heroQuestion)) {
        case 1:
            heroAttack();
            console.log('Герой атакует!');
            break;
        case 2:
            console.log('Героя ничего не делает');
            break;
        case 3:
            Hero.equipShield();
            console.log('Герой защищается!');
            break;
        case 4: 
            Hero.removeShield(); 
        default:
            console.log('Нету такого выбора');
            break;
    }
}

// const nothingToDo = function () {
    
// }

// const toDefend = function () {
//     if (Hero.equipShield -= Dragon.dragonAttack) {
//         console.log('Вы одели щит');
//         if (Hero.removeShield -= dragonAttack) {
//             console.log('Вы сняли щит');
//         }
//     } 
// }

const equipShield = function () {
    if (this.isShieldEquipped) {
        this.defense += this.shield;
        this.isShieldEquipped = true;
        console.log('Вы экипировали щит');
    } else {
        console.log('Щит уже экипирован');
    }
}
const removeShield = function () {
    if (this.isShieldEquipped) {
        if (this.defense > this.shield) {
            this.defense -= this.shield;
            this.isShieldEquipped = false;
            console.log('Вы сняли щит.');
        } else {
            console.log('Ваша защита уменьшилась.');
        }
    } else {
        console.log('Щит не был экипирован');
    }
}

// У героя будет три действие, атаковать, ничего не делать, защищаться, при этом нужна возможность выбирать между действиями.
// Щит должен плюсовать к защите. Щит должен дейстовать только один ход и он не должен накладывать друг на друга.Это означает каждый циикл должен обнуляться.
// у героя будет два метода, одевать щит и убирать щит. нужно будет сделать проверку, что щит был экипирован раньше, что бы не добавлять вторую порцию, и не убавлять защиту меньше чем базовая.
// нужно ввести булевое значение isShieldEquipped, которое должно ставить и убираться в этом методе при успешной экипировке и успешном снятии. при попытке снять не одетый щит или одеть щит, который уже был одет, выводить в консоль сообщение.Удачи Диас