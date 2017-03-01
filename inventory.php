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