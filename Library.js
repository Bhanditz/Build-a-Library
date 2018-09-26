class media
{
  constructor(title)
  {
    this._title = title;
    this._ratings = [];
    this._isCheckedOut = false;
  }
  get title()
  {
    return this._title;
  }
  get isCheckedOut()
  {
    return this._isCheckedOut;
  }
  get ratings()
  {
    return this._ratings;
  }
  toggleCheckOutStatus()
  {
    this._isCheckedOut=!this._isCheckedOut;
  }
  getAverageRating()
  {
    var sum = 0;
    for( var i = 0; i < this._ratings.length; i++ )
{
    sum += parseInt( this._ratings[i], 10 );
}
var avg = sum/(this._ratings.length);
    return avg;
  }
  addRating(Rating)
  {
    this.values.push(Rating);
  }
  set isCheckOut(CheckOut)
  {
    this._isCheckOut=CheckOut;
  }
}
class Book extends media
{
  constructor(author,title,page)
  {
    let ratings = [];
    let isCheckedOut = false;
    super(title);
    this._author=author;
    this._page=page;
  }
  get author()
  {
    return this._author;
  }
  get pages()
  {
    return this._pages;
  }
  getAverageRating()
  {
    var sum = 0;
    for( var i = 0; i < this._ratings.length; i++ )
{
    sum += parseInt( this._ratings[i], 10 );
}
var avg = sum/(this._ratings.length);
    return avg;
  }  
  toggleCheckOutStatus()
  {
    this._isCheckedOut=!this._isCheckedOut;
  }
  addRating(Rating)
  {
    this._ratings.push(Rating);
  }
}
class Movie extends media
{
  constructor(director,title,runTime)
  {
    super(title);
    this._ratings = [];
    this._isCheckedOut = false;
    this._director=director;
    this._runTime=runTime;
  }
  get director()
  {
    return this._director;
  }
  get runTime ()
  {
    return this._runTime;
  }
   getAverageRating()
  {
    var sum = 0;
    for( var i = 0; i < this._ratings.length; i++ )
{
    sum += parseInt( this._ratings[i], 10 );
}
var avg = sum/(this._ratings.length);
    return avg;
  }  
  toggleCheckOutStatus()
  {
    this._isCheckedOut=!this._isCheckedOut;
  }
  addRating(Rating)
  {
    this._ratings.push(Rating);
  }
}
class CD extends media
{
  constructor(artist,title,songs)
  {
    super(title);
    this._ratings = [];
    this._isCheckedOut = false;
    this._artist=artist;
    this._songs=[songs];
  }
  get artist()
  {
    return this._artist;
  }
  get songs ()
  {
    return this._songs;
  }
  getAverageRating()
  {
    var sum = 0;
    for( var i = 0; i < this._ratings.length; i++ )
{
    sum += parseInt( this._ratings[i], 10 );
}
var avg = sum/(this._ratings.length);
    return avg;
  }  
  toggleCheckOutStatus()
  {
    this._isCheckedOut=!this._isCheckedOut;
  }
  addRating(Rating)
  {
    this._ratings.push(Rating);
  }
  addSongs(Songs)
  {
    this._songs.push(Songs);
  }
  shuffle(Songs)
  {
    let ctr = this._songs.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = this._songs[ctr];
        this._songs[ctr] = this._songs[index];
        this._songs[index] = temp;
    }
    return Songs;
  }
}
const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything',544);
historyOfEverything.toggleCheckOutStatus();
//console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(`history of everything rating is ${historyOfEverything.getAverageRating()}`);
const speed = new Movie('Jan de Bont','Speed',116);
speed.toggleCheckOutStatus();
//console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(`speed average rating is ${speed.getAverageRating()}`);
const kamikaze  = new CD('Eminem','kamikaze','TheRinger');
kamikaze.addSongs('lucky you');
kamikaze.addSongs('good guy');
kamikaze.addSongs('nice guy');
kamikaze.addSongs('venom');
kamikaze.addSongs('not alike');
kamikaze.addRating(3.5);
kamikaze.addRating(3);
kamikaze.addRating(3);
console.log(`kamikaze average rating is ${kamikaze.getAverageRating()}`);
kamikaze.shuffle();
console.log(`songs in the album are: ${kamikaze._songs.join('\n')}`);
//console.log('everything is A ok');
