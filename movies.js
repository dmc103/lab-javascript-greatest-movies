// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const listOfDirectors = moviesArray.map((oneMovie)=>{
        return oneMovie.director
    })
    return listOfDirectors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaMoviesSteven = moviesArray.filter((stevenMovie)=>{
        return stevenMovie.director === "Steven Spielberg" && stevenMovie.genre.includes('Drama');
    })
    return dramaMoviesSteven.length;
}




// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    } else {
        const movieScore = moviesArray.map((everyScore)=>{
            return everyScore.score || 0
        }).reduce((acc, moviesScores )=>{
            return acc + moviesScores 
        }, 0)
        const scoreAverage =  movieScore/moviesArray.length;
        return parseFloat(scoreAverage.toFixed(2));
    } 
   
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaScore = moviesArray.filter((everyDrama)=>{
        return everyDrama.genre.includes('Drama');
    });
    return scoresAverage(dramaScore);
    
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const anotherMovieArr = [...moviesArray]

    const sortingMovies = anotherMovieArr.sort ((a,b)=>{
        if(a.year < b.year){
            return -1;
        } else if (a.year > b.year){
            return 1;
        } else{
            if(a.title < b.title){
                return -1;
            }else if (a.title > b.title){
                return 1;
            }
        }
    }); 
    return anotherMovieArr;
}




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const copyMoveList = [...moviesArray]
    
    const sortMovies = copyMoveList.sort ((a,b)=> {
        if(a.title < b.title){
            return -1;
        } else if (a.title > b.title){
            return 1;
        } return 0;
    
    });

    return firstTwentyMovies = sortMovies.slice(0, 20).map(movie=>movie.title);

    return firstTwentyMovies;

}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {


}
 


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
