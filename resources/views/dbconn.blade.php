<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Try DB</title>
</head>
<body>
    <div>
    <?php  if(DB::Connection()->getPDO()){
            echo "Successfully connected to DB and DB name is " .DB::connection()->getDatabaseName();
        }
    ?>
    </div>
    
</body>
</html>