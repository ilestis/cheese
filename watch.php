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