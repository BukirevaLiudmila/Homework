$(document).ready(function() {
	$('#show').click(function() {
		$.ajax ({
			url: 'file.json',
			dataType: 'json', 
			method: 'GET'        
		})
		.done(function(res){
			let data = '<h2>' + res.title + '</h2>';     // создаём переменную data и помещаем в неё значение title из JSON-файла (Movies directed by David Fincher)
			for (let i = 0; i < res.movies.length; ++i) {
				// заранее помещаем жанры в переменную genre
				let genre = '';
				for (let j = 0; j < res.movies[i].genre.length; ++j) {
					genre += res.movies[i].genre[j] + (j < res.movies[i].genre.length - 1 ? ', ' : '');
				}
				data += '<div> "' + res.movies[i].name + '" <ul><li>'    // добавляем в переменную data название фильма в кавычках
				+ 'Year of issue: ' + res.movies[i].year + '</li><li>' 
				+ 'Genre: ' + genre + '</li><li>'                                    // добавляем в переменную data заранее подготовленние жанры
				+ 'Budget: $' + res.movies[i].budget + '</li></ul></div>';
			}
			$('#data').html(data);
		})
		.fail(function(e) {
			console.log('error', e);
		});
	});
});

