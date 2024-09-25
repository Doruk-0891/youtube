const nameList = [
    'Time','Past','Future','Dev',
    'Fly','Flying','Soar','Soaring','Power','Falling',
    'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
    'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
    'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit',
    'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
    'Mine','Your','Worst','Enemy','Hostile','Force','Video',
    'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
    'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
    'Script','Writer','Near','Close','Open','Cube','Circle',
    'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
    'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
    'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
    'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster',
    'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
    'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
    'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
    'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
    'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
    'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
    'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich','Smasher','Extreme','Multi','Universe','Ultimate','Death','Ready','Monkey','Elevator','Wrench','Grease','Head','Theme','Grand','Cool','Kid','Boy','Girl','Vortex','Paradox'
];

export function viewsLikesConvertor (number=0) {
    if (number === 0) {
        return 0;
    }
    const strNumber = number.toString();
    let range = 1;
    let rangeStr = '';
    if (strNumber.length >= 10) {
       range = 1000000000;
       rangeStr = 'B';
    } else if (strNumber.length >= 7) {
        range = 1000000;
        rangeStr = 'M';
    } else if (strNumber.length >= 4) {
        range = 1000;
        rangeStr = 'K';
    }
    return (number / range).toFixed(1) + rangeStr;
}

export function getPublishedTime(utcDate) {
    const seconds = (new Date().getTime() - new Date(utcDate).getTime())/ 1000;
    if (seconds < 60) {
        return Math.trunc(seconds)+'seconds ago';
    } else if (seconds < 3600) {
        return Math.trunc(seconds/ 60) + 'minute(s) ago';
    } else if (seconds < 86400) {
        return Math.trunc(seconds/ 3600) + 'hour(s) ago';
    } else if (seconds < 2592000) {
        return Math.trunc(seconds/ 86400) + 'day(s) ago';
    } else if (seconds < 31104000) {
        return Math.trunc(seconds/ 2592000) + 'month(s) ago';
    } else if (seconds >= 31104000) {
        return Math.trunc(seconds / 31104000) + 'year(s) ago';
    } else {
        return '';
    }

}




export function generateRandomNames() {
   return nameList[Math.floor( Math.random() * nameList.length )];
};


const nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog"];
const verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
const adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];
const adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
const preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];


export function getRandomSentence() {
  var rand1 = Math.floor(Math.random() * 10);
  var rand2 = Math.floor(Math.random() * 10);
  var rand3 = Math.floor(Math.random() * 10);
  var rand4 = Math.floor(Math.random() * 10);
  var rand5 = Math.floor(Math.random() * 10);
  var rand6 = Math.floor(Math.random() * 10);

  return ("The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + " because some " + nouns[rand1] + " " + adverbs[rand1] + " " + verbs[rand1] + " " + preposition[rand1] + " a " + adjectives[rand2] + " " + nouns[rand5] + " which, became a " + adjectives[rand3] + ", " + adjectives[rand4] + " " + nouns[rand6] + ".");
};
