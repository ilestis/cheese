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