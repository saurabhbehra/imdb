$(document).ready(function(){
	$("#display").click(function(){
		displaydata();
	})
	function displaydata()
	{		
		var input_title=$("#title").val();
		var input_year=$("#title").val();
		var input_imdb=$("#title").val();
		$.ajax({
			type: 'GET',
			dataType: 'json',
			async: true,
			url: 'http://www.omdbapi.com/?i=tt3896198&apikey=3898ef90',
			success:(response)=>{
				 var title=response.Title;
				 var year=response.Year;
				 var rated=response.Rated;
				 var released=response.Released;
				 var runtime=response.Runtime;
				 var genre=response.Genre;
				 var director=response.Director;
				 var writers=response.Writer;
				 var actor=response.Actors;
				 var plot=response.Plot;
				 var language=response.Language;
				 var country=response.Country;
				 var awards =response.Awards;
				 var ratings=response.Ratings[0].Source;
				 var ratings1=response.Ratings[1].Source;
				 var ratings2=response.Ratings[2].Source;
				 var value=response.Ratings[0].Value;
				 var value1=response.Ratings[1].Value;
			     var value2=response.Ratings[2].Value;
				 var metascore= response.Metascore;
				var imdb=response.imdbRating;
				var imdbvotes=response.imdbVotes;
				var imdbid=response.imdbID;
				var type=response.Type;
				var dvd=response.DVD;
				var boxoffice=response.BoxOffice;
				var production=response.Production;
				var website=response.Website;
				var res=response.Response;
				
				 if(input_title==title||input_year==year||input_imdb==imdbid)
				 {
				 
					 let tempRow = `<div class="row">
										 <div class="col-12 text-center"><h3>${title}</h3></div>
									</div><br>
									<div class="row">
										<div class="col-12 col-sm-3" id="profilePhoto"></div>
										<div class="col-12 col-sm-4">
											<h6><label>Language:</label> ${language}</h6>
											<h6><label>Country:</label> ${country}</h6>
											<h6><label>Awards:</label> ${awards}</h6>
											<h6><label>Year:</label> ${year}</h6>
											<h6><label>Rated:</label> ${rated}</h6>
											<h6><label>Released:</label> ${released}</h6>
											<h6><label>Runtime:</label> ${runtime}</h6>
											<h6><label>Genre:</label> ${genre}</h6>
											<h6><label>Director:</label> ${director}</h6>
										</div>
									</div>
									<div class="row">
										<div class="col-12">
											<h5><label>Writers:</label>${writers}</h5><br>
											<h5><label>Actor:</label>${actor}</h5><br>
											<h5><label>Plot:</label>${plot}</h5>
										</div>
									<div><br>
									
										
										<div class="row">
											<div class="col-2 col-sm-1"></div>
											<div class="col-10 col-sm-11">
													<h5>Ratings</h5>
													<h6><label>${ratings}:</label> ${value}</h6>
													<h6><label>${ratings1}:</label> ${value1}</h6>
													<h6><label>${ratings2}:</label> ${value2}</h6><br>
											</div>
											<div class="col-2 col-sm-1"></div>
											<div class="col-10 col-sm-11">
												<h6><label>Metascore:</label> ${metascore}</h6>
												<h6><label>imdb:</label>${imdb}</h6>
												<h6><label>IMDB Votes:</label> ${imdbvotes}</h6>
												<h6><label>IMDB ID:</label> ${imdbid}</h6>
												<h6><label>Type:</label> ${type}</h6>
												
											</div>
											<div class="col-2 col-sm-1"></div>
											<div class="col-10 col-sm-11">
												<h6><label>DVD:</label> ${dvd}</h6>
												<h6><label>BoxOffice:</label>${boxoffice}</h6>
												<h6><label>Production:</label> ${production}</h6>
												<h6><label>Website:</label> ${website}</h6>
												<h6><label>Response:</label> ${res}</h6>
											</div>
										</div>
									</div>`
										
										 
						 $("#showData").append(tempRow);
						$('#profilePhoto').html('<img src="' + response.Poster + '" class="img-fluid profileHeight"/>');
				 }
				 else{
					 let errorMsg = `<div class="alert alert-info alert-dismissible" role="alert">
                        Invalid input
                        </div>`
                    $("#errormsg").append(errorMsg);
				 }
				 
			},
			 
        error: (response) => { 

            
               let errorMsg = `<div class="alert alert-info alert-dismissible" role="alert">
                        Invalid input
                        </div>`
                    $("#errormsg").append(errorMsg);
					
        },

         beforeSend: () => {

			
            alert("request is being made. please wait")

        },
        complete: () => {

           alert("data fetched success")

         },

        timeout:3000 // this is in milli seconds
			});
	}
})