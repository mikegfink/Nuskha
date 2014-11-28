// Stub
var nuskhaExpr1 = {"recipe":{"title":"Eggplant Rougail"},"graph":[{"id":1,"type":"ingredient","time":0,"label":"eggplants","ingr":[],"constraints":[{"amount":"2"}]},{"id":2,"type":"ingredient","time":0,"label":"white onions","ingr":[],"constraints":[{"amount":"2"}]},{"id":3,"type":"ingredient","time":0,"label":"hot peppers","ingr":[],"constraints":[{"amount":"2"}]},{"id":4,"type":"ingredient","time":0,"label":"oil","ingr":[],"constraints":[{"amount":"4 tsp"}]},{"id":5,"type":"ingredient","time":0,"label":"salt and pepper","ingr":[]},{"id":6,"type":"action","time":1,"label":"boil","ingr":[1],"constraints":[{"fulfill":"soft"}]},{"id":7,"type":"action","time":2,"label":"scoop flesh from","ingr":[6]},{"id":8,"type":"action","time":3,"label":"discard skin from","ingr":[7]},{"id":9,"type":"action","time":4,"label":"mash","ingr":[8]},{"id":10,"type":"action","time":5,"label":"mince","ingr":[2]},{"id":11,"type":"action","time":6,"label":"mince","ingr":[3]},{"id":12,"type":"action","time":7,"label":"mix","ingr":[10,11,9]},{"id":13,"type":"action","time":8,"label":"add","ingr":[4,12]},{"id":14,"type":"action","time":9,"label":"add","ingr":[5,13]},{"id":15,"type":"action","time":10,"label":"serve","ingr":[14]}]};

function buildSigmaGraph(nuskhaExpression) {
    var nuskhaGraph = nuskhaExpression["graph"];
    var sigmaJSON = {};
    var nodeArray = [];
    var edgeArray = [];
    var nextEdgeId = 0;
    var Y = 0;
    var yCoordinates = [];

    for (var i = 0; i < nuskhaGraph.length; i++) {

        var node = nuskhaGraph[i];

        // Building time(0) ingredient nodes
        if (node.time < 1) {
            nodeArray.push({
                id: node.id.toString(),
                label: node.label,
                x: 0,
                y: Y,
                size: 5,
                type: "circle"
            });
            Y++;
        // Building time(> 0) action nodes
        } else {
            nodeArray.push({
                id: node.id.toString(),
                label: node.label,
                x: node.time*5,
                y: 0,
                size: 5,
                color: colors[Math.floor(Math.random() * colors.length)],
                type: "square"
            });
        }

        // Building ingredient flow edges
        for (var j = 0; j < node.ingr.length; j++) {
            var ingredient = node.ingr[j];
            edgeArray.push({
                id: nextEdgeId.toString(),
                label: 'Edge ' + j,
                target: node.id.toString(),
                source: ingredient.toString(),
                type: "t",
            });
            nextEdgeId++;

        }

    }

    sigmaJSON["nodes"] = nodeArray;
    sigmaJSON["edges"] = edgeArray;

    return sigmaJSON;
}