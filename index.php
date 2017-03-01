<?php
$improvements = require('improvements.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Cheese Clicker</title>
    <link rel="icon" href="favicon.ico" sizes="64x64" />

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/game.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Cheese Clicker</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li id="money">0</li>
                    <li id="accounts">0</li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <button class="btn btn-sm btn-primary" id="save">Save</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-3 col-md-2 sidebar">
                <button id="sell_all_2" class="btn btn-sm pull-right btn-primary">Sell all</button>
                <ul class="nav nav-sidebar">
                    <li class="mountain">
                        <div class="cow" id="cow"></div>

                    </li>
                    <li class="flag" id="flag"></li>
                    <li>
                        <div id="watch_bonus" class="watch_bonus bg-warning"></div>
                    </li>
                </ul>
            </div>
            <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <h1 class="page-header">Cheese Clicker</h1>

                <div class="notifications" id="notifications">
                    <div class="alert alert-warning alert-dismissible fade in" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <strong>Milk it!</strong> You should click on the cow to generate milk, and sell that milk to buy improvements.
                    </div>
                </div>
                <ul class="nav nav-tabs" role="tablist" id="gameTabs">
                    <li role="presentation" class="active"><a href="#inventory" aria-controls="inventory" role="tab" data-toggle="tab">Inventory</a></li>
                    <li role="presentation"><a href="#farm_tab" aria-controls="farm_tab" role="tab" data-toggle="tab">Farm</a></li>
                    <li role="presentation"><a href="#watches_tab" aria-controls="watches_tab" role="tab" data-toggle="tab">Watches</a></li>
                    <li role="presentation"><a href="#store_tab" aria-controls="store_tab" role="tab" data-toggle="tab">Store</a></li>
                </ul>

                <div class="tab-content">
                    <?php include_once('inventory.php'); ?>
                    <?php include_once('farm.php'); ?>

                    <?php include_once('watch.php'); ?>

                    <?php include_once('store.php'); ?>
                </div>

            </div>
        </div>
    </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/game.js"></script>
<?php include_once('analyticstracking.php'); ?>
</body>
</html>