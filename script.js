function generate(){
    var quotes = {
        "- Denis Diderot" : '"Man will never be free until the last king is strangled with the entrails of the last priest."',
        "- Viktor E.Franki" : '"Between stimulus and response there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom."',
        "- Mahatma Gandh" : '"Power is of two kinds. One is obtained by the fear of punishment and the other by acts of love. Power based on love is a thousand times more effective and permanent then the one derived from fear of punishment."'
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;


}