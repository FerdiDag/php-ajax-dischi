$(document).ready(function() {
    $.ajax({
        url: "array.php",
        success: function(data) {



            console.log(data);

            for (var i = 0; i < data.length; i++) {
                var disco_corrente = data[i];
                // console.log(disco_corrente);

                var dati_disco = {
                    'autore': disco_corrente.author,
                    'titolo': disco_corrente.title,
                    'immagine': disco_corrente.poster,
                    'anno': disco_corrente.year,
                    'genere': disco_corrente.genre,
                };





                var template_html = $('#card-disco').html();
                // preparo la funzione da utilizzare per utilizzare il template
                var template_function = Handlebars.compile(template_html);

                // tramite handlebars preparo l'html finale con i dati del disco all'interno
                var html_finale = template_function(dati_disco);

                // appendo in pagina una card con i dati del disco
                $('.cds-container').append(html_finale);


            }
            //
            // $("#generi").on("change", function() {
            //     var value = $(this).val().toLowerCase();
            //     $(".cd ").filter(function() {
            //         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            //     });
            // });


        },
        error: function() {
            alert("E' avvenuto un errore.");
        }


    });


});
