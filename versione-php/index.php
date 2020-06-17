<?php include 'database/dischi.php' ?>



<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title></title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="public/app.css">
    </head>
    <body>
        <header>
            <div class="container">
                <img src="public/spotify.png" alt="logo" />
            </div>
        </header>
        <form action="/action_page.php">
            <label for="genres">Seleziona un genere:</label>
            <select name="cars" id="generi">
                <option value=""></option>
                <option value="rock">Rock</option>
                <option value="pop">Pop</option>
                <option value="jazz">Jazz</option>
                <option value="metal">Metal</option>
            </select>
        </form>


        <div class="cds-container container">
             <?php
             foreach ($dischi as $disco) { ?>
                <div class="cd">
                    <img src="<?php echo $disco['poster']; ?>" alt="">
                    <h3> <?php echo $disco['title']; ?> </h3>
                    <span class="author"> <?php echo $disco['author']; ?></span>
                    <span class="genre"><?php echo $disco['genre']; ?> </span>
                    <span class="year"> <?php echo $disco['year']; ?></span>
                </div>
                <?php
                }
?>
        </div>


        <script src="src/js/app.js" charset="utf-8"></script>
    </body>
</html>
