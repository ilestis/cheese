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
                <a href="#" id="sell_all_2" class="btn btn-sm pull-right btn-primary">Sell all</a>
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
                </ul>

                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane active" id="inventory">

                        <h2>Inventory</h2>
                        <button id="sell_all" class="btn btn-sm btn-primary pull-right">Sell All</button>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Amount</th>
                                    <th>Value</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr id="milk_cow_row">
                                    <td>Cow Milk</td>
                                    <td id="milk_cow_amount"></td>
                                    <td id="milk_cow_value"></td>
                                    <td><button id="milk_cow_sell" class="btn btn-sm btn-primary">Sell</button></td>
                                </tr>
                                <tr id="milk_goat_row" style="display:none;">
                                    <td>Goat Milk</td>
                                    <td id="milk_goat_amount"></td>
                                    <td id="milk_goat_value"></td>
                                    <td><button id="milk_goat_sell" class="btn btn-sm btn-primary">Sell</button></td>
                                </tr>
                                <tr id="milk_camel_row" style="display:none;">
                                    <td>Camel Milk</td>
                                    <td id="milk_camel_amount"></td>
                                    <td id="milk_camel_value"></td>
                                    <td><button id="milk_camel_sell" class="btn btn-sm btn-primary">Sell</button></td>
                                </tr>
                                <tr id="milk_horse_row" style="display:none;">
                                    <td>Horse Milk</td>
                                    <td id="milk_horse_amount"></td>
                                    <td id="milk_horse_value"></td>
                                    <td><button id="milk_horse_sell" class="btn btn-sm btn-primary">Sell</button></td>
                                </tr>
                                <tr id="milk_reindeer_row" style="display:none;">
                                    <td>Reindeer Milk</td>
                                    <td id="milk_reindeer_amount"></td>
                                    <td id="milk_reindeer_value"></td>
                                    <td><button id="milk_reindeer_sell" class="btn btn-sm btn-primary">Sell</button></td>
                                </tr>
                                <tr id="milk_yak_row" style="display:none;">
                                    <td>Yak Milk</td>
                                    <td id="milk_yak_amount"></td>
                                    <td id="milk_yak_value"></td>
                                    <td><button id="milk_yak_sell" class="btn btn-sm btn-primary">Sell</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <div role="tabpanel" class="tab-pane" id="farm_tab">
                        <h2>Farm</h2>

                        <p>
                            Farming level: <span id="farming_level">0</span> / 20
                        </p>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" id="farming_progress" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
                                <span class="sr-only"></span>
                            </div>
                        </div>

                        <h3>Tired of clicking? Get some help!</h3>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Help</th>
                                    <th>Amount</th>
                                    <th>Effect</th>
                                    <th>Cost</th>
                                    <th>Buy</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Family</td>
                                <td id="farming_family_amount"></td>
                                <td id="farming_family_effect"></td>
                                <td id="farming_family_cost"></td>
                                <td><button id="farming_family_buy" class="btn btn-sm btn-primary">Hire</button></td>
                            </tr>
                            <tr>
                                <td>Friend</td>
                                <td id="farming_friend_amount"></td>
                                <td id="farming_friend_effect"></td>
                                <td id="farming_friend_cost"></td>
                                <td><button id="farming_friend_buy" class="btn btn-sm btn-primary">Hire</button></td>
                            </tr>
                            <tr>
                                <td>Professional</td>
                                <td id="farming_professional_amount"></td>
                                <td id="farming_professional_effect"></td>
                                <td id="farming_professional_cost"></td>
                                <td><button id="farming_professional_buy" class="btn btn-sm btn-primary">Hire</button></td>
                            </tr>
                            <tr>
                                <td>Machine</td>
                                <td id="farming_machine_amount"></td>
                                <td id="farming_machine_effect"></td>
                                <td id="farming_machine_cost"></td>
                                <td><button id="farming_machine_buy" class="btn btn-sm btn-primary">Hire</button></td>
                            </tr>
                            </tbody>
                        </table>

                        <p>
                            Current Milk Per Second production: <span id="mps_amount"></span><br />
                            Milk per click: <span id="mpc_amount"></span><br />
                            XP per click: <span id="xpc_amount"></span><br />
                        </p>

                        <h3>Improvements</h3>
                        <table class="table table-striped">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Cost</th>
                                <th>Required level</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody id="farming_improvements">
                            <?php foreach ($improvements['farming'] as $id => $name) : ?>
                                <tr id="farming_improvement_<?=$id?>">
                                    <td><?=$name?></td>
                                    <td id="farming_improvement_<?=$id?>_cost"></td>
                                    <td id="farming_improvement_<?=$id?>_level"></td>
                                    <td>
                                        <button id="farming_improvement_<?=$id?>_buy" class="btn btn-sm btn-primary">
                                            Buy
                                        </button>
                                    </td>
                                </tr>
                            <?php endforeach; ?>
                            </tbody>
                        </table>
                    </div>

                    <div role="tabpanel" class="tab-pane" id="watches_tab">
                        <h2>Watches</h2>

                        <p>
                            Watch level: <span id="watch_level">0</span> / 20
                        </p>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" id="watch_progress" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">
                                <span class="sr-only"></span>
                            </div>
                        </div>

                        <h3>Improvements</h3>
                        <table class="table table-striped">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Cost</th>
                                <th>Required level</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody id="watch_improvements">
                            <?php foreach ($improvements['watch'] as $id => $name) : ?>
                                <tr id="watch_improvement_<?=$id?>">
                                    <td><?=$name?></td>
                                    <td id="watch_improvement_<?=$id?>_cost"></td>
                                    <td id="watch_improvement_<?=$id?>_level"></td>
                                    <td>
                                        <button id="watch_improvement_<?=$id?>_buy" class="btn btn-sm btn-primary">
                                            Buy
                                        </button>
                                    </td>
                                </tr>
                            <?php endforeach; ?>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/game.js"></script>
</body>
</html>