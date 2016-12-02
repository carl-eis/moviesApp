var fs = require('fs');
var shelljs = require('shelljs');

shelljs.rm('-rf', '/database/*');


var movieList = [
     '(500) Days of Summer (2009) [1080p]',
     '12 Years a Slave',
     'A Bugs Life(1998)[1080 p]',
     'Ace Ventura, Pet Detective (1994) [1080p]',
     'Ace Ventura, When Nature Calls (1995) [1080p]',
     'Act of Valor (2012) [1080p]',
     'American Sniper (2014) [1080p]',
     'Batman Begins (2005)',
     'Batman.v.Superman.Dawn.of.Justice.2016.Ultimate.Edition.1080p.WEB-DL.DD5.1.H264-RARBG',
     'Begin Again (2014) [1080p]',
     'Central.Intelligence.2016.1080p.HC.WEBRip.x264.AAC2.0-STUTTERSHIT.mp4',
     'Crush (2013) [1080p]',
     'Deadpool 2016 1080p BluRay x264 DTS-JYK',
     'Deadpool 2016 1080p BluRay x264 DTS-JYK',
     'Down Periscope (1996) [DVD]',
     'Dracula Untold (2014) [1080p]',
     'Equals (2015) [1080p] [6.1] [Sci-Fi]',
     'Equilibrium (2002) [720p]',
     'Fast & Furious Collection',
     'Feast (2014) [ETRG]',
     'Fifty.Shades.of.Black.2016.1080p.BRRip.x264.AAC-ETRG',
     'Friends With Benefits (2011) [1080p]',
     'Frozen (2013)',
     'Full Metal Jacket (1987) [mp4.]',
     'Fury (2014) BluRay Sparks',
     'Gladiator (2000) [mkv.]',
     'Gone Girl (2014)',
     'Hercules (2014) [1080p]',
     'How the Grinch Stole Christmas (2000) [1080p]',
     'How to Train Your Dragon',
     'How.to.Be.Single.2016.720p.WEBRip.x264.AAC-ETRG',
     'If I Stay (2014) [1080p]',
     'Inception (2010) [mkv.]',
     'Into the Storm (2014) [1080p]',
     'John Wick (2014) [1080p]',
     'Lilo and Stitch (2002) [1080p]',
     'Mad Max Collection',
     'Mad.Max.Fury.Road.2015.1080p.WEB-DL.DD5.1.H264-RARBG',
     'Man Of Steel (2013)',
     'Mandela Long Walk to Freedom (2013)',
     'Mission.Impossible.Rogue.Nation.2015.1080p.WEB-DL.x264.AC3-JYK',
     'Monty Python and the Holy Grail (1974)',
     'Never Let Me Go',
     'Not Another Teen Movie (2001) [720p] [5.7] [Comedy]',
     'Pitch Perfect (2012)',
     'Pitch Perfect 2 (2015) [1080p]',
     'Prisoners (2013) 1080p BRRip x264 AC3 - TheKing',
     'Prometheus (2012) [mkv.]',
     'Puss.In.Boots.2011.1080p.BluRay.H264.AAC-RARBG',
     'Rat Race (2001)',
     'Saving Private Ryan (1998) [1080p] [8.6] [Action-Adventure]',
     'Shutter Island (2010)',
     'Spirit Stallion of the Cimarron (2002) [1080p]',
     'Spy (2015) [1080p] [crap]',
     'Sync (2014)',
     'Terminator Genisys (2015) [1080p]',
     'The Adventures of Tintin (2011) [720p]',
     'The Amazing Spider-Man 2 (2014) [720p]',
     'The Avengers (2012) [1080p]',
     'The Book Thief (2013) [1080]',
     'The Dark Knight (2008)',
     'The Dark Knight Rises (2012)',
     'The Equalizer (2014) [1080p]',
     'The Fault in Our Stars (2014)',
     'The Great Gatsby (2013)',
     'The Hobbit Collection',
     'The Host (2013) [1080p]',
     'The Incredibles (2004) [1080p] [8.0] [Family-Animation]',
     'The Internship (2013)',
     'The Iron Giant (1999)',
     'The Jungle Book (2016) [1080p] [7.6] [Family-Fantasy]',
     'The Lego Movie (2014)',
     'The Lion King 1 1.2 (2004) [1080p]',
     'The Little Prince (2015) [1080p] [7.8] [Family-Animation]',
     'The Lord of the Rings Collection',
     'The Mask (1994)',
     'The Matrix Collection',
     'The Maze Runner (2014)',
     'The Notebook (2004) [1080p]',
     'The Other Woman (2014)',
     'The Revenant 2015 1080p WEB-DL x264 AC3-JYK',
     'The Time Travellers Wife 2009 720 p multisub HighCode - HighCode ',
     'The Vow (2012)',
     'The.Finest.Hours.2016.1080p.WEB-DL.DD5.1.H264-RARBG',
     'The.Martian.2015.1080p.BluRay.x264.AC3-ETRG',
     'Thor - The Dark World (2013)',
     'Tomorrowland (2015) [1080p]',
     'Twilight Collection',
     'Unborn, The (2009) [4.8]',
     'WALL·E (2008) [1080p]',
     'Warcraft.2016.1080p.WEBRip.x264.AAC-ETRG',
     'Warm Bodies 2013 1080p BRRip x264 AC3-JYK',
     'When Harry Met Sally... (1989) [DVD] [7.6] [Comedy-Romance]',
     'Whiplash (2014) [1080p]',
     'World War Z (2013)',
     'X.Men.Apocalypse.2016.TC.x264.AAC-ETRG',
     'XOXO (2016) [1080p] [5.3] [Musical]',
     'Zootopia (2016) [1080p] [8.1] [Family-Animation]',
];

//Run through the entire array of movie names
moviesToJSON();

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function moviesToJSON(){
  console.log("Printing movies to file...");
  for (var i = 0; i < movieList.length; i++){
    // console.log(movieList[i]);
    var movie = {
      "name": movieList[i],
      "type": "Movie"
    }

    fs.writeFile("./database/movie" + pad(i, 3) + ".json", JSON.stringify(movie, null, 4), function(err, data){
      if (err){
        return console.log(err);
      }
      // console.log(data);
    });
  }
  console.log("Movies done. Printed " + i + " movies.");
}
