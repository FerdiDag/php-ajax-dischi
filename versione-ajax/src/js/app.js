$(document).ready(function() {
    $.ajax({
        url: "array.php",
        success: function(data) {





            for (var i = 0; i < data.length; i++) {
                var disco_corrente = data[i];
                console.log(disco_corrente);

                var dati_disco = {
                    'autore': disco_corrente.author,
                    'titolo': disco_corrente.title,
                    'immagine': disco_corrente.poster,
                    'anno': disco_corrente.year,
                    'genere': disco_corrente.genre,
                    'id': disco_corrente.id,
                };





                var template_html = $('#card-disco').html();
                // preparo la funzione da utilizzare per utilizzare il template
                var template_function = Handlebars.compile(template_html);

                // tramite handlebars preparo l'html finale con i dati del disco all'interno
                var html_finale = template_function(dati_disco);

                // appendo in pagina una card con i dati del disco
                $('.cds-container').append(html_finale);


            }




        },
        error: function() {
            alert("E' avvenuto un errore.");
        }


    });



    $('#artisti').on('change', function() {
        var value_artista = parseInt($(this).val());
        console.log(value_artista);


        $.ajax({
            url: "array.php",
            success: function(data) {
                for (var i = 0; i < data.length; i++) {
                    var disco_corrente = data[i];
                    // console.log(disco_corrente);
                    var artista_cd = disco_corrente.author;
                    var id_disco = disco_corrente.id;
                    // console.log(artista_cd);
                    if (!value_artista) {
                        $('.cd').show();
                    } else {
                        $('.cd').hide();
                    }


                    $('.cd[data-id=' + value_artista + ']').show();


                }









            },







            error: function() {
                alert("E' avvenuto un errore.");
            }


        });


    });


});
