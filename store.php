<div role="tabpanel" class="tab-pane" id="store_tab">
    <h2>Store</h2>

    <div class="alert alert-warning alert-dismissible fade in" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">×</span>
        </button>
        <strong>Grow your stash!</strong> Use your accounts to buy some succulent bonuses.
    </div>


    <h3>Improvements</h3>
    <table class="table table-striped">
        <thead>
        <tr>
            <th>Name</th>
            <th>Cost</th>
            <th>Status</th>
        </tr>
        </thead>
        <tbody id="store_improvements">
        <?php foreach ($improvements['store'] as $id => $name) : ?>
            <tr id="store_improvement_<?=$id?>">
                <td><?=$name?></td>
                <td id="store_improvement_<?=$id?>_cost"></td>
                <td>
                    <button id="store_improvement_<?=$id?>_buy" class="btn btn-sm btn-primary">
                        Buy
                    </button>
                </td>
            </tr>
        <?php endforeach; ?>
        </tbody>
    </table>
</div>